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
        { id: Math.random(), name: "Fernando", subtitle: "Desenvolvedor Frontend | Especialista em React e Next.js", likes: 200, },
        { id: Math.random(), name: "Javascript", subtitle: "Linguagem de programação interpretada e orientada a objetos", likes: 10, },
        { id: Math.random(), name: "React", subtitle: "Biblioteca JavaScript para construção de interfaces de usuário", likes: 200, },
        { id: Math.random(), name: "Next.js", subtitle: "Framework React para produção com renderização híbrida", likes: 10, },
        { id: Math.random(), name: "Tailwind", subtitle: "Framework CSS utilitário para desenvolvimento rápido", likes: 10, },
        { id: Math.random(), name: "Bootstrap", subtitle: "Framework CSS para desenvolvimento responsivo", likes: 10, },
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