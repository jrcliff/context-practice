import React, { useContext } from 'react'
import {ThemeContext} from '../ThemeContext'


export default function Button() {
    const theme = useContext(ThemeContext)
    
  
    return (
                <button onClick={() => theme.toggleTheme()} className='button'>
                    Switch
                    <span role='img' aria-label='sun' >
                        🌞
                    </span>
                    <span role='img' aria-label='moon' >
                        🌚
                    </span>
                </button>
    )
}
