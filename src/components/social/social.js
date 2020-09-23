import React from 'react';

// Component data
import { initialSocialImages } from './data'

export default () => {
    return (
        <div className="social_button_mobile">
            {initialSocialImages.map((element, index) =>
                <div key={index} className="social_button mobile_block">
                    <a href={element.link}>
                        <img src={element.image} alt={element.alt}/>
                    </a>
                </div>
            )}
        </div>
    );
}
