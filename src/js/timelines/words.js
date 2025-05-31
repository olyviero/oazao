import { gsap } from 'gsap'
import { generateAnimSpeech } from '../helpers'

const majorSystemInterestedBtns = document.querySelector('.major-system-interested-btns')

export const timelineWords = () => {
  const cardsInWords = [
    document.querySelector('.card-9-9'),
    document.querySelector('.card-9-0'),
    document.querySelector('.card-8-6'),
    document.querySelector('.card-8-1'),
    document.querySelector('.card-7-8'),
    document.querySelector('.card-7-4'),
    document.querySelector('.card-6-5'),
    document.querySelector('.card-5-2'),
    document.querySelector('.card-4-7'),
    document.querySelector('.card-0-3'),
  ]

  cardsInWords.forEach((card, index) => {
    card.classList.add('card-in-words')
    card.dataset.wordIndex = index
  })

  return gsap
    .timeline()
    .to('.overlay-double', { top: '+=20%' }, '<+=0.2')
    .set('.card-in-words', {
      top: '100%',
      left: '150%',
      transformOrigin: 'center',
      rotateZ: 0,
      duration: 0,
      scale: 1.7,
      opacity: 1,
    })
    .to(
      '.card-in-words',
      {
        top: '60%',
        transformOrigin: 'bottom',
        left: (index, el) => '-190%' + 'px',
        duration: 1.2,
        stagger: function (index, el) {
          return el.dataset.wordIndex * 0.1
        },
      },
      '<'
    )
    .add(generateAnimSpeech('.speech-use-words'), '<')
    .to('.overlay-double', { opacity: 1 }, '<+=0.2')
    .to('.overlay-double', { opacity: 0 }, '<+=1')
    .to('.overlay-double', { opacity: 0 }, '<+=1.2') // Adds a delay for the animation to end
}
