import Content from "./Content.jsx/Content";
import ImageLoader from "./ImageLoader.jsx/ImageLoader";

const LandingPage=()=>{
    return (
        <div className="flex w-full gap-6 px-10 relative top-35 z-0">
            <Content/>
            <ImageLoader/>
        </div>
    )
}

export default LandingPage;