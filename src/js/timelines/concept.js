import { gsap } from 'gsap'
import { generateAnimSpeech } from '../helpers'

export const timelineConcept = () => {
  const kingPositions = [
    { left: '10%', top: '28%' },
    { left: '30%', top: '28%' },
    { left: '50%', top: '28%' },
    { left: '70%', top: '28%' },
    { left: '90%', top: '28%' },
    { left: '10%', top: '73%' },
    { left: '30%', top: '73%' },
    { left: '50%', top: '73%' },
    { left: '70%', top: '73%' },
    { left: '90%', top: '73%' },
  ]

  const straightPositions = [
    { left: '06.25%', top: '28%' },
    { left: '18.75%', top: '28%' },
    { left: '31.25%', top: '28%' },
    { left: '43.75%', top: '28%' },
    { left: '56.25%', top: '28%' },
    { left: '68.75%', top: '28%' },
    { left: '81.25%', top: '28%' },
    { left: '93.75%', top: '28%' },
    { left: '06.25%', top: '73%' },
    { left: '18.75%', top: '73%' },
    { left: '31.25%', top: '73%' },
    { left: '43.75%', top: '73%' },
    { left: '56.25%', top: '73%' },
    { left: '68.75%', top: '73%' },
    { left: '81.25%', top: '73%' },
    { left: '93.75%', top: '73%' },
  ]

  return (
    gsap
      .timeline()

      // Center cards
      .to('.card-king', { left: '50%', top: '50%', rotateZ: 0, rotateY: 180, duration: 2 }, '<')

      // Place Kings
      .to(
        '.card-king',
        {
          left: (index, el, arr) => {
            const dataY = el.dataset.y
            return kingPositions[dataY].left
          },
          top: (index, el, arr) => {
            const dataY = el.dataset.y
            return kingPositions[dataY].top
          },
          rotateZ: 360,
          rotateY: 0,
          duration: 0.5,
          scale: 0.8,
        },
        '>'
      )
      .add(generateAnimSpeech('.speech-cards-160'), '<')

      // Remove not green
      .to('.card-king-not-green', { top: '-50%', duration: 0.4, stagger: 0.02, delay: 0.2 }, '>-=0.5')

      // Place Straight
      .to(
        '.card-green-main',
        {
          left: (index, el, arr) => {
            const dataX = el.dataset.x
            return straightPositions[dataX].left
          },
          top: (index, el, arr) => {
            const dataX = el.dataset.x
            return straightPositions[dataX].top
          },
          rotateZ: 360,
          rotateY: 0,
          // duration: 0.5,
          scale: 0.8,
        },
        '<'
      )
      .add(generateAnimSpeech('.speech-card-range'), '<')
      .add(generateAnimSpeech('.speech-additional-cards'), '<+=1.5')

      // Add 0, E, J
      .to(
        '.card-green-0, .card-green-j, .card-green-e',
        {
          left: (index, el, arr) => {
            const dataX = el.dataset.x
            return straightPositions[dataX].left
          },
          top: (index, el, arr) => {
            const dataX = el.dataset.x
            return straightPositions[dataX].top
          },
          rotateZ: 360,
          rotateY: 0,
          duration: 0.5,
          scale: 0.8,
        },
        '<-=0.2'
      )
      .add(generateAnimSpeech('.speech-multi-usage'), '<+=1.2')
  )
}
