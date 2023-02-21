import { createContext, useState, useRef, useEffect } from "react";

import PicOne from '../assets/slider/1.jpg';
import PicTwo from '../assets/slider/2.jpg';
import PicThree from '../assets/slider/3.jpg';

import SlickPic1 from '../assets/slider/1.jpg';
import SlickPic2 from '../assets/slider/2.jpg';
import SlickPic3 from '../assets/slider/3.jpg';
import SlickPic4 from '../assets/slider/4.jpg';
import SlickPic5 from '../assets/slider/5.jpg';
import SlickPic6 from '../assets/slider/6.jpg';

import aboutSliderPic1 from '../assets/about/about-slider/1.jpg';
import aboutSliderPic2 from '../assets/about/about-slider/2.jpg';
import aboutSliderPic3 from '../assets/about/about-slider/3.jpg';
import aboutSliderPic4 from '../assets/about/about-slider/4.jpg';
import aboutSliderPic5 from '../assets/about/about-slider/5.jpg';
import aboutSliderPic6 from '../assets/about/about-slider/6.jpg';

import PriceSocialLogo from '../assets/price/socials/ASLC.png';
import PriceSocialLogo2 from '../assets/price/socials/AUTOLC.png';
import PriceSocialLogo3 from '../assets/price/socials/mobile_Color.png';
import PriceSocialLogoBW from '../assets/price/socials/ASLBW.png';
import PriceSocialLogoBW2 from '../assets/price/socials/AUTOLBW.png';
import PriceSocialLogoBW3 from '../assets/price/socials/mobile_BW.png';

import {
    faMapLocationDot, faHandshake, faFlag, faGlobe, faPhoneVolume,
    faSignal, faRoad, faVideo, faMessage, faCar, faDollarSign, 
    faPeopleGroup, faEnvelope, faLocationDot, faPhone,
    faWrench, faScrewdriverWrench, 
 } from '@fortawesome/free-solid-svg-icons';

import { faFacebook, faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";

const headerLinksData = [
    {
        link: '',
        title: 'Главная'
    },
    {
        link: 'about',
        title: 'О нас'
    },
    {
        link: 'price',
        title: "Стоимость услуг"
    },
    {
        link: 'contacts',
        title: "Контакты"
    }
];

const slickSliderData = [
    {
        src: SlickPic4,
        href: '../assets/slider/1.jpg',
    },
    {
        src: SlickPic5,
        href: '../assets/slider/2.jpg',
    },
    {
        src: SlickPic6,
        href: '../assets/slider/3.jpg',
    },
];

const secondSliderData = [
    {
        className: 'first',
        icon: faMapLocationDot,
        title: 'Территориальная привязанность.',
        descr: 'Наш офис находится возле Кёльна, что позволяет полностью контролировать все этапы сделки: начиная с осмотра авто, заканчивая оформлением документов и передачей транспортного средства новому владельцу.',
    },
    {
        className: 'second',
        icon: faHandshake,
        title: 'Отличные результаты работы.',
        descr: 'Этим делом мы начали заниматься еще с 2015 года. За столь продолжительное время успели досконально разобраться во всех тонкостях покупки авто в Германии, имеем большой опыт проведения действительно «чистых» сделок.',
    },
    {
        className: 'third',
        icon: faFlag,
        title: 'Отчетность.',
        descr: 'Благодаря фото и видео фиксации каждый клиент получает полный отчет проделанной работы, поэтому ему нет необходимости лететь в страну для выбора подходящей модели.',
    },
    {
        className: 'fourth',
        icon: faGlobe,
        title: 'Мобильность.',
        descr: 'Машины из Германии для вас будут подобраны в максимально короткое время в полном соответствии выдвинутым ранее требованиям.',
    },
    {
        className: 'fifth',
        icon: faPhoneVolume,
        title: 'Связь в рабочее время офиса.',
        descr: 'Вы будете в курсе предпринятых нами шагов. Оповещение клиента производится посредством телефонных звонков, электронной почты.',
    },
];

const mainHowToBuyData = [
    {   
        number: 'first',
        img: PicOne,
        title: 'Найти и связаться с нами.',
        descr: 'Для того, чтобы заказать осмотр автомобиля в нашей компании, найдите нужный автомобиль или запчасти на сайтах поиска и свяжитесь с нами на странице заказа. В связи с большим количеством запросов,поиском автомобиля или запчастей лучше всего Вам заняться самостоятельно.',
        button: 'Заказать осмотр авто',
        link: '/contacts'
    },
    {   
        number: 'second',
        img: PicTwo,
        title: 'Осмотр автомобиля.',
        descr: 'После обработки заявки мы согласовываем все детали по автомобилю. Далее мы выезжаем на осмотр согласованного с Вами авто.Вы получаете полный видео- и фотоотчет с осмотра, а также нашу рекомендацию, стоит покупать данный автомобиль или нет.',
        button: 'Стоимость услуг',
        link: '/price'
    },
    {   
        number: 'third',
        img: PicThree,
        title: 'Покупка и документы.',
        descr: 'После успешного осмотра мы помогаем Вам совершить покупку автомобиля в Германии,  а также оформляем все необходимые документы, номера и страховку. Не переживайте, какие документы Вам будут нужны на таможне, потому что мы их подготовим, а также проконсультируем Вас по любым Вашим вопросам.',
        button: 'Контакты',
        link: '/contacts'
    },
];

const signsData = [
    {   
        icon: faSignal,
        title: 'Результаты',
        descr: 'В автомобильной сфере мы работаем с 2007 года. За это время мы накопили огромный опыт проведения чистых сделок от А до Я.',
    },
    {   
        icon: faRoad,
        title: 'Мобильность',
        descr: 'В кратчайшие сроки мы осматриваем найденный Вами авто на сайтах поиска и предоставляем подробную информацию по нему.',
    },
    {   
        icon: faVideo,
        title: 'Отчетность',
        descr: 'Предоставляем Фото-Видеоотчет с места осмотра в режиме онлайн. Вы присутствуете на осмотре в реальном времени.',
    },
    {   
        icon: faMessage,
        title: 'Всегда на связи',
        descr: 'На протяжении всей сделки мы держим Вас в курсе всех событий как по телефону так и электронными сообщениями.',
    },
   
];

const infoData = [
    {   
        icon: faCar,
        title: '1.000',
        descr: 'Продано более',
    },
    {   
        icon: faDollarSign,
        title: '$5.000.000',
        descr: 'На суму более, чем',
    },
    {   
        icon: faPeopleGroup,
        title: '100%',
        descr: 'Довольных клиентов',
    },
];

const footerData = [
    {   
        icon: faEnvelope,
        text: 'info@gmail.com',
        text2: 'info@gmail.com',
    },
    {   
        icon: faLocationDot,
        text: 'Genter Str. 6,',
        text2: '50672 Köln, Germany',
    },
    {   
        icon: faPhone,
        text: 'Tel: 123-456-7890',
        text2: 'Fax: 123-456-7890',
    },
];

const aboutSliderData = [
    {
        src: aboutSliderPic6,
        href: '../assets/about/about-slider/1.jpg',
        name: 'John',
        position: 'Cars Export',
        descr: 'Внимание и честность. Я всегда на стороне покупателя и готов бороться до конца, пока не найду хороший автомобиль для наших заказчиков.'
    },
    {
        src: aboutSliderPic2,
        href: '../assets/about/about-slider/2.jpg',
        name: 'John',
        position: 'Cars Export',
        descr: 'Внимание и честность. Я всегда на стороне покупателя и готов бороться до конца, пока не найду хороший автомобиль для наших заказчиков.'
    },
    {
        src: aboutSliderPic3,
        href: '../assets/about/about-slider/3.jpg',
        name: 'John',
        position: 'Cars Export',
        descr: 'Внимание и честность. Я всегда на стороне покупателя и готов бороться до конца, пока не найду хороший автомобиль для наших заказчиков.'
    },
    {
        src: aboutSliderPic4,
        href: '../assets/about/about-slider/4.jpg',
        name: 'John',
        position: 'Cars Export',
        descr: 'Внимание и честность. Я всегда на стороне покупателя и готов бороться до конца, пока не найду хороший автомобиль для наших заказчиков.'
    },
    {
        src: aboutSliderPic5,
        href: '../assets/about/about-slider/5.jpg',
        name: 'John',
        position: 'Cars Export',
        descr: 'Внимание и честность. Я всегда на стороне покупателя и готов бороться до конца, пока не найду хороший автомобиль для наших заказчиков.'
    },
    {
        src: aboutSliderPic6,
        href: '../assets/about/about-slider/6.jpg',
        name: 'John',
        position: 'Cars Export',
        descr: 'Внимание и честность. Я всегда на стороне покупателя и готов бороться до конца, пока не найду хороший автомобиль для наших заказчиков.'
    },
];

const pickUpData = [
    {
        icon: faWrench,
        title: 'Осмотр автомобиля (цена до 50 000€) - 260€.',
        descr: 'Технический осмотр. Проверка лакокрасочного покрытия. Проверка электронных блоков управления на ошибки. Проверка пробега автомобиля. Тест драйв.',
    },
    {
        icon: faScrewdriverWrench,
        title: 'Осмотр автомобиля (цена выше 50 000€) - ИНДИВИДУАЛЬНО.',
        descr: 'Технический осмотр. Проверка лакокрасочного покрытия. Проверка электронных блоков управления на ошибки. Проверка пробега автомобиля. Тест драйв.',
    },
    {
        icon: faCar,
        title: 'Транспортные расходы.',
        descr: 'Фиксированная плата за дорогу к месту осмотра (считается только в одну сторону) — 1.8 евро/км.',
    },
];

const priceListData = [
    "Предоставление информации для клиентов на нашем сайте.",
    "Предварительные переговоры по телефону с продавцом.",
    "Выезд на осмотр.",
    "Профессиональный осмотр автомобиля, измерения ЛКП, чтение специальным диагностическим оборудованием, тест-драйв.",
    "Передача фото и видео в режиме онлайн при осмотре на Whatsapp, Telegram, Dropbox или другие приложения.",
    "Узнаем все интересующее Вас вопросы исполняя роль переводчика.",
    "Устный перевод документов и комплектации автомобиля.",
    "Составление договора покупки авто на Ваше имя.",
    "Последующие переговоры с продавцом после осмотра автомобиля.",
    "Советы где переночевать, куда ехать, как и что делать.",
    "Будучи в Германии и забирая авто мы всегда находимся с Вами на связи как онлайн так и по телефону.",
    "Если потребуется, составляем доверенности на немецком языке и прочие нужные Вам документы."
]

const priceSocialData = [
    {
        logo: PriceSocialLogo,
        bwLogo: PriceSocialLogoBW,
        link: ''
    },
    {
        logo: PriceSocialLogo2,
        bwLogo: PriceSocialLogoBW2,
        link: ''
    },
    {
        logo: PriceSocialLogo3,
        bwLogo: PriceSocialLogoBW3,
        link: ''
    }
]

const footerSocialsData = [ faFacebook, faTelegram, faInstagram ];

export const Context = createContext();

const ContextDataProvider = ({ children }) => {

    const [ loading, setLoading ] = useState(false);
    const [ loadingContent, setLoadingContent ] = useState(true);
    const [ parallaxStr, setParallaxStr ] = useState(0);
    const windowSize = useRef([ window.innerWidth, window.innerHeight ]);

    const screenWidth = windowSize.current[0];

    useEffect(() => {
        getStrength()
    }, [])

    const getStrength = () => {
        if ( screenWidth >= 1550 ) {
            setParallaxStr(300);
        } else { 
            setParallaxStr(200)
        }
    }

    return (
        <Context.Provider
            value={{ 
                headerLinksData,
                slickSliderData,
                secondSliderData,
                mainHowToBuyData,
                signsData,
                infoData,
                footerData,
                footerSocialsData,
                loading, setLoading,
                loadingContent, setLoadingContent,
                aboutSliderData, pickUpData,
                priceListData, priceSocialData,
                screenWidth, parallaxStr,
            }}
        >
            { children }
        </Context.Provider>
    )
}

export default ContextDataProvider;