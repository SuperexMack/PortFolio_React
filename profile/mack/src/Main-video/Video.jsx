import Myvideo from "./introVv.mp4"
function VideoPath(){
    return(
        <>
        <div className="flex justify-center">
        <video src={Myvideo} className="md:h-[400px] md:w-[700px] border-black relative top-20  rounded-[10px] sm:h-[300px] sm:w-[500px] h-[300px] w-[350px]" controls={true} autoPlay={false}></video>
        </div>
        </>
    )
}
export default VideoPath
