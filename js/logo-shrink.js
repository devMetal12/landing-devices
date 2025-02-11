
ScrollTrigger.create({
animation: gsap.from(".logo", {
    y: "50vh",
    scale: 5,
    yPercent: -50,
}),
scrub: true,
trigger: ".content",
start: "top bottom",
endTrigger: ".content",
end: "top center",
});

/* Scroll REveal */
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 500,
    delay: 0
})

ScrollReveal().reveal('.text-box');
ScrollReveal().reveal('.demo-phone');

/* Carousel */
document.addEventListener("DOMContentLoaded", () => {
  const benefits = [
    {
      title: "Integración Completa de Sensores",
      description:
        "Nuestra plataforma IoT se adapta a cualquier tipo de sensor, permitiendo un monitoreo preciso y eficiente en tiempo real.",
      video: "./assets/sensor-integration.mp4",
    },
    {
      title: "Reutilización Inteligente",
      description:
        "Transformamos sensores existentes en dispositivos IoT avanzados, extendiendo su vida útil y reduciendo el impacto ambiental.",
      video: "./assets/sensor-reuse.mp4",
    },
    {
      title: "Plataforma Avanzada LoRaWAN",
      description:
        "Ofrecemos una conexión segura y escalable con LoRaWAN, garantizando un control eficiente mediante jerarquías y permisos avanzados.",
      video: "./assets/lorawan.mp4",
    },
    {
      title: "Decisiones en Tiempo Real",
      description:
        "Analiza y actúa sobre los datos al instante para mejorar la eficiencia operativa y optimizar los procesos empresariales.",
      video: "./assets/realtime-decisions.mp4",
    },
    {
      title: "Procesos Sostenibles",
      description:
        "Optimiza el uso de recursos, reduce costos operativos y fomenta prácticas ecológicas para un futuro más sostenible.",
      video: "./assets/sustainable-processes.mp4",
    },
  ];

  let currentIndex = 0;

  const titleElement = document.getElementById("module-title");
  const descriptionElement = document.getElementById("module-description");
  const videoElement = document.getElementById("module-video");
  const videoSource = document.getElementById("video-source");

  document.getElementById("next-btn").addEventListener("click", () => changeSlide(1));
  document.getElementById("prev-btn").addEventListener("click", () => changeSlide(-1));

  function changeSlide(direction) {
    currentIndex = (currentIndex + direction + benefits.length) % benefits.length;

    gsap.to([titleElement, descriptionElement], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        titleElement.textContent = benefits[currentIndex].title;
        descriptionElement.textContent = benefits[currentIndex].description;

        gsap.to([titleElement, descriptionElement], {
          opacity: 1,
          y: 0,
          duration: 0.3,
        });
      }
    });

    // Cambio de video con animación suave
    gsap.to(videoElement, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        videoSource.src = benefits[currentIndex].video;
        videoElement.load(); // Recarga el video para aplicar el nuevo src

        gsap.to(videoElement, {
          opacity: 1,
          duration: 0.3,
        });
      }
    });
  }
});


/* contact */
document.getElementById("info-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Capturar los datos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
  
    // Simulación de envío
    console.log("Formulario enviado:", { name, email, phone, message });
  
    // Animación de confirmación
    gsap.to("#info-form", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      onComplete: () => {
        document.querySelector(".text-box").innerHTML = `
          <h2>¡Gracias por tu interés!</h2>
          <p>Hemos recibido tu solicitud y te contactaremos pronto.</p>
        `;
  
        gsap.to(".text-box", { opacity: 1, y: 0, duration: 0.5 });
      }
    });
  });
  