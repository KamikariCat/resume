import React, {useState} from 'react';

const initialSocialImages = [
    {
        image: '/linkedin.svg',
        link: 'https://www.linkedin.com/in/kamikari/',
        alt: 'linkedin'
    },
    {
        image: '/telegram.svg',
        link: 'tg://resolve?domain=iamnori>',
        alt: 'telegram'
    },
    {
        image: '/github.svg',
        link: 'https://github.com/KamikariCat',
        alt: 'github'
    }];

export default function About (props) {
    const [socialImages] = useState(initialSocialImages);
    const resumeEn = [
        `Now I’m working in company like a front-end developer. There i work with  form constructor. While develop use Vue/Vuex. Have a year of experience using JavaScript. Active using version-control system - Git. Also have an experience using docker. While work got development skills with D3(made some charts). Besides Vue i learn React in i sheaf Redux. Wanna use it like main developing  set.`,
        `Sure have good knowledge with HTML & CSS. Alsow worked with SCSS and SASS (prefer Stylus). Familiar with bootstrap & Foundation.`,
        `Earlier i used to work with PHP and Laravel. Made the similarity of MVC framework  in PHP(gallery). I can worth with one(i got hired like a back-end)but i dont wanna work with PHP more.`,
        `Not in commercial development(for myself) got knowlage in NodeJS, Koa and expess. Also i know Socket.Io and MongoDB and mongoose driver. Daily i use Ramda (something like Lodash)`,
        `Also i wrote chat bots for Discord and Telegram (JS) and several another chats using browser console and JQuery. I don’t really wanna work with one cuz i find it little bulky.`,
        `In future i plan to be a React developer and develop as NodeJS programmer.`
    ];
    const resumeRu = [
        `Сейчас я работаю в компании на должности фронтенд разработчика. Где работаю над конструктором форм. В работе использую Vue/Vuex. Имею год опыта работы. Ведется активная работа с системами контроля версий Git. Так же имеется небольшой опыт работы с Docker. Также получил навыки разработки графиков используя библиотеку D3. Помимо Vue изучаю React/Redux. Планирую использовать его как основную библиотеку для разработки.`,
        `Естественно хорошие знания html & css. Так же работал  с SCSS и SASS (предпочитаю Stylus). Знаком с Bootstrap & Foundation`,
        `Ранее изучал PHP, Laravel. Писал подобие MVC фекймворка на PHP (сайт-галерея), так что умею работать и с ними(на работу принимали как Backend разработчика) однако  в дальнейшем не хочу работать с ними.`,
        `Не в коммерческой разработке(для себя) получил навыки Node.js, Koa, Express. Также знаком с Socket.io, MongoDb и драйвером Mongoose.`,
        `В повседневной работе использую Ramda.js(что-то вроде Lodash)`,
        `Так же писал чат ботов для Discord и Telegram(JavaScript) и некоторых других других чатов, что работают в браузере(console & JQuery)`,
        `В разработке я не очень хотел бы использовать JQuery(как по мне  так он сильно громоздкий).`,
        `Дальше планирую развиваться как React разработчик, однако равно с этим мне интересен NodeJs.`
    ];
    return (
        <div className="column about">
            <span className="header-text mobile_none">{!props.ru ? 'About' : 'O себе'}</span>
            <div className="about_text">{ props.ru ? resumeRu.map((p, i) => <p key={i}>{p}</p>) : resumeEn.map((p, i) => <p key={i}>{p}</p>) }</div>
            <div className="social_button_mobile">
                {socialImages.map((element, index) =>
                    <div key={index} className="social_button mobile_block">
                        <a href={element.link}>
                            <img src={element.image} alt={element.alt}/>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
