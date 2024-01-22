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
        // ScrollTrigger.config({ ignoreMobileResize: true });
        // const tl = gsap.timeline({
        //   scrollTrigger: { trigger: "#w-text", scrub: 1 },
        // });
        // tl.from("#w-text", { y: 200, opacity: 0 })
        //   .from(".fe-dev", {
        //     y: 300,
        //     opacity: 0,
        //   })
        //   .from(".pro-mngt", { y: 400, opacity: 0 })
        //   .from(".cre-wri", { y: 500, opacity: 0 });

        gsap.from("#w-text", { scrollTrigger: "#w-text", y: 200, opacity: 0 })

        gsap.from(".fe-dev", {scrollTrigger: ".fe-dev",
            y: 300,
            opacity: 0,
        })
        gsap.from(".pro-mngt", {scrollTrigger: ".pro-mngt", y: 400, opacity: 0 })
        gsap.from(".cre-wri", {scrollTrigger: ".cre-wri", y: 500, opacity: 0 });
    });
    return (
        <div>
            <Intro />
            <Doings />
        </div>
    );
}

export default Home;