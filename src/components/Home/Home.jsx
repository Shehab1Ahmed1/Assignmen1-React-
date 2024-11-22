import icon from "../../assets/images/avataaars.svg"
import Title from "../Title/Title";
import { animateScroll } from 'react-scroll';
const options = {
    duration: 1500,
    delay: 100,
    smooth: 'easeInOutCubic',
};


const Home = () => {
    {animateScroll.scrollToTop(options);}
    return (
        <>
        
        <Title title1="Home"/>
        <div className="bg-[#1abc9c] min-h-[60vh] flex flex-col  pb-16 pt-24">
            <div className="flex flex-col items-center text-slate-100"> 
                <img src={icon} className="w-[300px] py-10"  alt="" />
                <h1 className="uppercase   font-bold text-[36px]">start Framework</h1>
                <div className="flex items-center py-3">
                <div className="line rounded-sm ms-2 w-28 h-1 bg-slate-100"></div>
                <i className="fa-solid fa-star ms-2 text-xl"></i>
                <div className="line rounded-sm ms-2 w-28 h-1 bg-slate-100"></div>
                </div>
                <p className="text-[18px] py-2">Graphic Artist - Web Designer - Illustrator</p>
                </div>

        </div>
        </>
    );
}

export default Home;
