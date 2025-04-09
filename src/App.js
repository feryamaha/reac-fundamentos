import React, { useState, createContext, useEffect } from 'react';
import Post from './Post';
import Button from './Button';
import Header from './Header';

// Temas com gradiente de cores
const themes = {
    dark: {
        background: '#1a1a1a',
        surface: '#2d2d2d',
        card: '#404040',
        text: '#ffffff',
        textSecondary: '#b3b3b3'
    },
    light: {
        background: '#ffffff',
        surface: '#f5f5f5',
        card: '#e8e8e8',
        text: '#1a1a1a',
        textSecondary: '#666666'
    }
};

export const ThemeContext = createContext({
    theme: "dark",
    themeColors: themes.dark,
    onToggleTheme: () => { }
});

function App() {
    const [theme, setTheme] = useState("dark");
    const [collapsedPosts, setCollapsedPosts] = useState(new Set());
    const [posts, setPosts] = useState([
        {
            id: Math.random(),
            title: "Fundamentos React - Projeto de Aprendizado",
            content: "Este projeto foi desenvolvido como parte do aprendizado dos fundamentos do React, explorando conceitos importantes como Context API, Hooks, Componentização e Gerenciamento de Estado. A utilização de ferramentas modernas de desenvolvimento permitiu criar uma aplicação robusta, escalável e de fácil manutenção.",
            isTitle: true,
        },
        {
            id: Math.random(),
            title: "📖 Conceitos Fundamentais",
            isSection: true,
        },
        {
            id: Math.random(),
            title: "O que são Hooks?",
            content: "Hooks são funções especiais do React que permitem 'conectar' funcionalidades de estado e ciclo de vida do React a componentes funcionais. Antes dos Hooks, essas funcionalidades só estavam disponíveis em componentes de classe. Os principais benefícios são:",
            items: [
                "Reutilização de Lógica: Permitem extrair lógica de estado e efeitos colaterais para funções reutilizáveis",
                "Componentes Mais Simples: Substituem a complexidade dos componentes de classe",
                "Melhor Organização: Permitem agrupar código relacionado em um único lugar"
            ]
        },
        {
            id: Math.random(),
            title: "useState - Gerenciamento de Estado Local",
            content: "O useState permite adicionar estado local a componentes funcionais. No nosso projeto, usamos para gerenciar:",
            items: [
                "O tema da aplicação (claro/escuro)",
                "A lista de posts",
                "O número de likes em cada post"
            ],
            code: `// Exemplo do App.js
function App() {
    // Estado para controlar o tema
    const [theme, setTheme] = useState("dark");
    
    // Estado para gerenciar os posts
    const [posts, setPosts] = useState([
        { 
            id: Math.random(),
            name: "React",
            subtitle: "Biblioteca JavaScript para construção de interfaces de usuário",
            likes: 200
        }
    ]);

    // Função para atualizar o tema
    function handleToggleTheme() {
        setTheme(prevState => prevState === "dark" ? "light" : "dark");
    }

    // Função para adicionar likes
    function handleAddLike(postId) {
        setPosts(prevPosts => 
            prevPosts.map(post => 
                post.id === postId 
                    ? { ...post, likes: post.likes + 1 } 
                    : post
            )
        );
    }
}`
        },
        {
            id: Math.random(),
            title: "useEffect - Efeitos Colaterais",
            content: "O useEffect permite executar efeitos colaterais em componentes funcionais. No nosso projeto, usamos para:",
            items: [
                "Persistir o tema escolhido no localStorage",
                "Atualizar o título da página",
                "Limpeza de recursos"
            ],
            code: `// Exemplo de uso do useEffect
function App() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        // Salva o tema no localStorage
        localStorage.setItem('theme', theme);
        
        // Atualiza o título da página
        document.title = \`React App - \${theme} mode\`;
        
        // Função de limpeza
        return () => {
            console.log('Componente desmontado');
        };
    }, [theme]); // Executa quando o tema muda
}`
        },
        {
            id: Math.random(),
            title: "useContext - Acesso ao Contexto",
            content: "O useContext permite acessar valores de um contexto React. No nosso projeto, usamos para:",
            items: [
                "Compartilhar o tema entre componentes",
                "Compartilhar funções de manipulação do tema"
            ],
            code: `// Exemplo do ThemeContext
export const ThemeContext = createContext({
    theme: "dark",
    onToggleTheme: () => {}
});

// Uso em um componente filho
function Button() {
    const { theme, onToggleTheme } = useContext(ThemeContext);
    
    return (
        <button 
            onClick={onToggleTheme}
            style={{
                backgroundColor: theme === "dark" ? "#333" : "#fff",
                color: theme === "dark" ? "#fff" : "#333"
            }}
        >
            Mudar Tema
        </button>
    );
}`
        },
        {
            id: Math.random(),
            title: "O que é Context API?",
            content: "Context API é um sistema do React para compartilhar dados entre componentes sem precisar passar props manualmente em cada nível da árvore de componentes (prop drilling). No nosso projeto, usamos para:",
            items: [
                "Tema Global: Compartilhar o estado do tema (claro/escuro) entre todos os componentes",
                "Funções Compartilhadas: Compartilhar a função de alternar tema sem precisar passar por vários níveis"
            ],
            code: `// Exemplo completo do Context no App.js
export const ThemeContext = createContext({
    theme: "dark",
    onToggleTheme: () => {}
});

function App() {
    const [theme, setTheme] = useState("dark");

    function handleToggleTheme() {
        setTheme(prevState => prevState === "dark" ? "light" : "dark");
    }

    return (
        <ThemeContext.Provider value={{ theme, onToggleTheme: handleToggleTheme }}>
            <Header />
            <PostList />
            <Footer />
        </ThemeContext.Provider>
    );
}`
        },
        {
            id: Math.random(),
            title: "🎯 Benefícios das Ferramentas Utilizadas",
            isSection: true,
        },
        {
            id: Math.random(),
            title: "React e React DOM",
            items: [
                "Virtual DOM: Renderização eficiente de componentes",
                "Componentização: Reutilização de código e manutenção simplificada",
                "Hooks: Gerenciamento de estado e efeitos colaterais de forma elegante",
                "Context API: Compartilhamento de estado entre componentes sem prop drilling"
            ],
            code: `// Exemplo de uso do Context API e Hooks
export const ThemeContext = createContext({
    theme: "dark",
    onToggleTheme: () => {}
});

function App() {
    const [theme, setTheme] = useState("dark");
    const [posts, setPosts] = useState([
        { id: Math.random(), name: "Fernando", subtitle: "Desenvolvedor Frontend", likes: 200 }
    ]);

    return (
        <ThemeContext.Provider value={{ theme, onToggleTheme: handleToggleTheme }}>
            {/* Componentes filhos */}
        </ThemeContext.Provider>
    );
}`
        },
        {
            id: Math.random(),
            title: "Webpack e Babel",
            items: [
                "Bundling: Otimização e minificação de código",
                "Code Splitting: Carregamento sob demanda de módulos",
                "Hot Module Replacement: Atualização em tempo real durante o desenvolvimento",
                "Transpilação: Suporte a recursos modernos do JavaScript",
                "Tree Shaking: Eliminação de código não utilizado"
            ],
            code: `// webpack.config.js
module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle[hash].js',
        publicPath: '/reac-fundamentos/'
    },
    module: {
        rules: [
            {
                test: /\\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};`
        },
        {
            id: Math.random(),
            title: "Plugins",
            items: [
                "HTML Webpack Plugin: Geração automática de HTML com injeção de assets",
                "Clean Webpack Plugin: Limpeza automática de builds antigos",
                "GH Pages: Deploy automatizado para GitHub Pages"
            ]
        },
        {
            id: Math.random(),
            title: "🚀 Tecnologias e Bibliotecas Utilizadas",
            isSection: true,
        },
        {
            id: Math.random(),
            title: "Core",
            items: [
                "React 19.1.0",
                "React DOM 19.1.0",
                "Prop Types 15.8.1"
            ]
        },
        {
            id: Math.random(),
            title: "Build Tools",
            items: [
                "Webpack 5.98.0",
                "Webpack CLI 6.0.1",
                "Webpack Dev Server 5.2.1",
                "Babel Core 7.26.10",
                "Babel Preset Env 7.26.9",
                "Babel Preset React 7.26.3",
                "Babel Loader 10.0.0"
            ]
        },
        {
            id: Math.random(),
            title: "Plugins",
            items: [
                "HTML Webpack Plugin 5.6.3",
                "Clean Webpack Plugin 4.0.0",
                "GH Pages 6.3.0"
            ]
        },
        {
            id: Math.random(),
            title: "📦 Instalação das Dependências",
            isSection: true,
        },
        {
            id: Math.random(),
            title: "Comandos de Instalação",
            code: `# Instalação do React e React DOM
npm install react react-dom

# Instalação do Prop Types
npm install prop-types

# Instalação das ferramentas de build
npm install --save-dev webpack webpack-cli webpack-dev-server

# Instalação do Babel e seus presets
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

# Instalação dos plugins
npm install --save-dev html-webpack-plugin clean-webpack-plugin gh-pages`
        }
    ]);

    useEffect(() => {
        const colors = themes[theme];
        document.body.style.backgroundColor = colors.background;
        document.body.style.color = colors.text;
    }, [theme]);

    function handleToggleTheme() {
        setTheme((prevState) => (
            prevState === "dark" ? "light" : "dark"
        ));
    }

    function handleRefresh() {
        setPosts(prevState => [
            ...prevState,
            {
                id: Math.random(),
                title: `Novo Conceito ${prevState.length + 1}`,
                content: `Explicação do conceito ${prevState.length + 1}`,
                items: [],
                code: ''
            }
        ]);
    }

    function handleRemovePost(postId) {
        setPosts((prevState) => (
            prevState.filter(post => post.id !== postId)
        ));
    }

    function handleTogglePost(postId) {
        setCollapsedPosts(prevState => {
            const newState = new Set(prevState);
            if (newState.has(postId)) {
                newState.delete(postId);
            } else {
                newState.add(postId);
            }
            return newState;
        });
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            themeColors: themes[theme],
            onToggleTheme: handleToggleTheme
        }}>
            <div style={{
                padding: '20px',
                backgroundColor: themes[theme].surface,
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Header style={{ marginBottom: '20px' }}>
                    {/* Botão "Adicionar Conceito" ocultado mas mantido no código
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Button 
                            onClick={handleRefresh}
                            style={{ width: '150px' }}
                        >
                            Adicionar Conceito
                        </Button>
                    </div>
                    */}
                </Header>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    flex: 1,
                    maxWidth: '100%'
                }}>
                    {posts.map((post) => (
                        <div key={post.id} style={{
                            backgroundColor: themes[theme].card,
                            padding: '20px',
                            borderRadius: '8px',
                            width: '100%',
                            maxWidth: '100%',
                            boxSizing: 'border-box'
                        }}>
                            {post.isTitle ? (
                                <h1 style={{
                                    color: themes[theme].text,
                                    marginBottom: '16px',
                                    wordWrap: 'break-word'
                                }}>{post.title}</h1>
                            ) : post.isSection ? (
                                <h2 style={{
                                    color: themes[theme].text,
                                    marginBottom: '16px',
                                    wordWrap: 'break-word'
                                }}>{post.title}</h2>
                            ) : (
                                <>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '12px',
                                        marginBottom: '12px'
                                    }}>
                                        <h3 style={{
                                            color: themes[theme].text,
                                            margin: 0,
                                            wordWrap: 'break-word'
                                        }}>{post.title}</h3>
                                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                            <Button
                                                onClick={() => handleTogglePost(post.id)}
                                                style={{ width: '150px' }}
                                            >
                                                {collapsedPosts.has(post.id) ? 'Expandir' : 'Minimizar'}
                                            </Button>
                                        </div>
                                    </div>
                                    {!collapsedPosts.has(post.id) && (
                                        <>
                                            {post.content && (
                                                <p style={{
                                                    color: themes[theme].textSecondary,
                                                    marginBottom: '12px',
                                                    wordWrap: 'break-word'
                                                }}>{post.content}</p>
                                            )}
                                            {post.items && (
                                                <ul style={{
                                                    marginBottom: '16px',
                                                    paddingLeft: '20px'
                                                }}>
                                                    {post.items.map((item, index) => (
                                                        <li key={index} style={{
                                                            color: themes[theme].textSecondary,
                                                            marginBottom: '8px',
                                                            wordWrap: 'break-word'
                                                        }}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}
                                            {post.code && (
                                                <pre style={{
                                                    backgroundColor: themes[theme].background,
                                                    padding: '16px',
                                                    borderRadius: '4px',
                                                    overflowX: 'auto',
                                                    marginBottom: '16px',
                                                    maxWidth: '100%'
                                                }}>
                                                    <code style={{
                                                        color: themes[theme].text,
                                                        fontFamily: 'monospace',
                                                        whiteSpace: 'pre-wrap',
                                                        wordBreak: 'break-word'
                                                    }}>{post.code}</code>
                                                </pre>
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>

                <footer style={{
                    marginTop: '40px',
                    padding: '20px',
                    color: themes[theme].textSecondary,
                    textAlign: 'center',
                    width: '100%',
                    boxSizing: 'border-box',
                    backgroundColor: '#000',
                    borderRadius: '8px'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '20px',
                        flexWrap: 'wrap'
                    }}>
                        <a
                            href="https://www.linkedin.com/in/feryamaha/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: themes[theme].textSecondary,
                                textDecoration: 'none',
                                wordWrap: 'break-word'
                            }}
                        >
                            <svg height="20" width="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/feryamaha/reac-fundamentos"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: themes[theme].textSecondary,
                                textDecoration: 'none',
                                wordWrap: 'break-word'
                            }}
                        >
                            <svg height="20" width="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                    <p style={{
                        marginBottom: '8px',
                        wordWrap: 'break-word'
                    }}>© 2024 - Feito por Fernando Moreira</p>
                </footer>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;