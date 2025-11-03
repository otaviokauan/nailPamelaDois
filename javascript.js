const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active")
  navMenu.classList.toggle("active")
})

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

const portfolioItems = document.querySelectorAll(".portfolio-item")
portfolioItems.forEach((item) => {
  item.addEventListener("click", () => {
    const whatsappUrl = "https://wa.me/554299892979?text=Olá%2C%20gostaria%20de%20fazer%20um%20agendamento!"
    window.open(whatsappUrl, "_blank")
  })
})

let selectedService = ""

const serviceButtons = document.querySelectorAll(".service-btn")
serviceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const serviceCard = button.closest(".service-card")
    const serviceTitle = serviceCard.querySelector(".service-title").textContent
    const message = `Olá, gostaria de fazer um agendamento para ${serviceTitle.toLowerCase()}!`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/554299892979?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  })
})

const contactLinks = document.querySelectorAll(".contact-link")
contactLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.classList.contains("whatsapp-link")) {
      if (selectedService) {
        e.preventDefault()
        const message = `Olá, gostaria de fazer um agendamento para ${selectedService.toLowerCase()}!`
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/554299892979?text=${encodedMessage}`
        window.open(whatsappUrl, "_blank")
        selectedService = ""
      }
    }
  })
})

const serviceCards = document.querySelectorAll(".service-card")
serviceCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (!e.target.classList.contains("service-btn")) {
      const serviceTitle = card.querySelector(".service-title").textContent
      selectedService = serviceTitle
      document.querySelector("#contatos").scrollIntoView({ behavior: "smooth" })
    }
  })
})
