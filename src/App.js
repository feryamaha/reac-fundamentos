import React, { useState, createContext } from 'react';// fixed
import Post from './Post';
import Button from './Button';
import Header from './Header';

export const ThemeContext = createContext({
    theme: "dark",
    onToggleTheme: () => {}
});

function App() {
    const [theme, setTheme] = useState("dark");
    const [posts, setPosts] = useState([
        { id: Math.random(), name: "Fernando", subtitle: "Desenvolvedor Frontend", likes: 200, },
        { id: Math.random(), name: "Javascript", subtitle: "linguagem de programação", likes: 10, },
        { id: Math.random(), name: "React", subtitle: "biblioteca de UI", likes: 200, },
        { id: Math.random(), name: "Next.js", subtitle: "framework de React", likes: 10, },
        { id: Math.random(), name: "Tailwind", subtitle: "framework de CSS", likes: 10, },
        { id: Math.random(), name: "Bootstrap", subtitle: "framework de CSS", likes: 10, },
    ]);

    function handleToggleTheme() {
        setTheme((prevState) =>
        (prevState === "dark" ? "light" : "dark"
        ));
    }

    function handleRefresh() {
        setPosts(prevState => [
            ...prevState,
            {
                id: Math.random(),
                name: 'React${prevState.length + 1}',
                subtitle: 'biblioteca de UI${prevState.length + 1}',
                likes: 200,
            }]);
    }

    function handleRemovePost(postId) {
        setPosts((prevState) => (
            prevState.filter(post => post.id !== postId)
        ));
    }

    return (

        <ThemeContext.Provider
            value={{ theme, onToggleTheme: handleToggleTheme, }}>

            <Header
            >
                <h2>Curso de React JStack's
                    <br />

                </h2>
                <Button onClick={handleRefresh}>Atualizar</Button>
            </Header>

            <hr />

            {posts.map((post) => (
                <Post
                    key={post.id}
                    onRemove={handleRemovePost}
                    post={post}
                />
            ))}

        </ThemeContext.Provider>
    )
}

export default App;