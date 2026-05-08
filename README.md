# Aplicação de Listagem de Carros - AV1

## Descrição
Aplicação web que consome dados da API Cars do API Ninjas e exibe uma listagem dinâmica de carros com layout responsivo usando Bootstrap.

## Requisitos Atendidos

### 1. Lógica de Consumo (2,0 pts)
- ✅ Consumo de API pública (API Ninjas - Cars)
- ✅ Utiliza fetch com async/await
- ✅ Manipula dados em formato JSON
- ✅ Trata erros de requisição com try/catch
- ✅ Exibe feedback de carregamento

### 2. Setup de Ambiente (1,5 pts)
- ✅ Arquivos organizados em estrutura separada:
  - `index.html` - Página principal
  - `css/style.css` - Estilos customizados
  - `js/script.js` - Lógica JavaScript
- ✅ Projeto versionado no GitHub

### 3. Interface (1,0 pt)
- ✅ Layout responsivo com Bootstrap 5
- ✅ Grid responsivo (col-md-6 col-lg-4)
- ✅ Cards com design moderno
- ✅ Feedback visual de carregamento e erros

### 4. GitHub (0,5 pt)
- ✅ Repositório público
- ✅ Commits com versionamento

## Tecnologias Utilizadas
- HTML5
- CSS3 (com variáveis CSS)
- JavaScript (async/await)
- Bootstrap 5
- API Ninjas Cars

## Funcionalidades
- Busca de dados de múltiplos modelos de carros
- Exibição dinâmica em cards
- Tratamento de erros com mensagens de feedback
- Indicador de carregamento
- Design responsivo para mobile, tablet e desktop

## Estrutura do Projeto
```
av1-/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── data.json
└── README.md
```

## Como Usar
1. Abra `index.html` em um servidor local (recomendado: Live Server)
2. A página carregará automaticamente os dados dos carros
3. Visualize os cards com informações de cada veículo

## Dados Exibidos
- Ano de fabricação
- Marca e modelo
- Classe do veículo
- Tipo de combustível
- Consumo em cidade (MPG)
