import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import apple from "/fruits/appleIcon.png";
import StrawBerryImg from "/fruits/straberry.png";
import graphsImg from "/fruits/Graphs.png";
import bleechImg from "/fruits/bleechIcon.png";
import bananaImg from "/fruits/bananaIcon.png";
import watermelonImg from "/fruits/waterMelonIcon.png";
import background from "/background/bg2.jpg";
import Loader from "../Loader/Loader";
import title from "/user/title.png";
import spinWheel from "/spin/wheel.png";
import Load from "./Load";
import load from "../../assets/progressbar.json";
import Lottie from "lottie-react";
import "./Float.css";
function Float() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <div className="">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: true,
            background: {
              image: `url(${background})`,
              // "position":"right bottom",
              size: "100% 100%",
              repeat: "no-repeat",
            },
            particles: {
              number: {
                value: 25,
                density: {
                  enable: true,
                  value_area: 600,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "image", // Change the shape to "image"
                images: [
                  // Use an array to store multiple images
                  {
                    src: `${apple}`, // Set the image URL for the first image
                    width: 300, // Set the width of the first image
                    height: 300, // Set the height of the first image
                  },
                  {
                    src: `${StrawBerryImg}`, // Set the image URL for the second image
                    width: 300, // Set the width of the second image
                    height: 300, // Set the height of the second image
                  },
                  {
                    src: `${graphsImg}`, // Set the image URL for the second image
                    width: 300, // Set the width of the second image
                    height: 300, // Set the height of the second image
                  },
                  {
                    src: `${bleechImg}`, // Set the image URL for the second image
                    width: 300, // Set the width of the second image
                    height: 300, // Set the height of the second image
                  },
                  {
                    src: `${bananaImg}`, // Set the image URL for the second image
                    width: 300, // Set the width of the second image
                    height: 300, // Set the height of the second image
                  },
                  {
                    src: `${watermelonImg}`, // Set the image URL for the second image
                    width: 300, // Set the width of the second image
                    height: 300, // Set the height of the second image
                  },

                  // Add more image objects as needed for additional uploads
                ],
              },

              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 1,
                  sync: false,
                },
              },
              size: {
                value: 40,
                random: true,
                anim: {
                  enable: false,
                  speed: 2,
                  size_min: 0.5,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 100,
                color: "#ffffff",
                opacity: 1,
                width: 0,
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: "top",
                straight: true,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse",
                },
                onclick: {
                  enable: false,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 800,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 790,
                  size: 79,
                  duration: 2,
                  opacity: 1,
                  speed: 3,
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
      <div className="absolute fru">
        <img
          src={title}
          alt="title"
          className="h-28 w-96 sm:w-56 sm:h-16 md:w-60 md:h-16 "
        />
        <img
          src={spinWheel}
          alt="title"
          className="w-96 h-96 sm:w-48 sm:h-48 md:w-60 md:h-60 spinintro"
        />
        {/* <Lottie animationData={load} loop={true} className="w-96 sm:w-60 sm:-mt-3 md:w-64 md:-mt-2 "/> */}
        <div className="w-3/5 mt-20 ml-10 progress sm:mt-4 md:mt-6 md:ml-6">
          <div className="h-8 progress-value sm:h-4 md:h-5 " ></div>
        </div>
      </div>
    </>
  );
}

export default Float;
