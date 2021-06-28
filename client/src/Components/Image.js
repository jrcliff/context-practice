import React, { useContext } from 'react';
import Button from './Button';
import {ThemeContext} from '../ThemeContext';

function Image() {
    const theme = useContext(ThemeContext)
    return (
        <div className={`${theme.currentTheme}-image image`}>
            <div className={`${theme.currentTheme}-ball ball`} />
            <Button />
        </div>
    )
}
export default Image;
