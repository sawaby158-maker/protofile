import "./home.css";
import VID from "./eye.mp4";
import { useEffect, useState, useRef } from "react";

const words = ["Front end developer", "Ahmed Sawaby"];

const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [show, setShow] = useState(false);

  const sectionRef = useRef();

  // scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // typing effect
  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const speed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 800);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <section
      ref={sectionRef}
      className={`hero ${show ? "show" : ""}`}
      id="home"
    >
      <div className="hero-text">
        <h1>Welcome to my portfolio</h1>

        <h2>
          {text}
          <span className="cursor">|</span>
        </h2>

        <p className="description">
          I am Ahmed, a software engineering student. I can build websites from scratch and modify them with high efficiency using modern tools and AI technologies. I design modern user interfaces with advanced styling and colors, and I build fully responsive websites that adapt to all screen sizes and environments.
        </p>
      </div>

      <div className="hero-media">
        <div className="video-box">
          <video src={VID} autoPlay loop muted playsInline />
        </div>
      </div>
    </section>
  );
};

export default Home;