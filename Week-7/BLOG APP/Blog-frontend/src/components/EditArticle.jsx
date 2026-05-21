import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect, useState} from "react";
import axios from "axios";


import {
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  articlePageWrapper,
} from "../styles/common";

function EditArticle() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [success, setSuccess] = useState("");

  const article = location.state;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // prefill form
  useEffect(() => {
    if (!article) return;

     setValue("title", article.title);
     setValue("category", article.category);
     setValue("content", article.content);
  }, [article]);

  const updateArticle = async (modifiedArticle) => {
  
    //add articleId to modified article
    modifiedArticle.articleId=article._id;
    //make PUT req to update article
    let res=await axios.put("https://blog-app-jc18.onrender.com/author-api/articles",
      modifiedArticle,
      {withCredentials:true})
    //naviagte to articleById component
    if(res.status===200){

  setSuccess("Article updated successfully");

  setTimeout(() => {
    navigate(`/article/${article._id}`, {
      state: res.data.payload
    });
  }, 1500);
}
  }
  

  return (
    <div className={`${formCard} mt-10`}>
      <h2 className={formTitle}>Edit Article</h2>
      {success && (
    <p className="bg-green-100 text-green-700 px-4 py-2 rounded-xl mb-4">
      {success}
    </p>
  )}

      <form onSubmit={handleSubmit(updateArticle)}>
        {/* Title */}
        <div className={formGroup}>
          <label className={labelClass}>Title</label>

          <input className={inputClass} {...register("title", { required: "Title required" })} />

          {errors.title && <p className={errorClass}>{errors.title.message}</p>}
        </div>

        {/* Category */}
        <div className={formGroup}>
          <label className={labelClass}>Category</label>

          <select className={inputClass} {...register("category", { required: "Category required" })}>
            <option value="">Select category</option>
            <option value="technology">Technology</option>
            <option value="programming">Programming</option>
            <option value="ai">AI</option>
            <option value="web-development">Web Development</option>
          </select>

          {errors.category && <p className={errorClass}>{errors.category.message}</p>}
        </div>

        {/* Content */}
        <div className={formGroup}>
          <label className={labelClass}>Content</label>

          <textarea rows="14" className={inputClass} {...register("content", { required: "Content required" })} />

          {errors.content && <p className={errorClass}>{errors.content.message}</p>}
        </div>

        <button className={submitBtn}>Update Article</button>
      </form>
    </div>
  );
}

export default EditArticle;