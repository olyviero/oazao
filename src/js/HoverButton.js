import { gsap } from 'gsap'

export class HoverButton {
  constructor(el) {
    this.el = el
    this.hover = false
    this.calculatePosition()
    this.attachEventsListener()
  }

  attachEventsListener() {
    window.addEventListener('mousemove', (e) => this.onMouseMove(e))
    window.addEventListener('resize', (e) => this.calculatePosition(e))
  }

  calculatePosition() {
    gsap.set(this.el, {
      x: 0,
      y: 0,
      scale: 1,
    })
    const box = this.el.getBoundingClientRect()
    this.x = box.left + box.width * 0.5
    this.y = box.top + box.height * 0.5
    this.width = box.width
    this.height = box.height
  }

  onMouseMove(e) {
    let hover = false
    let hoverArea = this.hover ? 0.7 : 0.5
    let x = e.clientX - this.x
    let y = e.clientY - this.y
    let distance = Math.sqrt(x * x + y * y)
    if (distance < this.width * hoverArea) {
      hover = true
      if (!this.hover) {
        this.hover = true
      }
      this.onHover(e.clientX, e.clientY)
    }

    if (!hover && this.hover) {
      this.onLeave()
      this.hover = false
    }
  }

  // This is the effect
  onHover(x, y) {
    gsap.to(this.el, {
      x: (x - this.x) * 0.2,
      y: (y - this.y) * 0.2,
      scale: 1.15,
      ease: 'power2.out',
      duration: 0.4,
    })
    this.el.style.zIndex = 10
  }
  onLeave() {
    gsap.to(this.el, {
      x: 0,
      y: 0,
      scale: 1,
      ease: 'elastic.out(1.2, 0.4)',
      duration: 0.7,
    })
    this.el.style.zIndex = 1
  }
}
