document.addEventListener("DOMContentLoaded", () => {
    const benefits = [
      {
        title: "Integración Completa de Sensores",
        description:
          "Nuestra plataforma IoT se adapta a cualquier tipo de sensor, permitiendo un monitoreo preciso y eficiente en tiempo real.",
        image: "./assets/1.png",
      },
      {
        title: "Reutilización Inteligente",
        description:
          "Transformamos sensores existentes en dispositivos IoT avanzados, extendiendo su vida útil y reduciendo el impacto ambiental.",
        image: "./assets/reu.png",
      },
      {
        title: "Plataforma Avanzada LoRaWAN",
        description:
          "Ofrecemos una conexión segura y escalable con LoRaWAN, garantizando un control eficiente mediante jerarquías y permisos avanzados.",
        image: "./assets/lor.png",
      },
      {
        title: "Decisiones en Tiempo Real",
        description:
          "Analiza y actúa sobre los datos al instante para mejorar la eficiencia operativa y optimizar los procesos empresariales.",
        image: "./assets/real.png",
      },
      {
        title: "Procesos Sostenibles",
        description:
          "Optimiza el uso de recursos, reduce costos operativos y fomenta prácticas ecológicas para un futuro más sostenible.",
        image: "./assets/geo.png",
      },
    ];
  
    let currentIndex = 0;
  
    const titleElement = document.getElementById("module-title");
    const descriptionElement = document.getElementById("module-description");
    const imageElement = document.getElementById("module-image");
  
    document.getElementById("next-btn").addEventListener("click", () => changeSlide(1));
    document.getElementById("prev-btn").addEventListener("click", () => changeSlide(-1));
  
    function changeSlide(direction) {
      currentIndex = (currentIndex + direction + benefits.length) % benefits.length;
  
      gsap.to([titleElement, descriptionElement, imageElement], {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {
          titleElement.textContent = benefits[currentIndex].title;
          descriptionElement.textContent = benefits[currentIndex].description;
  
          // ✅ Cambio de imagen
          imageElement.src = benefits[currentIndex].image;
  
          gsap.to([titleElement, descriptionElement, imageElement], {
            opacity: 1,
            y: 0,
            duration: 0.3,
          });
        }
      });
    }

    // Cambio automático de imágenes cada 5 segundos
    setInterval(() => {
      changeSlide(1);
    }, 5000);
  });
