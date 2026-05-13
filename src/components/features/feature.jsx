import "./feature.css";
import { useEffect, useRef, useState } from "react";

const skillsData = [
  {
    name: "HTML",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    name: "CSS",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    name: "JavaScript",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "Bootstrap 5",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
  },
  {
    name: "React",
    icon: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
  },
  {
    name: "Web Animation",
    icon: "https://cdn-icons-png.flaticon.com/512/2721/2721262.png",
  },
  {
    name: "Responsive Design",
    icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
  },
  {
    name: "API",
    icon: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",
  },
  {
    name: "REST API",
    icon: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
  },
];

const Skills = () => {
  const [show, setShow] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="skill"
      ref={sectionRef}
      className={`skills-section ${show ? "show-skills" : ""}`}
    >
      <h2>My Features</h2>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
