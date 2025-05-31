import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

// import 'splitting/dist/splitting.css'
// import Splitting from 'splitting'

gsap.registerPlugin(CustomEase)
const speechAnimEase = CustomEase.create('custom', 'M0,0 C0,1 0,1 0.5,1 1,1 1,1 1,0 ')
// const speechAnimEase = 'power2.out'

const speechContainer = document.querySelector('#speech-container')
const effectsContainer = document.querySelector('#effects-container')

export class OldCard {
  constructor(imageFront, classNames = []) {
    this.imageFront = imageFront
    this.classNames = classNames
    this.createElement()
  }

  createElement() {
    this.element = document.createElement('div')
    this.element.className = 'old-card'
    this.classNames.forEach((className) => {
      this.element.classList.add(className)
    })

    this.element.style.transform = `translate(-50%, -50%)`
    this.element.style.backgroundImage = `url(${this.imageFront})`
  }
}

export class ConceptCard {
  constructor(x, y, frontFace, backFace, classNames) {
    this.imageFront = `url('/imgs/cards-front-border/${x}.${y}.jpg')`
    this.x = x
    this.y = y
    this.frontFace = frontFace
    this.backFace = backFace
    this.classNames = classNames
    this.createElement()
  }

  createElement() {
    this.element = document.createElement('div')
    this.element.className = 'concept-card'
    this.element.dataset.x = this.x
    this.element.dataset.y = this.y
    this.element.classList.add(`card-${this.x}-${this.y}`)
    this.classNames.forEach((className) => {
      this.element.classList.add(className)
    })

    this.element.style.zIndex = `${this.x}${this.y}`

    // Face avant
    if (this.frontFace) {
      const cardFront = document.createElement('div')
      cardFront.className = 'card-face card-front'
      cardFront.style.backgroundImage = this.imageFront

      this.element.appendChild(cardFront)
    }

    // Face arrière (dos)
    if (this.backFace) {
      const cardBack = document.createElement('div')
      cardBack.className = 'card-face card-back'
      cardBack.style.backgroundImage = `url('/imgs/cards-back/back-black.jpg')`

      this.element.appendChild(cardBack)
    }

    // Styles de positionnement
    this.element.style.position = 'absolute'
    this.element.style.transform = `translate(-50%, -50%)`
  }
}

const transCenterXY = { xPercent: -50, yPercent: -50 }

export class Speech {
  constructor(speech, index) {
    this.opacity = speech.opacity || 0
    this.left = speech.left || 50
    this.top = speech.top || 50
    this.duration = speech.duration || 1
    this.name = speech.name
    this.txt = speech.txt
    this.classNames = speech.classNames || []

    this.index = index

    this.createElement()
  }

  createElement() {
    this.container = document.createElement('div')
    this.container.className = 'speech-container'
    this.container.classList.add(`speech-${this.name}`)
    this.container.dataset.duration = this.duration

    this.speech = document.createElement('div')
    this.speech.className = 'speech'
    this.speech.innerHTML = this.txt

    this.classNames.forEach((className) => {
      this.speech.classList.add(className)
    })

    this.container.appendChild(this.speech)

    speechContainer.appendChild(this.container)

    gsap.set(this.container, {
      ...transCenterXY,
      left: `${this.left}%`,
      top: `${this.top}%`,
      duration: this.duration,
      opacity: this.opacity,
      ease: speechAnimEase,
    })
  }
}

export class Effect {
  constructor(effect, index) {
    this.effect = effect
    this.index = index

    this.createElement()
  }

  createElement() {
    this.container = document.createElement('div')
    this.container.className = 'uno-effect'
    this.container.classList.add(`uno-effect-${this.index}`)
    this.container.dataset.effect = this.index
    this.container.innerHTML = this.effect

    if (this.index === 0 || this.index === 1) this.container.classList.add('bigger')

    effectsContainer.appendChild(this.container)

    gsap.set(this.container, {
      ...transCenterXY,
      left: '50%',
      top: '150%',
    })
  }
}
