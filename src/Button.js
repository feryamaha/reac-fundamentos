import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from './App';

export default function Button(props) {

    const { theme } = useContext(ThemeContext);

    return (
        <button
            onClick={props.onClick}
            style={{
                backgroundColor: theme === "dark" ? "#fff" : "#000",
                color: theme === "dark" ? "#000" : "#fff",
                cursor: "pointer",
            }}
        >
            {props.children}

        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

