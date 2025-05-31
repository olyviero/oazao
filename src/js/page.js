import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { createEverything } from "./init";

import { timelineCardsX4 } from "./timelines/cardsX4";
import { timelineIntro } from "./timelines/intro";
import { timelineConcept } from "./timelines/concept";
import { timeline52toUno } from "./timelines/cardsX52";
import { timelineStraight } from "./timelines/straight";
import { timelineWords } from "./timelines/words";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export function page() {
  const mainTimeline = gsap.timeline({
    // paused: true,
    scrollTrigger: {
      trigger: "#page-container",
      start: "top top",
      // end: 'bottom-=800',
      // markers: true,
      scrub: 1,
      pin: "#page-container",
    },
  });

  createEverything();

  mainTimeline
    // Intro
    .add(timelineIntro())
    .add(timelineCardsX4(), "<")
    .add(timelineConcept(), ">-=0.9")
    .add(timeline52toUno(), ">")
    .add(timelineStraight(), ">")
    .add(timelineWords(), ">-=0.7");

  // const bob = document.querySelector('.uno-effect-0')
  // const s1 = document.querySelector('.section-1')

  // bob.addEventListener('click', () => {
  //   gsap.to(window, { duration: 2, scrollTo: { y: s1.offsetTop + 1200, behavior: 'smooth' } })
  // })
}
