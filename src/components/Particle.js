import React, { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = async (engine) => {
    // this loads the bundle with all shape, updater, and interaction plugins
    await loadFull(engine);
  };

  const options = useMemo(() => ({
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
      line_linked: {
        enable: false,
        opacity: 0.03,
      },
      move: {
        direction: "right",
        speed: 0.05,
      },
      size: {
        value: 1,
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05,
        },
      },
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          particles_nb: 1,
        },
      },
    },
    retina_detect: true,
  }), []);

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles id="tsparticles" options={options} />
    </ParticlesProvider>
  );
}

export default Particle;
