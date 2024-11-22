import Title from "../Title/Title";
import { animateScroll } from 'react-scroll';
const options = {
    duration: 1500,
    delay: 100,
    smooth: 'easeInOutCubic',
};
const Contact = () => {
    {animateScroll.scrollToTop(options);}
    function change(e){
        if(e.target.value){
            e.target.previousElementSibling.classList.remove("translate-y-14")
            e.target.previousElementSibling.classList.replace("text-[#000000aa]","text-[#1abc9c]")
            e.target.previousElementSibling.classList.replace("opacity-0","opacity-100")
        }
        else{
            e.target.previousElementSibling.classList.add("translate-y-14")
            e.target.previousElementSibling.classList.replace("text-[#1abc9c]","text-[#000000aa]")
            e.target.previousElementSibling.classList.replace("opacity-100","opacity-0")
        }
    }
    return (
        <>
        <Title title1="Contact"/>
        <div className="min-h-[60vh] flex flex-col  pt-36 ">
            <div className="flex flex-col items-center relative ">
                <h1 className="uppercase   font-bold text-[36px] text-[#2c3e50] ">conatct section</h1>
                <div className="flex items-center py-3">
                    <div className="line rounded-sm ms-2 w-28 h-1 bg-[#2c3e50]"></div>
                    <i className="fa-solid fa-star ms-2 text-xl text-[#2c3e50]"></i>
                    <div className="line rounded-sm ms-2 w-28 h-1 bg-[#2c3e50]"></div>
                </div>
                
            </div>
            <div className="px-5 py-11 mx-auto md:w-6/12">
                    <form action="" className="space-y-5" >
                        <div className="text-[#000000aa]  text-[#1abc9c] px-4  opacity-0  text-[17px] overflow-hidden  translate-y-14 transition-all duration-500 ">userName</div>
                        <input type="text" placeholder="userName"  className="placeholder:text-[#000000aa]   border-b-2 px-4 pb-3  w-full outline-none" onChange={(e)=>{change(e)}} />

                        <div className="text-[#000000aa] text-[#1abc9c] px-4  opacity-0  text-[17px] overflow-hidden  translate-y-14 transition-all duration-500 ">userAge</div>
                        <input type="text" placeholder="userAge" className="text-[17px]  placeholder:text-[#000000aa]  border-b-2 px-4 pb-3 w-full outline-none" onChange={(e)=>{change(e)}}/>

                        <div className="text-[#000000aa] text-[#1abc9c] px-4  opacity-0  text-[17px] overflow-hidden  translate-y-14 transition-all duration-500 ">userEmail</div>
                        <input type="email" placeholder="userEmail" className="text-[17px] placeholder:text-[#000000aa]  border-b-2 px-4 pb-3 w-full outline-none" onChange={(e)=>{change(e)}}/>

                        <div className="text-[#000000aa] text-[#1abc9c] px-4  opacity-0  text-[17px] overflow-hidden  translate-y-14 transition-all duration-500 ">userPassword</div>
                        <input type="password" placeholder="userPassword" className="text-[17px] placeholder:text-[#000000aa]  border-b-2 px-4 pb-3 w-full outline-none" onChange={(e)=>{change(e)}}/>
                        <button type="submit" className="px-4 text-slate-100 bg-[#1abc9c] py-2 rounded-md" >send Message</button>
                    </form>
                </div>
        </div>
        </>
    );
}

export default Contact;
