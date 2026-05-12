import exp from "express";
import { userModel } from "../models/userModel.js";
import { hash, compare } from "bcryptjs";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middlewares/verifyToken.js";
const { sign } = jwt;
export const commonApp = exp.Router();
import { upload } from "../config/multer.js";
import { uploadToCloudinary } from "../config/cloudinaryUpload.js";
import cloudinary from "../config/cloudinary.js";
config();

//Route for register
commonApp.post("/users", upload.single("profileImageUrl"), async (req, res,next) => {
  let cloudinaryResult;
  try {
    let allowedRoles = ["USER", "AUTHOR"];
    //get user from req
    const newUser = req.body;
    //check role
    if (!allowedRoles.includes(newUser.role)) {
      return res.status(400).json({ message: "Invalid role" });
    }
    let cloudinaryResult;
    //Upload image to cloudinary from memoryStorage
    if (req.file) {
      cloudinaryResult = await uploadToCloudinary(req.file.buffer);
    }

    // console.log("cloudinaryResult", cloudinaryResult);
    //add CDN link(secure_url) of image to newUserObj
    newUser.profileImageUrl = cloudinaryResult?.secure_url;

    //run validators manually
    //hash password and replace plain with hashed one
    newUser.password = await hash(newUser.password, 12);

    //create New user document
    const newUserDoc = new userModel(newUser);

    //save document
    await newUserDoc.save();
    //send res
    res.status(201).json({ message: "User created" });
  } catch (err) {
    console.log(" Registration error: ", err.message);


    next(err);
  }
});

//Route for Login(USER, AUTHOR and ADMIN)
commonApp.post("/login", async (req, res) => {
  
  //get user cred obj
  const { email, password } = req.body;
  //find user by email
  const user = await userModel.findOne({ email: email });
  console.log(user);
  //if use not found
  if (!user) {
    return res.status(400).json({ message: "Invalid email" });
  }
  //compare password
  const isMatched = await compare(password, user.password);
  //if passwords not matched
  if (!isMatched) {
    return res.status(400).json({ message: "Invalid password" });
  }
  //create jwt
  const signedToken = sign(
    {
      id: user._id,
      email: email,
      role: user.role,
      firstname: user.firstname,
      lastname: user.lastname,
      profileImageUrl: user.profileImageUrl,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "1h",
    },
  );

  //set token to res header as httpOnly cookie
  res.cookie("token", signedToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
  });
  //remove password from user document
  let userObj = user.toObject();
  delete userObj.password;

  //send res
  res.status(200).json({ message: "login success", payload: userObj });
});


//Route for Logout
commonApp.get("/logout", (req, res) => {
  //delete token from cookie storage
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
  });
  //send res
  res.status(200).json({ message: "Logout success" });
});

//Page refresh
commonApp.get("/check-auth", verifyToken("USER", "AUTHOR", "ADMIN"), (req, res) => {
  res.status(200).json({
    message: "authenticated",
    payload: req.user,
  });
});

//Change password
commonApp.put("/password", verifyToken("USER", "AUTHOR", "ADMIN"), async (req, res) => {
  //check current password and new password are same
  let passwordObj=req.body
  if(passwordObj.currentPassword===passwordObj.newPassword){
    return res.status(400).json({message:"Both passwords are same"})
  }
  //get current password of user/admin/author
  let userIdOfToken=req.user?.id
  let user=await userModel.findById(userIdOfToken)
  let passwordOfToken=user.password
  //check the current password of req and user are not same
  let isValid=await compare(passwordObj.currentPassword,passwordOfToken)
  if(!isValid){
    return res.status(400).json({message:"Invalid current password"})
  }
  // hash new password
  passwordObj.newPassword=await hash(passwordObj.newPassword,12)
  //replace current password of user with hashed new password
  user.password=passwordObj.newPassword
  //save
  await user.save()
  //send res
  res.status(200).json({message:"Password changed successfully"})
});

commonApp.put("/forgot-password", async (req, res) => {
  const { email, newPassword } = req.body;
  //find user
  const user = await userModel.findOne({ email });
  //if user not found
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  //hash new password
  const hashedPassword = await hash(newPassword, 12);
  //update password
  user.password = hashedPassword;
  //save updated password
  await user.save();
  //send response
  res.status(200).json({
    message: "Password updated successfully",
  });
});