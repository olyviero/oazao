import { gsap } from 'gsap'

import { generateFlipableCardOnEvents } from '../helpers'

const timelineCard0 = () => {
  const commonConfig = { duration: 0.2, ease: 'linear' }
  const el = document.querySelector('.old-card.stay-0')
  const figure = 'v'
  const stepConfig1 = { left: '10%', top: '10%', rotateZ: 90, rotateY: 90, ...commonConfig }
  const stepConfig2 = { left: '20%', top: '20%', rotateZ: 180, rotateY: 180, ...commonConfig }
  const stepConfig3 = { left: '40%', top: '30%', rotateZ: 270, rotateY: 270, ...commonConfig }
  const stepConfig4 = { left: '60%', top: '40%', rotateZ: 360, rotateY: 360, ...commonConfig }
  const stepConfig5 = { left: '70%', top: '30%', rotateZ: 450, rotateY: 450, ...commonConfig }
  const stepConfig6 = { left: '80%', top: '20%', rotateZ: 540, rotateY: 540, ...commonConfig }
  const stepConfig7 = { left: '120%', top: '-20%', rotateZ: 630, rotateY: 630, ...commonConfig }

  return gsap
    .timeline()
    .to(el, stepConfig1, '<')
    .to(el, { duration: 0, ...generateFlipableCardOnEvents(el, figure, '0', '1') })
    .to(el, stepConfig2, '<')
    .to(el, stepConfig3, '>')
    .to(el, { duration: 0, ...generateFlipableCardOnEvents(el, figure, '1', '2') }, '>')
    .to(el, stepConfig4, '<')
    .to(el, stepConfig5, '>')
    .to(el, { duration: 0, ...generateFlipableCardOnEvents(el, figure, '2', '3') }, '>')
    .to(el, stepConfig6, '<')
    .to(el, stepConfig7, '>')
}

const timelineCard1 = () => {
  const commonConfig = { duration: 0.2, ease: 'linear' }
  const el = document.querySelector('.old-card.stay-1')
  const figure = 'd'
  const stepConfig1 = { left: '30%', top: '10%', rotateZ: 90, rotateY: 90, ...commonConfig }
  const stepConfig2 = { left: '40%', top: '20%', rotateZ: 180, rotateY: 180, ...commonConfig }
  const stepConfig3 = { left: '50%', top: '40%', rotateZ: 270, rotateY: 270, ...commonConfig }
  const stepConfig4 = { left: '60%', top: '60%', rotateZ: 360, rotateY: 360, ...commonConfig }
  const stepConfig5 = { left: '70%', top: '70%', rotateZ: 450, rotateY: 450, ...commonConfig }
  const stepConfig6 = { left: '80%', top: '80%', rotateZ: 540, rotateY: 540, ...commonConfig }
  const stepConfig7 = { left: '120%', top: '120%', rotateZ: 630, rotateY: 630, ...commonConfig }

  return gsap
    .timeline()
    .to(el, stepConfig1, '<')
    .to(el, { duration: 0, ...generateFlipableCardOnEvents(el, figure, '0', '1') })
    .to(el, stepConfig2, '<')
    .to(el, stepConfig3, '>')
    .to(el, { duration: 0, ...generateFlipableCardOnEvents(el, figure, '1', '2') }, '>')
    .to(el, stepConfig4, '<')
    .to(el, stepConfig5, '>')
    .to(el, { duration: 0, ...generateFlipableCardOnEvents(el, figure, '2', '3') }, '>')
    .to(el, stepConfig6, '<')
    .to(el, stepConfig7, '>')
}

const timelineCard2 = () => {
  const commonConfig = { duration: 0.2, ease: 'linear' }
  const el = document.querySelector('.old-card.stay-2')
  const figure = 'r'
  const stepConfig1 = { left: '70%', top: '20%', rotateZ: 90, rotateY: 90, ...commonConfig }
  const stepConfig2 = { left: '60%', top: '30%', rotateZ: 180, rotateY: 180, ...commonConfig }
  const stepConfig3 = { left: '50%', top: '40%', rotateZ: 270, rotateY: 270, ...commonConfig }
  const stepConfig4 = { left: '40%', top: '50%', rotateZ: 360, rotateY: 360, ...commonConfig }
  const stepConfig5 = { left: '30%', top: '60%', rotateZ: 450, rotateY: 450, ...commonConfig }
  const stepConfig6 = { left: '20%', top: '80%', rotateZ: 540, rotateY: 540, ...commonConfig }
  const stepConfig7 = { left: '-20%', top: '120%', rotateZ: 630, rotateY: 630, ...commonConfig }

  return gsap
    .timeline()
    .to(el, stepConfig1, '<')
    .to(el, { duration: 0, ...generateFlipableCardOnEvents(el, figure, '0', '1') })
    .to(el, stepConfig2, '<')
    .to(el, stepConfig3, '>')
    .to(el, { duration: 0, ...generateFlipableCardOnEvents(el, figure, '1', '2') }, '>')
    .to(el, stepConfig4, '<')
    .to(el, stepConfig5, '>')
    .to(el, { duration: 0, ...generateFlipableCardOnEvents(el, figure, '2', '3') }, '>')
    .to(el, stepConfig6, '<')
    .to(el, stepConfig7, '>')
}

const timelineCard3 = () => {
  const commonConfig = { duration: 0.2, ease: 'linear' }
  const el = document.querySelector('.old-card.stay-3')
  const figure = 'a'
  const stepConfig1 = { left: '80%', top: '20%', rotateZ: 90, rotateY: 90, ...commonConfig }
  const stepConfig2 = { left: '70%', top: '30%', rotateZ: 180, rotateY: 180, ...commonConfig }
  const stepConfig3 = { left: '60%', top: '40%', rotateZ: 270, rotateY: 270, ...commonConfig }
  const stepConfig4 = { left: '50%', top: '60%', rotateZ: 360, rotateY: 360, ...commonConfig }
  const stepConfig5 = { left: '30%', top: '30%', rotateZ: 450, rotateY: 450, ...commonConfig }
  const stepConfig6 = { left: '20%', top: '20%', rotateZ: 540, rotateY: 540, ...commonConfig }
  const stepConfig7 = { left: '-20%', top: '-20%', rotateZ: 630, rotateY: 630, ...commonConfig }

  return gsap
    .timeline()
    .to(el, stepConfig1, '<')
    .to(el, { duration: 0, ...generateFlipableCardOnEvents(el, figure, '0', '1') })
    .to(el, stepConfig2, '<')
    .to(el, stepConfig3, '>')
    .to(el, { duration: 0, ...generateFlipableCardOnEvents(el, figure, '1', '2') }, '>')
    .to(el, stepConfig4, '<')
    .to(el, stepConfig5, '>')
    .to(el, { duration: 0, ...generateFlipableCardOnEvents(el, figure, '2', '3') }, '>')
    .to(el, stepConfig6, '<')
    .to(el, stepConfig7, '>')
}

export const timelineCardsX4 = () => {
  const tl = gsap.timeline()

  tl.add(timelineCard0(), '<').add(timelineCard1(), '<').add(timelineCard2(), '<').add(timelineCard3(), '<')
  return tl
}
