import "./footer.css";
import { useEffect, useRef, useState } from "react";
import Facebook from "./facebook.png"
import Instgram from "./instgram.png"
import Tiktok from "./tiktok.png"
import Watsap from "./watsap.png"
import Gmail from "./gmail.png"
import Git from "./git.png"

const Footer = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <footer ref={ref} className={`footer ${show ? "show" : ""}`}
    id="about">
      <h2>Contact Me</h2>

      <div className="links">

        <a href="https://www.facebook.com/share/14czh4FU4wP/" target="_blank">
          <img src={Facebook} className="icon"/> Facebook
        </a>

        <a href="https://www.instagram.com/ahmed_sawaby67" target="_blank">
          <img src={Instgram} className="icon" /> Instagram
        </a>

        <a href="https://www.tiktok.com/@ahmedsawaby3" target="_blank">
         <img src={Tiktok} className="icon" /> TikTok
        </a>

        <a href="https://wa.me/201021330438" target="_blank">
          <img src={Watsap} className="icon" /> WhatsApp
        </a>

        <a href="mailto:asawaby158@gmail.com">
          <img src={Gmail} className="icon" /> Gmail
        </a>

        <a href="https://github.com/Sawaby158-maker" target="_blank">
         <img src={Git} className="icon" />  GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/ahmed-sawaby-9355753a1"
          target="_blank"
        >
          🔗 LinkedIn
        </a>

      </div>

      <p className="copy">
        © {new Date().getFullYear()} Sawaby. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;