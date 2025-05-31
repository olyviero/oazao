import { OldCard, ConceptCard, Speech, Effect } from './ClassesGenerators'
import { gsap } from 'gsap'
import { generateRandomPositionOnCircle, generateRandomAngle, generateCardClassesFromXY } from './helpers'

import { speeches } from './speeches'
import { addScrollToEvent } from './utils'

import Splide from '@splidejs/splide'
import '@splidejs/splide/css'

const cardsContainer = document.querySelector('#cards-container')

const msTable = document.querySelector('#ms-table')

const transCenterX = { xPercent: -50 }
const transCenterY = { yPercent: -50 }
const transCenterXY = { xPercent: -50, yPercent: -50 }

// -------------------------------------------------------------------------------------
// Create Old Cards
// -------------------------------------------------------------------------------------
const createAllOldCards = () => {
  const oldCardsArray = [
    new OldCard('/imgs/old-cards/old-2.jpg', ['go-away', 'old-2']),
    new OldCard('/imgs/old-cards/old-3.jpg', ['go-away', 'old-3']),
    new OldCard('/imgs/old-cards/old-6.jpg', ['go-away', 'old-6']),
    new OldCard('/imgs/old-cards/old-8.jpg', ['go-away', 'old-8']),
    new OldCard('/imgs/old-cards/old-10.jpg', ['go-away', 'old-10']),
    new OldCard('/imgs/old-cards/old-a.jpg', ['go-away', 'old-a']),
    new OldCard('/imgs/old-cards/old-r.jpg', ['go-away', 'old-r']),
    new OldCard('/imgs/old-cards/old-v.jpg', ['go-away', 'old-v']),

    new OldCard('/imgs/old-cards/old-v-0.jpg', ['stay', 'stay-0']),
    new OldCard('/imgs/old-cards/old-d-0.jpg', ['stay', 'stay-1']),
    new OldCard('/imgs/old-cards/old-r-0.jpg', ['stay', 'stay-2']),
    new OldCard('/imgs/old-cards/old-a-0.jpg', ['stay', 'stay-3']),
  ]

  oldCardsArray.forEach((card) => cardsContainer.appendChild(card.element))

  gsap.set('.old-2', { left: '2%', top: '7%', rotateZ: 30 })
  gsap.set('.old-3', { left: '5%', top: '7%', rotateZ: 45 })
  gsap.set('.old-6', { left: '99%', top: '45%', rotateZ: -125 })
  gsap.set('.old-8', { left: '22%', top: '8%', rotateZ: 36 })
  gsap.set('.old-10', { left: '45%', top: '9%', rotateZ: -56 })
  gsap.set('.old-a', { left: '54%', top: '10%', rotateZ: -15 })
  gsap.set('.old-r', { left: '94%', top: '12%', rotateZ: 30 })
  gsap.set('.old-v', { left: '80%', top: '9%', rotateZ: 75 })

  gsap.set('.stay-0', { left: '9%', top: '30%', rotateZ: -25 })
  gsap.set('.stay-1', { left: '32%', top: '12%', rotateZ: 20 })
  gsap.set('.stay-2', { left: '68%', top: '10%', rotateZ: -30 })
  gsap.set('.stay-3', { left: '94%', top: '30%', rotateZ: 20 })
}

// -------------------------------------------------------------------------------------
// Create Concept cards
// -------------------------------------------------------------------------------------
const createAllConceptCards = () => {
  const allCards = []

  for (let y = 0; y <= 9; y++) {
    for (let x = 0; x <= 15; x++) {
      allCards.push(new ConceptCard(x, y, true, true, generateCardClassesFromXY(x, y)))
    }
  }

  allCards.forEach((card) => {
    cardsContainer.appendChild(card.element)

    const { x: posX, y: posY } = generateRandomPositionOnCircle(2000)
    gsap.set(card.element, {
      left: `calc(50% + ${posX}px )`,
      top: `calc(50% + ${posY}px)`,
      scale: 0.8,
      rotateZ: generateRandomAngle(5),
      rotateY: -360,
    })
  })

  // -----------------------------------------------------------------------------------
  // Special classes
  // -----------------------------------------------------------------------------------

  // For all kings not green
  const allKingsButGreen = [...document.querySelectorAll('.card-king:not(.card-king-green)')]
  allKingsButGreen.forEach((card) => {
    if (!card.classList.contains('card-13-4')) card.classList.add('card-king-not-green')
  })

  // Filter cards for UNO
  const allJacks = [...document.querySelectorAll('.card-jack')]
  allJacks.forEach((card) => {
    if (card.dataset.y >= 2) card.classList.add('card-for-uno')
    else card.classList.add('card-remove-for-uno')
  })
  const allQueens = [...document.querySelectorAll('.card-queen')]
  allQueens.forEach((card) => {
    if (card.dataset.y >= 2) card.classList.add('card-for-uno')
    else card.classList.add('card-remove-for-uno')
  })
  const allKings = [...document.querySelectorAll('.card-king')]
  allKings.forEach((card) => {
    if (card.dataset.y >= 2) card.classList.add('card-for-uno')
    else card.classList.add('card-remove-for-uno')
  })
  const allElixirs = [...document.querySelectorAll('.card-e')]
  allElixirs.forEach((card) => {
    if (card.dataset.y >= 6) card.classList.add('card-for-uno')
    else card.classList.add('card-remove-for-uno')
  })
  const allJokers = [...document.querySelectorAll('.card-j')]
  allJokers.forEach((card) => {
    if (card.dataset.y >= 6) card.classList.add('card-for-uno')
    else card.classList.add('card-remove-for-uno')
  })
}

// -------------------------------------------------------------------------------------
// Create Speeches
// -------------------------------------------------------------------------------------
const createSpeeches = () => {
  speeches.forEach((speech, index) => {
    new Speech(speech, index)
  })
}

// -------------------------------------------------------------------------------------
// Create Effect Cards
// -------------------------------------------------------------------------------------
const createEffectCards = () => {
  const unoEffects = ['+2', '+4', 'Change de sens', 'Passe ton tour', 'Change de couleur']

  unoEffects.forEach((effect, index) => {
    new Effect(effect, index)
  })
}

// -------------------------------------------------------------------------------------
// Create Modals
// -------------------------------------------------------------------------------------
const createModal = (containerSlector, openBtnSelector) => {
  const container = document.querySelector(containerSlector)
  const openModalBtn = document.querySelector(openBtnSelector)

  // Set initial position
  gsap.set(container, { ...transCenterXY, top: '-100%', left: '50%' })

  // Open Modal
  openModalBtn.addEventListener('click', () => gsap.to(container, { top: '50%', opacity: 1 }))

  // Close Modal
  const msCloseButtons = container.querySelectorAll('.btn.modal-close')
  // const msCloseButtons = container.querySelectorAll('.btn.modal-close, .btn.modal-close-relative')
  msCloseButtons.forEach((btn) => btn.addEventListener('click', () => gsap.to(container, { top: '-100%', opacity: 1 })))
}

// -------------------------------------------------------------------------------------
// Create Sliders
// -------------------------------------------------------------------------------------
const createSliders = (containerSlector, openBtnSelector) => {
  const msSlider = new Splide('.ms-splide', {
    arrows: false,
  })

  msSlider.mount().on('moved', (newIndex) => {
    const allMatch = [...msTable.querySelectorAll('.match')]
    const matchColor7 = msTable.querySelector('.match.bg-color-7')
    const matchColor4 = msTable.querySelector('.match.bg-color-4')
    const matchColor2 = msTable.querySelector('.match.bg-color-2')
    const matchColor5 = msTable.querySelector('.match.bg-color-5')
    const matchColor0 = msTable.querySelector('.match.bg-color-0')
    const matchColor8 = msTable.querySelector('.match.bg-color-8')

    // Effacer la visibilité par défaut pour tous les matches
    allMatch.forEach((match) => match.classList.remove('visible'))

    if (newIndex > 4) {
      allMatch.forEach((match) => match.classList.add('visible'))
    } else if (newIndex === 4) {
      ;[matchColor7, matchColor4, matchColor2, matchColor5, matchColor0, matchColor8].forEach((match) =>
        match.classList.add('visible')
      )
    } else if (newIndex === 3) {
      ;[matchColor7, matchColor4, matchColor2, matchColor5].forEach((match) => match.classList.add('visible'))
    } else if (newIndex === 2) {
      ;[matchColor7, matchColor4].forEach((match) => match.classList.add('visible'))
    }

    // Gérer la visibilité de msTable basée sur l'index
    msTable.classList.toggle('visible', newIndex > 1)
  })

  const appSlider = new Splide('.app-splide', {
    arrows: false,
  })

  const slidesTimelines = {}

  appSlider.on('moved', (newIndex, prevIndex) => {
    // Réinitialiser l'animation du slide précédent
    if (slidesTimelines[prevIndex]) {
      slidesTimelines[prevIndex].kill()
    }

    const img = document.querySelector(`.img-${newIndex}`)
    const container = img.parentNode
    const imgHeight = img.clientHeight
    const containerHeight = container.clientHeight
    const moveUp = imgHeight - containerHeight

    const tl = gsap.timeline({ repeat: -1, yoyo: true, delay: 1 })

    tl.to(img, { top: `-${moveUp}px`, duration: 3, ease: 'linear' })
      .to({}, { duration: 1 })
      .to(img, { top: 0, duration: 3, ease: 'linear' })
      .to({}, { duration: 1 })

    slidesTimelines[newIndex] = tl
  })

  appSlider.mount()
}

// -------------------------------------------------------------------------------------
// Create Everything
// -------------------------------------------------------------------------------------
export function createEverything() {
  createAllOldCards()
  createAllConceptCards()

  createSpeeches()

  createEffectCards()

  createModal('#major-system-container', '.btn#ms-info')
  createModal('#app-container', '.btn#app-info')

  createSliders()
}
