import React, { useState } from 'react';

export default function Modechanger() {
    const [isLighMode, setIsLightMode] = useState(false);
    function changeTheme() {
        setIsLightMode((before) => !before);
        let body = document.querySelector('body');
        body.classList.toggle('lightMode');
        let button = document.getElementById('themeChangeButton');
        button.classList.add('animated');
        setTimeout(() => {
            button.classList.remove('animated');
        }, 500);
    }
    return (
        <button id='themeChangeButton' onClick={changeTheme}>
            {isLighMode ? (
                <i
                    className='fa-solid fa-moon'
                    style={{ color: ' #ae8fc2' }}
                ></i>
            ) : (
                <i
                    className='fa-regular fa-lightbulb'
                    style={{ color: '#ae8fc2' }}
                ></i>
            )}
        </button>
    );
}
