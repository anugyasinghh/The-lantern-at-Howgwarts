const MOVIE_LINKS = [
  'https://www.hotstar.com/in/movies/harry-potter-and-the-sorcerers-stone/1971000398?search_query=harry+potter',
  'https://www.hotstar.com/in/movies/harry-potter-and-the-chamber-of-secrets/1971000409?search_query=harry+potter+chamber',
  'https://www.hotstar.com/in/movies/harry-potter-and-the-prisoner-of-azkaban/1971000405?search_query=harry+potter+priosio',
  'https://www.hotstar.com/in/movies/harry-potter-and-the-goblet-of-fire/1971000404?search_query=harry+potter+priosio',
  'https://www.hotstar.com/in/movies/harry-potter-and-the-order-of-the-phoenix/1971000408?search_query=harry+potter+priosio',
  'https://www.hotstar.com/in/movies/harry-potter-and-the-half-blood-prince/1971000403?search_query=harry+potter+priosio',
  'https://www.hotstar.com/in/movies/harry-potter-and-the-deathly-hallows-part-1/1971000406?search_query=harry+potter+priosio'
];

const STORAGE_KEY =
  'lanternAtHogwartsProgress_v1';


const STORIES = [

  {
    id: 1,

    year: 'YEAR I',

    title:
      "Harry Potter and the Philosopher's Stone",

    short:
      "A boy who has never heard of magic learns about Hogwarts, friendship, bravery and the first shadow of the wizard who changed his life.",

    summary:
      "Harry discovers that the ordinary life he knew was not the whole story. A mysterious letter opens the door to Diagon Alley and Hogwarts, where he learns about houses, spells, friendship and a dangerous secret connected to a legendary stone. The first chapter is about discovering a new world — and discovering that courage is not the absence of fear.",

    pdf:
      'assests/Book 1 - Harry Potter and the Sorcerer\'s Stone.pdf', 

    buy:
      'https://www.amazon.in/s?k=Harry+Potter+Philosopher%27s+Stone+book',

    watchLabel:
      'Watch on Hotstar',

    tags:
      ['Hogwarts', 'First Year', 'Magic'],

    quiz: [

      [
        'What house is Harry sorted into?',
        [
          'Gryffindor',
          'Ravenclaw',
          'Hufflepuff',
          'Slytherin'
        ],
        0
      ],

      [
        'What sport is played on flying broomsticks?',
        [
          'Quidditch',
          'Gobstones',
          'Wizard chess',
          'Duelling'
        ],
        0
      ],

      [
        "Who is Harry's best friend from the Weasley family?",
        [
          'Ron',
          'Percy',
          'Bill',
          'Charlie'
        ],
        0
      ],

      [
        'What platform does the Hogwarts Express leave from?',
        [
          'Platform 9¾',
          'Platform 7½',
          'Platform 10',
          'Platform 12'
        ],
        0
      ],

      [
        'Which object is guarded in the first story?',
        [
          "The Philosopher's Stone",
          "The Marauder's Map",
          "The Time-Turner",
          'The Triwizard Cup'
        ],
        0
      ]

    ]
  },


  {
    id: 2,

    year: 'YEAR II',

    title:
      'Harry Potter and the Chamber of Secrets',

    short:
      "Strange messages, a hidden chamber and an old school mystery turn Hogwarts into a place of suspicion.",

    summary:
      "Harry returns to Hogwarts and discovers that something ancient has been awakened beneath the castle. Students are attacked, rumors spread, and Harry becomes involved in a mystery connected to the school's founder and a forgotten part of its history. The story expands the mythology of Hogwarts and explores the danger of prejudice and fear.",

    pdf:
      'assests/Book 2 - Harry Potter and the Chamber of Secrets.pdf', 

    buy:
      'https://www.amazon.in/s?k=Harry+Potter+Chamber+of+Secrets+book',

    watchLabel:
      'Watch on Hotstar',

    tags:
      ['Mystery', 'Hogwarts', 'Secrets'],

    quiz: [

      [
        'What is hidden beneath Hogwarts?',
        [
          'The Chamber of Secrets',
          "A dragon's nest",
          'A library vault',
          'A train station'
        ],
        0
      ],

      [
        'Which creature is linked to the Chamber?',
        [
          'Basilisk',
          'Hippogriff',
          'Thestral',
          'Acromantula'
        ],
        0
      ],

      [
        'Who is revealed to have written in the magical diary?',
        [
          'Tom Riddle',
          'Sirius Black',
          'Remus Lupin',
          'Peter Pettigrew'
        ],
        0
      ],

      [
        'Who saves Ginny from the Chamber?',
        [
          'Harry',
          'Ron',
          'Draco',
          'Hagrid'
        ],
        0
      ],

      [
        "What magical object contains Tom Riddle's memory?",
        [
          'Diary',
          'Cloak',
          'Map',
          'Wand'
        ],
        0
      ]

    ]
  },


  {
    id: 3,

    year: 'YEAR III',

    title:
      'Harry Potter and the Prisoner of Azkaban',

    short:
      "A prisoner escapes, dementors arrive at Hogwarts, and Harry learns that the past is closer than he thought.",

    summary:
      "The arrival of Sirius Black changes Harry's school year. Dementors patrol the grounds, a new Defence Against the Dark Arts professor teaches Harry to face fear, and clues about Harry's parents lead to a painful family history. This chapter is more mysterious, emotional and personal than the earlier adventures.",

    pdf:
      'assests/Book 3 - Harry Potter and the Prisoner of Azkaban.pdf',

    buy:
      'https://www.amazon.in/s?k=Harry+Potter+Prisoner+of+Azkaban+book',

    watchLabel:
      'Watch on Hotstar',

    tags:
      ['Dementors', 'Sirius', 'Time'],

    quiz: [

      [
        'Who escapes from Azkaban?',
        [
          'Sirius Black',
          'Lucius Malfoy',
          'Severus Snape',
          'Cornelius Fudge'
        ],
        0
      ],

      [
        'Which creatures feed on happiness?',
        [
          'Dementors',
          'Boggarts',
          'Pixies',
          'Inferi'
        ],
        0
      ],

      [
        'Who teaches Harry the Patronus charm?',
        [
          'Remus Lupin',
          'Alastor Moody',
          'Dumbledore',
          'Snape'
        ],
        0
      ],

      [
        'What magical device allows time to be revisited?',
        [
          'Time-Turner',
          'Deluminator',
          'Pensieve',
          'Portkey'
        ],
        0
      ],

      [
        "Who was Sirius to Harry's parents?",
        [
          'Their friend',
          'Their professor',
          'Their enemy',
          'Their cousin'
        ],
        0
      ]

    ]
  },


  {
    id: 4,

    year: 'YEAR IV',

    title:
      'Harry Potter and the Goblet of Fire',

    short:
      "A dangerous international tournament brings three wizarding schools together — and pulls Harry into a deadly mystery.",

    summary:
      "Harry expects another school year, but the Triwizard Tournament changes everything. Competitors face dangerous tasks in front of huge crowds while Harry is unexpectedly entered into the competition. The school year becomes a turning point, because the magical world is forced to confront a threat it hoped had disappeared.",

    pdf:
      'assests/Book 4 - Harry Potter and the Goblet of Fire.pdf',

    buy:
      'https://www.amazon.in/s?k=Harry+Potter+Goblet+of+Fire+book',

    watchLabel:
      'Watch on Hotstar',

    tags:
      ['Tournament', 'Dragons', 'Return'],

    quiz: [

      [
        'What tournament is central to this story?',
        [
          'Triwizard Tournament',
          'House Cup',
          'Quidditch World Cup',
          'Dueling League'
        ],
        0
      ],

      [
        'How many tasks are in the Triwizard Tournament?',
        [
          'Three',
          'Two',
          'Four',
          'Seven'
        ],
        0
      ],

      [
        'Which school is one of the visiting schools?',
        [
          'Beauxbatons',
          'Durmstrang',
          'Both',
          'Neither'
        ],
        2
      ],

      [
        'What magical object unexpectedly selects Harry?',
        [
          'Goblet of Fire',
          'Sorting Hat',
          'Mirror of Erised',
          'Pensieve'
        ],
        0
      ],

      [
        'What does the final task lead Harry toward?',
        [
          'A dark resurrection plan',
          'A new classroom',
          'A Quidditch final',
          'A house party'
        ],
        0
      ]

    ]
  },


  {
    id: 5,

    year: 'YEAR V',

    title:
      'Harry Potter and the Order of the Phoenix',

    short:
      "Harry returns to a Hogwarts under political pressure, builds a secret student group, and prepares for a war others refuse to believe has begun.",

    summary:
      "The wizarding authorities resist admitting that Voldemort has returned, and Hogwarts becomes a battleground for control of information. Harry and his friends create a secret group to practise defensive magic. The story becomes deeply connected to resistance, propaganda, friendship and the cost of refusing to look away from danger.",

    pdf:
      'assests/Book 5 - Harry Potter and the Order of the Phoenix.pdf',

    buy:
      'https://www.amazon.in/s?k=Harry+Potter+Order+of+the+Phoenix+book',

    watchLabel:
      'Watch on Hotstar',

    tags:
      ['Resistance', 'DA', 'Prophecy'],

    quiz: [

      [
        'What is the student defence group called?',
        [
          "Dumbledore's Army",
          'Phoenix Club',
          'Hogwarts Guard',
          'Order Students'
        ],
        0
      ],

      [
        'Who becomes the new High Inquisitor at Hogwarts?',
        [
          'Dolores Umbridge',
          'Narcissa Malfoy',
          'Bellatrix Lestrange',
          'Rita Skeeter'
        ],
        0
      ],

      [
        'Where does the Order often meet?',
        [
          '12 Grimmauld Place',
          'The Leaky Cauldron',
          'The Burrow',
          'Malfoy Manor'
        ],
        0
      ],

      [
        'What subject does the Ministry undermine?',
        [
          'Defence Against the Dark Arts',
          'Potions',
          'Astronomy',
          'Herbology'
        ],
        0
      ],

      [
        "What becomes central to Harry's connection with Voldemort?",
        [
          'A prophecy',
          'A Quidditch oath',
          'A school rule',
          'A family crest'
        ],
        0
      ]

    ]
  },


  {
    id: 6,

    year: 'YEAR VI',

    title:
      'Harry Potter and the Half-Blood Prince',

    short:
      "Old memories reveal the enemy's past while Hogwarts becomes quieter on the surface and far more dangerous underneath.",

    summary:
      "Dumbledore shows Harry key memories about Tom Riddle's past, looking for the hidden pattern behind Voldemort's survival. At Hogwarts, an annotated Potions book gives Harry unexpected success, while relationships and fears become more complicated. This chapter prepares the story for its final conflict by turning history into a weapon.",

    pdf:
      'assests/Book 6 - Harry Potter and the Half-Blood Prince.pdf',

    buy:
      'https://www.amazon.in/s?k=Harry+Potter+Half-Blood+Prince+book',

    watchLabel:
      'Watch on Hotstar',

    tags:
      ['Memories', 'Horcruxes', 'Secrets'],

    quiz: [

      [
        'Who studies memories with Harry?',
        [
          'Dumbledore',
          'Lupin',
          'Hagrid',
          'McGonagall'
        ],
        0
      ],

      [
        'What concept becomes crucial to defeating Voldemort?',
        [
          'Horcruxes',
          'House points',
          'Portkeys',
          'Animagi'
        ],
        0
      ],

      [
        'Who owns the mysterious annotated Potions book?',
        [
          'The Half-Blood Prince',
          'The Marauders',
          'The Head Boy',
          'The Headmaster'
        ],
        0
      ],

      [
        'Which subject gives Harry unexpected success?',
        [
          'Potions',
          'Transfiguration',
          'Charms',
          'Divination'
        ],
        0
      ],

      [
        "What does Harry learn by examining Voldemort's past?",
        [
          'How he split his soul',
          'How he learned Quidditch',
          'How he founded Hogwarts',
          'How he became an auror'
        ],
        0
      ]

    ]
  },


  {
    id: 7,

    year: 'YEAR VII',

    title:
      'Harry Potter and the Deathly Hallows',

    short:
      "Hogwarts is no longer the safe centre of the story. Harry, Ron and Hermione leave behind school life to finish what must be finished.",

    summary:
      "The final journey takes Harry and his closest friends away from the familiar structure of Hogwarts. They search for a way to break Voldemort's power while the wizarding world is under increasing control and fear. The story brings together the mysteries, relationships and choices built across the previous six chapters, leading toward the Battle of Hogwarts and the end of the central conflict.",

    pdf:
      'assests/Book 7 - Harry Potter and the Deathly Hallows.pdf',

    buy:
      'https://www.amazon.in/s?k=Harry+Potter+Deathly+Hallows+book',

    watchLabel:
      'Watch Part 1 on Hotstar',

    tags:
      ['Final Journey', 'Hallows', 'Battle'],

    quiz: [

      [
        'What trio leaves Hogwarts to search for a way to defeat Voldemort?',
        [
          'Harry, Ron and Hermione',
          'Harry, Draco and Neville',
          'Ron, Ginny and Luna',
          'Harry, Hagrid and Snape'
        ],
        0
      ],

      [
        'What three objects are known as the Deathly Hallows?',
        [
          'Elder Wand, Resurrection Stone, Cloak',
          'Sword, Map, Cloak',
          'Cup, Diadem, Ring',
          'Wand, Quill, Mirror'
        ],
        0
      ],

      [
        'What location becomes the setting of the final battle?',
        [
          'Hogwarts',
          'Diagon Alley',
          'Azkaban',
          'The Ministry'
        ],
        0
      ],

      [
        'What is the main purpose of the hunt for Horcruxes?',
        [
          "To destroy parts of Voldemort's soul",
          'To find treasure',
          'To win the House Cup',
          'To reopen the Chamber'
        ],
        0
      ],

      [
        'What does the final chapter ultimately deliver?',
        [
          'The resolution of the central conflict',
          'A new Triwizard Tournament',
          'A new school founder',
          'A Ministry election'
        ],
        0
      ]

    ]
  }

];


const CHARACTERS = [

  [
    'Harry Potter',
    'Gryffindor',
    'The central hero of the story, known for loyalty, courage and a complicated connection to Voldemort.',
    '🪄'
  ],

  [
    'Hermione Granger',
    'Gryffindor',
    'A brilliant student whose preparation, curiosity and practical thinking repeatedly save the day.',
    '📚'
  ],

  [
    'Ron Weasley',
    'Gryffindor',
    "Harry's loyal best friend whose humour, courage and family loyalty anchor the trio.",
    '♟️'
  ],

  [
    'Albus Dumbledore',
    'Hogwarts',
    'Headmaster, strategist and mentor whose knowledge of wizarding history shapes the larger conflict.',
    '🧙'
  ],

  [
    'Severus Snape',
    'Slytherin',
    'A complex professor whose actions and motives become increasingly important to the final story.',
    '⚗️'
  ],

  [
    'Lord Voldemort',
    'Dark Wizard',
    'The primary antagonist, obsessed with defeating death and controlling the wizarding world.',
    '🐍'
  ],

  [
    'Draco Malfoy',
    'Slytherin',
    'A Hogwarts student raised inside a powerful wizarding family with strong prejudices and expectations.',
    '🪶'
  ],

  [
    'Rubeus Hagrid',
    'Gryffindor',
    'Keeper of Keys and Grounds at Hogwarts, known for his huge heart and love of magical creatures.',
    '🪵'
  ],

  [
    'Minerva McGonagall',
    'Gryffindor',
    "A formidable professor of Transfiguration and one of Hogwarts' strongest defenders.",
    '🐈'
  ],

  [
    'Sirius Black',
    'Gryffindor',
    "Harry's godfather and a key connection to the Marauders and his parents' past.",
    '🐺'
  ],

  [
    'Remus Lupin',
    'Gryffindor',
    'A thoughtful Defence Against the Dark Arts professor who becomes an important mentor to Harry.',
    '🌕'
  ],

  [
    'Neville Longbottom',
    'Gryffindor',
    'A student whose confidence and courage grow dramatically over the course of the story.',
    '🌿'
  ],

  [
    'Luna Lovegood',
    'Ravenclaw',
    'An original thinker known for independence, kindness and an unusual way of seeing the world.',
    '🌙'
  ],

  [
    'Ginny Weasley',
    'Gryffindor',
    'A talented witch who grows from a shy younger student into a confident fighter.',
    '🔥'
  ],

  [
    'Fred Weasley',
    'Gryffindor',
    'One half of the mischievous Weasley twins, creative, funny and fearless.',
    '🧨'
  ],

  [
    'George Weasley',
    'Gryffindor',
    "Fred's twin and business partner, sharing his love of jokes, invention and rebellion.",
    '🧨'
  ],

  [
    'Molly Weasley',
    'Gryffindor',
    "A fiercely protective mother whose care for her family becomes part of the story's emotional core.",
    '🫖'
  ],

  [
    'Arthur Weasley',
    'Gryffindor',
    'A Ministry wizard fascinated by the Muggle world and known for warmth and curiosity.',
    '🔧'
  ],

  [
    'Bellatrix Lestrange',
    'Dark Wizard',
    "A fanatical Death Eater and one of Voldemort's most dangerous followers.",
    '🦇'
  ],

  [
    'Lucius Malfoy',
    'Slytherin',
    'A wealthy wizard whose influence and status bring him close to the centres of power.',
    '🐍'
  ],

  [
    'Dobby',
    'Free Elf',
    'A house-elf whose loyalty and bravery make him unforgettable.',
    '🧦'
  ],

  [
    'Hedwig',
    'Animal',
    "Harry's snowy owl and loyal messenger.",
    '🦉'
  ],

  [
    'Alastor Moody',
    'Auror',
    'A veteran auror known for vigilance and an intense approach to defence.',
    '👁️'
  ],

  [
    'Nymphadora Tonks',
    'Auror',
    'An energetic auror and member of the Order with a strong sense of duty.',
    '🪄'
  ],

  [
    'Kingsley Shacklebolt',
    'Auror',
    'An accomplished auror and calm leader trusted during the wider conflict.',
    '🛡️'
  ],

  [
    'Peter Pettigrew',
    'Dark Wizard',
    "A former friend of Harry's parents whose betrayal has major consequences.",
    '🐀'
  ],

  [
    'Filius Flitwick',
    'Ravenclaw',
    'Charms professor and a skilled magical defender at Hogwarts.',
    '✨'
  ],

  [
    'Pomona Sprout',
    'Hufflepuff',
    "Herbology professor and a capable member of Hogwarts' teaching staff.",
    '🌱'
  ],

  [
    'Sybil Trelawney',
    'Ravenclaw',
    'Divination professor whose predictions intersect with the larger story in unexpected ways.',
    '🔮'
  ],

  [
    'Argus Filch',
    'Hogwarts Staff',
    'The caretaker of Hogwarts who takes rules and hallway patrols very seriously.',
    '🗝️'
  ]

].map(
  (c, i) => ({
    id: i + 1,
    name: c[0],
    group: c[1],
    bio: c[2],
    icon: c[3]
  })
);


const WORLD_ITEMS = [

  [
    '🏰',
    'Hogwarts Houses',
    'Gryffindor, Ravenclaw, Hufflepuff and Slytherin are the four student houses, each associated with a distinct set of values and traditions.'
  ],

  [
    '🪄',
    'Wands',
    'A wizarding wand is a magical tool used to focus and shape spells. Different wizards develop different relationships with their wands.'
  ],

  [
    '✨',
    'Spells',
    'The series uses named magical spells for practical, defensive and transformative purposes. Context matters more than simply memorising names.'
  ],

  [
    '🧪',
    'Potions',
    "Potions combines magical ingredients, precise technique and patience. It is one of Hogwarts' most exacting subjects."
  ],

  [
    '🦉',
    'Magical Creatures',
    'Dragons, hippogriffs, thestrals, house-elves and many other beings make the wizarding world more than just human magic.'
  ],

  [
    '🏏',
    'Quidditch',
    'The famous broomstick sport uses four balls, multiple player roles and a large amount of strategy — plus a lot of spectacle.'
  ],

  [
    '🏛️',
    'Ministry of Magic',
    'The Ministry is the wizarding government of Britain. Its authority, mistakes and internal politics matter increasingly as the story develops.'
  ],

  [
    '💀',
    'Horcruxes',
    'A dark magical concept involving the fragmentation of a soul. Understanding it becomes central to the endgame.'
  ],

  [
    '🌲',
    'Forbidden Forest',
    'The forest beside Hogwarts is home to creatures, mysteries and situations students are very much not supposed to explore casually.'
  ],

  [
    '🗺️',
    "Marauder's Map",
    'A magical map connected to Hogwarts that reveals moving people and hidden pathways around the castle.'
  ],

  [
    '🏺',
    'Pensieve',
    'A magical basin used to examine stored memories and reflect on events from the past.'
  ],

  [
    '🛡️',
    'Deathly Hallows',
    'Three legendary objects linked to an old wizarding tale: the Elder Wand, Resurrection Stone and Invisibility Cloak.'
  ]

].map(
  (w, i) => ({
    id: i + 1,
    icon: w[0],
    title: w[1],
    text: w[2]
  })
);


const LANTERN_LINES = [

  ['Courage is often the decision to act while fear is still in the room.', 'Lantern Lines'],

  ['Curiosity becomes useful when it is paired with discipline.', 'Lantern Lines'],

  ['The people beside you can matter as much as the spell in your hand.', 'Lantern Lines'],

  ['A clever answer is valuable; a kind answer can change a life.', 'Lantern Lines'],

  ['Some doors open because you are brave enough to knock.', 'Lantern Lines'],

  ['The past can explain a choice without excusing it.', 'Lantern Lines'],

  ['Power without wisdom tends to become its own prison.', 'Lantern Lines'],

  ['A small act of loyalty can become the beginning of a legend.', 'Lantern Lines'],

  ['Not every mysterious thing is dangerous, and not every familiar thing is safe.', 'Lantern Lines'],

  ['Friendship turns impossible tasks into shared problems.', 'Lantern Lines'],

  ['Knowledge is strongest when it is used to protect someone else.', 'Lantern Lines'],

  ['The right question can be more powerful than the fastest answer.', 'Lantern Lines'],

  ['Being different and being wrong are not the same thing.', 'Lantern Lines'],

  ['A map is useful; knowing where to go is something else entirely.', 'Lantern Lines'],

  ['Good intentions still need courage behind them.', 'Lantern Lines'],

  ['A mistake can be a chapter, not the entire story.', 'Lantern Lines'],

  ['The bravest person in the room may be the quietest one.', 'Lantern Lines'],

  ['Rules matter. Knowing when to question them matters too.', 'Lantern Lines'],

  ['Preparation is its own kind of magic.', 'Lantern Lines'],

  ['Home can be a place, a person, or a promise.', 'Lantern Lines'],

  ['A legend is often built from ordinary choices made consistently.', 'Lantern Lines'],

  ['Secrets become heavier when nobody is allowed to speak.', 'Lantern Lines'],

  ['Hope is easier to protect when it is shared.', 'Lantern Lines'],

  ['The strongest team is rarely made of identical people.', 'Lantern Lines'],

  ['A difficult truth can be kinder than a comfortable lie.', 'Lantern Lines'],

  ['You do not need to know the entire path to take the next step.', 'Lantern Lines'],

  ['Magic feels bigger when wonder is allowed to survive adulthood.', 'Lantern Lines'],

  ['Fear loves isolation; courage grows in company.', 'Lantern Lines'],

  ['The right friend may notice what you are trying to hide from yourself.', 'Lantern Lines'],

  ['A good mentor teaches you how to think, not just what to do.', 'Lantern Lines'],

  ['A familiar castle can still hold a new mystery.', 'Lantern Lines'],

  ['Sometimes the smallest object carries the largest memory.', 'Lantern Lines'],

  ['You can inherit a story without inheriting its mistakes.', 'Lantern Lines'],

  ['A name can become a shadow; your choices decide what follows it.', 'Lantern Lines'],

  ['Protecting someone is a choice, not a personality trait.', 'Lantern Lines'],

  ['A dark road can still have a direction.', 'Lantern Lines'],

  ['The people who teach you may not always be the people you first expected.', 'Lantern Lines'],

  ['A brave heart and a sharp mind make a formidable combination.', 'Lantern Lines'],

  ['Sometimes the best spell is simply showing up when someone needs you.', 'Lantern Lines'],

  ['Tradition can preserve wisdom, but it can also preserve prejudice.', 'Lantern Lines'],

  ['A school is shaped by the people who choose to defend it.', 'Lantern Lines'],

  ['Legends are remembered; character is lived.', 'Lantern Lines'],

  ['The lantern is brightest when someone else can see their way because of you.', 'Lantern Lines'],

  ['Questions turn a mysterious world into a learnable one.', 'Lantern Lines'],

  ['You can be uncertain and still be ready to begin.', 'Lantern Lines'],

  ['Every great journey starts before you feel fully prepared.', 'Lantern Lines'],

  ['Curiosity opens the door. Courage walks through it.', 'Lantern Lines'],

  ['When the path narrows, your values become the map.', 'Lantern Lines'],

  ['The story changes when you stop waiting for someone else to save it.', 'Lantern Lines']

];


const state = loadState();

let activeQuiz = null;

let activeCharacterFilter = 'All';

let lastQuoteIndex = -1;


function loadState() {

  try {

    const parsed =
      JSON.parse(
        localStorage.getItem(STORAGE_KEY)
      );

    return parsed &&
      Array.isArray(parsed.completed)
      ? parsed
      : { completed: [] };

  } catch {

    return {
      completed: []
    };

  }
}


function saveState() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state)
  );

}


function isUnlocked(id) {

  return (
    id === 1 ||
    state.completed.includes(id - 1)
  );

}


function isComplete(id) {

  return state.completed.includes(id);

}


function updateProgressUI() {

  const completed =
    state.completed.length;

  document.getElementById(
    'progressPill'
  ).textContent =
    `${completed} / 7 Unlocked`;

  document.getElementById(
    'journeyCount'
  ).textContent =
    completed;

  document.getElementById(
    'quizCount'
  ).textContent =
    completed;

}


function renderTimeline() {

  const root =
    document.getElementById('timeline');

  root.innerHTML =
    STORIES.map(story => {

      const unlocked =
        isUnlocked(story.id);

      const complete =
        isComplete(story.id);

      const status =
        complete
          ? 'Completed'
          : unlocked
            ? 'Unlocked'
            : 'Locked';

      return `
        <article class="story-card ${unlocked ? '' : 'locked'} ${complete ? 'complete' : ''}">

          <div class="story-node">
            ${complete ? '✓' : story.id}
          </div>

          <div class="story-copy">

            <p class="eyebrow">
              ${story.year}
            </p>

            <h3>
              ${escapeHTML(story.title)}
            </h3>

            <p>
              ${escapeHTML(story.short)}
            </p>

            <div class="story-meta">

              ${
                story.tags
                  .map(
                    tag =>
                      `<span class="tag">${escapeHTML(tag)}</span>`
                  )
                  .join('')
              }

              <span class="tag">
                ${status}
              </span>

            </div>

          </div>

          <div class="story-actions">

            <button
              class="btn btn-primary"
              ${unlocked ? '' : 'disabled'}
              data-open-story="${story.id}"
            >
              ${unlocked ? 'Explore' : '🔒 Locked'}
            </button>

            <button
              class="btn btn-ghost"
              ${unlocked ? '' : 'disabled'}
              data-complete-story="${story.id}"
            >
              ${
                complete
                  ? 'Quiz Passed ✓'
                  : 'Mark Complete'
              }
            </button>

            <button
              class="btn btn-ghost"
              ${unlocked ? '' : 'disabled'}
              data-quick-watch="${story.id}"
            >
              Watch
            </button>

          </div>

        </article>
      `;

    }).join('');


  root
    .querySelectorAll('[data-open-story]')
    .forEach(
      btn =>
        btn.addEventListener(
          'click',
          () =>
            openStoryModal(
              Number(
                btn.dataset.openStory
              )
            )
        )
    );


  root
    .querySelectorAll('[data-complete-story]')
    .forEach(
      btn =>
        btn.addEventListener(
          'click',
          () =>
            startQuiz(
              Number(
                btn.dataset.completeStory
              )
            )
        )
    );


  root
    .querySelectorAll('[data-quick-watch]')
    .forEach(
      btn =>
        btn.addEventListener(
          'click',
          () =>
            openMovie(
              Number(
                btn.dataset.quickWatch
              )
            )
        )
    );


  updateProgressUI();

}


function openMovie(id) {

  const url =
    MOVIE_LINKS[id - 1];

  if (!url) {

    return toast(
      'No watch link has been added for this chapter yet.'
    );

  }

  window.open(
    url,
    '_blank',
    'noopener,noreferrer'
  );

}


function openStoryModal(id) {

  const story =
    STORIES.find(
      s => s.id === id
    );

  if (
    !story ||
    !isUnlocked(id)
  ) {
    return;
  }

  const isLast =
    id === STORIES.length;

  const content =
    document.getElementById(
      'modalContent'
    );

  content.innerHTML = `

    <p class="eyebrow">
      ${story.year}
    </p>

    <h2 id="storyModalTitle">
      ${escapeHTML(story.title)}
    </h2>

    <div class="modal-summary">

      <p>
        ${escapeHTML(story.summary)}
      </p>

    </div>

    <h3>
      Your three doors
    </h3>

    <p>
      Pick the way you want to continue this chapter.
    </p>

    <div class="modal-links">

      <a
        class="btn btn-primary"
        href="${story.pdf}"
        target="_blank"
        rel="noopener"
      >
        📖 Read PDF
      </a>

      <button
        class="btn btn-ghost"
        id="modalWatch"
      >
        🎬 ${escapeHTML(story.watchLabel)}
      </button>

      <a
        class="btn btn-ghost"
        href="${story.buy}"
        target="_blank"
        rel="noopener"
      >
        🛒 Buy the Book
      </a>

    </div>


    <div class="quiz-shell">

      <p class="eyebrow">
        NEXT STEP
      </p>

      <h3>
        ${
          isComplete(id)
            ? 'Chapter complete ✓'
            : 'Ready to unlock what comes next?'
        }
      </h3>

      <p>
        ${
          isComplete(id)
            ? "You have already passed this chapter's quiz."
            : "Mark this chapter complete, then answer all five questions correctly."
        }
      </p>

      <button
        class="btn btn-primary"
        id="modalQuizBtn"
      >
        ${
          isComplete(id)
            ? (
                isLast
                  ? 'You Finished the Road ✨'
                  : 'Review Quiz'
              )
            : 'Take the 5-Question Quiz'
        }
      </button>

    </div>

  `;


  document
    .getElementById('modalWatch')
    .addEventListener(
      'click',
      () => openMovie(id)
    );


  document
    .getElementById('modalQuizBtn')
    .addEventListener(
      'click',
      () => startQuiz(id)
    );


  showModal();

}


function startQuiz(id) {

  const story =
    STORIES.find(
      s => s.id === id
    );

  if (
    !story ||
    !isUnlocked(id)
  ) {
    return;
  }

  activeQuiz = {

    storyId: id,

    questionIndex: 0,

    score: 0,

    locked: false

  };

  renderQuizQuestion();

  showModal();

}


function renderQuizQuestion() {

  const story =
    STORIES.find(
      s =>
        s.id === activeQuiz.storyId
    );

  const q =
    story.quiz[
      activeQuiz.questionIndex
    ];

  const percent =
    (
      activeQuiz.questionIndex /
      story.quiz.length
    ) * 100;

  const content =
    document.getElementById(
      'modalContent'
    );


  content.innerHTML = `

    <p class="eyebrow">
      ${story.year} • QUIZ
    </p>

    <h2 id="storyModalTitle">
      ${escapeHTML(story.title)}
    </h2>

    <p>
      Question
      ${activeQuiz.questionIndex + 1}
      of
      ${story.quiz.length}
    </p>

    <div class="quiz-progress">

      <span
        style="width:${percent}%"
      ></span>

    </div>

    <p class="quiz-question">
      ${escapeHTML(q[0])}
    </p>

    <div class="answer-list">

      ${
        q[1]
          .map(
            (answer, index) =>
              `
                <button
                  class="answer-btn"
                  data-answer="${index}"
                >
                  ${escapeHTML(answer)}
                </button>
              `
          )
          .join('')
      }

    </div>

    <div
      class="quiz-status"
      id="quizStatus"
    >
      Choose an answer.
    </div>

  `;


  content
    .querySelectorAll('[data-answer]')
    .forEach(
      btn =>
        btn.addEventListener(
          'click',
          () =>
            answerQuiz(
              Number(
                btn.dataset.answer
              )
            )
        )
    );

}


function answerQuiz(index) {

  if (activeQuiz.locked) {
    return;
  }

  activeQuiz.locked = true;

  const story =
    STORIES.find(
      s =>
        s.id === activeQuiz.storyId
    );

  const q =
    story.quiz[
      activeQuiz.questionIndex
    ];

  const buttons =
    [
      ...document.querySelectorAll(
        '[data-answer]'
      )
    ];

  buttons.forEach(
    b =>
      b.disabled = true
  );


  buttons.forEach(
    b => {

      if (
        Number(
          b.dataset.answer
        ) === q[2]
      ) {

        b.classList.add(
          'correct'
        );

      }

    }
  );


  const status =
    document.getElementById(
      'quizStatus'
    );


  if (
    index === q[2]
  ) {

    activeQuiz.score++;

    status.textContent =
      'Correct ✨';

  } else {

    const selected =
      buttons.find(
        b =>
          Number(
            b.dataset.answer
          ) === index
      );

    if (selected) {

      selected.classList.add(
        'wrong'
      );

    }

    status.textContent =
      `Not quite. The correct answer is: ${q[1][q[2]]}`;

  }


  setTimeout(
    () => {

      activeQuiz.questionIndex++;

      activeQuiz.locked = false;

      if (
        activeQuiz.questionIndex >=
        story.quiz.length
      ) {

        finishQuiz();

      } else {

        renderQuizQuestion();

      }

    },
    800
  );

}


function finishQuiz() {

  const story =
    STORIES.find(
      s =>
        s.id === activeQuiz.storyId
    );

  const passed =
    activeQuiz.score ===
    story.quiz.length;

  const previousComplete =
    isComplete(story.id);


  if (
    passed &&
    !previousComplete
  ) {

    state.completed.push(
      story.id
    );

    state.completed.sort(
      (a, b) =>
        a - b
    );

    saveState();

  }


  const next =
    STORIES.find(
      s =>
        s.id === story.id + 1
    );


  const content =
    document.getElementById(
      'modalContent'
    );


  content.innerHTML = `

    <p class="eyebrow">
      RESULT
    </p>

    <h2 id="storyModalTitle">
      ${
        passed
          ? 'The lantern is glowing.'
          : 'The lantern stays dim.'
      }
    </h2>

    <p>

      ${
        passed
          ? `You scored ${activeQuiz.score}/${story.quiz.length}.`
          : `You scored ${activeQuiz.score}/${story.quiz.length}. You need 5/5 to unlock the next chapter.`
      }

    </p>


    <div
      class="muggle-card"
      style="margin-top:18px;"
    >

      <div class="muggle-seal">
        ${passed ? '✓' : '!'}
      </div>

      <div>

        <h3>

          ${
            passed
              ? (
                  next
                    ? `Unlocked: ${escapeHTML(next.title)}`
                    : 'You reached the end of the seven-chapter road.'
                )
              : 'Try again'
          }

        </h3>

        <p>

          ${
            passed
              ? 'The next chapter is now available on the roadmap. Your progress is saved.'
              : 'Review the chapter summary and take the quiz again. You can retry as many times as you like.'
          }

        </p>

      </div>

    </div>


    <div
      class="hero-actions"
      style="margin-top:20px;"
    >

      ${
        passed
          ? `
              <button
                class="btn btn-primary"
                id="resultContinue"
              >
                ${
                  next
                    ? 'Continue the Journey →'
                    : 'Celebrate the Finish ✨'
                }
              </button>
            `
          : `
              <button
                class="btn btn-primary"
                id="resultRetry"
              >
                Retry Quiz
              </button>
            `
      }

      <button
        class="btn btn-ghost"
        data-close-modal
      >
        Close
      </button>

    </div>

  `;


  updateProgressUI();

  renderTimeline();


  if (passed) {

    toast(
      next
        ? `${next.year} is now unlocked.`
        : 'Journey complete. The lantern stays lit.'
    );

  }


  document
    .getElementById(
      passed
        ? 'resultContinue'
        : 'resultRetry'
    )
    .addEventListener(
      'click',
      () => {

        if (passed) {

          closeModal();

          document
            .getElementById('journey')
            .scrollIntoView({
              behavior:
                'smooth'
            });

        } else {

          startQuiz(
            story.id
          );

        }

      }
    );


  document
    .querySelectorAll(
      '[data-close-modal]'
    )
    .forEach(
      btn =>
        btn.addEventListener(
          'click',
          closeModal
        )
    );

}


function showModal() {

  document
    .getElementById(
      'modalBackdrop'
    )
    .classList.remove(
      'hidden'
    );

  document
    .getElementById(
      'storyModal'
    )
    .classList.remove(
      'hidden'
    );

  document.body.style.overflow =
    'hidden';

}


function closeModal() {

  document
    .getElementById(
      'modalBackdrop'
    )
    .classList.add(
      'hidden'
    );

  document
    .getElementById(
      'storyModal'
    )
    .classList.add(
      'hidden'
    );

  document.body.style.overflow =
    '';

  activeQuiz = null;

}


function toast(message) {

  const node =
    document.getElementById(
      'toast'
    );

  node.textContent =
    message;

  node.classList.add(
    'show'
  );

  clearTimeout(
    window.__toastTimer
  );

  window.__toastTimer =
    setTimeout(
      () =>
        node.classList.remove(
          'show'
        ),
      2800
    );

}


/* CHARACTERS */

function renderCharacters() {

  const featured =
    CHARACTERS.slice(
      0,
      10
    );

  document.getElementById(
    'featuredCharacters'
  ).innerHTML =
    featured
      .map(characterCardHTML)
      .join('');

  renderCharacterFilters();

  renderAllCharacters();

}


function characterCardHTML(c) {

  return `

    <article class="character-card">

      <div>

        <div class="character-avatar">
          ${c.icon}
        </div>

        <h3>
          ${escapeHTML(c.name)}
        </h3>

        <p>
          ${escapeHTML(c.bio)}
        </p>

      </div>

      <small>
        ${escapeHTML(c.group)}
      </small>

    </article>

  `;

}


function renderCharacterFilters() {

  const groups = [
    'All',
    ...new Set(
      CHARACTERS.map(
        c => c.group
      )
    )
  ];

  document.getElementById(
    'characterFilters'
  ).innerHTML =
    groups
      .map(
        group =>
          `
            <button
              class="chip ${group === activeCharacterFilter ? 'active' : ''}"
              data-filter="${escapeAttr(group)}"
            >
              ${escapeHTML(group)}
            </button>
          `
      )
      .join('');


  document
    .querySelectorAll(
      '[data-filter]'
    )
    .forEach(
      btn =>
        btn.addEventListener(
          'click',
          () => {

            activeCharacterFilter =
              btn.dataset.filter;

            renderCharacterFilters();

            renderAllCharacters();

          }
        )
    );

}


function renderAllCharacters() {

  const query =
    document
      .getElementById(
        'characterSearch'
      )
      .value
      .trim()
      .toLowerCase();


  const filtered =
    CHARACTERS.filter(
      c => {

        const matchesGroup =
          activeCharacterFilter === 'All' ||
          c.group ===
            activeCharacterFilter;

        const hay =
          `${c.name} ${c.group} ${c.bio}`
            .toLowerCase();

        return (
          matchesGroup &&
          hay.includes(query)
        );

      }
    );


  document.getElementById(
    'allCharacters'
  ).innerHTML =
    filtered.length

      ? filtered
          .map(characterCardHTML)
          .join('')

      : `
          <p style="color:var(--muted);">
            No character matched that search.
          </p>
        `;

}


/* WIZARDING WORLD */

function renderWorld() {

  document.getElementById(
    'worldGrid'
  ).innerHTML =

    WORLD_ITEMS
      .map(
        item =>
          `
            <article
              class="world-card"
              tabindex="0"
            >

              <div class="world-icon">
                ${item.icon}
              </div>

              <h3>
                ${escapeHTML(item.title)}
              </h3>

              <p>
                ${escapeHTML(item.text)}
              </p>

              <div class="world-more">
                Tap to focus
              </div>

            </article>
          `
      )
      .join('');

}


/* QUOTES */

function renderQuote() {

  let index =
    Math.floor(
      Math.random() *
      LANTERN_LINES.length
    );

  if (
    LANTERN_LINES.length > 1 &&
    index === lastQuoteIndex
  ) {

    index =
      (index + 1) %
      LANTERN_LINES.length;

  }

  lastQuoteIndex =
    index;

  document.getElementById(
    'quoteText'
  ).textContent =
    LANTERN_LINES[index][0];

  document.getElementById(
    'quoteSource'
  ).textContent =
    LANTERN_LINES[index][1];

}


/* SORTING HAT */

function startSortingHat() {

  const questions = [

    [
      'What do you value most?',
      [
        'Courage',
        'Curiosity',
        'Loyalty',
        'Ambition'
      ]
    ],

    [
      'Your ideal common room has…',
      [
        'A roaring fireplace',
        'A huge library',
        'A cosy kitchen',
        'A strategic planning table'
      ]
    ],

    [
      'When a friend is in trouble, you…',
      [
        'Act immediately',
        'Look for the smartest solution',
        'Stay beside them',
        'Take control'
      ]
    ],

    [
      'Pick a study style.',
      [
        'Practice until it works',
        'Research everything',
        'Learn with friends',
        'Master the system'
      ]
    ],

    [
      'Choose a magical object.',
      [
        'A protective shield',
        'An ancient book',
        'A lucky charm',
        'A powerful heirloom'
      ]
    ]

  ];


  let i = 0;


  const scores = {
    Gryffindor: 0,
    Ravenclaw: 0,
    Hufflepuff: 0,
    Slytherin: 0
  };


  const answersMap = [

    [
      'Gryffindor',
      'Ravenclaw',
      'Hufflepuff',
      'Slytherin'
    ],

    [
      'Gryffindor',
      'Ravenclaw',
      'Hufflepuff',
      'Slytherin'
    ],

    [
      'Gryffindor',
      'Ravenclaw',
      'Hufflepuff',
      'Slytherin'
    ],

    [
      'Gryffindor',
      'Ravenclaw',
      'Hufflepuff',
      'Slytherin'
    ],

    [
      'Gryffindor',
      'Ravenclaw',
      'Hufflepuff',
      'Slytherin'
    ]

  ];


  function render() {

    const q =
      questions[i];

    document.getElementById(
      'modalContent'
    ).innerHTML = `

      <p class="eyebrow">
        WIZARDING ARCADE
      </p>

      <h2 id="storyModalTitle">
        The Sorting Hat
      </h2>

      <p>
        Question
        ${i + 1}
        of
        ${questions.length}
      </p>

      <div class="quiz-progress">

        <span
          style="width:${(i / questions.length) * 100}%"
        ></span>

      </div>

      <p class="quiz-question">
        ${escapeHTML(q[0])}
      </p>

      <div class="answer-list">

        ${
          q[1]
            .map(
              (a, idx) =>
                `
                  <button
                    class="answer-btn"
                    data-sort-answer="${idx}"
                  >
                    ${escapeHTML(a)}
                  </button>
                `
            )
            .join('')
        }

      </div>

    `;


    document
      .querySelectorAll(
        '[data-sort-answer]'
      )
      .forEach(
        btn =>
          btn.addEventListener(
            'click',
            () => {

              scores[
                answersMap[i][
                  Number(
                    btn.dataset.sortAnswer
                  )
                ]
              ]++;

              i++;

              if (
                i ===
                questions.length
              ) {

                showSortingResult(
                  scores
                );

              } else {

                render();

              }

            }
          )
      );

  }


  render();

  showModal();

}


function showSortingResult(scores) {

  const winner =
    Object.entries(scores)
      .sort(
        (a, b) =>
          b[1] - a[1]
      )[0][0];


  document.getElementById(
    'modalContent'
  ).innerHTML = `

    <p class="eyebrow">
      THE HAT HAS SPOKEN
    </p>

    <h2 id="storyModalTitle">
      ${winner} 🏰
    </h2>

    <div
      class="muggle-card"
      style="margin-top:18px;"
    >

      <div class="muggle-seal">
        ✓
      </div>

      <div>

        <h3>
          Your house result
        </h3>

        <p>
          This is a playful portfolio quiz,
          not an official house test.
          Your strongest pattern points toward
          <strong
            style="color:var(--gold-2)"
          >
            ${winner}
          </strong>.
        </p>

      </div>

    </div>

    <div
      class="hero-actions"
      style="margin-top:20px;"
    >

      <button
        class="btn btn-primary"
        data-close-modal
      >
        Back to the Arcade
      </button>

    </div>

  `;


  document
    .querySelectorAll(
      '[data-close-modal]'
    )
    .forEach(
      btn =>
        btn.addEventListener(
          'click',
          closeModal
        )
    );

}


/* SPELL GAME */

const SPELLS = [

  [
    'Creates light',
    'Lumos'
  ],

  [
    'Disarms an opponent',
    'Expelliarmus'
  ],

  [
    'Summons an object',
    'Accio'
  ],

  [
    'Unlocks a simple lock',
    'Alohomora'
  ],

  [
    'Produces a protective Patronus',
    'Expecto Patronum'
  ]

];


function startSpellGame() {

  let index = 0;

  let score = 0;


  function render() {

    if (
      index >=
      SPELLS.length
    ) {

      document.getElementById(
        'modalContent'
      ).innerHTML = `

        <p class="eyebrow">
          SPELL MATCH
        </p>

        <h2 id="storyModalTitle">
          ${score}/${SPELLS.length}
        </h2>

        <p>
          ${
            score === SPELLS.length
              ? 'Perfect incantation control. ✨'
              : 'Good attempt. Try again and sharpen your spell memory.'
          }
        </p>

        <div
          class="hero-actions"
          style="margin-top:20px;"
        >

          <button
            class="btn btn-primary"
            id="spellRetry"
          >
            Play Again
          </button>

          <button
            class="btn btn-ghost"
            data-close-modal
          >
            Close
          </button>

        </div>

      `;


      document.getElementById(
        'spellRetry'
      ).addEventListener(
        'click',
        startSpellGame
      );


      document
        .querySelectorAll(
          '[data-close-modal]'
        )
        .forEach(
          btn =>
            btn.addEventListener(
              'click',
              closeModal
            )
        );

      return;

    }


    const options =
      [
        ...SPELLS.map(
          s => s[1]
        )
      ].sort(
        () =>
          Math.random() - .5
      );


    document.getElementById(
      'modalContent'
    ).innerHTML = `

      <p class="eyebrow">
        SPELL MATCH
      </p>

      <h2 id="storyModalTitle">
        Which spell?
      </h2>

      <p>
        Match the effect to
        the correct incantation.
      </p>

      <div class="muggle-card">

        <div class="muggle-seal">
          ✦
        </div>

        <div>

          <h3>
            ${SPELLS[index][0]}
          </h3>

          <p>
            Round
            ${index + 1}
            of
            ${SPELLS.length}
          </p>

        </div>

      </div>

      <div
        class="answer-list"
        style="margin-top:18px;"
      >

        ${
          options
            .map(
              o =>
                `
                  <button
                    class="answer-btn"
                    data-spell="${escapeAttr(o)}"
                  >
                    ${escapeHTML(o)}
                  </button>
                `
            )
            .join('')
        }

      </div>

    `;


    document
      .querySelectorAll(
        '[data-spell]'
      )
      .forEach(
        btn =>
          btn.addEventListener(
            'click',
            () => {

              if (
                btn.dataset.spell ===
                SPELLS[index][1]
              ) {

                score++;

              }

              index++;

              render();

            }
          )
      );

  }


  render();

  showModal();

}


/* MEMORY GAME */

function startMemoryGame() {

  const symbols = [
    '🦉',
    '🪄',
    '🏰',
    '🧪',
    '🧹',
    '🦉',
    '🪄',
    '🏰',
    '🧪',
    '🧹'
  ];


  const shuffled =
    [...symbols].sort(
      () =>
        Math.random() - .5
    );


  let first = null;

  let lock = false;

  let matches = 0;

  let turns = 0;


  document.getElementById(
    'modalContent'
  ).innerHTML = `

    <p class="eyebrow">
      MAGICAL MEMORY
    </p>

    <h2 id="storyModalTitle">
      Find the pairs
    </h2>

    <p id="memoryInfo">
      Turns: 0 • Matches: 0/5
    </p>

    <div
      id="memoryBoard"
      style="
        display:grid;
        grid-template-columns:repeat(5,1fr);
        gap:10px;
        margin-top:18px;
      "
    ></div>

  `;


  const board =
    document.getElementById(
      'memoryBoard'
    );


  shuffled.forEach(
    (symbol, index) => {

      const btn =
        document.createElement(
          'button'
        );

      btn.className =
        'answer-btn';

      btn.dataset.index =
        index;

      btn.textContent =
        '?';

      btn.style.height =
        '72px';

      btn.style.fontSize =
        '26px';


      btn.addEventListener(
        'click',
        () => {

          if (
            lock ||
            btn.classList.contains(
              'matched'
            ) ||
            btn === first
          ) {
            return;
          }


          btn.textContent =
            symbol;


          if (!first) {

            first =
              btn;

            return;

          }


          turns++;

          lock =
            true;


          const firstIndex =
            Number(
              first.dataset.index
            );

          const secondIndex =
            Number(
              btn.dataset.index
            );


          if (
            shuffled[firstIndex] ===
            shuffled[secondIndex]
          ) {

            first.classList.add(
              'matched',
              'correct'
            );

            btn.classList.add(
              'matched',
              'correct'
            );

            matches++;

            lock =
              false;

            first =
              null;

            update();


            if (
              matches === 5
            ) {

              setTimeout(
                () =>
                  finish(),
                250
              );

            }

          } else {

            setTimeout(
              () => {

                btn.textContent =
                  '?';

                first.textContent =
                  '?';

                first =
                  null;

                lock =
                  false;

                update();

              },
              600
            );

          }


          update();

        }
      );


      board.appendChild(
        btn
      );

    }
  );


  function update() {

    document.getElementById(
      'memoryInfo'
    ).textContent =
      `Turns: ${turns} • Matches: ${matches}/5`;

  }


  function finish() {

    document.getElementById(
      'modalContent'
    ).innerHTML = `

      <p class="eyebrow">
        MAGICAL MEMORY
      </p>

      <h2 id="storyModalTitle">
        Castle remembered. ✨
      </h2>

      <p>
        You found all five pairs in
        ${turns}
        turns.
      </p>

      <div
        class="hero-actions"
        style="margin-top:20px;"
      >

        <button
          class="btn btn-primary"
          id="memoryAgain"
        >
          Play Again
        </button>

        <button
          class="btn btn-ghost"
          data-close-modal
        >
          Close
        </button>

      </div>

    `;


    document.getElementById(
      'memoryAgain'
    ).addEventListener(
      'click',
      startMemoryGame
    );


    document
      .querySelectorAll(
        '[data-close-modal]'
      )
      .forEach(
        btn =>
          btn.addEventListener(
            'click',
            closeModal
          )
      );

  }


  showModal();

}


/* EVENTS */

function setupEvents() {

  document
    .getElementById(
      'beginJourney'
    )
    .addEventListener(
      'click',
      () =>
        document
          .getElementById('journey')
          .scrollIntoView({
            behavior:
              'smooth'
          })
    );


  document
    .getElementById(
      'scrollJourney'
    )
    .addEventListener(
      'click',
      () =>
        document
          .getElementById('journey')
          .scrollIntoView({
            behavior:
              'smooth'
          })
    );


  document
    .getElementById(
      'resetProgress'
    )
    .addEventListener(
      'click',
      () => {

        if (
          !confirm(
            'Reset your Hogwarts journey on this device?'
          )
        ) {
          return;
        }


        state.completed =
          [];

        saveState();

        renderTimeline();

        toast(
          'Journey reset. The lantern is ready for a new beginning.'
        );

      }
    );


  document
    .getElementById(
      'showCharacters'
    )
    .addEventListener(
      'click',
      () => {

        document
          .getElementById(
            'characterLibrary'
          )
          .classList.toggle(
            'hidden'
          );


        document.getElementById(
          'showCharacters'
        ).textContent =

          document
            .getElementById(
              'characterLibrary'
            )
            .classList
            .contains('hidden')

            ? 'See More Characters'

            : 'Hide Character Library';

      }
    );


  document
    .getElementById(
      'characterSearch'
    )
    .addEventListener(
      'input',
      renderAllCharacters
    );


  document
    .getElementById(
      'randomQuote'
    )
    .addEventListener(
      'click',
      renderQuote
    );


  document
    .querySelectorAll(
      '.game-btn'
    )
    .forEach(
      btn =>
        btn.addEventListener(
          'click',
          () => {

            const game =
              btn.dataset.game;

            if (
              game === 'sorting'
            ) {
              startSortingHat();
            }

            if (
              game === 'spell'
            ) {
              startSpellGame();
            }

            if (
              game === 'memory'
            ) {
              startMemoryGame();
            }

          }
        )
    );


  document
    .getElementById(
      'menuToggle'
    )
    .addEventListener(
      'click',
      () => {

        const menu =
          document.getElementById(
            'mainNav'
          );

        const expanded =
          document
            .getElementById(
              'menuToggle'
            )
            .getAttribute(
              'aria-expanded'
            ) === 'true';


        menu.classList.toggle(
          'open'
        );


        document
          .getElementById(
            'menuToggle'
          )
          .setAttribute(
            'aria-expanded',
            String(!expanded)
          );

      }
    );


  document
    .querySelectorAll(
      '.main-nav a'
    )
    .forEach(
      a =>
        a.addEventListener(
          'click',
          () => {

            document
              .getElementById(
                'mainNav'
              )
              .classList.remove(
                'open'
              );

            document
              .getElementById(
                'menuToggle'
              )
              .setAttribute(
                'aria-expanded',
                'false'
              );

          }
        )
    );


  document
    .getElementById(
      'modalBackdrop'
    )
    .addEventListener(
      'click',
      closeModal
    );


  document
    .querySelector(
      '[data-close-modal]'
    )
    .addEventListener(
      'click',
      closeModal
    );


  document.addEventListener(
    'keydown',
    e => {

      if (
        e.key === 'Escape'
      ) {

        closeModal();

      }

    }
  );

}


/* PARTICLES */

function createParticles() {

  const host =
    document.getElementById(
      'particles'
    );


  for (
    let i = 0;
    i < 42;
    i++
  ) {

    const dot =
      document.createElement(
        'span'
      );

    dot.className =
      'particle';

    dot.style.left =
      `${Math.random() * 100}%`;

    dot.style.animationDuration =
      `${8 + Math.random() * 14}s`;

    dot.style.animationDelay =
      `${Math.random() * -18}s`;

    dot.style.opacity =
      `${.2 + Math.random() * .7}`;

    host.appendChild(
      dot
    );

  }

}


/* SECURITY / ESCAPING */

function escapeHTML(value) {

  return String(value)
    .replace(
      /[&<>'"]/g,
      ch =>
        ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          "'": '&#39;',
          '"': '&quot;'
        }[ch])
    );

}


function escapeAttr(value) {

  return escapeHTML(value)
    .replace(
      /`/g,
      '&#96;'
    );

}


/* INIT */

function init() {

  renderTimeline();

  renderCharacters();

  renderWorld();

  renderQuote();

  setupEvents();

  createParticles();

}


init();