import React, { Component } from 'react';

import Styles from './index.module.scss';

export default class LabeledInput extends Component {
    render() {
        const { value, onChange, placeholder, name, type, label } = this.props;

        return (
            <>
                <span className={Styles.span}>{label}</span>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    className={Styles.input}
                />
            </>
        );
    }
}
