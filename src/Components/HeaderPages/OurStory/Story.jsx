import { useSelector } from "react-redux";
import BlogCard from "../BlogCard/BlogCard";
import MyPic from "../../../assets/Logo/FakeBlogSymbol4.png"

const Story=()=>{
    const selector=useSelector((store)=>store.blogs);
    
    return (
        <div className="absolute top-[20vh] pb-[7vh]">
            <div className="w-full flex justify-center mb-6">
                <img className="h-40" src={MyPic} alt="" />
            </div>
            {
                selector.map((data,index)=>(<BlogCard key={index} data={data}/>))
            }
        </div>
    )
}

export default Story;