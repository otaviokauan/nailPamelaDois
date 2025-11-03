// Mobile Navigation Toggle
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    navToggle.classList.toggle("active")
  })

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
    })
  })

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
    }
  })
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offset = 80 // Height of fixed navbar
      const targetPosition = target.offsetTop - offset
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Navbar scroll effect with enhanced styling
let lastScroll = 0
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    navbar.style.padding = "0.75rem 0"
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)"
  } else {
    navbar.style.padding = "1.5rem 0"
    navbar.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.04)"
  }

  lastScroll = currentScroll
})

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe sections for animation
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(30px)"
  section.style.transition = "opacity 0.8s ease, transform 0.8s ease"
  observer.observe(section)
})

// Portfolio item hover effect with enhanced interaction
document.querySelectorAll(".portfolio-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.zIndex = "10"
  })

  item.addEventListener("mouseleave", function () {
    this.style.zIndex = "1"
  })
})

const portfolioItems = document.querySelectorAll(".portfolio-item")
portfolioItems.forEach((item) => {
  item.addEventListener("click", function () {
    const nailName = this.getAttribute("data-name")
    const price = this.getAttribute("data-price")
    const message = `Olá! Gostaria de agendar: ${nailName} (R$ ${price})`
    const whatsappUrl = `https://wa.me/5542990892979?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  })
})

// Service card animation on scroll
const serviceCards = document.querySelectorAll(".service-card")
const serviceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 100)
      }
    })
  },
  { threshold: 0.2 },
)

serviceCards.forEach((card) => {
  card.style.opacity = "0"
  card.style.transform = "translateY(30px)"
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  serviceObserver.observe(card)
})

const serviceButtons = document.querySelectorAll(".service-btn")
serviceButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault()
    const card = this.closest(".service-card")
    const serviceName = card.getAttribute("data-service")
    const price = card.getAttribute("data-price")

    const message = `Olá! Gostaria de agendar: ${serviceName} (R$ ${price})`
    const whatsappUrl = `https://wa.me/5542990892979?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  })
})

// Stats counter animation
const stats = document.querySelectorAll(".stat-number")
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target
        const text = target.textContent
        const hasPlus = text.includes("+")
        const hasPercent = text.includes("%")
        const number = Number.parseInt(text.replace(/\D/g, ""))

        let current = 0
        const increment = number / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= number) {
            current = number
            clearInterval(timer)
          }
          target.textContent = Math.floor(current) + (hasPlus ? "+" : "") + (hasPercent ? "%" : "")
        }, 30)

        statsObserver.unobserve(target)
      }
    })
  },
  { threshold: 0.5 },
)

stats.forEach((stat) => {
  statsObserver.observe(stat)
})

// Parallax effect for hero background with smoother animation
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroBackground = document.querySelector(".hero-background")
  if (heroBackground && scrolled < window.innerHeight) {
    heroBackground.style.transform = `translateY(${scrolled * 0.4}px)`
  }
})

// Smooth reveal animations for elements
const revealElements = document.querySelectorAll(
  ".service-card, .portfolio-item, .payment-card, .about-content, .contact-methods",
)
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
)

revealElements.forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  revealObserver.observe(el)
})

document.querySelectorAll(".btn, .service-btn, .portfolio-item, .contact-link, .payment-card").forEach((el) => {
  el.style.cursor = "pointer"
})

console.log("[v0] Pamela Feltrin Nail Designer - Professional elegant website loaded")
