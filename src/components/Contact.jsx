import React from "react";
import { openingHours, socials } from "../../constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", {
      type: "words",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });
    tl.from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
    })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: -50,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: 50,
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  }, []);
  return (
    <footer id="contact">
      <img
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
      />
      <img
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-right-leaf"
      />
      <div className="content">
        <h2>Where To Find Us</h2>
        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Red Vlvd, #299, New York</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>+1 234 567 890</p>
          <p>hello@twistandtonic.com</p>
        </div>
        <div>
          <h3>Opening Everyday</h3>
          {openingHours.map(({ day, time }, index) => (
            <p key={index}>
              {day}: {time}
            </p>
          ))}
        </div>
        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map(({ name, icon, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={name}
              >
                <img src={icon} alt={`social-icon-${name}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
