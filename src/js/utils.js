import { gsap } from 'gsap'

const pageContainer = document.querySelector('#page-container')

export const preventScroll = (e) => {
  e.preventDefault()
  e.stopPropagation()

  return false
}
export const removeScroll = (classSelector) => {
  document.querySelector(classSelector).addEventListener('wheel', preventScroll, { passive: false })
}

export const saveScrollPositionOnrefreshPage = () => {
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPosition', window.scrollY || document.documentElement.scrollTop)
  })

  window.addEventListener('load', () => {
    if (localStorage.getItem('scrollPosition')) {
      const scrollY = localStorage.getItem('scrollPosition')
      window.scrollTo(0, scrollY)
    }
  })
}

export const addScrollToEvent = (classSelector, duration = 2, offsetTop) => {
  document.querySelector(classSelector).addEventListener('click', () => {
    gsap.to(window, { duration: duration, scrollTo: { y: pageContainer.offsetTop + offsetTop, behavior: 'smooth' } })
  })
}
