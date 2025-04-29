import { useNavigate } from "react-router-dom";
import LogoPic from "../../../assets/Logo/FakeBlogSymbol2.png"

const Navbar=()=>{
    const navigate=useNavigate();
    return  (
        <div className="flex justify-between items-center ">
            <div className="cursor-pointer w-2/12" onClick={()=>navigate("/")}>
                <img src={LogoPic} alt="LogoPic" />
            </div>

            <div className="cursor-pointer flex justify-evenly text-xl font-medium w-5/12 pr-10">
            <div className="p-2" onClick={()=>navigate("/blogs")}>Our Story</div>
            <div className="p-2" onClick={()=>navigate("/Membership")}>Membership</div>
            <div  className="p-2" onClickCapture={()=>navigate("/createBlog")}>Write</div>
            <div className="bg-black text-white rounded-3xl p-2 border-2 border-transparent hover:bg-white hover:text-black hover:border-black ">Get Started</div>
            </div>
           
        </div>
    )
}

export default Navbar;