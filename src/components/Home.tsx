import React from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";

import Intro from './Intro';
import Doings from './Doings';

const Home = () => {
    useGSAP(() => {
        gsap.from(".name", {
            scale: 0.1,
            ease: "power4.out",
            opacity: 0,
            duration: 2,
        });
        gsap.from(".description", { x: 500, opacity: 0, duration: 2 });
        gsap.from(".intro", { y: 100, opacity: 0, duration: 2 });
        gsap.from(".profpic", {
            scale: 0.1,
            ease: "power4.out",
            opacity: 0,
            duration: 2,
        });
        gsap.registerPlugin(ScrollTrigger);

        gsap.from("#w-text", { scrollTrigger: "#w-text", y: 200, opacity: 0 })

        gsap.from(".fe-dev", {scrollTrigger: ".fe-dev",
            y: 300,
            opacity: 0,
        })
        gsap.from(".pro-mngt", {scrollTrigger: ".pro-mngt", y: 400, opacity: 0 });
        gsap.from(".cre-wri", {scrollTrigger: ".cre-wri", y: 500, opacity: 0 });

        gsap.from("#abt-me", {scrollTrigger: "#abt-me", y: 200, opacity: 0 });
        gsap.from("#abt-me-subtext", {scrollTrigger: "#abt-me-subtext", y: 300, opacity: 0 });

        gsap.from("#live-pro", {scrollTrigger: "#live-pro", y: 200, opacity: 0 });
        gsap.from(".run-tech", {scrollTrigger: ".run-tech", y: 300, opacity: 0 });
        gsap.from(".gpt-tech", {scrollTrigger: ".gpt-tech", y: 400, opacity: 0 });
        gsap.from(".task-tech", {scrollTrigger: ".task-tech", y: 500, opacity: 0 });

        gsap.from("#contact-heading", {scrollTrigger: "#contact-heading", y: 200, opacity: 0 });
        gsap.from("#email", {scrollTrigger: "#email", y: 300, opacity: 0 });
        gsap.from("#meeting", {scrollTrigger: "#meeting", y: 300, opacity: 0 });
        gsap.from("#follow", {scrollTrigger: "#follow", y: 300, opacity: 0 });
        gsap.from("#platforms", {scrollTrigger: "#platforms", y: 300, opacity: 0 });

        gsap.from("#spotify-heading", {scrollTrigger: "#spotify-heading", y: 200, opacity: 0 });
        gsap.from("#player", {scrollTrigger: "#player", y: 300, opacity: 0 });
        

    });
    return (
        <div className='grid grid-cols-1'>
            <Intro />
            <Doings />
        </div>
    );
}

export default Home;