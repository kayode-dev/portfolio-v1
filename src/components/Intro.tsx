import React from "react";
import profpic from '../images/blocked.jpg';


const Intro = () =>{
 return (
   <div className="flex flex-col-reverse gap-4 items-center justify-between mb-10 md:flex-row">
     <div className=" w-full md:w-[65%] my-auto l intro-spacing gap-4">
       <h2 className="font-bold text-3xl">Kayode Babalola</h2>
       <p className="font-medium text-lg mb-2">Developer / Content Writer👨🏾‍💻</p>
       <p className="font-medium text-lg text-green-800">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. Sit amet aliquam id
         diam maecenas. Porta lorem mollis aliquam ut porttitor leo a diam.
         Integer enim neque volutpat ac.
       </p>
     </div>
     <div className="w-40 h-40 md:w-56 md:h-56 border-green-800 border-4 rounded-full p-1">
       <img className="rounded-full" src={profpic} alt="profile" />
     </div>
   </div>
 );

}

export default Intro;