export const questions = [
  {
    id: 1,
    text: "Es viernes en la noche, ¿qué estás haciendo realmente?",
    options: [
      { text: "Buscando pleito imaginario en redes o defendiendo a mis panas.", scores: { wolf: 3, dog: 1 } },
      { text: "Durmiendo. Despiértenme en el 2028 o si hay comida.", scores: { cat: 3, dragon: 1 } },
      { text: "Aplicando la de 'yendo' y cancelando a último minuto. La cama está rica.", scores: { fox: 3, deer: 2 } },
      { text: "Haciendo ✨absolutamente nada✨ pero con ansiedad de que debería hacer algo.", scores: { deer: 3, cat: 1 } },
      { text: "Con tanta energía que podría morder un mueble.", scores: { dog: 3, dragon: 2 } }
    ]
  },
  {
    id: 2,
    text: "Ves a alguien que te cae mal acercándose, tu instinto es:",
    options: [
      { text: "Mirarlo feo hasta que se intimide y huya. Dominancia absoluta.", scores: { wolf: 2, dragon: 3 } },
      { text: "Aplicar la técnica milenaria de hacerme el ciego y cruzar la calle.", scores: { cat: 2, deer: 3 } },
      { text: "Sonreírle sarcásticamente y planear mi venganza mentalmente.", scores: { fox: 3, cat: 1 } },
      { text: "Saludarlo efusivamente porque en el fondo soy demasiado buena onda (odio esto).", scores: { dog: 3, deer: 1 } }
    ]
  },
  {
    id: 3,
    text: "¿Cómo es tu relación con la comida?",
    options: [
      { text: "Proteína y carne, necesito volumen para mis músculos inexistentes.", scores: { wolf: 3, dragon: 2 } },
      { text: "Soy un crítico de Michelin, si no es gourmet prefiero morir de hambre.", scores: { cat: 3, fox: 1 } },
      { text: "Me como lo tuyo, lo mío y si te descuidas, el plato también.", scores: { dog: 3, dragon: 1 } },
      { text: "Sobrevivo a base de snacks, Monster y aire.", scores: { deer: 3, cat: 1, fox: 2 } }
    ]
  },
  {
    id: 4,
    text: "Tu aesthetic de Pinterest se describe como:",
    options: [
      { text: "Dark academia combinado con 'No me hables antes del café'.", scores: { cat: 3, fox: 1 } },
      { text: "Cottagecore, plantas que siempre se me mueren y lucecitas.", scores: { deer: 3, dog: 1 } },
      { text: "Ropa táctica, negro absoluto. Parezco sacado de John Wick.", scores: { wolf: 3, dragon: 2 } },
      { text: "Un caos colorido y calcetines que no combinan.", scores: { dog: 3, fox: 2 } },
      { text: "Oro, lujos, anillos grandotes y vibras de 'soy mejor que tú'.", scores: { dragon: 3, cat: 1 } }
    ]
  },
  {
    id: 5,
    text: "Mito de internet que más te representa:",
    options: [
      { text: "El de los alienígenas ancestrales. 👁️👄👁️", scores: { dragon: 3, cat: 1 } },
      { text: "Que todos somos NPC's menos yo.", scores: { fox: 3, dragon: 1 } },
      { text: "El perro que dijo 'guau' 🐕 (solo vibro alto).", scores: { dog: 3, deer: 1 } },
      { text: "Aullidos a las 3 AM en el chat grupal para llamar la atención.", scores: { wolf: 3, dog: 1 } }
    ]
  }
];

export const therianResults = {
  wolf: {
    name: "Lobo (El Intensito)",
    emoji: "🐺",
    description: "Eres el papá/mamá del grupo, aunque nadie te lo pidió. Eres súper leal pero a veces das 'cringe' de lo intenso que eres defendiendo a tus compas. Probablemente usaste filtro de perrito o lobo en Snapchat en 2016 y nunca lo superaste. Tienes alma de líder (o eso te gusta creer frente al espejo).",
    color: "#6b7280" // Gray
  },
  fox: {
    name: "Zorro (El Manipulador Aesthetic)",
    emoji: "🦊",
    description: "Crees que eres un genio del engaño pero todos saben cuando mientes. Eres independiente, sarcástico y probablemente tu lenguaje del amor sea bullear a la gente que quieres. Tienes una carpeta de memes robados que usas como escudo emocional.",
    color: "#f97316" // Orange
  },
  cat: {
    name: "Gato (El Superior)",
    emoji: "🐈‍⬛",
    description: "Te crees la gran cosa y la verdad... sí lo eres. Tienes 'resting bitch face' el 90% del tiempo. Solo te gusta que te den amor en tus propios términos; si alguien se pasa de cariñoso, le clavas el 'visto'. Si reencarnaras, definitivamente serías un bicho pidiendo whiskas caras y durmiendo 18 horas.",
    color: "#8b5cf6" // Purple
  },
  dragon: {
    name: "Dragón (El Megalómano)",
    emoji: "🐉",
    description: "Reales vibras de 'Main Character'. Eres extra, dramático y tienes estándares ridículamente altos para todo. Amas coleccionar cosas brillosas (probablemente cuarzos, anillos baratos o pop figures). Te enojas de 0 a 100 en tres segundos pero se te pasa rápido. Te crees Targaryen, acéptalo.",
    color: "#ef4444" // Red
  },
  dog: {
    name: "Golden Retriever (El Simp)",
    emoji: "🐕",
    description: "Eres pura vibra positiva, un poco caótico y no tienes pensamientos complejos en la cabeza. Te ilusionas rápido, amas a todos y si alguien te trata medio bien ya estás armando la boda en Pinterest. Todos te quieren porque eres literalmente inofensivo y das buenos abrazos.",
    color: "#eab308" // Yellow
  },
  deer: {
    name: "Ciervo (La Víctima Ansiosa)",
    emoji: "🦌",
    description: "Tu sistema nervioso siempre está en rojo. Pides perdón por respirar. Te asustas cuando suena tu propio celular o si alguien te mira fijo por más de dos segundos. Tu zona de confort es una cobijita y escuchar lluvia falsa en Spotify. Literalmente necesitas un abrazo, ven aquí.",
    color: "#a16207" // Brown
  }
};
