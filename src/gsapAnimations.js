import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateHero = () => {
    // First timeline
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".two",
            start: "0% 95%",
            end: "70% 50%",
            scrub: true,
            // markers: true,
        }
    });

    tl1.to("#card", {
        rotate: '180deg',
        top: "126%",
        left: "-10%"
    })


    // // Second timeline
    // const tl2 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".three",
    //         start: "0% 95%",
    //         end: "30% 50%",
    //         scrub: true,
    //         // markers: true,
    //     }
    // });

    // tl2.to("#card", {
    //     top: "210%",
    //     left: "33%",
    // })
    // tl1.to("#card-1", {
    //     rotate: '180deg',
    //     top: "210%",
    //     left: "-15%",
    // });
};

// Call the function to initialize the animations
animateHero();
