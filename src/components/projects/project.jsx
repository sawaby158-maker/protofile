// MyProjects.jsx

import "./project.css";
import { useEffect, useState, useRef } from "react";

const projectsData = [
  {
    title: "Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    title: "E-Commerce App",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c",
  },
  {
    title: "Weather App",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "Dashboard UI",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    title: "Chat Application",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
];

const MyProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [showSection, setShowSection] = useState(false);

  const sectionRef = useRef();

  // RESPONSIVE CARDS
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // AUTO SLIDE
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  // SCROLL ANIMATION
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSection(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + cardsPerView >= projectsData.length
        ? 0
        : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? projectsData.length - cardsPerView
        : prev - 1
    );
  };

  const visibleProjects = [];

  for (let i = 0; i < cardsPerView; i++) {
    visibleProjects.push(
      projectsData[(currentIndex + i) % projectsData.length]
    );
  }

  return (
    <section
    id="project"
      ref={sectionRef}
      className={`projects-section ${
        showSection ? "show-projects" : ""
      }`}
    >
      <h2 className="projects-title" style={{color:"#00d4ff"}}>My Projects</h2>

      <div className="carousel-container">
        <button className="arrow left" onClick={prevSlide}>
          ❮
        </button>

        <div className="projects-wrapper">
          {visibleProjects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img src={project.image} alt={project.title} />

              <div className="project-overlay">
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default MyProjects;