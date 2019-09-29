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

export default function RightBar () {
    const [socialImages] = useState(initialSocialImages);
    return (
        <div className="column column_right">
            <div className="column_container jcfe">
                <div className="userName">
                    <span className="header-text">Matiichyk Maksim</span>
                    <span className="subheader-text">Web developer</span>
                </div>
                <img className="avatar" src="/avatar.jpg" alt=""/>
            </div>
            <div className="column_container fdc">
                <nav>
                    {/*<button>Contacts</button>*/}
                    <div className="social_buttons">
                        {socialImages.map((element, index) =>
                            <div key={index} className="social_button mobile_none">
                                <a href={element.link}>
                                    <img src={element.image} alt={element.alt}/>
                                </a>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}
