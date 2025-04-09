document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const currentSlideElement = document.getElementById("current-slide");
  const totalSlidesElement = document.getElementById("total-slides");

  let currentSlide = 0;
  totalSlidesElement.textContent = slides.length;
  currentSlideElement.textContent = currentSlide + 1;

  // Função para mostrar um slide específico
  function showSlide(index) {
    // Oculta o slide atual
    slides[currentSlide].classList.remove("active");

    // Atualiza o índice do slide atual
    currentSlide = index;

    // Se chegamos ao final, voltamos para o primeiro slide
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    // Se voltamos além do primeiro, vamos para o último
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    // Mostra o novo slide atual
    slides[currentSlide].classList.add("active");
    currentSlideElement.textContent = currentSlide + 1;
  }

  // Event listeners para botões de navegação
  prevButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  // Controle de teclado para navegação
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
      showSlide(currentSlide + 1);
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      showSlide(currentSlide - 1);
    } else if (e.key === "Home") {
      showSlide(0);
    } else if (e.key === "End") {
      showSlide(slides.length - 1);
    }
  });

  // Inicializa o primeiro slide
  showSlide(0);

  // Adiciona controle de swipe para dispositivos móveis
  let touchstartX = 0;
  let touchendX = 0;

  const gestureZone = document.querySelector("body");

  gestureZone.addEventListener(
    "touchstart",
    function (event) {
      touchstartX = event.changedTouches[0].screenX;
    },
    false
  );

  gestureZone.addEventListener(
    "touchend",
    function (event) {
      touchendX = event.changedTouches[0].screenX;
      handleGesture();
    },
    false
  );

  function handleGesture() {
    if (touchendX < touchstartX - 50) {
      showSlide(currentSlide + 1);
    }

    if (touchendX > touchstartX + 50) {
      showSlide(currentSlide - 1);
    }
  }

  // NOVO CÓDIGO: Alternância entre idiomas para o logo
  const toggleButtons = document.querySelectorAll(".toggle-button");
  if (toggleButtons.length) {
    toggleButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove classe ativa de todos os botões
        toggleButtons.forEach((btn) => btn.classList.remove("active"));

        // Adiciona classe ativa ao botão clicado
        this.classList.add("active");

        // Obtém o idioma do atributo data
        const lang = this.getAttribute("data-lang");

        // Alterna a visibilidade do conteúdo com base no idioma
        document.querySelectorAll(".lang-content").forEach((content) => {
          content.classList.remove("active");
        });

        document.querySelector(`.${lang}-version`).classList.add("active");
      });
    });
  }
});
