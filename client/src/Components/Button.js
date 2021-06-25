import React from 'react'
import ThemeContext from '../themeContext'

export default function Button(props) {
    return (
        <ThemeContext.Consumer >
            {toggleTheme => (
                <button onClick={toggleTheme} className='button'>
                    Switch
                    <span role='img' aria-label='sun' >
                        🌞
                    </span>
                    <span role='img' aria-label='moon' >
                        🌚
                    </span>
                </button>
            )}
                
        </ThemeContext.Consumer>
    )
}
