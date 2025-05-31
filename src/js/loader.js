import { gsap } from 'gsap'

/**
 * Generate Resources
 * @returns Array
 */
export function generateResources() {
  let resources = []

  // Oazao Cards front
  for (let x = 0; x <= 15; x++) {
    for (let y = 0; y <= 9; y++) {
      resources.push(`/imgs/cards-front-border/${x}.${y}.jpg`)
    }
  }

  // Oazao Cards back
  resources.push(`/imgs/cards-back/back-black.jpg`)

  // Old Cards front
  resources.push(`/imgs/old-cards/old-2.jpg`)
  resources.push(`/imgs/old-cards/old-3.jpg`)
  resources.push(`/imgs/old-cards/old-6.jpg`)
  resources.push(`/imgs/old-cards/old-8.jpg`)
  resources.push(`/imgs/old-cards/old-10.jpg`)
  resources.push(`/imgs/old-cards/old-a.jpg`)
  resources.push(`/imgs/old-cards/old-r.jpg`)
  resources.push(`/imgs/old-cards/old-v.jpg`)

  // Old Cards front with variations that stay on scroll
  resources.push(`/imgs/old-cards/old-v-0.jpg`)
  resources.push(`/imgs/old-cards/old-d-0.jpg`)
  resources.push(`/imgs/old-cards/old-r-0.jpg`)
  resources.push(`/imgs/old-cards/old-a-0.jpg`)

  // Their variations
  resources.push(`/imgs/old-cards/old-v-1.jpg`)
  resources.push(`/imgs/old-cards/old-v-2.jpg`)
  resources.push(`/imgs/old-cards/old-v-3.jpg`)

  resources.push(`/imgs/old-cards/old-d-1.jpg`)
  resources.push(`/imgs/old-cards/old-d-2.jpg`)
  resources.push(`/imgs/old-cards/old-d-3.jpg`)

  resources.push(`/imgs/old-cards/old-r-1.jpg`)
  resources.push(`/imgs/old-cards/old-r-2.jpg`)
  resources.push(`/imgs/old-cards/old-r-3.jpg`)

  resources.push(`/imgs/old-cards/old-a-1.jpg`)
  resources.push(`/imgs/old-cards/old-a-2.jpg`)
  resources.push(`/imgs/old-cards/old-a-3.jpg`)

  return resources
}

/**
 *
 * @param Array imageArray
 * @returns Promise
 */
export function preloadImages(imageArray) {
  let promises = []
  for (let src of imageArray) {
    promises.push(
      new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = resolve
        img.onerror = reject
      })
    )
  }
  return Promise.all(promises)
}

/**
 * Hide Loader
 */
export function hideLoader() {
  gsap.to('#loader', {
    duration: 0,
    opacity: 0,
    onComplete: () => {
      document.querySelector('#loader').style.display = 'none'
      document.querySelector('#page-container').style.display = 'block'
      gsap.from('#page-container', { duration: 1, opacity: 0 })
    },
  })
}
