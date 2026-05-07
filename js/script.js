// Elementos do DOM
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const errorMessage = document.getElementById('error-message');
const contentDiv = document.getElementById('content');
const carsContainer = document.getElementById('carsContainer');

// Função assíncrona para carregar dados
async function carregarMarcas() {
    try {
        // Mostrar feedback de carregamento
        loadingDiv.classList.remove('d-none');
        errorDiv.classList.add('d-none');
        contentDiv.classList.add('d-none');

        // Fazer requisição fetch
        const response = await fetch('data.json');

        // Tratar erros de requisição
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        // Converter resposta para JSON
        const dados = await response.json();

        // Validar dados
        if (!dados.carros || !Array.isArray(dados.carros)) {
            throw new Error('Formato de dados inválido');
        }

        // Limpar container
        carsContainer.innerHTML = '';

        // Exibir dados dinamicamente no DOM
        dados.carros.forEach(carro => {
            const card = criarCard(carro);
            carsContainer.appendChild(card);
        });

        // Ocultar loading e mostrar conteúdo
        loadingDiv.classList.add('d-none');
        contentDiv.classList.remove('d-none');

    } catch (erro) {
        console.error('Erro ao carregar dados:', erro);

        // Mostrar mensagem de erro
        errorMessage.textContent = erro.message || 'Não foi possível carregar os dados. Tente novamente.';
        errorDiv.classList.remove('d-none');
        loadingDiv.classList.add('d-none');
        contentDiv.classList.add('d-none');
    }
}

// Função para criar card de carro
function criarCard(carro) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 mb-4';

    const card = document.createElement('div');
    card.className = 'card car-card';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body car-card-body';

    // ID
    const idElement = document.createElement('small');
    idElement.className = 'car-card-id';
    idElement.textContent = `#${carro.id}`;

    // Marca
    const marcaElement = document.createElement('h5');
    marcaElement.className = 'car-card-mark';
    marcaElement.textContent = carro.marca;

    // País
    const paisElement = document.createElement('p');
    paisElement.className = 'car-card-country';
    paisElement.textContent = `🌍 ${carro.pais}`;

    // Montar estrutura
    cardBody.appendChild(idElement);
    cardBody.appendChild(marcaElement);
    cardBody.appendChild(paisElement);
    card.appendChild(cardBody);
    col.appendChild(card);

    return col;
}

// Chamar função ao carregar a página
document.addEventListener('DOMContentLoaded', carregarMarcas);
