import type { Board } from "./game";

export const CRITICAL_MINERALS_BOARD: Board = {
  squareValues: [200, 400, 600, 800, 1000],
  categories: [
    {
      uuid: crypto.randomUUID(),
      title: "STEM-ULATING CAREERS",
      squares: {
        200: {
          uuid: crypto.randomUUID(),
          question: "THIS PERSON STUDIES THE NATURAL WORLD AND CONDUCTS EXPERIMENTS TO UNDERSTAND HOW THINGS WORK",
          answer: "What is a Scientist?",
          value: 200,
        },
        400: {
          uuid: crypto.randomUUID(),
          question:
            "THIS TRADESPERSON WORKS WITH POWER LINES, LIGHTING FIXTURES, AND ELECTRICAL PANELS TO ENSURE SAFE AND FUNCTIONAL ELECTRICITY FLOW",
          answer: "What is an Electrician?",
          value: 400,
        },
        600: {
          uuid: crypto.randomUUID(),
          question:
            "THIS PROFESSIONAL DESIGNS AND OPERATES PROCESSES THAT TRANSFORM RAW MATERIALS INTO USEFUL PRODUCTS SUCH AS CHEMICALS, FUELS & PHARMACEUTICALS",
          answer: "What is a Chemical Engineer?",
          value: 600,
        },
        800: {
          uuid: crypto.randomUUID(),
          question:
            "IF YOU NEED LEGAL ASSISTANCE WITH CASES INVOLVING POLLUTION, CONSERVATION, OR NATURAL RESOURCE MANAGEMENT, YOU WOULD CONSULT THIS TYPE OF LAWYER",
          answer: "What is an Environmental Lawyer?",
          value: 800,
        },
        1000: {
          uuid: crypto.randomUUID(),
          question:
            "THIS PROFESSIONAL FOCUSES ON ADVANCING ENERGY STORAGE TECHNOLOGIES CRUCIAL FOR ELECTRIC VEHICLES & RENEWABLE ENERGY SYSTEMS",
          answer: "What is a Battery Scientist?",
          value: 1000,
        },
      },
    },
    {
      uuid: crypto.randomUUID(),
      title: "ROCK & ROLL",
      squares: {
        200: {
          uuid: crypto.randomUUID(),
          question: "THE BRANCH OF SCIENCE STUDYING THE EARTH IS _____",
          answer: "What is Geology?",
          value: 200,
        },
        400: {
          uuid: crypto.randomUUID(),
          question: "THIS TYPE OF ROCK FORMS FROM THE COOLING AND SOLIDIFICATION OF MAGMA OR LAVA",
          answer: "What is an igneous rock?",
          value: 400,
        },
        600: {
          uuid: crypto.randomUUID(),
          question: "THIS PROVINCE HAS THE LARGEST MINERAL PRODUCTION IN CANADA",
          answer: "What is Quebec?",
          value: 600,
        },
        800: {
          uuid: crypto.randomUUID(),
          question:
            "THIS MINERAL IS FOUND IN THE HISTORICAL MINING DISTRICT ON THE TYENDINAGA MOHAWK TERRITORY NEAR BELLEVILLE, ONTARIO",
          answer: "What is Cobalt?",
          value: 800,
        },
        1000: {
          uuid: crypto.randomUUID(),
          question:
            "A REGION LOCATED AROUND THE PACIFIC OCEAN THAT IS HOME TO ROUGHLY TWO THIRDS OF THE WORLD’S TOTAL VOLCANOES",
          answer: "What is The Ring of Fire?",
          value: 1000,
        },
      },
    },
    {
      uuid: crypto.randomUUID(),
      title: "THE CRITICAL ELEMENTS OF SURPRISE",
      squares: {
        200: {
          uuid: crypto.randomUUID(),
          question:
            "THIS CRITICAL MINERAL MAY SOUND CHEAP, BUT IT HAS BROUGHT BIG MONEY TO SUDBURY OR AT LEAST A BIG COIN",
          answer: "What is Nickel?",
          value: 200,
        },
        400: {
          uuid: crypto.randomUUID(),
          question: "THIS CRITICAL MINERAL IS FOUND IN MANY BATTERIES, INCLUDING CELL PHONE AND ELECTRIC CAR BATTERIES",
          answer: "What is Lithium?",
          value: 400,
        },
        600: {
          uuid: crypto.randomUUID(),
          question:
            "RARE EARTH ELEMENTS SUCH AS NEODYMIUM & DYSPROSIUM ARE USED TO PRODUCE THE HIGH-PERFORMANCE MAGNETS USED IN THESE",
          answer: "What are electric vehicles? or What are wind turbines?",
          value: 600,
        },
        800: {
          uuid: crypto.randomUUID(),
          question:
            "ANOTHER ELEMENT USED IN LITHIUM-ION BATTERIES AND CLASSIFIED AS A CRITICAL MINERAL DUE TO ITS SUPPLY RISK AND STRATEGIC IMPORTANCE",
          answer: "What is Cobalt?",
          value: 800,
        },
        1000: {
          uuid: crypto.randomUUID(),
          question:
            "USED IN TOUCH SCREENS AND DISPLAYS, AND CONSIDERED A CRITICAL MINERAL DUE TO ITS LIMITED SUPPLY AND SPECIALIZED USE",
          answer: "What is Indium?",
          value: 1000,
        },
      },
    },
    {
      uuid: crypto.randomUUID(),
      title: "CHARGING INTO THE FUTURE",
      squares: {
        200: {
          uuid: crypto.randomUUID(),
          question: "WHERE THE ENERGY IS STORED FOR POWERING ELECTRIC VEHICLES",
          answer: "What is the battery?",
          value: 200,
        },
        400: {
          uuid: crypto.randomUUID(),
          question: "THIS CANADIAN PROVINCE HAS THE MOST REGISTERED ELECTRIC VEHICLES IN THE COUNTRY",
          answer: "What is Quebec?",
          value: 400,
        },
        600: {
          uuid: crypto.randomUUID(),
          question:
            "THIS INVENTOR, WITH HIS CAMPING BUDDY HENRY FORD, ATTEMPTED AT LEAST ONE PROTOTYPE ELECTRIC CAR AROUND A CENTURY BEFORE THE ROADSTER WAS RELEASED BY TESLA, A COMPANY NAMED AFTER HIS RIVAL",
          answer: "Who is Thomas Edison?",
          value: 600,
        },
        800: {
          uuid: crypto.randomUUID(),
          question:
            "THIS COMPONENT OF AN EV BATTERY IS RESPONSIBLE FOR STORING THE ELECTRICAL ENERGY AND IS TYPICALLY MADE FROM LITHIUM OR OTHER METALS",
          answer: "What is a cell?",
          value: 800,
        },
        1000: {
          uuid: crypto.randomUUID(),
          question:
            "COMPARED TO LITHIUM-ION BATTERIES, THIS TYPE OF BATTERY OFTEN USED IN RESEARCH HAS THE POTENTIAL FOR HIGHER ENERGY & SAFETY",
          answer: "What is a solid-state battery?",
          value: 1000,
        },
      },
    },
    {
      uuid: crypto.randomUUID(),
      title: "REDUCE, REUSE, REBATTERY",
      squares: {
        200: {
          uuid: crypto.randomUUID(),
          question: "THIS ROOT VEGETABLE IS OFTEN USED IN SCIENCE CLASS TO MAKE AN ORGANIC BATTERY",
          answer: "What is a potato?",
          value: 200,
        },
        400: {
          uuid: crypto.randomUUID(),
          question:
            "THIS PROCESS AIMS TO REDUCE WASTE ISSUES ASSOCIATED WITH ELECTRIC CARS BY RECOVERING AND REUSING CRITICAL MINERALS FROM USED EV BATTERIES",
          answer: "What is Battery Recycling?",
          value: 400,
        },
        600: {
          uuid: crypto.randomUUID(),
          question: "THERE ARE 12,000 OF THESE PARTICIPATING LOCATIONS TO BRING BATTERIES TO BE RECYCLED IN CANADA",
          answer: "What are Battery Drop-Off Locations?",
          value: 600,
        },
        800: {
          uuid: crypto.randomUUID(),
          question:
            "THIS PRACTICE INVOLVES DESIGNING BATTERIES TO HAVE A LONGER LIFESPAN AND BE MORE EASILY RECYCLABLE, REDUCING THEIR OVERALL ENVIRONMENTAL IMPACT",
          answer: "What is Sustainable Design? or What is Eco-Design?",
          value: 800,
        },
        1000: {
          uuid: crypto.randomUUID(),
          question:
            "THESE TWO METALS CONTAMINATE LOCAL SOILS, GROUNDWATER, AND STREAMS WHEN BATTERIES ARE NOT DISPOSED OF PROPERLY",
          answer: "What are Nickel and Lithium?",
          value: 1000,
        },
      },
    },
    {
      uuid: crypto.randomUUID(),
      title: "FULL STEM AHEAD",
      squares: {
        200: {
          uuid: crypto.randomUUID(),
          question: "THESE FOUR WORDS MAKE UP THE ACRONYM “S.T.E.M.”",
          answer: "What are Science, Technology, Engineering & Mathematics?",
          value: 200,
        },
        400: {
          uuid: crypto.randomUUID(),
          question:
            "TRUE OR FALSE: 92% OF BOYS AND 97% OF GIRLS WILL LOSE INTEREST IN STEM IF NOT IMMERSED BEFORE 5TH GRADE",
          answer: "True",
          value: 400,
        },
        600: {
          uuid: crypto.randomUUID(),
          question: "WOMEN MAKE UP APPROXIMATELY __% OF STEM WORKERS IN CANADA",
          answer: "What is 20%?",
          value: 600,
        },
        800: {
          uuid: crypto.randomUUID(),
          question: "THIS COMPUTER SCIENCE LANGUAGE NAMED AFTER A SNAKE IS KNOWN FOR ITS SIMPLICITY & READABILITY",
          answer: "What is Python?",
          value: 800,
        },
        1000: {
          uuid: crypto.randomUUID(),
          question: "KNOWN FOR HER WORK ON RADIOACTIVITY, SHE WAS THE FIRST WOMAN TO WIN A NOBEL PRIZE",
          answer: "Who is Marie Curie?",
          value: 1000,
        },
      },
    },
  ],
};
