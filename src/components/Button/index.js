import React from 'react';
import Styles from './styles.scss';

class Button extends React.Component {

    render() {
        return (
            <div className="button">{ this.props.label }</div>
        );
    }

}

export default Button;