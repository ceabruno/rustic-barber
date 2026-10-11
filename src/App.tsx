import { useState, useEffect } from 'react';
import './App.css';
import headerBg from './assets/Header-rustic.jpg';
import heroVideo from './assets/video-header.mp4';

interface ServiceItem {
  name: string;
  price: string;
  description: string;
}

interface ServiceCategory {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: 'Cabello',
    subtitle: 'Cortes clásicos, técnicas de tijera y diseño personalizado.',
    services: [
      {
        name: 'Corte Tradicional',
        price: '$19.000',
        description: 'Tijera y máquina de precisión adaptado a la morfología de tu rostro, con peinado final.'
      },
      {
        name: 'Corte Tradicional solo Tijeras',
        price: '$21.000',
        description: 'Técnica 100% tijera para texturas naturales, caída suave y acabado artesanal.'
      },
      {
        name: 'Corte Rustic',
        price: '$29.000',
        description: 'Corte de autor con asesoría personalizada, lavado con masaje capilar y peinado premium.'
      },
      {
        name: 'Corte Rustic solo Tijeras',
        price: '$31.000',
        description: 'Corte artesanal a tijera con tratamiento capilar, lavado relajante y productos de alta gama.'
      }
    ]
  },
  {
    title: 'Barba',
    subtitle: 'Cuidado facial y perfilado a navaja con toallas aromatizadas.',
    services: [
      {
        name: 'Barba Tradicional',
        price: '$16.000',
        description: 'Perfilado a máquina y navaja, recorte de volumen y loción refrescante para la piel.'
      },
      {
        name: 'Barba Rustic',
        price: '$20.000',
        description: 'Ritual clásico: toallas calientes, aceites esenciales, afeitado a navaja y bálsamo hidratante.'
      }
    ]
  },
  {
    title: 'Packs & Promociones',
    subtitle: 'Combinaciones pensadas para renovar tu imagen por completo.',
    services: [
      {
        name: 'Corte + Barba Tradicional',
        price: '$32.000',
        description: 'Corte clásico con máquina y tijera más perfilado y mantenimiento de barba.'
      },
      {
        name: 'Corte + Barba Rustic',
        price: '$39.000',
        description: 'Experiencia completa: corte de autor, ritual de toallas calientes y perfilado de barba al detalle.'
      },
      {
        name: 'Padre e Hijo Tradicional',
        price: '$32.000',
        description: 'Dos cortes tradicionales diseñados para compartir la tradición de la barbería juntos.'
      },
      {
        name: 'Dúo Rustic',
        price: '$39.000',
        description: 'Atención simultánea para dos personas con acabado premium y peinado profesional.'
      }
    ]
  }
];

export default function App() {
  // Estado para controlar qué fondo se muestra (0 = imagen, 1 = video)
  const [currentSlide, setCurrentSlide] = useState(0);

  // Temporizador para cambiar automáticamente el fondo cada 7 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 7000); 
    
    // Limpia el temporizador si el componente se desmonta
    return () => clearInterval(timer); 
  }, []);

  return (
    <div className="landing-container">
      {/* Barra de Navegación */}
      <header className="header">
        <div className="logo">
          RUSTIC <span>BARBER</span>
        </div>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#horarios">Horarios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a href="#contacto" className="btn btn-primary">Reservar Hora</a>
      </header>

      {/* Hero Section con Carrusel de Fondo */}
      <section id="inicio" className="hero">
        
        {/* Contenedor del Carrusel (se mueve de izquierda a derecha) */}
        <div 
          className="carousel-background"
          style={{ transform: `translateX(-${currentSlide * 50}%)` }}
        >
          {/* Diapositiva 1: Imagen Estática */}
          <div className="carousel-slide">
            <img src={headerBg} alt="Fondo Rustic Barbería" className="slide-media" />
          </div>
          
          {/* Diapositiva 2: Video */}
          <div className="carousel-slide">
            <video autoPlay loop muted playsInline className="slide-media">
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Overlay fijo con el texto (no se mueve con el carrusel) */}
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-subtitle">Barbería Tradicional & Estilo Moderno</p>
            <h1 className="hero-title">Una experiencia para ti.</h1>
            <p className="hero-description">
              Agenda una cita y vive la comodidad y profesionalismo de nuestro equipo de barberos expertos.
            </p>
            <div className="hero-actions">
              <a href="#contacto" className="btn btn-primary">Agendar Cita</a>
              <a href="#servicios" className="btn btn-secondary">Ver Servicios</a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Servicios Agrupados */}
      <section id="servicios" className="section">
        <div className="section-header">
          <h2 className="section-title">Nuestra Carta de Servicios</h2>
          <p className="section-subtitle">Técnicas tradicionales con las mejores herramientas del mercado.</p>
        </div>

        <div className="services-categories">
          {serviceCategories.map((category, catIndex) => (
            <div key={catIndex} className="service-category-block">
              <div className="category-header">
                <h3 className="category-title">{category.title}</h3>
                <p className="category-subtitle">{category.subtitle}</p>
                <div className="category-divider"></div>
              </div>

              <div className="services-grid">
                {category.services.map((service, index) => (
                  <div key={index} className="service-card">
                    <div className="service-card-top">
                      <h4 className="service-name">{service.name}</h4>
                      <span className="service-price">{service.price}</span>
                    </div>
                    <p className="service-desc">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Información y Horarios */}
      <section id="horarios" className="info-section">
        <h2 className="section-title">Encuéntranos</h2>
        <p className="section-subtitle">Te esperamos en nuestro salón principal</p>
        <div className="info-grid">
          <div className="info-item">
            <h4>Dirección</h4>
            <p>Av. Principal 1234, Local 5</p>
            <p>Santiago, Chile</p>
          </div>
          <div className="info-item">
            <h4>Horario de Atención</h4>
            <p>Lunes a Viernes: 10:00 - 20:00 hrs</p>
            <p>Sábados: 10:00 - 18:00 hrs</p>
          </div>
          <div className="info-item" id="contacto">
            <h4>Contacto & Reservas</h4>
            <p>WhatsApp: +56 9 1234 5678</p>
            <p>contacto@rusticbarber.cl</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Rustic Barber. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}