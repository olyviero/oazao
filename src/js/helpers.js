import { gsap } from 'gsap'

export const colorMapping = {
  0: 'black',
  1: 'red',
  2: 'orange',
  3: 'yellow',
  4: 'green',
  5: 'turquoise',
  6: 'blue',
  7: 'purple',
  8: 'pink',
  9: 'white',
}

export const generateRandomPositionOnCircle = (radius, mode = 0) => {
  const angle = Math.random() * 2 * Math.PI // Angle aléatoire entre 0 et 2π (cercle complet)

  // X and Y positions
  if (mode === 0) {
    const x = radius * Math.cos(angle)
    const y = radius * Math.sin(angle)

    return { x, y }
  }
  // Top and Left in Pourcentage
  else {
    const top = `${radius * Math.cos(angle)}%`
    const left = `${radius * Math.sin(angle)}%`

    return { top, left }
  }
}

export const generateRandomPositionOnScreen = () => {
  const x = Math.random() * 110 - 10
  const y = Math.random() * 110 - 10
  return { x, y }
}

export const generateRandomAngle = (nbRotation = 1) => {
  const angle = Math.random() * 360 * nbRotation
  return angle
}

export const generateRandomCardFigure = (blacklist = []) => {
  let figure
  do {
    figure = Math.floor(Math.random() * 17)
  } while (blacklist.includes(figure))
  return figure
}

export const generateRandomCardColor = () => {
  let color
  do {
    color = Math.floor(Math.random() * 10)
  } while (blacklist.includes(color))
  return color
}

export const generateFlipableCardOnEvents = (selector, prefix, reverseIndex, completeIndex) => {
  return {
    onReverseComplete: () => {
      selector.style.backgroundImage = `url('/imgs/old-cards/old-${prefix}-${reverseIndex}.jpg')`
    },
    onComplete: () => {
      selector.style.backgroundImage = `url('/imgs/old-cards/old-${prefix}-${completeIndex}.jpg')`
    },
  }
}

export const generateCardClassesFromXY = (x, y) => {
  let classes = []

  // Related to color
  classes.push(`card-${colorMapping[y]}`)

  // Cards 0 to 9
  if (x >= 0 && x <= 9) classes.push(`card-0-to-9`)

  // Related to figure
  if (x === 0) classes.push(`card-${colorMapping[y]}-plus`, `card-0`, `card-${colorMapping[y]}-0`)
  else if (x === 10) classes.push(`card-${colorMapping[y]}-main`, `card-10`, `card-${colorMapping[y]}-10`)
  else if (x === 11) classes.push(`card-${colorMapping[y]}-main`, `card-jack`, `card-${colorMapping[y]}-jack`)
  else if (x === 12) classes.push(`card-${colorMapping[y]}-main`, `card-queen`, `card-${colorMapping[y]}-queen`)
  else if (x === 13) classes.push(`card-${colorMapping[y]}-main`, `card-king`, `card-${colorMapping[y]}-king`)
  else if (x === 14) classes.push(`card-${colorMapping[y]}-plus`, `card-j`, `card-${colorMapping[y]}-j`)
  else if (x === 15) classes.push(`card-${colorMapping[y]}-plus`, `card-e`, `card-${colorMapping[y]}-e`)
  else classes.push(`card-${colorMapping[y]}-main`)

  // Related to Uno
  if (x >= 1 && x <= 10) classes.push(`card-remove-for-uno`)

  return classes
}

export const generateAnimSpeech = (speechClass) => {
  const duration = document.querySelector(speechClass).dataset.duration || 2

  const tl = gsap.timeline()
  if (speechClass === '.speech-history') tl.to(speechClass, { opacity: 0 })
  else tl.to(speechClass, { opacity: 1 }).to(speechClass, { opacity: 0 }, `<+=${duration}`)

  return tl
}
