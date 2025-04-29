import { useSelector } from "react-redux";
import BlogCard from "../BlogCard/BlogCard";
import MyPic from "../../../assets/Logo/FakeBlogSymbol4.png"
import { useState } from "react";

const Story=()=>{
    const selector=useSelector((store)=>store.blogs);
    const [currentPage,setCurrentPage]=useState(1);
    const blogsPerPage=3;

    const startIndex=(currentPage-1)*blogsPerPage;
    const endIndex=startIndex+blogsPerPage;
    const currentBlog=selector.slice(startIndex,endIndex);

    const totalPages=Math.ceil(selector.length/blogsPerPage);
    console.log(currentBlog)

    const forwardControl=()=>{
        if(currentPage<totalPages){
            setCurrentPage(currentPage+1);
        }
    }

    const backwardControl=()=>{
        if(currentPage>1){
            setCurrentPage(currentPage-1)
        }

    }
    
    return (
        <div className="absolute top-[20vh] pb-[7vh]">
            <div className="w-full flex justify-center mb-6">
                <img className="h-40" src={MyPic} alt="" />
            </div>
            {
                currentBlog.map((data,index)=>(<BlogCard key={index} data={data}/>))
            }

           <div className="flex justify-start ml-[20vw] gap-[20vw]">
            <div><button disabled={currentPage===1} onClick={backwardControl} className={`${currentPage===1 ? "bg-gray-300 cursor-not-allowed ": "bg-black text-white"}`}>⏪</button></div>
            <div><button disabled={currentPage===totalPages} onClick={forwardControl} className={`${currentPage===totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-black text-white"}`}>⏩</button></div>
            </div>
        </div>
    )
}

export default Story;