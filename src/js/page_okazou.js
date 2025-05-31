import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { OldCard, ConceptCard, Speech, Speech2 } from "./Generators";

import { speeches } from "./speeches";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// -------------------------------------------------------------------------------------
// Selectors
// -------------------------------------------------------------------------------------
const cardsContainer = document.querySelector("#cards-container");

// -------------------------------------------------------------------------------------
// Variables
// -------------------------------------------------------------------------------------
const colorMapping = {
  0: "black",
  1: "red",
  2: "orange",
  3: "yellow",
  4: "green",
  5: "turquoise",
  6: "blue",
  7: "pink",
  8: "purple",
  9: "white",
};

const transCenterX = { xPercent: -50 };
const transCenterY = { yPercent: -50 };
const transCenterXY = { xPercent: -50, yPercent: -50 };

// -------------------------------------------------------------------------------------
// Helpers
// -------------------------------------------------------------------------------------
const generateRandomPositionOnCircle = (radius) => {
  const angle = Math.random() * 2 * Math.PI; // Angle aléatoire entre 0 et 2π (cercle complet)
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  return { x, y };
};

const generateRandomPositionOnScreen = () => {
  const x = Math.random() * 110 - 10;
  const y = Math.random() * 110 - 10;
  return { x, y };
};

const generateRandomAngle = (nbRotation = 1) => {
  const angle = Math.random() * 360 * nbRotation;
  return angle;
};

const generateRandomCardFigure = (blacklist = []) => {
  let figure;
  do {
    figure = Math.floor(Math.random() * 17);
  } while (blacklist.includes(figure));
  return figure;
};

const generateRandomCardColor = () => {
  let color;
  do {
    color = Math.floor(Math.random() * 10);
  } while (blacklist.includes(color));
  return color;
};

const onEventsFlipCard = (selector, prefix, reverseIndex, completeIndex) => {
  return {
    onReverseComplete: () => {
      selector.style.backgroundImage = `url('/imgs/old-cards/old-${prefix}-${reverseIndex}.jpg')`;
    },
    onComplete: () => {
      selector.style.backgroundImage = `url('/imgs/old-cards/old-${prefix}-${completeIndex}.jpg')`;
    },
  };
};

const cardClassesFromXY = (x, y) => {
  let classes = [];

  if (x === 0)
    classes.push(
      `card-${colorMapping[y]}-plus`,
      `card-0`,
      `card-${colorMapping[y]}-0`
    );
  else if (x === 11) classes.push(`card-${colorMapping[y]}-main`, `card-jack`);
  else if (x === 12) classes.push(`card-${colorMapping[y]}-main`, `card-queen`);
  else if (x === 13) classes.push(`card-${colorMapping[y]}-main`, `card-king`);
  else if (x === 14)
    classes.push(
      `card-${colorMapping[y]}-plus`,
      `card-j`,
      `card-${colorMapping[y]}-j`
    );
  else if (x === 15)
    classes.push(
      `card-${colorMapping[y]}-plus`,
      `card-e`,
      `card-${colorMapping[y]}-e`
    );
  else classes.push(`card-${colorMapping[y]}-main`);

  if (x >= 1 && x <= 10) classes.push(`card-remove-for-uno`);

  return classes;
};

const animSpeech = (speechClass) => {
  const duration = document.querySelector(speechClass).dataset.duration || 2;

  const tl = gsap.timeline();
  tl.to(speechClass, { opacity: 1 }).to(
    speechClass,
    { opacity: 0 },
    `>+=${duration}`
  );

  return tl;
};

export function page() {
  // -------------------------------------------------------------------------------------
  // Create Old Cards
  // -------------------------------------------------------------------------------------
  const createAllOldCards = () => {
    const oldCardsArray = [
      new OldCard("/imgs/old-cards/old-2.jpg", ["go-away", "old-2"]),
      new OldCard("/imgs/old-cards/old-3.jpg", ["go-away", "old-3"]),
      new OldCard("/imgs/old-cards/old-6.jpg", ["go-away", "old-6"]),
      new OldCard("/imgs/old-cards/old-8.jpg", ["go-away", "old-8"]),
      new OldCard("/imgs/old-cards/old-10.jpg", ["go-away", "old-10"]),
      new OldCard("/imgs/old-cards/old-a.jpg", ["go-away", "old-a"]),
      new OldCard("/imgs/old-cards/old-r.jpg", ["go-away", "old-r"]),
      new OldCard("/imgs/old-cards/old-v.jpg", ["go-away", "old-v"]),

      new OldCard("/imgs/old-cards/old-v-0.jpg", ["stay", "stay-0"]),
      new OldCard("/imgs/old-cards/old-d-0.jpg", ["stay", "stay-1"]),
      new OldCard("/imgs/old-cards/old-r-0.jpg", ["stay", "stay-2"]),
      new OldCard("/imgs/old-cards/old-a-0.jpg", ["stay", "stay-3"]),
    ];

    oldCardsArray.forEach((card) => cardsContainer.appendChild(card.element));

    gsap.set(".old-2", { left: "2%", top: "7%", rotateZ: 30 });
    gsap.set(".old-3", { left: "5%", top: "7%", rotateZ: 45 });
    gsap.set(".old-6", { left: "99%", top: "45%", rotateZ: -125 });
    gsap.set(".old-8", { left: "22%", top: "8%", rotateZ: 36 });
    gsap.set(".old-10", { left: "45%", top: "9%", rotateZ: -56 });
    gsap.set(".old-a", { left: "54%", top: "10%", rotateZ: -15 });
    gsap.set(".old-r", { left: "94%", top: "12%", rotateZ: 30 });
    gsap.set(".old-v", { left: "80%", top: "9%", rotateZ: 75 });

    gsap.set(".stay-0", { left: "9%", top: "30%", rotateZ: -25 });
    gsap.set(".stay-1", { left: "32%", top: "12%", rotateZ: 20 });
    gsap.set(".stay-2", { left: "68%", top: "10%", rotateZ: -30 });
    gsap.set(".stay-3", { left: "94%", top: "30%", rotateZ: 20 });
  };

  // -------------------------------------------------------------------------------------
  // Buttons
  // -------------------------------------------------------------------------------------
  const majorSystemInterestedBtns = document.querySelector(
    ".major-system-interested-btns"
  );

  gsap.set(majorSystemInterestedBtns, {
    ...transCenterXY,
    left: "50%",
    top: "50%",
    opacity: 0,
  });
  gsap.set("#major-system", { top: "150%" });
  // -------------------------------------------------------------------------------------
  // Create Concept cards
  // -------------------------------------------------------------------------------------
  const createAllConceptCards = () => {
    const allCards = [];

    for (let y = 0; y <= 9; y++) {
      for (let x = 0; x <= 15; x++) {
        allCards.push(
          new ConceptCard(x, y, true, true, cardClassesFromXY(x, y))
        );
      }
    }

    allCards.forEach((card) => {
      cardsContainer.appendChild(card.element);

      const { x: posX, y: posY } = generateRandomPositionOnCircle(2000);
      gsap.set(card.element, {
        left: `calc(50% + ${posX}px )`,
        top: `calc(50% + ${posY}px)`,
        scale: 0.8,
        rotateZ: generateRandomAngle(5),
        rotateY: -360,
      });
    });

    // -----------------------------------------------------------------------------------
    // Special classes
    // -----------------------------------------------------------------------------------

    // For all kings not green
    const allKingsButGreen = [
      ...document.querySelectorAll(".card-king:not(.card-king-green)"),
    ];
    allKingsButGreen.forEach((card) => {
      if (!card.classList.contains("card-13-4"))
        card.classList.add("card-king-not-green");
    });

    // Filter cards for UNO
    const allJacks = [...document.querySelectorAll(".card-jack")];
    allJacks.forEach((card) => {
      if (card.dataset.y >= 2) card.classList.add("card-for-uno");
      else card.classList.add("card-remove-for-uno");
    });
    const allQueens = [...document.querySelectorAll(".card-queen")];
    allQueens.forEach((card) => {
      if (card.dataset.y >= 2) card.classList.add("card-for-uno");
      else card.classList.add("card-remove-for-uno");
    });
    const allKings = [...document.querySelectorAll(".card-king")];
    allKings.forEach((card) => {
      if (card.dataset.y >= 2) card.classList.add("card-for-uno");
      else card.classList.add("card-remove-for-uno");
    });
    const allElixirs = [...document.querySelectorAll(".card-e")];
    allElixirs.forEach((card) => {
      if (card.dataset.y >= 6) card.classList.add("card-for-uno");
      else card.classList.add("card-remove-for-uno");
    });
    const allJokers = [...document.querySelectorAll(".card-j")];
    allJokers.forEach((card) => {
      if (card.dataset.y >= 6) card.classList.add("card-for-uno");
      else card.classList.add("card-remove-for-uno");
    });
  };

  // -------------------------------------------------------------------------------------
  // Speeches
  // -------------------------------------------------------------------------------------
  const speech10 = new Speech(
    "Le premier jeu de 52 cartes tel que nous le connaissons aujourd'hui est apparu en Europe au cours du 15ème siècle"
  );
  const speech11 = new Speech(
    "Depuis, hormis des variations sur le design, le jeu n'a jamais évolué..."
  );
  const speech12 = new Speech("... jusqu'à aujourd'hui.");

  const speech20 = new Speech("Voici Oazao");
  const speech21 = new Speech("Qu'est ce que c'est ?");
  const speech22 = new Speech("160 cartes réparties en 10 couleurs");
  const speech23 = new Speech("De l'As au Roi");
  const speech24 = new Speech(
    "Auxquelles ont ajoute à chacune un Zero, un Joker et un Elixir pour plus de possibilités"
  );

  const speech30 = new Speech(
    "Pour tout jeu de 52 cartes classique, il suffit de prendre 4 couleurs au choix"
  );
  const speech31 = new Speech(
    "Retrouve d'autres jeux en assignant des effets spéciaux"
  );
  const speech32 = new Speech("Lis les 2 chiffres pour une suite de 00 à 160");
  const speech33 = new Speech("Utilise les mots comme thème");
  const speech34 = new Speech(
    "Ces mots ne sont pas choisi par hasard, ils sont basé sur le Système Majeur, qui est d'ailleurs à la base du projet"
  );

  const speech40 = new Speech(
    "Tu l'as compris, les possibilités sont infinies"
  );
  const speech41 = new Speech("Mais si tu ne veux pas réfléchir ...");
  const speech42 = new Speech("... ou inventer de règles");
  const speech43 = new Speech("Utilise l'application gratuite !");

  // const speechTest1 = new Speech2("Utilise l'application gratuite !")

  speeches.forEach((speech, index) => {
    new Speech2(speech, index);
  });

  // -------------------------------------------------------------------------------------
  // Timeline : Speeches
  // -------------------------------------------------------------------------------------

  gsap.set(speech10.container, {
    ...transCenterXY,
    left: "50%",
    top: "50%",
    opacity: 1,
  });
  gsap.set(speech11.container, {
    ...transCenterXY,
    left: "50%",
    top: "150%",
    opacity: 0,
  });
  gsap.set(speech12.container, {
    ...transCenterXY,
    left: "50%",
    top: "150%",
    opacity: 0,
  });

  gsap.set(speech20.container, {
    ...transCenterXY,
    left: "50%",
    top: "-50%",
    opacity: 0,
  });
  gsap.set(speech21.container, {
    ...transCenterXY,
    left: "50%",
    top: "150%",
    opacity: 0,
  });
  gsap.set(speech22.container, {
    ...transCenterXY,
    left: "50%",
    top: "-50%",
    opacity: 0,
  });
  gsap.set(speech23.container, {
    ...transCenterXY,
    left: "50%",
    top: "-50%",
    opacity: 0,
  });
  gsap.set(speech24.container, {
    ...transCenterXY,
    left: "50%",
    top: "150%",
    opacity: 0,
  });

  gsap.set(speech30.container, {
    ...transCenterXY,
    left: "50%",
    top: "-50%",
    opacity: 0,
  });
  gsap.set(speech31.container, {
    ...transCenterXY,
    left: "50%",
    top: "150%",
    opacity: 0,
  });
  gsap.set(speech32.container, {
    ...transCenterXY,
    left: "50%",
    top: "-50%",
    opacity: 0,
  });
  gsap.set(speech33.container, {
    ...transCenterXY,
    left: "50%",
    top: "-50%",
    opacity: 0,
  });
  gsap.set(speech34.container, {
    ...transCenterXY,
    left: "50%",
    top: "-50%",
    opacity: 0,
  });

  gsap.set(speech40.container, {
    ...transCenterXY,
    left: "50%",
    top: "150%",
    opacity: 0,
  });
  gsap.set(speech41.container, {
    ...transCenterXY,
    left: "50%",
    top: "150%",
    opacity: 0,
  });
  gsap.set(speech42.container, {
    ...transCenterXY,
    left: "50%",
    top: "150%",
    opacity: 0,
  });
  gsap.set(speech43.container, {
    ...transCenterXY,
    left: "50%",
    top: "150%",
    opacity: 0,
  });

  const timelineSpeeches = () => {
    return (
      gsap
        .timeline()
        // Intro
        .to(speech10.container, { opacity: 0, top: "10%" }, "speechStart")
        .to(speech11.container, { top: "50%", opacity: 1 }, "speechStart+=0.1")
        .to(speech11.container, { top: "-50%", opacity: 0 }, ">+0.3")
        .to(speech12.container, { top: "50%", opacity: 1 }, "speechStart+=0.6")
        .to(speech12.container, { top: "-50%", opacity: 0 }, ">+0.2")

        // Concept
        .to(speech20.container, { top: "10%", opacity: 1 }, "speechStart+=1.3")
        .to(speech20.container, { top: "-50%", opacity: 0 }, ">+0.5")
        .to(speech21.container, { top: "90%", opacity: 1 }, "speechStart+=1.6")
        .to(speech21.container, { top: "150%", opacity: 0 }, ">+0.3")
        .to(speech22.container, { top: "10%", opacity: 1 }, "speechStart+=2.2")
        .to(speech22.container, { top: "-50%", opacity: 0 }, ">+0.4")
        .to(speech23.container, { top: "10%", opacity: 1 }, "speechStart+=3.1")
        .to(speech23.container, { top: "-50%", opacity: 0 }, ">+0.9")
        .to(speech24.container, { top: "90%", opacity: 1 }, "speechStart+=3.5")
        .to(speech24.container, { top: "150%", opacity: 0 }, ">+0.4")

        // Possibilities
        .to(speech30.container, { top: "55%", opacity: 1 }, "speechStart+=4.4")
        .to(speech30.container, { top: "-50%", opacity: 0 }, ">+0.8")
        .to(speech31.container, { top: "50%", opacity: 1 }, "speechStart+=5.9")
        .to(speech31.container, { top: "150%", opacity: 0 }, ">+1.1")
        .to(speech32.container, { top: "20%", opacity: 1 }, "speechStart+=8.3")
        .to(speech32.container, { top: "-50%", opacity: 0 }, ">+2")
        .to(speech33.container, { top: "10%", opacity: 1 }, "speechStart+=11.3")
        .to(speech33.container, { top: "-50%", opacity: 0 }, ">+2")
        .to(speech34.container, { top: "20%", opacity: 1 }, "speechStart+=13.7")
        .to(speech34.container, { top: "-50%", opacity: 0 }, ">+2")

      // Transition
      // .to(speech40.container, { top: '50%', opacity: 1 }, 'speechStart+=13')
      // .to(speech40.container, { top: '-50%', opacity: 0 }, '>+2')
      // .to(speech41.container, { top: '50%', opacity: 1 }, 'speechStart+=15')
      // .to(speech41.container, { top: '-50%', opacity: 0 }, '>+2')
      // .to(speech42.container, { top: '50%', opacity: 1 }, 'speechStart+=17')
      // .to(speech42.container, { top: '-50%', opacity: 0 }, '>+2')
      // .to(speech43.container, { top: '50%', opacity: 1 }, 'speechStart+=18')
      // .to(speech43.container, { top: '-50%', opacity: 0 }, '>+2')
    );
  };

  // -------------------------------------------------------------------------------------
  // Timeline : Intro
  // -------------------------------------------------------------------------------------

  const timelineIntro = () => {
    return gsap
      .timeline()
      .add(animSpeech(".history"), ">")
      .to(
        ".old-card.go-away",
        {
          y: -900,
          duration: 1,
          rotationY: generateRandomAngle(2),
          stagger: { amount: 0.1, ease: "power2.inOut", from: "random" },
        },
        "<"
      )
      .to("#scroll-indicator", { opacity: 0, duration: 0.2 }, "<")
      .add(animSpeech(".speech-no-evolution"), "<+=1");
  };

  // -------------------------------------------------------------------------------------
  // Timeline : Cards flipping x4
  // -------------------------------------------------------------------------------------
  const timelineCard0 = () => {
    const commonConfig = { duration: 0.2, ease: "linear" };
    const el = document.querySelector(".old-card.stay-0");
    const figure = "v";
    const stepConfig1 = {
      left: "10%",
      top: "10%",
      rotateZ: 90,
      rotateY: 90,
      ...commonConfig,
    };
    const stepConfig2 = {
      left: "20%",
      top: "20%",
      rotateZ: 180,
      rotateY: 180,
      ...commonConfig,
    };
    const stepConfig3 = {
      left: "40%",
      top: "30%",
      rotateZ: 270,
      rotateY: 270,
      ...commonConfig,
    };
    const stepConfig4 = {
      left: "60%",
      top: "40%",
      rotateZ: 360,
      rotateY: 360,
      ...commonConfig,
    };
    const stepConfig5 = {
      left: "70%",
      top: "30%",
      rotateZ: 450,
      rotateY: 450,
      ...commonConfig,
    };
    const stepConfig6 = {
      left: "80%",
      top: "20%",
      rotateZ: 540,
      rotateY: 540,
      ...commonConfig,
    };
    const stepConfig7 = {
      left: "120%",
      top: "-20%",
      rotateZ: 630,
      rotateY: 630,
      ...commonConfig,
    };

    return gsap
      .timeline()
      .to(el, stepConfig1, "<")
      .to(el, { duration: 0, ...onEventsFlipCard(el, figure, "0", "1") })
      .to(el, stepConfig2, "<")
      .to(el, stepConfig3, ">")
      .to(el, { duration: 0, ...onEventsFlipCard(el, figure, "1", "2") }, ">")
      .to(el, stepConfig4, "<")
      .to(el, stepConfig5, ">")
      .to(el, { duration: 0, ...onEventsFlipCard(el, figure, "2", "3") }, ">")
      .to(el, stepConfig6, "<")
      .to(el, stepConfig7, ">");
  };
  const timelineCard1 = () => {
    const commonConfig = { duration: 0.2, ease: "linear" };
    const el = document.querySelector(".old-card.stay-1");
    const figure = "d";
    const stepConfig1 = {
      left: "30%",
      top: "10%",
      rotateZ: 90,
      rotateY: 90,
      ...commonConfig,
    };
    const stepConfig2 = {
      left: "40%",
      top: "20%",
      rotateZ: 180,
      rotateY: 180,
      ...commonConfig,
    };
    const stepConfig3 = {
      left: "50%",
      top: "40%",
      rotateZ: 270,
      rotateY: 270,
      ...commonConfig,
    };
    const stepConfig4 = {
      left: "60%",
      top: "60%",
      rotateZ: 360,
      rotateY: 360,
      ...commonConfig,
    };
    const stepConfig5 = {
      left: "70%",
      top: "70%",
      rotateZ: 450,
      rotateY: 450,
      ...commonConfig,
    };
    const stepConfig6 = {
      left: "80%",
      top: "80%",
      rotateZ: 540,
      rotateY: 540,
      ...commonConfig,
    };
    const stepConfig7 = {
      left: "120%",
      top: "120%",
      rotateZ: 630,
      rotateY: 630,
      ...commonConfig,
    };

    return gsap
      .timeline()
      .to(el, stepConfig1, "<")
      .to(el, { duration: 0, ...onEventsFlipCard(el, figure, "0", "1") })
      .to(el, stepConfig2, "<")
      .to(el, stepConfig3, ">")
      .to(el, { duration: 0, ...onEventsFlipCard(el, figure, "1", "2") }, ">")
      .to(el, stepConfig4, "<")
      .to(el, stepConfig5, ">")
      .to(el, { duration: 0, ...onEventsFlipCard(el, figure, "2", "3") }, ">")
      .to(el, stepConfig6, "<")
      .to(el, stepConfig7, ">");
  };
  const timelineCard2 = () => {
    const commonConfig = { duration: 0.2, ease: "linear" };
    const el = document.querySelector(".old-card.stay-2");
    const figure = "r";
    const stepConfig1 = {
      left: "70%",
      top: "20%",
      rotateZ: 90,
      rotateY: 90,
      ...commonConfig,
    };
    const stepConfig2 = {
      left: "60%",
      top: "30%",
      rotateZ: 180,
      rotateY: 180,
      ...commonConfig,
    };
    const stepConfig3 = {
      left: "50%",
      top: "40%",
      rotateZ: 270,
      rotateY: 270,
      ...commonConfig,
    };
    const stepConfig4 = {
      left: "40%",
      top: "50%",
      rotateZ: 360,
      rotateY: 360,
      ...commonConfig,
    };
    const stepConfig5 = {
      left: "30%",
      top: "60%",
      rotateZ: 450,
      rotateY: 450,
      ...commonConfig,
    };
    const stepConfig6 = {
      left: "20%",
      top: "80%",
      rotateZ: 540,
      rotateY: 540,
      ...commonConfig,
    };
    const stepConfig7 = {
      left: "-20%",
      top: "120%",
      rotateZ: 630,
      rotateY: 630,
      ...commonConfig,
    };

    return gsap
      .timeline()
      .to(el, stepConfig1, "<")
      .to(el, { duration: 0, ...onEventsFlipCard(el, figure, "0", "1") })
      .to(el, stepConfig2, "<")
      .to(el, stepConfig3, ">")
      .to(el, { duration: 0, ...onEventsFlipCard(el, figure, "1", "2") }, ">")
      .to(el, stepConfig4, "<")
      .to(el, stepConfig5, ">")
      .to(el, { duration: 0, ...onEventsFlipCard(el, figure, "2", "3") }, ">")
      .to(el, stepConfig6, "<")
      .to(el, stepConfig7, ">");
  };
  const timelineCard3 = () => {
    const commonConfig = { duration: 0.2, ease: "linear" };
    const el = document.querySelector(".old-card.stay-3");
    const figure = "a";
    const stepConfig1 = {
      left: "80%",
      top: "20%",
      rotateZ: 90,
      rotateY: 90,
      ...commonConfig,
    };
    const stepConfig2 = {
      left: "70%",
      top: "30%",
      rotateZ: 180,
      rotateY: 180,
      ...commonConfig,
    };
    const stepConfig3 = {
      left: "60%",
      top: "40%",
      rotateZ: 270,
      rotateY: 270,
      ...commonConfig,
    };
    const stepConfig4 = {
      left: "50%",
      top: "60%",
      rotateZ: 360,
      rotateY: 360,
      ...commonConfig,
    };
    const stepConfig5 = {
      left: "30%",
      top: "30%",
      rotateZ: 450,
      rotateY: 450,
      ...commonConfig,
    };
    const stepConfig6 = {
      left: "20%",
      top: "20%",
      rotateZ: 540,
      rotateY: 540,
      ...commonConfig,
    };
    const stepConfig7 = {
      left: "-20%",
      top: "-20%",
      rotateZ: 630,
      rotateY: 630,
      ...commonConfig,
    };

    return gsap
      .timeline()
      .to(el, stepConfig1, "<")
      .to(el, { duration: 0, ...onEventsFlipCard(el, figure, "0", "1") })
      .to(el, stepConfig2, "<")
      .to(el, stepConfig3, ">")
      .to(el, { duration: 0, ...onEventsFlipCard(el, figure, "1", "2") }, ">")
      .to(el, stepConfig4, "<")
      .to(el, stepConfig5, ">")
      .to(el, { duration: 0, ...onEventsFlipCard(el, figure, "2", "3") }, ">")
      .to(el, stepConfig6, "<")
      .to(el, stepConfig7, ">");
  };

  // -------------------------------------------------------------------------------------
  // Timeline : Concept
  // -------------------------------------------------------------------------------------
  const timelineConcept = () => {
    const kingPositions = [
      { left: "10%", top: "35%" },
      { left: "30%", top: "35%" },
      { left: "50%", top: "35%" },
      { left: "70%", top: "35%" },
      { left: "90%", top: "35%" },
      { left: "10%", top: "75%" },
      { left: "30%", top: "75%" },
      { left: "50%", top: "75%" },
      { left: "70%", top: "75%" },
      { left: "90%", top: "75%" },
    ];

    const straightPositions = [
      { left: "06.25%", top: "32%" },
      { left: "18.75%", top: "32%" },
      { left: "31.25%", top: "32%" },
      { left: "43.75%", top: "32%" },
      { left: "56.25%", top: "32%" },
      { left: "68.75%", top: "32%" },
      { left: "81.25%", top: "32%" },
      { left: "93.75%", top: "32%" },
      { left: "06.25%", top: "63%" },
      { left: "18.75%", top: "63%" },
      { left: "31.25%", top: "63%" },
      { left: "43.75%", top: "63%" },
      { left: "56.25%", top: "63%" },
      { left: "68.75%", top: "63%" },
      { left: "81.25%", top: "63%" },
      { left: "93.75%", top: "63%" },
    ];

    return gsap
      .timeline()
      .to(
        ".card-king",
        { left: "50%", top: "50%", rotateZ: 0, rotateY: 180, duration: 2 },
        "<"
      )
      .to(
        ".card-king",
        {
          left: (index, el, arr) => {
            const dataY = el.dataset.y;
            return kingPositions[dataY].left;
          },
          top: (index, el, arr) => {
            const dataY = el.dataset.y;
            return kingPositions[dataY].top;
          },
          rotateZ: 360,
          rotateY: 0,
          duration: 0.5,
          scale: 0.8,
        },
        ">"
      )
      .to(
        ".card-king-not-green",
        { top: "-50%", duration: 0.4, stagger: 0.02, delay: 0.2 },
        ">"
      )
      .to(
        ".card-green-main",
        {
          left: (index, el, arr) => {
            const dataX = el.dataset.x;
            return straightPositions[dataX].left;
          },
          top: (index, el, arr) => {
            const dataX = el.dataset.x;
            return straightPositions[dataX].top;
          },
          rotateZ: 360,
          rotateY: 0,
          duration: 0.5,
          scale: 0.8,
        },
        "<"
      )
      .to(
        ".card-green-0, .card-green-j, .card-green-e",
        {
          left: (index, el, arr) => {
            const dataX = el.dataset.x;
            return straightPositions[dataX].left;
          },
          top: (index, el, arr) => {
            const dataX = el.dataset.x;
            return straightPositions[dataX].top;
          },
          rotateZ: 360,
          rotateY: 0,
          duration: 0.5,
          scale: 0.8,
        },
        ">"
      );
  };

  // -------------------------------------------------------------------------------------
  // Timeline 52
  // -------------------------------------------------------------------------------------
  const timeline52 = () => {
    const positions52 = [
      { left: "25%", top: "25%" },
      { left: "75%", top: "25%" },
      { left: "25%", top: "75%" },
      { left: "75%", top: "75%" },
    ];

    return gsap
      .timeline()
      .to(".card-green-plus", { top: "-50%" }, ">")
      .to(
        ".card-green-main",
        {
          left: positions52[0].left,
          top: positions52[0].top,
          transformOrigin: "center 80%",
          rotateZ: 270,
        },
        "<"
      )
      .to(
        ".card-red-main",
        {
          left: positions52[1].left,
          top: positions52[1].top,
          transformOrigin: "center 80%",
          rotateZ: 270,
        },
        "<"
      )
      .to(
        ".card-blue-main",
        {
          left: positions52[2].left,
          top: positions52[2].top,
          transformOrigin: "center 80%",
          rotateZ: 270,
        },
        "<"
      )
      .to(
        ".card-yellow-main",
        {
          left: positions52[3].left,
          top: positions52[3].top,
          transformOrigin: "center 80%",
          rotateZ: 270,
        },
        "<"
      )
      .to(".card-green-main", { rotateZ: (index) => 270 + index * 12 }, ">")
      .to(".card-red-main", { rotateZ: (index) => 270 + index * 12 }, "<+0.1")
      .to(".card-blue-main", { rotateZ: (index) => 270 + index * 12 }, "<+0.1")
      .to(
        ".card-yellow-main",
        { rotateZ: (index) => 270 + index * 12 },
        "<+0.1"
      );
  };

  // -------------------------------------------------------------------------------------
  // Timeline UNO
  // -------------------------------------------------------------------------------------
  const timelineUno = () => {
    const positionsUno = [
      { left: "50%", top: "18%" },
      { left: "20%", top: "42%" },
      { left: "80%", top: "42%" },
      { left: "25%", top: "78%" },
      { left: "75%", top: "78%" },
    ];

    const unoEffects = [
      "+2",
      "+4",
      "Change de sens",
      "Passe ton tour",
      "Change de couleur",
    ];
    unoEffects.forEach((effect, index) => {
      const effectContainer = document.createElement("div");
      effectContainer.className = "uno-effect";
      effectContainer.classList.add(`uno-effect-${index}`);
      effectContainer.dataset.effect = index;
      effectContainer.innerHTML = effect;
      cardsContainer.appendChild(effectContainer);

      if (index === 0 || index === 1) effectContainer.classList.add("bigger");

      gsap.set(effectContainer, {
        ...transCenterXY,
        left: `${positionsUno[index].left}`,
        top: `calc(${positionsUno[index].top} + 100%)`,
      });
    });

    return gsap
      .timeline()
      .to(".card-remove-for-uno", { top: "-50%" }, ">+=0.3")
      .to(
        ".card-jack.card-for-uno",
        {
          left: positionsUno[0].left,
          top: positionsUno[0].top,
          transformOrigin: "center 80%",
          rotateZ: 0,
        },
        "<"
      )
      .to(
        ".card-queen.card-for-uno",
        {
          left: positionsUno[1].left,
          top: positionsUno[1].top,
          transformOrigin: "center 80%",
          rotateZ: 0,
        },
        "<"
      )
      .to(
        ".card-king.card-for-uno",
        {
          left: positionsUno[2].left,
          top: positionsUno[2].top,
          transformOrigin: "center 80%",
          rotateZ: 0,
        },
        "<"
      )
      .to(
        ".card-e.card-for-uno",
        {
          left: positionsUno[3].left,
          top: positionsUno[3].top,
          transformOrigin: "center 80%",
          rotateZ: 0,
        },
        "<"
      )
      .to(
        ".card-j.card-for-uno",
        {
          left: positionsUno[4].left,
          top: positionsUno[4].top,
          transformOrigin: "center 80%",
          rotateZ: 0,
        },
        "<"
      )

      .to(
        ".uno-effect-0",
        {
          top: (index, el) =>
            `calc(${positionsUno[el.dataset.effect].top} + 100px)`,
        },
        ">"
      )
      .to(
        ".card-jack.card-for-uno",
        { rotateZ: (index) => -60 + index * 12 },
        "<+=0.4"
      )

      .to(
        ".uno-effect-1",
        {
          top: (index, el) =>
            `calc(${positionsUno[el.dataset.effect].top} + 100px)`,
        },
        ">-=0.7"
      )
      .to(
        ".card-queen.card-for-uno",
        { rotateZ: (index) => -60 + index * 12 },
        "<+=0.4"
      )

      .to(
        ".uno-effect-2",
        {
          top: (index, el) =>
            `calc(${positionsUno[el.dataset.effect].top} + 100px)`,
        },
        ">-=0.7"
      )
      .to(
        ".card-king.card-for-uno",
        { rotateZ: (index) => -60 + index * 12 },
        "<+=0.4"
      )

      .to(
        ".uno-effect-3",
        {
          top: (index, el) =>
            `calc(${positionsUno[el.dataset.effect].top} + 100px)`,
        },
        ">-=0.7"
      )
      .to(
        ".card-e.card-for-uno",
        { rotateZ: (index) => -45 + index * 20 },
        "<+=0.4"
      )

      .to(
        ".uno-effect-4",
        {
          top: (index, el) =>
            `calc(${positionsUno[el.dataset.effect].top} + 100px)`,
        },
        ">-=0.7"
      )
      .to(
        ".card-j.card-for-uno",
        { rotateZ: (index) => -45 + index * 20 },
        "<+=0.4"
      )

      .to(".card-for-uno", { top: "-50%", stagger: 0.004 }, ">+=0.2")
      .to(".uno-effect", { top: "-50%", stagger: 0.004 }, "<+=0.11");
  };

  // -------------------------------------------------------------------------------------
  // Timeline Sgtraight
  // -------------------------------------------------------------------------------------
  const timelineStaight = () => {
    const cardsInStraight = [
      document.querySelector(".card-2-7"),
      document.querySelector(".card-2-8"),
      document.querySelector(".card-2-9"),
      document.querySelector(".card-3-0"),
      document.querySelector(".card-3-1"),
      document.querySelector(".card-3-2"),
      document.querySelector(".card-3-3"),
      document.querySelector(".card-3-4"),
      document.querySelector(".card-3-5"),
      document.querySelector(".card-3-6"),
      document.querySelector(".card-3-7"),
      document.querySelector(".card-3-8"),
      document.querySelector(".card-3-9"),
      document.querySelector(".card-4-0"),
    ];

    cardsInStraight.forEach((card, index) => {
      card.classList.add("card-in-staight");
      card.dataset.straightIndex = index;
    });

    return gsap
      .timeline()
      .set(".card-in-staight", {
        top: "100%",
        left: "150%",
        transformOrigin: "center",
        rotateZ: 0,
        duration: 0,
        scale: 1.7,
      })
      .to(
        ".card-in-staight",
        {
          top: "60%",
          transformOrigin: "bottom",
          left: (index, el) => "-190%" + "px",
          duration: 1.2,
          stagger: function (index, el) {
            return el.dataset.straightIndex * 0.1;
          },
        },
        "<"
      )
      .to(".overlay-straight", { opacity: 1 }, "<+=0.2")
      .to(".overlay-straight", { opacity: 0 }, "<+=1.4")
      .to(".card-in-staight", { scale: 1, transformOrigin: "center" });
  };

  // -------------------------------------------------------------------------------------
  // Timeline Words
  // -------------------------------------------------------------------------------------
  const timelineWords = () => {
    const cardsInWords = [
      document.querySelector(".card-9-9"),
      document.querySelector(".card-9-0"),
      document.querySelector(".card-8-6"),
      document.querySelector(".card-8-1"),
      document.querySelector(".card-7-8"),
      document.querySelector(".card-7-4"),
      document.querySelector(".card-6-5"),
      document.querySelector(".card-5-2"),
      document.querySelector(".card-4-7"),
      document.querySelector(".card-0-3"),
    ];

    cardsInWords.forEach((card, index) => {
      card.classList.add("card-in-words");
      card.dataset.wordIndex = index;
    });

    return gsap
      .timeline()
      .set(".card-in-words", {
        top: "150%",
        left: "50%",
        transformOrigin: "center",
        rotateZ: 0,
        duration: 0,
        scale: 1.7,
      })
      .to(".card-in-words", {
        top: "-50%",
        // transformOrigin: 'bottom',
        duration: 1.2,
        stagger: 0.05,
        stagger: function (index, el) {
          return el.dataset.wordIndex * 0.1;
        },
      })
      .to(majorSystemInterestedBtns, { opacity: 1 })
      .to("#major-system", { top: "0%" });
  };

  // -------------------------------------------------------------------------------------
  // New Timeline Template
  // -------------------------------------------------------------------------------------
  // const timelineXXX = () => {
  //   return gsap.timeline()
  // }

  const mainTimeline = gsap.timeline({
    // paused: true,
    scrollTrigger: {
      trigger: ".section-1",
      start: "top -1%",
      end: "+=20000",
      // markers: true,
      scrub: 1,
      pin: ".section-1",
    },
  });

  createAllOldCards();
  createAllConceptCards();

  mainTimeline
    // Intro
    .add(timelineIntro())
    .add(timelineSpeeches(), "<")
    .add(timelineCard0(), "<")
    .add(timelineCard1(), "<")
    .add(timelineCard2(), "<")
    .add(timelineCard3(), "<")
    .add(timelineConcept(), ">-=0.9")
    .add(timeline52(), ">+=0.3")
    .add(timelineUno(), ">")
    .add(timelineStaight(), ">");

  // .add(timelineWords(), '>')

  const bob = document.querySelector(".uno-effect-0");
  const s1 = document.querySelector(".section-1");

  bob.addEventListener("click", () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: s1.offsetTop + 1200, behavior: "smooth" },
    });
  });
}
