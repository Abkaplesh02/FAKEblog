import { useEffect, useState } from "react"
import Blog1 from "../../../assets/Blog Header/Blog.avif"
import Blog2 from "../../../assets/Blog Header/Blog1.avif"
import Blog3 from "../../../assets/Blog Header/Blog2.avif"
import Blog4 from "../../../assets/Blog Header/Blog3.avif"
import Blog5 from "../../../assets/Blog Header/Blog4.avif"

const ImageLoader=()=>{

    const BlogImgs=[Blog1,Blog3,Blog4,Blog5];
    const [index,setIndex]=useState(0);

    const moveForward=()=>{
        if(index==BlogImgs.length-1){
          setIndex(0);
        }
        else{     
            setIndex(index+1);
        }
    }

    const moveBackward=()=>{
        if(index==0){
            setIndex(BlogImgs.length-1);
        }
        else{
            setIndex(index-1);
        }
    }

    useEffect(()=>{
       const interval= setTimeout(()=>{
            if(index==BlogImgs.length-1){
                setIndex(0);
            }else{
                setIndex(index+1)
            }
        },3000)

        return()=>{
            clearTimeout(interval);
        }
    })
    return (
        <div className="w-5/12 relative top-14">
            <button className="cursor-pointer ml-5 absolute top-[40vh] w-full flex items-center justify-end" onClick={moveForward}>⏩</button>
            <button className="cursor-pointer mr-10 absolute w-full top-[40vh]  flex items-center justify-start" onClick={moveBackward}>⏪</button>
            <div className="h-[65vh] w-full"><img className="h-full w-full" src={BlogImgs[index]} alt="Blog1" /></div>
        </div>
    )
}

export default ImageLoader;