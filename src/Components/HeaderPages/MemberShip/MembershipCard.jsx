const MembershipCard=()=>{
    return(
        <div className="w-3/12 border-1 border-gray-600 rounded-3xl px-6 py-3 mr-20 ">
            <div className=" flex justify-center">⭐</div>
            <div className="font-bold flex justify-center">FakeBlog Member</div>
            <div className="font-bold flex justify-center"> $5/month or $60/year</div>
            <div className="font-bold flex justify-center " ><button className="bg-green-900 px-12 my-2 p-2 rounded-4xl text-white border-2 border-transparent hover:bg-white hover:text-green-900 hover:border-green-900 cursor-pointer">Get Started</button></div>
            <div className="text-sm"><ul><li>✔️Read member-only stories</li>
            <li>✔️Support writers you read most</li>
            <li>✔️Earn money for your writing</li>
            <li>✔️Listen to audio narrations</li>
            <li>✔️Read offline with the Medium app</li>
            <li>✔️Access our Mastodon community</li>
            <li>✔️Connect your custom domain</li>
            <li>✔️Create your own publications</li>
            </ul></div>

        </div>
    )
}

export default MembershipCard;