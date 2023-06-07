import React from "react";
import profpic from '../images/blocked.jpg';


const Intro = () =>{
 return (
   <div className="flex justify-between mb-10">
     <div className="w-3/5 my-auto l intro-spacing gap-4">
       <h2 className="font-bold text-4xl mb-2">Kayode Babalola</h2>
       <p className="font-medium text-xl">Developer👨🏾‍💻</p>
       <p className="font-medium text-lg text-green-800">
         Hi!, Kayode here😀,I'm a <strong>Web developer</strong> in training. Over
         the last 3-4 years, I've been in and out of the tech scene majorly
         because i was rather confused and far from prepared as well, I felt
         that it was too much for me to handle and I'm in over my head. So now
         I'm taking charge and trying to be productive with this!, I build high
         performant web applications that meets my client's needs. I also love
         sharing my personal experiences, so I write <a href='jetronticket.com' className="cursor-pointer">articles</a>.
       </p>
     </div>
     <div className="w-60 h-60 border-green-800 border-4 rounded-full p-2">
       <img className="rounded-full" src={profpic} alt="profile" />
     </div>
   </div>
 );

}

export default Intro;