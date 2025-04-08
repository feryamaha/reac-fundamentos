import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import { ThemeContext } from './App';

export default function Post(props) {
    const { themeColors } = useContext(ThemeContext);

    return (
        <article style={{
            padding: '15px',
            borderRadius: '8px',
            backgroundColor: themeColors.card,
            color: themeColors.text
        }}>
            <h3 style={{
                marginBottom: '8px',
                color: themeColors.text
            }}>
                {props.post.name}
            </h3>
            <p style={{
                marginBottom: '12px',
                fontSize: '16px',
                color: themeColors.textSecondary
            }}>
                {props.post.subtitle}
            </p>
            <p style={{
                marginBottom: '12px',
                fontSize: '14px',
                color: themeColors.textSecondary
            }}>
                Média: {props.post.likes}
            </p>
            <PostHeader
                onRemove={props.onRemove}
                post={{
                    id: props.post.id,
                    title: props.post.name,
                    read: props.post.read,
                }}
            />
        </article>
    );
}

Post.propTypes = {
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired,
    }).isRequired,
};

