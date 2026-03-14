export const questions = [
  {
    id: 1,
    text: "¿Cuál es tu hábitat ideal para sentir paz?",
    options: [
      { text: "Un bosque denso y misterioso, lleno de pinos.", scores: { wolf: 3, fox: 1 } },
      { text: "Un lugar alto con viento en la cara, montañas o acantilados.", scores: { dragon: 3, cat: 1 } },
      { text: "Un lugar cálido, soleado y cómodo, cerca de casa.", scores: { cat: 3, dog: 1 } },
      { text: "Cerca de un río calmado o un claro al amanecer.", scores: { fox: 3, deer: 2 } }
    ]
  },
  {
    id: 2,
    text: "Cuando te sientes amenazado o bajo presión, tu primer instinto es:",
    options: [
      { text: "Luchar, defender mi territorio y los míos.", scores: { wolf: 2, dragon: 3, dog: 1 } },
      { text: "Correr y esconderme para evaluar la situación desde lejos.", scores: { cat: 2, deer: 3, fox: 1 } },
      { text: "Usar mi ingenio para engañar y salir del problema.", scores: { fox: 3, cat: 1 } },
      { text: "Agruparme con mis amigos/familia y buscar apoyo mutuo.", scores: { wolf: 3, dog: 3 } }
    ]
  },
  {
    id: 3,
    text: "¿En qué momento del día te sientes más activo y tú mismo?",
    options: [
      { text: "A medianoche, cuando el mundo duerme.", scores: { wolf: 3, cat: 2 } },
      { text: "Al atardecer, cuando la luz es mágica y cambiante.", scores: { fox: 3, dragon: 1 } },
      { text: "Al amanecer, lleno de energía fresca.", scores: { deer: 3, dog: 2 } },
      { text: "Cualquier momento, siempre que haya sol y calor.", scores: { cat: 2, dragon: 2 } }
    ]
  },
  {
    id: 4,
    text: "En un grupo de amigos, ¿qué rol tomas naturalmente?",
    options: [
      { text: "El líder protector, cuido de todos.", scores: { wolf: 3, dog: 1 } },
      { text: "El solitario observador, hablo sólo cuando es necesario.", scores: { cat: 3, dragon: 1 } },
      { text: "El astuto y bromista, aporto el lado divertido y sarcástico.", scores: { fox: 3 } },
      { text: "El amigo leal y juguetón, que siempre está para ayudar.", scores: { dog: 3, deer: 1 } }
    ]
  },
  {
    id: 5,
    text: "¿Qué elemento te atrae más?",
    options: [
      { text: "Tierra (Raíces, hojas, suelo firme)", scores: { wolf: 2, deer: 3 } },
      { text: "Fuego (Luz brillante, calor y transformación)", scores: { dragon: 3, fox: 1 } },
      { text: "Aire (Viento libre, altura, nubes)", scores: { dragon: 2, cat: 1, fox: 1 } },
      { text: "Agua (Fluidez, misterio y profundidad)", scores: { cat: 1, dragon: 1 } } // we can leave some general
    ]
  }
];

export const therianResults = {
  wolf: {
    name: "Lobo (Wolf)",
    emoji: "🐺",
    description: "Eres un espíritu protector, fuerte y profundamente leal. Sientes una fuerte conexión con las noches estrelladas y los bosques. Tu manada es tu tesoro, pero también necesitas momentos de soledad introspectiva.",
    color: "#6b7280" // Gray
  },
  fox: {
    name: "Zorro (Fox)",
    emoji: "🦊",
    description: "Astuto, ágil y carismático. Eres independiente y observador. Prefieres la sutileza a la fuerza bruta. Te sientes en casa en los bordes del bosque y amas el atardecer brillante.",
    color: "#f97316" // Orange
  },
  cat: {
    name: "Felino (Cat)",
    emoji: "🐈‍⬛",
    description: "Independiente, elegante y muy perceptivo. Amas la comodidad pero mantienes tus instintos afilados. Eres selectivo con tus vínculos emocionales y conectas fuertemente con la luna y la noche.",
    color: "#8b5cf6" // Purple
  },
  dragon: {
    name: "Dragón (Mythical)",
    emoji: "🐉",
    description: "Un alma ancestral, intensa y majestuosa. Tienes pasiones fuertes y no le temes a destacar. Eres atraído por paisajes épicos, alturas y el elemento del fuego o aire.",
    color: "#ef4444" // Red
  },
  dog: {
    name: "Perro Salvaje / Canino",
    emoji: "🐕",
    description: "Eres pura energía y lealtad. Valoras el afecto constante y disfrutas formar parte del día a día de tu entorno. Tu corazón cálido es tu mejor atributo.",
    color: "#eab308" // Yellow
  },
  deer: {
    name: "Ciervo (Deer)",
    emoji: "🦌",
    description: "Sutil, profundamente arraigado en la tierra y pacífico. Tienes una intuición inigualable. Huyes del conflicto directo, prefiriendo la calma y protección del bosque.",
    color: "#a16207" // Brown
  }
};
