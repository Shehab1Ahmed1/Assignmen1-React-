

const Footer = () => {
    return (
        <>
        <div className=" grid grid-cols-1 md:grid-cols-3 pb-16 bg-[#2c3e50] text-slate-100">
           <div className=" pt-16 px-2 flex flex-col items-center">
            <h1 className="font-semibold text-[28px] py-2 uppercase">location</h1>
            <p className="py-1">2215 John Daniel Drive</p>
            <p className="py-1">Clark, MO 65243</p>
           </div>
           <div className="pt-16 space-y-4 flex flex-col items-center">
            <h1 className="font-semibold text-[28px] py-2 uppercase">AROUND THE WEB</h1>
            <ul className="flex space-x-8 justify-center ">
                <li className="text-[20px]"><div> <a href="https://www.facebook.com/"><i className="p-[10px] border rounded-full fa-brands fa-facebook"></i></a></div></li>
                <li className="text-[20px]"><div> <a href="https://x.com/"><i className="p-[10px] border rounded-full fa-brands fa-twitter"></i></a></div></li>
                <li className="text-[20px]"><div> <a href="https://www.linkedin.com/"><i className="p-[10px] border rounded-full fa-brands fa-linkedin-in"></i></a></div></li>
                <li className="text-[20px]"><div> <a href="https://www.google.com.eg/"><i className="p-[10px] border rounded-full fa-solid fa-globe"></i></a></div></li>
            </ul>
           </div>
           <div className="pt-16  space-y-4 flex flex-col items-center text-center">
           <h1 className="font-semibold text-[28px] py-2 uppercase">ABOUT FREELANCER</h1>
           <p className="py-1 px-14 md:px-5 ">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
           </div>
        </div>
        <div className="py-5 text-center text-slate-100 bg-gray-800">
            <p className="text-[18px]">Copyright © Your Website 2021</p>
        </div>
        </>
    );
}

export default Footer;
