import { gsap } from 'gsap'
import { generateAnimSpeech, generateRandomAngle } from '../helpers'

export const timelineIntro = () => {
  return gsap
    .timeline()
    .add(generateAnimSpeech('.speech-history'), '>')
    .to(
      '.old-card.go-away',
      {
        y: -900,
        duration: 1,
        rotationY: generateRandomAngle(2),
        stagger: { amount: 0.1, ease: 'power2.inOut', from: 'random' },
      },
      '<'
    )
    .to('#scroll-indicator', { opacity: 0, duration: 0.2 }, '<')
    .add(generateAnimSpeech('.speech-no-evolution'), '<+=.3')
    .add(generateAnimSpeech('.speech-until-today'), '<+=.6')
    .add(generateAnimSpeech('.speech-new-concept'), '<+=.9')
}
