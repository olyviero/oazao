import './style.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { generateResources, preloadImages, hideLoader } from './src/js/loader'
import { HoverButton } from './src/js/HoverButton'
import { page } from './src/js/page'
import { removeScroll, saveScrollPositionOnrefreshPage } from './src/js/utils'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

/**
 * Main function
 */
document.addEventListener('DOMContentLoaded', () => {
  const resources = generateResources()

  // removeScroll('#loader')

  saveScrollPositionOnrefreshPage()

  // Preload everything
  preloadImages(resources)
    .then(() => {
      const txtLoading = document.querySelector('.txt-loading')

      txtLoading.classList.add('hidden')
      document.querySelector('body').classList.add('scrollable')
      document.querySelector('#app-container').classList.add('active')
      document.querySelector('#major-system-container').classList.add('active')
      page()

      const btns = [...document.querySelectorAll('button')]
      btns.forEach((btn) => new HoverButton(btn))
    })
    .catch((error) => {
      console.error('Erreur de chargement des images:', error)
    })
})
