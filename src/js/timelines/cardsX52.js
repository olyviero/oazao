import { gsap } from 'gsap'
import { generateAnimSpeech } from '../helpers'
import { generateRandomPositionOnCircle } from '../helpers'

export const timeline52toUno = () => {
  const positions52 = [
    { left: '25%', top: '20%' },
    { left: '75%', top: '20%' },
    { left: '25%', top: '75%' },
    { left: '75%', top: '75%' },
  ]

  const lineOf4Top = [
    { left: '20%', top: '25%' },
    { left: '40%', top: '25%' },
    { left: '60%', top: '25%' },
    { left: '80%', top: '25%' },
  ]

  const lineOf5Bottom = [
    { left: 16.6, top: 65 },
    { left: 33.3, top: 65 },
    { left: 50, top: 65 },
    { left: 66.6, top: 65 },
    { left: 83.3, top: 65 },
  ]

  return (
    gsap
      .timeline()

      // Place all green cards
      .to('.card-green', { top: '-50%', stagger: 0.02 }, '>')
      .add(generateAnimSpeech('.speech-classic-deck'), '<')

      // Hide all "0" to start
      .set('.card-white-0, .card-red-0, .card-blue-0, .card-yellow-0', { opacity: 0 }, '<')

      // Place all colors
      .to(
        '.card-white-main, .card-white-0',
        { left: positions52[0].left, top: positions52[0].top, transformOrigin: 'center 80%', rotateZ: 270 },
        '<'
      )
      .to(
        '.card-red-main, .card-red-0',
        { left: positions52[1].left, top: positions52[1].top, transformOrigin: 'center 80%', rotateZ: 270 },
        '<'
      )
      .to(
        '.card-blue-main, .card-blue-0',
        { left: positions52[2].left, top: positions52[2].top, transformOrigin: 'center 80%', rotateZ: 270 },
        '<'
      )
      .to(
        '.card-yellow-main, .card-yellow-0',
        { left: positions52[3].left, top: positions52[3].top, transformOrigin: 'center 80%', rotateZ: 270 },
        '<'
      )

      // Open colors as fans
      .to('.card-white-main, .card-white-0', { rotateZ: (index) => 270 + index * 14 }, '>')
      .to('.card-red-main, .card-red-0', { rotateZ: (index) => 270 + index * 14 }, '<+0.1')
      .to('.card-blue-main, .card-blue-0', { rotateZ: (index) => 270 + index * 14 }, '<+0.1')
      .to('.card-yellow-main, .card-yellow-0', { rotateZ: (index) => 270 + index * 14 }, '<+0.1')

      // Show all "0" now
      .to('.card-white-0, .card-red-0, .card-blue-0, .card-yellow-0', { opacity: 1 }, '>')

      // And remove visible figures
      .to('.card-white-10', { opacity: 0 }, '<+=0.3')
      .to('.card-red-10', { opacity: 0 }, '<')
      .to('.card-blue-10', { opacity: 0 }, '<')
      .to('.card-yellow-10', { opacity: 0 }, '<')

      .to('.card-white-jack', { opacity: 0 }, '<')
      .to('.card-red-jack', { opacity: 0 }, '<')
      .to('.card-blue-jack', { opacity: 0 }, '<')
      .to('.card-yellow-jack', { opacity: 0 }, '<')

      .to('.card-white-queen', { opacity: 0 }, '<')
      .to('.card-red-queen', { opacity: 0 }, '<')
      .to('.card-blue-queen', { opacity: 0 }, '<')
      .to('.card-yellow-queen', { opacity: 0 }, '<')

      .to('.card-white-king', { opacity: 0 }, '<')
      .to('.card-red-king', { opacity: 0 }, '<')
      .to('.card-blue-king', { opacity: 0 }, '<')
      .to('.card-yellow-king', { opacity: 0 }, '<')

      .add(generateAnimSpeech('.speech-keep-0-to-9'), '<-=0.3')

      // Double by assembling colors
      .add(generateAnimSpeech('.speech-double-some'), '>')

      // Line them up in line above texte
      .to(
        '.card-white.card-0-to-9, .card-white-0, .card-black.card-0-to-9, .card-black-0',
        {
          left: lineOf4Top[0].left,
          top: lineOf4Top[0].top,
          transformOrigin: 'center 80%',
          rotateZ: (index) => 330 + index * 2,
          scale: 0.8,
        },
        '>-=1.4'
      )
      .to(
        '.card-red.card-0-to-9, .card-red-0, .card-pink.card-0-to-9, .card-pink-0',
        {
          left: lineOf4Top[1].left,
          top: lineOf4Top[1].top,
          transformOrigin: 'center 80%',
          rotateZ: (index) => 330 + index * 2,
          scale: 0.8,
        },
        '<'
      )
      .to(
        '.card-blue.card-0-to-9, .card-blue-0, .card-turquoise.card-0-to-9, .card-turquoise-0',
        {
          left: lineOf4Top[2].left,
          top: lineOf4Top[2].top,
          transformOrigin: 'center 80%',
          rotateZ: (index) => 330 + index * 2,
          scale: 0.8,
        },
        '<'
      )
      .to(
        '.card-yellow.card-0-to-9, .card-yellow-0, .card-orange.card-0-to-9, .card-orange-0',
        {
          left: lineOf4Top[3].left,
          top: lineOf4Top[3].top,
          transformOrigin: 'center 80%',
          rotateZ: (index) => 330 + index * 2,
          scale: 0.8,
        },
        '<'
      )

      // Add special effect cards
      .to(
        '.card-black-jack, .card-white-jack, .card-red-jack, .card-pink-jack, .card-turquoise-jack, .card-blue-jack, .card-orange-jack, .card-yellow-jack',
        {
          left: `${lineOf5Bottom[0].left}%`,
          top: (index) => `${lineOf5Bottom[0].top + index * 2}%`,
          transformOrigin: 'center 80%',
          rotateZ: 0,
          scale: 0.6,
          opacity: 1,
        },
        '>+=0.5'
      )
      .to(
        '.card-white-queen, .card-pink-queen, .card-blue-queen, .card-yellow-queen',
        {
          left: `${lineOf5Bottom[1].left}%`,
          top: (index) => `${lineOf5Bottom[1].top + index * 2}%`,
          transformOrigin: 'center 80%',
          rotateZ: 0,
          scale: 0.6,
          opacity: 1,
        },
        '<'
      )
      .to(
        '.card-black-king, .card-white-king, .card-red-king, .card-pink-king, .card-turquoise-king, .card-blue-king, .card-orange-king, .card-yellow-king',
        {
          left: `${lineOf5Bottom[2].left}%`,
          top: (index) => `${lineOf5Bottom[2].top + index * 2}%`,
          transformOrigin: 'center 80%',
          rotateZ: 0,
          scale: 0.6,
          opacity: 1,
        },
        '<'
      )
      .to(
        '.card-black-e, .card-white-e, .card-red-e, .card-pink-e, .card-turquoise-e, .card-blue-e, .card-orange-e, .card-yellow-e',
        {
          left: `${lineOf5Bottom[3].left}%`,
          top: (index) => `${lineOf5Bottom[3].top + index * 2}%`,
          transformOrigin: 'center 80%',
          rotateZ: 0,
          scale: 0.6,
          opacity: 1,
        },
        '<'
      )
      .to(
        '.card-white-j, .card-pink-j, .card-blue-j, .card-yellow-j',
        {
          left: `${lineOf5Bottom[4].left}%`,
          top: (index) => `${lineOf5Bottom[4].top + index * 2}%`,
          transformOrigin: 'center 80%',
          rotateZ: 0,
          scale: 0.6,
          opacity: 1,
        },
        '<'
      )

      // Add special effects description
      .add(generateAnimSpeech('.speech-special-effects'), '<')
      .to(
        '.uno-effect',
        {
          top: (index, el) => `${lineOf5Bottom[el.dataset.effect].top + 20}%`,
          left: (index, el) => `${lineOf5Bottom[el.dataset.effect].left}%`,
          stagger: 0.05,
        },
        '<'
      )

      // Hide everything slowly => Move out => reset anims (scale, pos, ...)
      .to('.uno-effect', { opacity: 0 }, '>+=0.5')
      .to('.concept-card', { opacity: 0 }, '<')
  )
}
