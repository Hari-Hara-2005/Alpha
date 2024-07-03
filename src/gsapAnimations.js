import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateHero = () => {
    // First timeline
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".two",
            start: "0% 100%",
            end: "55% 50%",
            scrub: true,
            // markers: true,
        }
    });

    tl1.to("#card", {
        rotate: '360deg',
        top: "120%",
        left: "20%",
    });

    // Second timeline (uncomment and adjust if needed)
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
    // });
    // tl1.to("#card-1", {
    //     rotate: '180deg',
    //     top: "210%",
    //     left: "-15%",
    // });
};

animateHero();
