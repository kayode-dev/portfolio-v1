import React from 'react';

const Footer = () =>{
    const thisyear = new Date().getFullYear();
return (
  <div className='mt-10'>
    <hr className="border-inherit" />
    <div className='flex my-4 justify-between'>
      {" "}
      <p>&copy; kayode.txt {thisyear}</p>
      <div className="flex gap-10 justify-around">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/kayode-dev"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/kayode.docx"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/kayode_txt"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    </div>
  </div>
);
}

export default Footer;