import MembershipCard from "./MembershipCard";
import MembershipCard2 from "./MembershipCard2";

const Membership=()=>{
    return (
        <div className="w-11/12 absolute top-50 px-10 flex">
             <div className="text-7xl w-[40%] my-7">
            Membership Plans
            </div>
          
            <MembershipCard/>
            <MembershipCard2/>
           


        </div>
    )
}

export default Membership;