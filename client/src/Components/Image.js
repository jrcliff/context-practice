import React from 'react';
import Button from './Button';
import ThemeContext from '../themeContext';

function Image(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className={`${theme}-image image`}>
                    <div className={`${theme}-ball ball`} />
                    <Button />
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default Image;
