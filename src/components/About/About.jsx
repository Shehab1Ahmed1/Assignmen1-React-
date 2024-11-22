import Title from "../Title/Title";
import { animateScroll } from 'react-scroll';
const options = {
    duration: 1500,
    delay: 100,
    smooth: 'easeInOutCubic',
};

const About = () => {
    {animateScroll.scrollToTop(options);}
    return (
        <>
        <Title title1="About"/>
        <div className="bg-[#1abc9c] min-h-[70vh]  !scroll-my-60 flex flex-col py-36 ">
            <div className="flex flex-col items-center text-slate-100">
                <h1 className="uppercase pt-16 font-bold text-[36px]">about component</h1>
                <div className="flex items-center py-3">
                <div className="line rounded-sm ms-2 w-28 h-1 bg-slate-100"></div>
                <i className="fa-solid fa-star ms-2 text-xl"></i>
                <div className="line rounded-sm ms-2 w-28 h-1 bg-slate-100"></div>
                </div>
                <div className="py-5 mx-20 md:mx-28 grid grid-cols-1 gap-10 md:grid-cols-2  " >
                    <p className="md:pt-15">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p className="md:pt-15">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                </div>

        </div>
        </>
    );
}

export default About;
