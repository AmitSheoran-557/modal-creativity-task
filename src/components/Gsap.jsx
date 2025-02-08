import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Gsap = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.box', {
            y: 0, 
        }, {
            y: 200, 
            duration: 5,
            repeat: 3,  
            yoyo: true,  
            x:400,
            scrollTrigger: {
                // pin: true,
                trigger: '.box',
                start: 'top center',
                end: '280% center',
                scrub: 1,
                markers: true, 
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <div className='bg-black/70 min-h-screen flex items-center justify-center'>
                <div className="w-10 box bg-white p-10 h-10">Scroll me</div>
            </div>
            {/* <div className="min-h-screen flex bg-white py-40"></div> */}
        </>
    );
}

export default Gsap;
