const state = {
  greetings: [
    "Hello World!",
    "¡Hola Mundo!",
    "Salut Monde!",
    "Olá Mundo!",
    "Hallo Wereld!",
    "Ciao Mondo!",
    "你好，世界!",
  ],
  social: [
    {
      name: "correo",
      link: "mailto:erikaespejo95@gmail.com",
      image: "./icons/icon-important_mail.svg",
      altTextImage: "icono de correo electronico",
    },
    {
      name: "github",
      link: "https://github.com/ErikaEspejo",
      image: "./icons/icon-github.svg",
      altTextImage: "icono de github",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/erikaespejo/",
      image: "./icons/icon-linkedin.svg",
      altTextImage: "icono de linkedin",
    },
  ],
  projects: [
    {
      title: "Twitto API",
      projectClass: "twitto",
      thumbnail: "./images/twittoapi.png",
      altTextThumbnail: "twitto api mockups",
      description:
        "Twitto is a simulation of the social network 'Twitter', which allows you to create a user, log in, create tweets and see everything that other users post in real time.",
      codeURL: "https://github.com/ErikaEspejo/twitter-api",
      projectURL: "https://api-twitto.herokuapp.com/",
    },
    {
      title: "Countdown",
      projectClass: "countdown",
      thumbnail: "./images/countdown-mockup.png",
      altTextThumbnail: "countdown mockup",
      description:
        "This is a frontend app that allows you to start a countdown with two options: selecting a target date or typing the number of days to countdown.",
      codeURL: "https://github.com/ErikaEspejo/countdown",
      projectURL: "https://countdown-smoky.vercel.app/",
    },
    {
      title: "Monster Battle",
      projectClass: "monster-battle",
      thumbnail: "./images/monsterbattle-mockup.png",
      altTextThumbnail: "Monster Battle mockup",
      description:
        "This project is a game where you can play against another player by using a random pokemon. Its characters are taken from PokeAPI.",
      codeURL: "https://github.com/ErikaEspejo/monster-battle",
      projectURL: "https://monster-battle.vercel.app/",
    },
  ],
  skills: [
    "Javascript",
    "mongo db",
    "node js",
    "express",
    "git",
    "css3",
    "jquery",
    "react",
    "bootstrap",
    "html5",
  ],
  index: 0,
};
