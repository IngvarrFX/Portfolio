// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import jsIcon from "./images/javascript.svg"
import tsIcon from "./images/typescript.svg"
import reactIcon from "./images/react.svg"
import sassIcon from "./images/sass.svg"
import testingIcon from "./images/testing.svg"
import reduxIcon from "./images/redux.svg"
import myPhoto from "./images/IMG_8330.jpg"

//Projects Covers
import todolist from "./images/todolist.png"
import englishForKids from "./images/english-for-kids.jpg"
import socialNetwork from "./images/social-network-cover.png"
import momentum from "./images/momentum.jpg"
import shelter from "./images/shelter.jpg"
import covidDashboard from "./images/covid-dashboard.jpg"
import cards from "./images/cards.jpg"
import restaurant from "./images/restaurant.jpg"
import keyboard from "./images/keyboard.jpg"
import counter from "./images/Counter.png"


// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"

export default {
    //   Header Details ---------------------
    name: "Igor",
    headerTagline: [
        //Line 1 For Header
        "Igor Nurov.",
        //Line 2 For Header
        "I build things for the web."
    ],
    //   Header Paragraph
    headerParagraph:
        "Front End Developer ",

    //Contact Email
    contactEmail: "nurov.mj@gmail.com",

    // End Header Details -----------------------

    // Work Section ------------------------
    projects: [
        {
            title: "Social network",
            descriprion:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

            imageSrc:
            socialNetwork,
            url: "https://github.com/IngvarrFX/samurai_way",
            page: "https://ingvarrfx.github.io/samurai_way/",
        },
        {
            title: "Cards",
            descriprion:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
            imageSrc:
            cards,
            url: "https://github.com/YauhenDavidovich/card-learning",
            page: "https://yauhendavidovich.github.io/card-learning",
        },
        {
            title: "Todo list",
            descriprion:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
            imageSrc:
            todolist,
            url: "https://ingvarrfx.github.io/Todolist/",
            page: "https://github.com/IngvarrFX/Todolist"
        },
        {
            title: "English for kids",
            descriprion:
                "App for learning English words by children.",
            imageSrc:
            englishForKids,
            url: "https://github.com/YauhenDavidovich/rsschool2020-2021/tree/english-for-kids/english-for-kids",
            page: "https://yauhendavidovich-english-for-kids.netlify.app/",
        },
        {
            title: "Covid Dashboard",
            descriprion:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

            imageSrc:
            covidDashboard,
            url: "https://github.com/nkrivitsky/COVID-19-Dashboard/tree/develop",
            page: "https://covid-dashboard-yauhendavidovich-nkrivitsky-omaslov.netlify.app/"
        },
        {
            title: "Momentum",
            descriprion:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

            imageSrc:
            momentum,
            url: "https://github.com/YauhenDavidovich/rsschool2020-2021/tree/momentum/momentum",
            page: "https://rolling-scopes-school.github.io/yauhendavidovich-JS2020Q3/momentum/"
        },
        {
            title: "Shelter",
            descriprion:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

            imageSrc:
            shelter,
            url: "https://github.com/YauhenDavidovich/rsschool2020-2021/tree/shelter",
            page: "https://rolling-scopes-school.github.io/yauhendavidovich-JS2020Q3/shelter/pages/main/main.html",
        },
        {
            title: "Counter",
            descriprion:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

            imageSrc:
            counter,
            url: "https://github.com/IngvarrFX/Counter",
            page: "https://ingvarrfx.github.io/Counter/",
        },
    ],

    // End Work Section -----------------------

    // About Secton --------------
    aboutParaOne:
        "I come from a provincial town in Belarus, currently living in ~~Cracow~~ on the road. My interest in web development started back in 2020 when I enrolled in a course for aspiring developers at RSSchool.",
    aboutParaTwo:
        "Fast-forward to today, and have experience in creating SPA applications using React, Redux, ES6+, HTML, CSS. My main focus these days is to build a successful career in commercial software development as a Front-end / JavaScript / React developer.",
    aboutParaThree:
        "My place in the world seems to be at the intersection of creativity and logic. All projects are a problem to be solved, whether it’s to do with design or code—only the tools change. \n" +
        "I'm quietly confident, naturally curious, and perpetually working on improving my chops one code problem at a time.\n",
    aboutParaFour:
        "I am always experimenting, always learning, and never bored.",

    aboutImage: myPhoto,

    //   End About Section ---------------------

    // Skills Section ---------------

    //   Import Icons from the top and link it here

    skills: [
        {
            img: htmlIcon,
            descriprion:
                "HTML5",
        },
        {
            img: cssIcon,
            descriprion:
                "CSS3",
        },
        {
            img: jsIcon,
            descriprion:
                "JavaScript",
        },
        {
            img: tsIcon,
            descriprion:
                "Typescript",
        },
        {
            img: reactIcon,
            descriprion:
                "React",
        },
        {
            img: reduxIcon,
            descriprion:
                "Redux",
        },
        {
            img: testingIcon,
            descriprion:
                "Unit Tests, Storybook, Jest",
        },
        {
            img: sassIcon,
            descriprion:
                "Sass",
        },
    ],

    // End Skills Section --------------------------

    //   Promotion Section --------------------------

    promotionHeading: "СV",
    promotionPara:
        "https://drive.google.com/file/d/1CMyOaAilLa6MyculaMD_rDmQEjo_KPsj/view?usp=sharing",
    // End Promotion Section -----------------

    //   Contact Section --------------

    contactSubHeading: "Let's create your next experience together",
    social: [
        // Add Or Remove The Link Accordingly
        {
            img: githubIcon,
            url: "https://github.com/ingvarrfx"
        },
        {
            img: linkedinIcon,
            url: "https://www.linkedin.com/in/igor-nurov-0b29a720a/",
        },
    ],

    // End Contact Section ---------------
}
