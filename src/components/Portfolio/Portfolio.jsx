import { useState } from "react"
import port1 from "../../assets/images/poert1.png"
import port2 from "../../assets/images/port2.png"
import port3 from "../../assets/images/port3.png"
import Title from "../Title/Title"
import { animateScroll } from 'react-scroll';
const options = {
    duration: 1500,
    delay: 100,
    smooth: 'easeInOutCubic',
};
const Portfolio = () => {
    let [cardImage,setCardImage]=useState("");
    let [displayDiv,setDisplayDiv]=useState("hidden");
    function ZoomIn(e){

        let image=e.currentTarget.previousElementSibling.getAttribute("src");
        setCardImage(image);
        setDisplayDiv("flex");
    }
    function ZoomOut(){
        setDisplayDiv("hidden");
    }
    {animateScroll.scrollToTop(options);}
    return (
        <>
        <Title title1="Portfolio"/>
        <div className="min-h-[60vh] flex flex-col  pt-36">
            <div className="flex flex-col items-center relative ">
                <h1 className="uppercase   font-bold text-[36px] text-[#2c3e50]">portfolio component</h1>
                <div className="flex items-center py-3">
                <div className="line rounded-sm ms-2 w-28 h-1 bg-[#2c3e50]"></div>
                <i className="fa-solid fa-star ms-2 text-xl text-[#2c3e50]"></i>
                <div className="line rounded-sm ms-2 w-28 h-1 bg-[#2c3e50]"></div>
                </div>
                <div className="container grid grid-cols-1 md:grid-cols-3 items-center gap-5 py-4   justify-center">
                    <div className="md:w-11/12 w-5/6 mx-auto relative overflow-hidden rounded-xl">
                        <img src={port1} className="w-full" alt="" />
                    <div className={` absolute flex justify-center items-center opacity-0   inset-0 hover:bg-[#1abc9c] hover:opacity-100 transition-all duration-[700ms] ease-linear `} onClick={(e)=>{
                            ZoomIn(e);
                        }}>
                        <i className="fa-solid fa-plus text-7xl text-slate-100"></i>
                        </div>
                        
                    </div>
                    <div className="md:w-11/12 w-5/6 mx-auto relative overflow-hidden rounded-xl">
                        <img src={port2} className="w-full" alt="" />
                    <div className={` absolute flex justify-center items-center opacity-0   inset-0 hover:bg-[#1abc9c] hover:opacity-100 transition-all duration-[700ms] ease-linear `} onClick={(e)=>{
                            ZoomIn(e);
                        }}>
                        <i className="fa-solid fa-plus text-7xl text-slate-100"></i>
                        </div>
                        
                    </div>
                    <div className="md:w-11/12 w-5/6 mx-auto relative overflow-hidden rounded-xl">
                        <img src={port3} className="w-full" alt="" />
                    <div className={` absolute flex justify-center items-center opacity-0   inset-0 hover:bg-[#1abc9c] hover:opacity-100 transition-all duration-[700ms] ease-linear `} onClick={(e)=>{
                            ZoomIn(e);
                        }}>
                        <i className="fa-solid fa-plus text-7xl text-slate-100"></i>
                        </div>
                        
                    </div>
                    <div className="md:w-11/12 w-5/6 mx-auto relative overflow-hidden rounded-xl">
                        <img src={port1} className="w-full" alt="" />
                    <div className={` absolute flex justify-center items-center opacity-0   inset-0 hover:bg-[#1abc9c] hover:opacity-100 transition-all duration-[700ms] ease-linear `} onClick={(e)=>{
                            ZoomIn(e);
                        }}>
                        <i className="fa-solid fa-plus text-7xl text-slate-100"></i>
                        </div>
                        
                    </div>
                    <div className="md:w-11/12 w-5/6 mx-auto relative overflow-hidden rounded-xl">
                        <img src={port2} className="w-full" alt="" />
                    <div className={` absolute flex justify-center items-center opacity-0   inset-0 hover:bg-[#1abc9c] hover:opacity-100 transition-all duration-[700ms] ease-linear `} onClick={(e)=>{
                            ZoomIn(e);
                        }}>
                        <i className="fa-solid fa-plus text-7xl text-slate-100"></i>
                        </div>
                        
                    </div>
                    <div className="md:w-11/12 w-5/6 mx-auto relative overflow-hidden rounded-xl">
                        <img src={port3} className="w-full" alt="" />
                    <div className={` absolute flex justify-center items-center opacity-0   inset-0 hover:bg-[#1abc9c] hover:opacity-100 transition-all duration-[700ms] ease-linear `} onClick={(e)=>{
                            ZoomIn(e);
                        }}>
                        <i className="fa-solid fa-plus text-7xl text-slate-100"></i>
                        </div>
                        
                    </div>
                    <div className={`${displayDiv}  fixed  py- inset-0 bg-[#334f7c6e]  justify-center items-center  `} onClick={()=>{
                        ZoomOut()
                    }}>
                        <img src={cardImage} className="w-11/12 md:w-[50%] " alt="" />
                    </div>
                </div>
                </div>

        </div>
        </>
    );
}

export default Portfolio;
