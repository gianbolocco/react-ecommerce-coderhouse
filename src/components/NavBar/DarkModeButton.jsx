import React from 'react'
import './DarkModeButton.css'
import {useDarkModeContext} from '../../context/DarkModeContext'

const DarkModeButton = () => {

    const {toggleDarkMode} = useDarkModeContext()

    return (
           
            <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" onInput={() => toggleDarkMode()} id="checkbox" />
                    <div className="slider round" />
                </label>
            </div>

    );
}

export default DarkModeButton