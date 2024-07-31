import React from "react";

const Footer = () => {
	const thisyear = new Date().getFullYear();
	return (
		<div className="mt-10 text-lg">
			<hr className=" border-gray-500 border-opacity-40 " />
			<div className="flex my-4 justify-between items-center text-lg text-gray-500 text-opacity-50 ">
				{" "}
				<p>&copy; kayode.dev {thisyear}</p>
				<div className="flex gap-4 justify-around duration-500">
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
						<i className="fa-brands fa-x-twitter"></i>
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/kayode-babalola-a522a6226/"
					>
						<i className="fa-brands fa-linkedin"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
