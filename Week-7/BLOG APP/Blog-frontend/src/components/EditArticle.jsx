import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect, useState} from "react";
import { toast } from "react-hot-toast";
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

  toast.success("Article updated successfully");

  setTimeout(() => {
    navigate(`/article/${article._id}`, {
      state: res.data.payload
    });
  },2000);
}
  }
  

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
  <div className={formCard}>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Edit Article</h2>
      

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

          <textarea rows="14" className={`${inputClass} w-full`} {...register("content", { required: "Content required" })} />

          {errors.content && <p className={errorClass}>{errors.content.message}</p>}
        </div>

        <button className={`${submitBtn} w-full sm:w-auto`}>Update Article</button>
      </form>
    </div>
    </div>
  );
}

export default EditArticle;