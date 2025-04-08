import React, { useState, createContext, useEffect } from 'react';
import Post from './Post';
import Button from './Button';
import Header from './Header';

// Exemplo de Context API
export const ThemeContext = createContext({
    theme: "dark",
    onToggleTheme: () => { }
});

function App() {
    // Exemplo de useState para gerenciamento de estado local
    const [theme, setTheme] = useState("dark");
    const [posts, setPosts] = useState([
        {
            id: Math.random(),
            name: "useState",
            subtitle: "Hook para gerenciamento de estado local em componentes funcionais",
            likes: 200
        },
        {
            id: Math.random(),
            name: "useEffect",
            subtitle: "Hook para lidar com efeitos colaterais e ciclo de vida",
            likes: 150
        },
        {
            id: Math.random(),
            name: "useContext",
            subtitle: "Hook para acessar valores de um contexto React",
            likes: 100
        },
        {
            id: Math.random(),
            name: "Context API",
            subtitle: "Sistema para compartilhar dados entre componentes",
            likes: 180
        },
        {
            id: Math.random(),
            name: "Componentização",
            subtitle: "Criação de componentes reutilizáveis e bem estruturados",
            likes: 120
        },
        {
            id: Math.random(),
            name: "Webpack",
            subtitle: "Empacotador de módulos para aplicações JavaScript",
            likes: 90
        }
    ]);

    // Exemplo de useEffect para persistência de dados
    useEffect(() => {
        // Salva o tema no localStorage
        localStorage.setItem('theme', theme);

        // Atualiza o título da página
        document.title = `React Fundamentals - ${theme} mode`;

        // Função de limpeza
        return () => {
            console.log('Componente desmontado');
        };
    }, [theme]);

    // Exemplo de função para manipulação de estado
    function handleToggleTheme() {
        setTheme(prevState => prevState === "dark" ? "light" : "dark");
    }

    // Exemplo de função para adicionar novo post
    function handleRefresh() {
        setPosts(prevState => [
            ...prevState,
            {
                id: Math.random(),
                name: `React Hook ${prevState.length + 1}`,
                subtitle: `Exemplo prático de uso de Hooks ${prevState.length + 1}`,
                likes: 0,
            }
        ]);
    }

    // Exemplo de função para remover post
    function handleRemovePost(postId) {
        setPosts(prevState => prevState.filter(post => post.id !== postId));
    }

    return (
        <ThemeContext.Provider value={{ theme, onToggleTheme: handleToggleTheme }}>
            <Header>
                <h2>React Fundamentals - Exemplos Práticos</h2>
                <Button onClick={handleRefresh}>Adicionar Hook</Button>
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
    );
}

export default App;