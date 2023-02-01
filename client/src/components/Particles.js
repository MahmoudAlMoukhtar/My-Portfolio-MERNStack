import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim";
import {loadFull} from "tsparticles";
import {useCallback, useMemo} from "react";
const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      fullScreen: {
        enable: true,
        zIndex: 1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          mdoes: {
            repulse: {
              distance: 2,
            },
            push: {
              quantity: 10,
            },
          },
        },
      },
      particles: {
        links: {
          color: "#ffffff",
          distance: 100,
          enable: true,
          opacity: 0.3,
          width: 0.3,
        },
        move: {
          enable: true,
          speed: {min: 1, max: 3},
        },
        opacity: {
          value: {min: 0.4, max: 0.8},
        },
        size: {
          value: {min: 1, max: 2},
        },
        quantity: {
          value: 20,
        },
      },
    };
  });

  const particlesInit = useCallback(engine => {
    loadSlim(engine);
  });
  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;
