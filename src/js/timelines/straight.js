import { gsap } from 'gsap'
import { generateAnimSpeech } from '../helpers'

export const timelineStraight = () => {
  const cardsInStraight = [
    document.querySelector('.card-2-7'),
    document.querySelector('.card-2-8'),
    document.querySelector('.card-2-9'),
    document.querySelector('.card-3-0'),
    document.querySelector('.card-3-1'),
    document.querySelector('.card-3-2'),
    document.querySelector('.card-3-3'),
    document.querySelector('.card-3-4'),
    document.querySelector('.card-3-5'),
    document.querySelector('.card-3-6'),
    document.querySelector('.card-3-7'),
    document.querySelector('.card-3-8'),
    document.querySelector('.card-3-9'),
    document.querySelector('.card-4-0'),
  ]

  cardsInStraight.forEach((card, index) => {
    card.classList.add('card-in-staight')
    card.dataset.straightIndex = index
  })

  return gsap
    .timeline()
    .set('.card-in-staight', {
      top: '100%',
      left: '150%',
      transformOrigin: 'center',
      rotateZ: 0,
      duration: 0,
      scale: 1.7,
      opacity: 1,
    })
    .set('.overlay-double', { rotateZ: 15 })
    .to(
      '.card-in-staight',
      {
        top: '60%',
        transformOrigin: 'bottom',
        left: (index, el) => '-190%' + 'px',
        duration: 1.2,
        stagger: function (index, el) {
          return el.dataset.straightIndex * 0.1
        },
      },
      '<'
    )
    .add(generateAnimSpeech('.speech-read-straight'), '<')
    .to('.overlay-double', { opacity: 1 }, '<+=0.2')
    .to('.card-in-staight', { scale: 1, transformOrigin: 'center' })
}
