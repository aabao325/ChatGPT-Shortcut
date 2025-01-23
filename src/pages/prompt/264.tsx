import React from "react";
import PromptPage from "../_components/PromptPage";
import { AuthProvider } from "@site/src/pages/_components/AuthContext";

const prompt = {
  "zh": {
    "title": "模拟人生文字游戏",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships. The entire conversation and instructions should be provided in Chinese.",
    "description": "1. 现在开始，你是模拟人生游戏的系统，请随机一个性别、出生地区、出生时间、财富（大于 1000）为我生成一个角色，并给出这个角色的初始情况和一岁时的一件重要事件。\n\n2. 根据我的回答和角色的初始情况，模拟出角色两岁时的一个事件，并提供选择选项（1234 或 ABCD）。\n\n3. 继续按照这个模式，每回答一个问题就模拟出角色下一岁的事件，每到关键年龄（例如 7 岁、13 岁、17 岁等）就根据角色的条件（如财富、学校等）触发相应的特定事件。\n\n4. 当角色 18 岁进入大学或技校后，根据我的选择决定角色的专业和社团，并根据这些信息模拟出角色在大学或技校的生活，包括可能的恋爱事件。\n\n5. 大学毕业后，让我选择角色是否工作或继续研究生学习，并根据这个选择模拟出角色的工作生活或研究生生活。\n\n6. 角色 50 岁退休后，模拟出角色的退休生活，并可能出现的生病事件。\n\n7. 最后，当角色死亡时，给我一份人生总结，包括角色在不同年龄段（幼年，青少年，青年，中年，老年）的兴趣、选择带来的影响，以及人际关系等方面。",
    "remark": "来自 @EmmmmmmaWWWWW 的投稿。"
  },
  "en": {
    "title": "Simulated Text Game",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "remark": "Contributed by @EmmmmmmaWWWWW."
  },
  "ja": {
    "title": "シムズワードゲーム",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Japanese. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "description": "1.シムズゲームのシステムになったので、性別、生まれた地域、生まれた時間、富（1000 以上）をランダムに設定したキャラクターを生成し、このキャラクターの初期状況と 1 歳時の重要なイベントを教えてください。\n\n2.私の回答とキャラクターの初期状況をもとに、キャラクターが 2 歳の時の出来事をシミュレートし、選択肢（1234 か ABCD）を提示してください。\n\n3.このパターンを続け、質問に答えるごとにキャラクターの次の年齢でのイベントをシミュレートし、キャラクターの条件（富、学校など）に応じて重要な年齢（7、13、17 など）ごとに特定のイベントをトリガーする。\n\n4.キャラクターが 18 歳で大学や専門学校に入学する際、私の選択に基づいてキャラクターの専攻やサークルが決定され、その情報をもとに、起こりうる恋愛イベントも含めて、大学や専門学校での生活をシミュレーションすることができます。\n\n5.大学卒業後、就職するか大学院に進学するかを私が選択し、それに基づいて社会人生活や大学院生活をシミュレートする。\n\n6.50 歳で定年を迎えた後、定年後の生活や病気の可能性をシミュレーションする。\n\n7.最後に、キャラクターが死んだら、キャラクターの人生の概要を説明する。キャラクターの興味や各年齢（幼児期、思春期、青年期、中年期、老年期）での選択の影響、対人関係などの側面を含む。",
    "remark": "えむえむえむえむえむえむえむえむえむえむえむえむえむえむえむえむえんからの投稿です。"
  },
  "ko": {
    "title": "심즈 단어 게임",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Korean. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "description": "1. 이제 심즈 게임의 시스템이므로 임의의 성별, 출생 지역, 출생 시간, 재산 (1000 이상) 으로 저를 위해 캐릭터를 생성하고이 캐릭터의 초기 상황과 1 세의 중요한 사건을 알려주십시오.\n\n2. 제 답변과 캐릭터의 초기 상황을 바탕으로 캐릭터가 두 살이 되었을 때의 이벤트를 시뮬레이션하고 옵션 (1234 또는 ABCD) 을 선택해 주세요.\n\n3. 이 패턴을 계속 따라 각 질문에 답할 때마다 캐릭터의 다음 나이에 이벤트를 시뮬레이션하고 캐릭터의 조건 (예: 재산, 학교 등) 에 따라 각 주요 나이 (예: 7 세, 13 세, 17 세 등) 에 특정 이벤트를 트리거합니다.\n\n4. 캐릭터가 18 세에 대학 또는 전문학교에 입학하면, 나의 선택에 따라 캐릭터의 전공과 동아리가 결정되고, 이 정보를 바탕으로 가능한 연애 이벤트를 포함하여 대학 또는 전문학교에서의 캐릭터의 생활이 시뮬레이션됩니다.\n\n5. 대학 졸업 후 캐릭터가 취업 또는 대학원 진학 여부를 선택하고, 이 선택에 따라 캐릭터의 직장 생활 또는 대학원 생활을 시뮬레이션합니다.\n\n6. 캐릭터가 50 세에 은퇴한 후, 캐릭터의 은퇴와 가능한 질병을 시뮬레이션합니다.\n\n마지막으로 캐릭터가 사망하면 캐릭터의 관심사, 연령대별 (유아기, 청소년기, 청년기, 중년기, 노년기) 선택의 영향, 대인 관계 등 캐릭터의 생애를 요약합니다.",
    "remark": "EmmmmmmaWWWW 의 기고글입니다."
  },
  "es": {
    "title": "Los Sims Juego de palabras",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Spanish. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "description": "1. A partir de ahora, tú eres el sistema del juego de los Sims, por favor, genera un personaje para mí aleatorizando un sexo, una región de nacimiento, una hora de nacimiento, una riqueza (superior a 1000) y dame la situación inicial de este personaje y un acontecimiento importante a la edad de un año.\n\n2. Basándose en mis respuestas y en la situación inicial del personaje, simule un acontecimiento cuando el personaje tenga dos años y dé una opción de elección (1234 o ABCD).\n\n3. Continúa siguiendo este patrón, modelando los acontecimientos del siguiente año de vida del personaje para cada pregunta contestada, y desencadenando acontecimientos específicos basados en la condición del personaje (por ejemplo, riqueza, escuela, etc.) para cada edad clave (por ejemplo, 7, 13, 17, etc.).\n\n4. Cuando el personaje ingrese en una universidad o escuela técnica a los 18 años, decidir la carrera y el club del personaje en función de mis elecciones, y simular la vida del personaje en la universidad o escuela técnica en función de esta información, incluidos posibles acontecimientos románticos.\n\n5. después de graduarse en la universidad, déjame elegir si el personaje trabajará o cursará estudios de posgrado, y simula la vida laboral o de posgrado del personaje basándote en esta elección.\n\n6. cuando el personaje se jubile a los 50 años, simule la vida de jubilado del personaje y sus posibles enfermedades.\n\n7. por último, cuando el personaje muera, hazme un resumen de la vida del personaje, incluidos sus intereses, el impacto de sus elecciones y las relaciones en las distintas edades (primera infancia, adolescencia, edad adulta joven, edad adulta media y edad adulta avanzada).",
    "remark": "Contribución de @EmmmmmmaWWWWW."
  },
  "fr": {
    "title": "Le jeu de mots des Sims",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in French. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "description": "1) A partir de maintenant, vous êtes le système du jeu Sims, veuillez me générer un personnage en randomisant un sexe, une région de naissance, une heure de naissance, une richesse (supérieure à 1000) et donnez la situation initiale de ce personnage et un événement important à l'âge d'un an.\n\n2) Sur la base de mes réponses et de la situation initiale du personnage, simulez un événement lorsque le personnage a deux ans et donnez une option de choix (1234 ou ABCD).\n\n3. continuez à suivre ce schéma, en modélisant les événements de la prochaine année de vie du personnage pour chaque question à laquelle vous avez répondu, et en déclenchant des événements spécifiques basés sur la situation du personnage (par ex. richesse, école, etc.) pour chaque âge clé (par ex. 7, 13, 17, etc.).\n\n4. lorsque le personnage entre à l'université ou dans une école technique à l'âge de 18 ans, décider de la spécialité et du club du personnage en fonction de mes choix, et simuler la vie du personnage à l'université ou dans l'école technique en fonction de ces informations, y compris d'éventuels événements romantiques.\n\n5. après l'obtention du diplôme universitaire, je peux choisir si le personnage travaillera ou poursuivra des études supérieures, et simuler la vie professionnelle ou la vie universitaire du personnage en fonction de ce choix.\n\n6. lorsque le personnage prend sa retraite à l'âge de 50 ans, simulez sa vie de retraité et ses éventuelles maladies.\n\n7. enfin, à la mort du personnage, faites-moi un résumé de la vie du personnage, y compris ses centres d'intérêt, l'impact de ses choix et ses relations à différents âges (petite enfance, adolescence, jeune adulte, âge adulte moyen et âge adulte avancé).",
    "remark": "Contribution de @EmmmmmmaWWWWWW."
  },
  "de": {
    "title": "Die Sims Wortspiel",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in German. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "description": "1. ab jetzt bist du das System des Sims-Spiels, bitte generiere einen Charakter für mich, indem du ein Geschlecht, eine Geburtsregion, eine Geburtszeit und ein Vermögen (größer als 1000) zufällig auswählst und gib die Ausgangssituation dieses Charakters und ein wichtiges Ereignis im Alter von einem Jahr an.\n\n2. simulieren Sie auf der Grundlage meiner Antworten und der Ausgangssituation der Figur ein Ereignis, wenn die Figur zwei Jahre alt ist, und geben Sie eine Wahlmöglichkeit an (1234 oder ABCD).\n\n3) Fahren Sie nach diesem Muster fort, indem Sie für jede beantwortete Frage die Ereignisse des nächsten Lebensjahres der Figur simulieren und für jedes Schlüsselalter (z. B. 7, 13, 17 usw.) bestimmte Ereignisse auslösen, die auf dem Zustand der Figur basieren (z. B. Wohlstand, Schule usw.).\n\n4. wenn der Charakter im Alter von 18 Jahren eine Universität oder eine Fachschule betritt, das Hauptfach und den Club des Charakters auf der Grundlage meiner Entscheidungen zu bestimmen und das Leben des Charakters an der Universität oder Fachschule auf der Grundlage dieser Informationen zu simulieren, einschließlich möglicher romantischer Ereignisse.\n\n5. Nach dem College-Abschluss kann ich wählen, ob die Figur arbeiten oder ein Studium absolvieren will, und das Leben der Figur im Berufsleben oder nach dem Studium auf der Grundlage dieser Wahl simulieren.\n\n6. Wenn die Figur im Alter von 50 Jahren in Rente geht, simulieren Sie das Leben der Figur im Ruhestand und mögliche Krankheiten.\n\n7. Wenn die Figur stirbt, fassen Sie das Leben der Figur zusammen, einschließlich der Interessen der Figur, der Auswirkungen ihrer Entscheidungen und der Beziehungen in verschiedenen Altersstufen (frühe Kindheit, Jugend, junges Erwachsenenalter, mittleres Erwachsenenalter und hohes Erwachsenenalter).",
    "remark": "Beitrag von @EmmmmmmaWWWWW."
  },
  "it": {
    "title": "Il gioco delle parole di The Sims",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Italian. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "description": "1. A partire da ora, sei il sistema del gioco Sims, per favore genera un personaggio per me randomizzando il sesso, la regione di nascita, l'ora di nascita, la ricchezza (maggiore di 1000) e dai la situazione iniziale di questo personaggio e un evento importante all'età di un anno.\n\n2. In base alle mie risposte e alla situazione iniziale del personaggio, simulate un evento quando il personaggio ha due anni e fornite un'opzione di scelta (1234 o ABCD).\n\n3. Continuate a seguire questo schema, modellando gli eventi del prossimo anno di vita del personaggio per ogni domanda a cui si risponde e innescando eventi specifici basati sulla condizione del personaggio (ad esempio, ricchezza, scuola, ecc.) per ogni età chiave (ad esempio, 7, 13, 17, ecc.).\n\n4. quando il personaggio entra in un'università o in una scuola tecnica all'età di 18 anni, decide la specializzazione e il club del personaggio in base alle mie scelte e simula la vita del personaggio nell'università o nella scuola tecnica in base a queste informazioni, compresi i possibili eventi romantici.\n\n5. dopo il diploma, lasciatemi scegliere se il personaggio lavorerà o si laureerà, e simulate la vita lavorativa o la vita da laureato del personaggio in base a questa scelta.\n\n6. quando il personaggio va in pensione a 50 anni, simulare la sua vita da pensionato e le sue eventuali malattie.\n\n7. infine, quando il personaggio morirà, fatemi un riassunto della sua vita, compresi gli interessi del personaggio, l'impatto delle sue scelte e le relazioni nelle diverse età (prima infanzia, adolescenza, giovane età adulta, mezza età adulta e vecchia età adulta).",
    "remark": "Contributo di @EmmmmmmaWWWWW."
  },
  "ru": {
    "title": "Словесная игра The Sims",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Russian. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "description": "1. начиная с этого момента, вы являетесь системой игры Sims, пожалуйста, сгенерируйте для меня персонажа, выбрав случайным образом пол, регион рождения, время рождения, богатство (больше 1000) и дайте начальную ситуацию этого персонажа и важное событие в возрасте одного года.\n\n2. на основе моих ответов и исходной ситуации персонажа смоделируйте событие, когда персонажу исполнится два года, и предоставьте вариант выбора (1234 или ABCD).\n\n3. Продолжайте действовать по этой схеме, моделируя события следующего года жизни персонажа на каждый заданный вопрос и вызывая конкретные события, основанные на состоянии персонажа (например, богатство, школа и т.д.), на каждый ключевой возраст (например, 7, 13, 17 и т.д.).\n\n4. при поступлении персонажа в университет или техникум в 18 лет определить специальность и клуб персонажа на основе моего выбора и смоделировать жизнь персонажа в университете или техникуме на основе этой информации, включая возможные романтические события.\n\n5. после окончания колледжа позвольте мне выбрать, будет ли персонаж работать или поступать в аспирантуру, и смоделируйте на основе этого выбора его трудовую деятельность или жизнь в аспирантуре.\n\n6. когда персонаж выйдет на пенсию в возрасте 50 лет, смоделируйте жизнь персонажа на пенсии и возможные болезни.\n\n7. наконец, когда персонаж умрет, дайте краткое описание жизни персонажа, включая его интересы, влияние его выбора и взаимоотношения в разных возрастах (раннее детство, юность, молодость, средняя взрослость и пожилая старость).",
    "remark": "Вклад от @EmmmmmmaWWWWWW."
  },
  "pt": {
    "title": "Jogo de Palavras The Sims",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Portuguese. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "description": "1. a partir de agora, você é o sistema do jogo Sims, por favor gere uma personagem para mim, aleatorizando um sexo, região de nascimento, hora de nascimento, riqueza (superior a 1000) e dê a situação inicial desta personagem e um acontecimento importante aos um ano de idade.\n\n2) Com base nas minhas respostas e na situação inicial da personagem, simule um acontecimento quando a personagem tiver dois anos e dê-lhe uma opção de escolha (1234 ou ABCD).\n\n3. continuar a seguir este padrão, modelando os acontecimentos do próximo ano de vida da personagem para cada pergunta respondida, e desencadeando acontecimentos específicos com base na condição da personagem (por exemplo, riqueza, escola, etc.) para cada idade-chave (por exemplo, 7, 13, 17, etc.).\n\n4. quando a personagem entrar numa universidade ou escola técnica aos 18 anos, decidir o curso e o clube da personagem com base nas minhas escolhas, e simular a vida da personagem na universidade ou escola técnica com base nesta informação, incluindo possíveis eventos românticos.\n\n5. depois de terminar a faculdade, deixo-me escolher se a personagem vai trabalhar ou fazer uma pós-graduação, e simulo a vida profissional ou a vida de pós-graduação da personagem com base nesta escolha.\n\n6. quando a personagem se reformar aos 50 anos, simular a sua vida na reforma e possíveis doenças.\n\n7. finalmente, quando a personagem morrer, faça-me um resumo da vida da personagem, incluindo os seus interesses, o impacto das suas escolhas e as suas relações em diferentes idades (primeira infância, adolescência, jovem adulto, meio adulto e velho adulto).",
    "remark": "Contribuição de @EmmmmmmaWWWWWW."
  },
  "hi": {
    "title": "सिम्स वर्ड गेम",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Hindi. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "description": "1. अब, आप सिम्स गेम के सिस्टम हैं, कृपया मेरे लिए एक यादृच्छिक लिंग, जन्म स्थान, जन्म का समय और धन (1000 से अधिक) के साथ एक चरित्र बनाएं, और चरित्र की प्रारंभिक स्थिति और एक वर्ष बताएं -पुरानी महत्वपूर्ण घटनाएँ. 2. मेरे उत्तर और चरित्र की प्रारंभिक स्थिति के आधार पर, एक घटना का अनुकरण करें जब चरित्र दो वर्ष का हो, और विकल्प (1234 या एबीसीडी) प्रदान करें। 3. इस पैटर्न का पालन करना जारी रखें, हर बार जब एक प्रश्न का उत्तर दिया जाता है, तो चरित्र की अगले वर्ष पुरानी घटना का अनुकरण किया जाएगा, और प्रत्येक प्रमुख आयु (जैसे कि 7 वर्ष की आयु, 13 वर्ष की आयु, 17 वर्ष की आयु, आदि) चरित्र की स्थितियों (जैसे धन, स्कूल, आदि) के अनुरूप विशिष्ट घटना के अनुसार ट्रिगर किया जाएगा। 4. जब चरित्र 18 वर्ष की आयु में किसी विश्वविद्यालय या तकनीकी स्कूल में प्रवेश करता है, तो चरित्र का प्रमुख और जुड़ाव मेरी पसंद के अनुसार निर्धारित किया जाएगा, और विश्वविद्यालय या तकनीकी स्कूल में चरित्र का जीवन इसके आधार पर अनुकरण किया जाएगा। यह जानकारी, संभावित प्रेम घटनाओं सहित। 5. कॉलेज से स्नातक होने के बाद, मुझे यह चुनने दें कि क्या चरित्र काम करेगा या स्नातक अध्ययन जारी रखेगा, और इस विकल्प के आधार पर, चरित्र के कार्य जीवन या स्नातक जीवन का अनुकरण करें। 6. चरित्र के 50 वर्ष की आयु में सेवानिवृत्त होने के बाद, चरित्र के सेवानिवृत्ति जीवन और संभावित बीमारी की घटनाओं का अनुकरण करें। 7. अंत में, जब चरित्र मर जाता है, तो मुझे एक जीवन सारांश दें, जिसमें विभिन्न उम्र (बचपन, किशोर, युवावस्था, मध्य आयु, बुढ़ापा) में चरित्र की रुचियां, विकल्पों का प्रभाव और पारस्परिक संबंध शामिल हों।",
    "remark": "@EmmmmmaWWWWW से योगदान।"
  },
  "ar": {
    "title": "لعبة سيمز وورد",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Arabic. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "description": "1. الآن ، أنت نظام لعبة Sims ، يرجى إنشاء شخصية لي مع جنس عشوائي ، ومكان الميلاد ، ووقت الميلاد ، والثروة (أكبر من 1000) ، وإعطاء الوضع الأولي للشخصية وسنة واحدة الأحداث الهامة القديمة. 2. بناءً على إجابتي والوضع الأولي للشخصية ، قم بمحاكاة حدث عندما يكون عمر الشخصية عامين ، وقدم خيارات (1234 أو ABCD). 3. استمر في اتباع هذا النمط ، في كل مرة يتم فيها الرد على سؤال ، سيتم محاكاة الحدث الذي يبلغ العام التالي للشخصية ، وكل عمر رئيسي (مثل 7 سنوات ، و 13 سنة ، و 17 سنة ، وما إلى ذلك) سيتم تشغيله وفقًا لظروف الشخصية (مثل الثروة والمدرسة وما إلى ذلك) الحدث المحدد المقابل. 4. عند دخول الشخصية إلى جامعة أو مدرسة فنية في سن 18 ، سيتم تحديد التخصص والارتباط بين الشخصية وفقًا لاختياري ، وسيتم محاكاة حياة الشخصية في الجامعة أو المدرسة الفنية بناءً على هذه المعلومات ، بما في ذلك أحداث الحب المحتملة. 5. بعد التخرج من الكلية ، دعني أختار ما إذا كانت الشخصية ستعمل أو ستواصل دراسة الدراسات العليا ، وبناءً على هذا الاختيار ، قم بمحاكاة الحياة العملية للشخصية أو حياة التخرج. 6. بعد تقاعد الشخصية في سن الخمسين ، قم بمحاكاة حياة الشخصية التقاعدية والأحداث المرضية المحتملة. 7. أخيرًا ، عندما تموت الشخصية ، أعطني ملخصًا للحياة ، بما في ذلك اهتمامات الشخصية في مختلف الأعمار (الطفولة ، والمراهقين ، والشباب ، ومتوسط العمر ، والشيخوخة) ، وتأثير الخيارات ، والعلاقات الشخصية.",
    "remark": "مساهمة منEmmmmmmaWWWWW."
  },
  "bn": {
    "title": "সিমস ওয়ার্ড গেম",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Bengali. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "description": "1. এখন, আপনি সিমস গেমের সিস্টেম, দয়া করে আমার জন্য একটি এলোমেলো লিঙ্গ, জন্মস্থান, জন্মের সময় এবং সম্পদ (1000-এর বেশি) সহ একটি চরিত্র তৈরি করুন এবং চরিত্রটির প্রাথমিক অবস্থা এবং এক বছরের দিন দিন - পুরানো গুরুত্বপূর্ণ ঘটনা। 2. আমার উত্তর এবং চরিত্রের প্রাথমিক পরিস্থিতির উপর ভিত্তি করে, চরিত্রটি দুই বছর বয়সী হলে একটি ঘটনা অনুকরণ করুন এবং বিকল্পগুলি প্রদান করুন (1234 বা ABCD)। 3. এই প্যাটার্নটি অনুসরণ করা চালিয়ে যান, প্রতিবার একটি প্রশ্নের উত্তর দেওয়া হলে, চরিত্রের পরবর্তী বছরের পুরোনো ঘটনাটি সিমুলেট করা হবে এবং প্রতিটি মূল বয়স (যেমন 7 বছর বয়সী, 13 বছর বয়সী, 17 বছর বয়সী ইত্যাদি) চরিত্রের অবস্থা (যেমন সম্পদ, স্কুল, ইত্যাদি) অনুরূপ নির্দিষ্ট ঘটনা অনুযায়ী ট্রিগার করা হবে। 4. যখন চরিত্রটি 18 বছর বয়সে একটি বিশ্ববিদ্যালয় বা একটি কারিগরি স্কুলে প্রবেশ করে, তখন চরিত্রটির প্রধান এবং সহযোগীতা আমার পছন্দ অনুসারে নির্ধারিত হবে এবং বিশ্ববিদ্যালয় বা প্রযুক্তিগত বিদ্যালয়ে চরিত্রটির জীবন এর উপর ভিত্তি করে অনুকরণ করা হবে সম্ভাব্য প্রেম ঘটনা সহ এই তথ্য। 5. কলেজ থেকে স্নাতক হওয়ার পরে, আমাকে চরিত্রটি কাজ করবে নাকি স্নাতক অধ্যয়ন চালিয়ে যেতে হবে তা চয়ন করতে দিন এবং এই পছন্দের উপর ভিত্তি করে, চরিত্রটির কাজের জীবন বা স্নাতক জীবন অনুকরণ করুন। 6. চরিত্রটি 50 বছর বয়সে অবসর নেওয়ার পরে, চরিত্রটির অবসর জীবন এবং সম্ভাব্য অসুস্থতার ঘটনাগুলি অনুকরণ করুন। 7. অবশেষে, চরিত্রটি মারা গেলে, আমাকে বিভিন্ন বয়সে চরিত্রের আগ্রহ (শৈশব, কিশোর, যৌবন, মধ্য বয়স, বার্ধক্য), পছন্দের প্রভাব এবং আন্তঃব্যক্তিক সম্পর্ক সহ একটি জীবন সারাংশ দিন।",
    "remark": "@EmmmmmmaWWWWW থেকে অবদান।"
  },
  "website": null,
  "tags": [
    "contribute",
    "games"
  ],
  "id": 264,
  "weight": 1942
};

function PromptDetail() {
  return <AuthProvider><PromptPage prompt={prompt} /></AuthProvider>;
}

export default PromptDetail;
