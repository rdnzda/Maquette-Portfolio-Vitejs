import React, { useState, useEffect } from 'react';
import '../styles/skills.scss';

export const Skill = ({ skill, number, id }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter >= number) {
                clearInterval(interval);
            } else {
                setCounter(prevCounter => prevCounter + 1);
            }
        }, 20);

        return () => clearInterval(interval);
    }, [counter, number]);

    return (
        <div className="skill" id={id}>
            <div className="outer">
                <div className="inner">
                    <div id='number'>
                        {counter}%
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor1">
                        <stop offset="10%" stopColor="#021722" />
                        <stop offset="90%" stopColor="#0a75ad" />
                    </linearGradient>
                    <linearGradient id="GradientColor2">
                        <stop offset="10%" stopColor="#2c2400" />
                        <stop offset="90%" stopColor="#deb600" />
                    </linearGradient>
                    <linearGradient id="GradientColor3">
                        <stop offset="10%" stopColor="#002833" />
                        <stop offset="90%" stopColor="#00c8ff" />
                    </linearGradient>
                    <linearGradient id="GradientColor4">
                        <stop offset="10%" stopColor="#001900" />
                        <stop offset="90%" stopColor="#008000" />
                    </linearGradient>
                </defs>
                <circle id={id} cx="80" cy="80" r="70" strokeLinecap="round" style={{ "--percentage": counter }} />
            </svg>
            <div className='ellipse'></div>
            <p>{skill}</p>
        </div>
    );
};