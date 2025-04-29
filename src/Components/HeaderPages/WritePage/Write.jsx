import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addBlogs } from "../../../redux/blogSlice";

const Write=()=>{
    const name =useRef();
    const description=useRef();
    const blog=useRef();
    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const data={
            name:name.current.value,
            description:description.current.value,
            blog:blog.current.value
        };

        console.log(data);

        dispatch(addBlogs({data}));
        
        name.current.value="";
        description.current.value="";
        blog.current.value="";
    }

    return (
            <div className="w-full ">

            <div>
            <form className="absolute top-[21vh] w-8/12 px-10" onSubmit={handleSubmit}>
                <div><input required ref={name} className=" text-2xl px-6 border-1 h-[8vh] w-[70%] border-black rounded-2xl" type="text" placeholder="Enter your name"/></div>
                <div><input required ref={description} className=" text-2xl px-6 border-1 h-[8vh] w-[70%] border-black rounded-2xl my-4 " type="text" placeholder="Description of Blog"/></div>
                <div><input required ref={blog} className=" text-4xl px-6 border-1 h-[40vh] w-[70%] border-black rounded-2xl mb-4" type="text" placeholder="Blog content"/></div>
                <div><button className="cursor-pointer bg-black text-white text-3xl py-10 w-[20vw] rounded-full mb-2 absolute left-[70vw] top-[25vh] border-2 border-transparent hover:bg-white hover:text-black hover:border-black">Add Content</button></div>
            </form>
            </div>
        </div>
        
            
   
  
    )
}

export default Write;