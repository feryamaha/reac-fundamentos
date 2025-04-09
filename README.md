# Fundamentos React - Projeto de Aprendizado

Deploy: https://feryamaha.github.io/reac-fundamentos/

Este projeto foi desenvolvido como parte do aprendizado dos fundamentos do React, explorando conceitos importantes como Context API, Hooks, Componentização e Gerenciamento de Estado. A utilização de ferramentas modernas de desenvolvimento permitiu criar uma aplicação robusta, escalável e de fácil manutenção.

## 📖 Conceitos Fundamentais

### O que são Hooks?
Hooks são funções especiais do React que permitem "conectar" funcionalidades de estado e ciclo de vida do React a componentes funcionais. Antes dos Hooks, essas funcionalidades só estavam disponíveis em componentes de classe. Os principais benefícios são:

- **Reutilização de Lógica**: Permitem extrair lógica de estado e efeitos colaterais para funções reutilizáveis
- **Componentes Mais Simples**: Substituem a complexidade dos componentes de classe
- **Melhor Organização**: Permitem agrupar código relacionado em um único lugar

#### useState - Gerenciamento de Estado Local
O `useState` permite adicionar estado local a componentes funcionais. No nosso projeto, usamos para gerenciar:
- O tema da aplicação (claro/escuro)
- A lista de posts
- O número de likes em cada post

```javascript
// Exemplo do App.js
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
}
```

#### useEffect - Efeitos Colaterais
O `useEffect` permite executar efeitos colaterais em componentes funcionais. No nosso projeto, usamos para:
- Persistir o tema escolhido no localStorage
- Atualizar o título da página
- Limpeza de recursos

```javascript
// Exemplo de uso do useEffect
function App() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        // Salva o tema no localStorage
        localStorage.setItem('theme', theme);
        
        // Atualiza o título da página
        document.title = `React App - ${theme} mode`;
        
        // Função de limpeza
        return () => {
            console.log('Componente desmontado');
        };
    }, [theme]); // Executa quando o tema muda
}
```

#### useContext - Acesso ao Contexto
O `useContext` permite acessar valores de um contexto React. No nosso projeto, usamos para:
- Compartilhar o tema entre componentes
- Compartilhar funções de manipulação do tema

```javascript
// Exemplo do ThemeContext
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
}
```

### O que é Context API?
Context API é um sistema do React para compartilhar dados entre componentes sem precisar passar props manualmente em cada nível da árvore de componentes (prop drilling). No nosso projeto, usamos para:

- **Tema Global**: Compartilhar o estado do tema (claro/escuro) entre todos os componentes
- **Funções Compartilhadas**: Compartilhar a função de alternar tema sem precisar passar por vários níveis

```javascript
// Exemplo completo do Context no App.js
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
}
```

## 🎯 Benefícios das Ferramentas Utilizadas

### React e React DOM
- **Virtual DOM**: Renderização eficiente de componentes
- **Componentização**: Reutilização de código e manutenção simplificada
- **Hooks**: Gerenciamento de estado e efeitos colaterais de forma elegante
- **Context API**: Compartilhamento de estado entre componentes sem prop drilling

```javascript
// Exemplo de uso do Context API e Hooks
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
}
```

### Webpack e Babel
- **Bundling**: Otimização e minificação de código
- **Code Splitting**: Carregamento sob demanda de módulos
- **Hot Module Replacement**: Atualização em tempo real durante o desenvolvimento
- **Transpilação**: Suporte a recursos modernos do JavaScript
- **Tree Shaking**: Eliminação de código não utilizado

```javascript
// webpack.config.js
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};
```

### Plugins
- **HTML Webpack Plugin**: Geração automática de HTML com injeção de assets
- **Clean Webpack Plugin**: Limpeza automática de builds antigos
- **GH Pages**: Deploy automatizado para GitHub Pages

## 🚀 Tecnologias e Bibliotecas Utilizadas

### Core
- React 19.1.0
- React DOM 19.1.0
- Prop Types 15.8.1

### Build Tools
- Webpack 5.98.0
- Webpack CLI 6.0.1
- Webpack Dev Server 5.2.1
- Babel Core 7.26.10
- Babel Preset Env 7.26.9
- Babel Preset React 7.26.3
- Babel Loader 10.0.0

### Plugins
- HTML Webpack Plugin 5.6.3
- Clean Webpack Plugin 4.0.0
- GH Pages 6.3.0

## 📦 Instalação das Dependências

```bash
# Instalação do React e React DOM
npm install react react-dom

# Instalação do Prop Types
npm install prop-types

# Instalação das ferramentas de build
npm install --save-dev webpack webpack-cli webpack-dev-server

# Instalação do Babel e seus presets
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

# Instalação dos plugins
npm install --save-dev html-webpack-plugin clean-webpack-plugin gh-pages
```

## 📚 Conceitos Aprendidos

### 1. Context API
```javascript
// Criação do Contexto
export const ThemeContext = createContext({
    theme: "dark",
    onToggleTheme: () => {}
});

// Uso do Contexto em um componente
function Button() {
    const { theme, onToggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={onToggleTheme}>
            Mudar Tema
        </button>
    );
}
```
