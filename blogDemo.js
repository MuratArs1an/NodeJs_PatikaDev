let blogs=[{title:"new blog", text:"blog1"}]

const listBlogs=()=>{
    blogs.map((blog)=>{
        console.log(blog.title);
    })
}

const addBlog=(newBlog)=>{
    return new Promise((resolve, reject)=>{
        if(newBlog!=null){
            blogs.push(newBlog)
            resolve(blogs);
        }else{
            reject("Blog Eklenemedi")
        }
    })
}

async function showBlogs(){
    try{
        await addBlog({title:"new blog2", text:"blog2"});
        listBlogs();
    }catch(error){
        console.log(error);
    }
    
}

showBlogs();
