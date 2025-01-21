import Particles from "react-particles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { loadEmojiShape } from "@tsparticles/shape-emoji";



const Confetti = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        (async () => {
          await loadEmojiShape(tsParticles);
        })();

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    zIndex: 1
                },
                emitters: [
                    {
                        position: {
                            x: 0,
                            y: 30
                        },
                        rate: {
                            quantity: 5,
                            delay: 0.15
                        },
                        particles: {
                            move: {
                                direction: "top-right",
                                outModes: {
                                    top: "none",
                                    left: "none",
                                    default: "destroy"
                                }
                            }
                        }
                    },
                    {
                        position: {
                            x: 100,
                            y: 30
                        },
                        rate: {
                            quantity: 5,
                            delay: 0.15
                        },
                        particles: {
                            move: {
                                direction: "top-left",
                                outModes: {
                                    top: "none",
                                    right: "none",
                                    default: "destroy"
                                }
                            }
                        }
                    }
                ],
                particles: {
                    color: {
                        value: [
                            "#ffffff",
                            "#FF0000"
                        ]
                    },
                    move: {
                        decay: 0.05,
                        direction: "top",
                        enable: true,
                        gravity: {
                            "enable": true
                        },
                        outModes: {
                            top: "none",
                            default: "destroy"
                        },
                        speed: {
                            min: 10,
                            max: 50
                        }
                    },
                    number: {
                        value: 0
                    },
                    opacity: {
                        value: 1
                    },
                    rotate: {
                        value: {
                            min: 0,
                            max: 360
                        },
                        direction: "random",
                        animation: {
                            enable: true,
                            speed: 30
                        }
                    },
                    tilt: {
                        direction: "random",
                        enable: true,
                        value: {
                            min: 0,
                            max: 360
                        },
                        animation: {
                            enable: true,
                            speed: 30
                        }
                    },
                    size: {
                        value: {
                            min: 0,
                            max: 7
                        },
                        animation: {
                            enable: true,
                            startValue: "min",
                            count: 1,
                            speed: 16,
                            sync: true
                        }
                    },
                    roll: {
                        darken: {
                            enable: true,
                            value: 25
                        },
                        enable: true,
                        speed: {
                            min: 5,
                            max: 15
                        }
                    },
                    wobble: {
                        distance: 30,
                        enable: true,
                        speed: {
                            min: -7,
                            max: 7
                        }
                    },
                    shape: {
                        character: [
                            {
                              fill: true,
                              font: "Verdana",
                              value: ["💩", "🤡", "🍀", "🍙"],
                              style: "",
                              weight: 400
                            }
                          ],
                          image: {
                            height: 100,
                            replace_color: true,
                            src: "images/github.svg",
                            width: 100
                          },
                          polygon: { nb_sides: 5 },
                          stroke: { color: "random", width: 1 },
                          type: "char"
                        },
                        size: {
                          anim: { enable: true, minimumValue: 8, speed: 20, sync: false },
                          random: { minimumValue: 8, enable: true },
                          value: 32
                        }
                    }
                }
            }
        />
    );
}

export default Confetti;
