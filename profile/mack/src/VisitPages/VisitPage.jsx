import github from "./githuub.png"
import twitter from "./tweet.png"
import linkedin from "./linku.png"
function VistPages(){
    return(
        <>
        <div className="flex flex-row justify-around items-center   main-visit h-[700px] w-full  flex-wrap md:relative md:top-[200px] relative top-[100px]">
        
        <div className="md:h-[500px] md:w-[400px] bg-slate-200 rounded-[20px] cursor-pointer h-[400px] w-[350px] mt-36">
            <img className="h-[400px] w-[400px] rounded-[20px]" src={github}></img>
            <div>
                <h1 onClick={()=>window.location.href="https://github.com/SuperexMack"} className="md:text-4xl  bg-blue-500 text-center p-4 rounded-[20px] font-extrabold  w-[100%] md:relative top-4 transition-transform duration-300 ease-in-out transform hover:scale-130 hover:bg-green-500 hover:text-white mt-2">Visit</h1>
            </div>
        </div>

        <div className="md:h-[500px] md:w-[400px] bg-slate-200 rounded-[20px] cursor-pointer h-[400px] w-[350px] mt-36">
            <img className="h-[400px] w-[400px] rounded-[20px]" src={twitter}></img>
            <div>
                <h1 onClick={()=>window.location.href="https://x.com/TSilent_Monk"} className="md:text-4xl bg-blue-500 text-center p-4 rounded-[20px] font-extrabold  w-[100%] md:relative md:top-4 transition-transform duration-300 ease-in-out transform hover:scale-130 hover:bg-green-500 hover:text-white mt-2">Visit</h1>
            </div>
        </div>

       <div className="md:h-[500px] md:w-[400px] bg-slate-200 rounded-[20px] cursor-pointer h-[400px] w-[350px] mt-36">
            <img className="h-[400px] w-[400px] rounded-[20px]" src={linkedin}></img>
            <div>
                <h1 onClick={()=>window.location.href="https://www.linkedin.com/in/mohit-sati-pop/"} className="md:text-4xl  bg-blue-500 text-center p-4 rounded-[20px] font-extrabold w-[100%] md:relative md:top-4 transition-transform duration-300 ease-in-out transform hover:scale-130 hover:bg-green-500 hover:text-white mt-2">Visit</h1>
            </div>
        </div>

        </div>
        </>
    )
}
export default VistPages