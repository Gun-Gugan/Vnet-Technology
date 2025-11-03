import { useEffect, useState } from 'react';
import Blog from './Blog';
import Testimonial from './Testimonial';
import Team from './Team';

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes scaleFade {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes shine {
          0% {
            left: -150%;
          }
          100% {
            left: 150%;
          }
        }

        .scale-fade {
          animation: scaleFade 3s ease-in-out infinite;
        }

        .shine-text {
          position: relative;
          overflow: hidden;
          display: inline-block;
          color: white;
        }

        .shine-text::before {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          height: 100%;
          width: 50%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
          animation: shine 3s ease-in-out infinite;
          pointer-events: none;
        }

        .tilt-container {
          perspective: 1000px;
          width: 100%;
        }

        .content-wrapper {
          transform-style: preserve-3d;
          transition: transform 0.4s ease;
          will-change: transform;
          width: 100%; /* Full width */
        }

        .tilt-container:hover .content-wrapper {
          transform: rotateX(-9deg) rotateY(8deg);
        }
      `}</style>

      <div className="tilt-container bg-gradient-to-r from-gray-400  to-gray-800 text-white overflow-hidden min-h-[580px] flex items-center justify-center">
        <div
          className={`
            content-wrapper
            relative z-10 flex flex-col items-center justify-center px-4 text-center
            scale-fade
          `}
        >
          {/* Subheading */}
          <div className="mb-4">
            <p className="text-lg font-medium">Welcome</p>
          </div>

          {/* Main Title with shine */}
          <div className="mb-2 ">
            <h2 className="text-5xl font-bold tracking-tight shine-text">
              V-NET
            </h2>
          </div>

          {/* Tagline / Description */}
          <p className="text-lg md:text-xl mt-4">
            Leading Technologies in Innovation,<br />
            Connectivity, and Digital Transformation
          </p>
        </div>
      </div>
      <Blog />
      <Testimonial />
      <Team />
    </>
  );

};

export default Home;
