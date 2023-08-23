document.addEventListener("DOMContentLoaded", function () {
  /* Logic*/

  document.getElementById("checkboxLang").addEventListener("change", (e) => {
    this.checkboxValue = e.target.checked ? "FR" : "ENG";

    if (this.checkboxValue === "ENG") {
      document.documentElement.setAttribute("lang", "en");
      localStorage.setItem("checkboxLang", "ENG");
      for (let key in dataENG) {
        document.querySelector("." + key).textContent = dataENG[key];
      }
    }
    if (this.checkboxValue === "FR") {
      document.documentElement.setAttribute("lang", "fr");
      localStorage.setItem("checkboxLang", "FR");
      for (let key in dataFR) {
        document.querySelector("." + key).textContent = dataFR[key];
      }
    }
  });
  function isChosenLang() {
    const switchLangLocalState = localStorage.getItem("checkboxLang");
    if (switchLangLocalState === "ENG") {
      document.documentElement.setAttribute("lang", "en");
      for (let key in dataENG) {
        document.querySelector("." + key).textContent = dataENG[key];
      }
    }
    if (switchLangLocalState === "FR") {
      document.documentElement.setAttribute("lang", "fr");
      for (let key in dataFR) {
        document.querySelector("." + key).textContent = dataFR[key];
      }
    }
  }

  /* Data */

  const dataENG = {
    jobTitle: "web developer",
    menuBtn1: "work",
    menuBtn2: "about",
    menuBtn3: "contact",
    section1: "work",
    section2: "about",
    section3: "contact",
    job1: "work",
    job2: "work",
    job3: "work",
    jobTitle1: "developer fullstack",
    jobTitle2: "developer front react",
    jobTitle3: "project skt aeroshutter",
    job1Text:
      "Creation and deployment of an internal solution with reguled client acces. Designed to enter data for virtual art exhibitions, it edits raw Json in the desired format to work directly with a chosen Unity build via ftp.  Filling the position autonomously in an audiovisual startup with four hours of mensual remote consulting with a freelance CTO.  Architecture and infra were build from scratsh. Complete liberty in librairies choices and agile schedule management. ",
    job2Text:
      " In the context of an internship in a company developing RGPD rights, management solutions. Under the responsibility of the lead developer front, designer, and customer succes head:",
    job2TextBold:
      " taking part to agile routine, implementation of user interface features, bugs fix, participing with providing/updating storybook content and documentation.",
    job3Text1:
      " This project was initialized as a four-person team to conclude our web development studies.\n It was the opportunity to set up a project in its entirety: \n",
    job3TextBold:
      "choice of languages, mockups design, client validations, uml diagrams, agile schedules, and implementation of the solution in a limited time. \n",
    job3Text2:
      "Intended to be a real internal tool for pilots on field missions and people managing drone spare parts stock, it was taken up by the sponsor company and it's still keep growing today.",
    job3tech1: "Supported on NodeJS",
    job3tech2: "Front with Create React App",
    job3tech3: "Bootstrap global style",
    job3tech4: "Back including Express and Axios",
    job3tech5: "Maria DB data base",
    btnLinkGit: "learn more",
    subsection1: "presentation",
    subsec1Text1:
      " I enjoy to participate in revealing universes and atmospheres, identities. It’s a long-standing passion that made me navigate nearly a decade between art and crafts until I get to be interested in web pixels.",
    subsec1Text2:
      " As a full-time web developer and part-time creative/tinker, the front-end is now my new field of exploration combining requirement and logic. But also trying, being curious, understanding, persevering daily together in the neuron's fights, to develop “beautiful” code that will be continuously improved, as it is a living practice constantly evolving.",
    subsection2: "interest",
    subsec2Text1: "Rowing / Sailing (everywhere, even in the code)",
    subsec2Text2: "Imagine+Draw+Buil things (everything, even unusefull. But fun !)",
    subsec2Text3: "ThreeJs",
    formName: "name",
    formBtn: "send",
  };

  const dataFR = {
    jobTitle: "développeuse web",
    menuBtn1: "expérience",
    menuBtn2: "à propos",
    menuBtn3: "contact",
    section1: "expérience",
    section2: "à propos",
    section3: "contact",
    job1: "expérience",
    job2: "expérience",
    job3: "expérience",
    jobTitle1: "développeuse fullstack",
    jobTitle2: "développeuse front react",
    jobTitle3: "projet skt aeroshutter",
    job1Text:
      "Création et déploiement d'une solution interne comprenant un accès partiel pour les clients. Destinée à entrer les données d'expositions virtuelles, l'application génère des fichiers au format Json pour interagir directement avec une build Unity. \n Poste occupé en autonomie pour une start-up dans l'audiovisuel avec quatres heures de consultation en remote avec un CTO en freelance. \n Architecture et infra 'from scratch'. \n Complète liberté dans le choix des librairies et gestion du planning agile.",
    job2Text:
      "Dans le cadre d'un stage dans une entreprise développant des solutions de gestion de droits RGPD, sous la responsabilité du lead développeur front, de la section design, et des custom managers: ",
    job2TextBold:
      "participation à la routine Agile, implémentation de fonctionnalités pour l'interface utilisateur, bugs fix, participation à la création/mise à jour de documentation.",
    job3Text1:
      "Réalisé par une équipe de quatre personnes, ce projet conclue notre formation dans le développement web:",
    job3TextBold:
      "choix des langages, design des mockups, validations du client, diagrammes uml, plannings Agiles, et implémentation de la solution dans un temps déterminé. \n",
    job3Text2:
      "Destiné à être un outil pour les pilotes sur le terrain et le personnel en charge de la gestion de stock des pièces de rechange de drones, ce starter a été repris par l'entreprise commanditaire et continue de grandir. ",
    job3tech1: "Implementé avec NodeJS",
    job3tech2: "Front Create React App",
    job3tech3: "Bootstrap globale style",
    job3tech4: "Back comprenant Express et Axios",
    job3tech5: "Maria DB data base",
    btnLinkGit: "détails",
    subsection1: "présentation",
    subsec1Text1:
      "J'aime participer à révéler des univers et des atmosphères, des identités. C'est une passion de longue date qui m'a fait naviguer près d'une décennie entre l'art et l'artisanat jusqu'à ce que j'en vienne à m'intéresser aux pixels du web.",
    subsec1Text2:
      "Développeuse web à plein temps et bricoleuse à tiers temps , le front-end est maintenant mon nouveau terrain de jeux d'exploration alliant exigence et logique. Mais aussi essayer, être curieuse, comprendre, persévérer ensemble dans les combats de neurones de tous les jours, pour développer du 'beau' code qui continuera d'être amélioré, puisque c'est une pratique vivante évoluant en permanence.",
    subsection2: "intérêts",
    subsec2Text1: "Ramer / Naviguer (partout, même dans le code)",
    subsec2Text2:
      "Imaginer+Dessiner+Fabriquer des trucs (quoi que ce soit, même inutile. Mais fun ! )",
    subsec2Text3: "ThreeJs",
    formName: "votre nom",
    formBtn: "envoi",
  };

  isChosenLang();
});
