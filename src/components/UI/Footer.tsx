import React from 'react';

const Footer = () =>{
    const thisyear = new Date().getFullYear();
return(
    <div className='mt-7'>
    <hr className='bg-inherit'/>
    <p> kayode.text {thisyear}</p>
    </div>
);
}

export default Footer;