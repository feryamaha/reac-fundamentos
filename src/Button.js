import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './App';

export default function Button(props) {
    const { themeColors } = useContext(ThemeContext);

    return (
        <button
            onClick={props.onClick}
            style={{
                backgroundColor: themeColors.card,
                color: themeColors.text,
                width: '90px',
                border: `1px solid ${themeColors.textSecondary}`,
                margin: '1%',
                padding: '8px 4px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                ':hover': {
                    backgroundColor: themeColors.surface,
                }
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

