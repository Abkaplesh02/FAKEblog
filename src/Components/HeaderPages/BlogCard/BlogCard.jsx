import { useSelector } from "react-redux";
import PersonPic from "../../../assets/Person/person.png"

const BlogCard=({data})=>{

    return (
        <div className="w-7/12 ml-20 border-2 border-gray-600 p-4 rounded-3xl mb-6">
            <div className="flex flex-col gap-4">   
            <div className="text-2xl font-bold"> {data.data.description}</div>
            <div className="text-sm text-gray-700 my-4">{data.data.blog}</div>
            </div>
            <div className="flex items-center justify-end gap-12"><div className=""><img className="h-16" src={PersonPic} alt="" /></div> <div className="font-bold"> {data.data.name} </div></div>

        </div>
    )
}

export default BlogCard;