const likeArticle = async(articleId)=>{

  let res = await axios.put(
    `https://blog-app-jc18.onrender.com/user-api/like/${articleId}`,
    {},
    { withCredentials:true }
  )

  if(res.status===200){

    setArticles((prev)=>
      prev.map((article)=>
        article._id===articleId
        ? res.data.payload
        : article
      )
    )
  }
}