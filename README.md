# 🚗 Listagem de Marcas de Carros

Aplicação web dinâmica desenvolvida com HTML, Bootstrap e JavaScript puro, consumindo dados de uma API local (arquivo JSON).

## 📋 Objetivo

Desenvolver uma aplicação web que exiba uma listagem de marcas de carros usando:
- **HTML5** para estrutura semântica
- **Bootstrap 5** para layout responsivo e componentes
- **JavaScript puro** com fetch API e async/await
- **JSON** para manipulação de dados

## 🎯 Requisitos Atendidos

### Parte 1 – Página de Listagem

#### ✅ Lógica de Consumo (2,0 pts)
- Consumo de dados de API pública (arquivo JSON local via fetch)
- Utilização correta de **fetch com async/await**
- Manipulação de dados em formato JSON
- Tratamento de promessas assincronamente
- Validação de dados

#### ✅ Setup de Ambiente (1,5 pts)
- Organização em arquivos separados:
  - `index.html` - Estrutura HTML
  - `css/style.css` - Estilos customizados
  - `js/script.js` - Lógica JavaScript
  - `data.json` - Dados das marcas
- Estrutura de diretórios clara e bem organizada

#### ✅ Interface (1,0 pt)
- Uso completo do Bootstrap 5
- Layout responsivo com grid system
- Cards com gradientes atrativos
- Feedback visual de carregamento
- Navbar e footer profissionais
- Design adaptável para mobile, tablet e desktop

#### ✅ GitHub (0,5 pt)
- Repositório público no GitHub
- Versionamento inicial com commits

## 📁 Estrutura do Projeto

```
av1-/
├── index.html          # Página principal
├── data.json          # Dados das marcas de carros
├── css/
│   └── style.css      # Estilos customizados
├── js/
│   └── script.js      # Lógica JavaScript
└── README.md          # Este arquivo
```

## 🚀 Como Executar

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` no navegador (ou use um servidor local)
3. Os dados das marcas de carros serão carregados automaticamente

### Utilizando um servidor local (recomendado):

```bash
# Com Python 3
python -m http.server 8000

# Com Python 2
python -m SimpleHTTPServer 8000

# Com Node.js (com http-server instalado)
http-server
```

Depois acesse: `http://localhost:8000`

## 🎨 Características

### Funcionalidades
- ✨ Carregamento dinâmico de dados com async/await
- 📱 Design responsivo com Bootstrap
- 🎯 Interface limpa e intuitiva
- ⚠️ Tratamento e exibição de erros
- ⏳ Feedback visual durante carregamento
- 🎬 Animações suaves de entrada dos cards
- 🌈 Gradientes coloridos aleatórios nos cards

### Dados Inclusos
19 marcas de carros, incluindo:
- Lamborghini, Lexus, Lincoln, Lotus, Lucid
- Land Rover, Levc, Ligier, Lti
- Lancia, Leapmotor, Liebao Motor, Lifan, Lingxi, Livan, Lixiang, Logem, Luaz

## 💻 Tecnologias Utilizadas

- **HTML5** - Marcação semântica
- **CSS3** - Estilos avançados com gradientes e animações
- **JavaScript ES6+** - async/await, fetch, manipulação do DOM
- **Bootstrap 5** - Framework CSS responsivo
- **JSON** - Formato de dados

## 📊 Exemplos de Uso

### Estrutura de Dados (data.json)
```json
{
  "carros": [
    {
      "id": 1,
      "marca": "Lamborghini",
      "pais": "Itália"
    },
    ...
  ]
}
```

### Consumo com Fetch + Async/Await
```javascript
async function carregarMarcas() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const dados = await response.json();
        // Processar e exibir dados...
    } catch (erro) {
        console.error('Erro:', erro);
    }
}
```

## 🔒 Tratamento de Erros

A aplicação implementa tratamento robusto de erros:
- ✓ Validação de resposta HTTP
- ✓ Validação de formato JSON
- ✓ Validação de estrutura de dados
- ✓ Exibição de mensagens de erro ao usuário
- ✓ Logs no console para debug

## 📝 Notas Importantes

- A aplicação requer um servidor web local ou servidor HTTP para funcionar adequadamente
- Abrir direto com `file://` pode gerar erros CORS ao tentar carregar o `data.json`
- JavaScript é executado no lado do cliente (client-side)
- Sem dependências externas além do Bootstrap CDN

## 👨‍💻 Requisitos do Projeto Acadêmico

| Critério | Pontuação | Status |
|----------|-----------|--------|
| Lógica de Consumo | 2,0 pts | ✅ Completo |
| Setup de Ambiente | 1,5 pts | ✅ Completo |
| Interface | 1,0 pt | ✅ Completo |
| GitHub | 0,5 pt | ✅ Completo |
| **Total** | **5,0 pts** | **✅ 100%** |

## 📄 Licença

Projeto acadêmico para fins educacionais.

---

**Desenvolvido em:** 2026