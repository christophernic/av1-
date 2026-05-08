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

        // Array de carros para buscar
        const carros = [
            { make: 'audi', model: 'a4' },
            { make: 'bmw', model: '3 series' },
            { make: 'honda', model: 'accord' },
            { make: 'toyota', model: 'corolla' },
            { make: 'mercedes-benz', model: 'e-class' }
        ];

        const todos = [];

        // Fazer requisições para cada carro
        for (const carro of carros) {
            const url = `https://api.api-ninjas.com/v1/cars?make=${carro.make}&model=${carro.model}`;
            const response = await fetch(url, {
                headers: {
                    'X-Api-Key': '3dLo210MkxPU5jNj65B0NOkZpNcspFgkoNgvQ8m9'
                }
            });

            if (response.ok) {
                const dados = await response.json();
                if (Array.isArray(dados) && dados.length > 0) {
                    todos.push(...dados);
                }
            }
        }

        if (todos.length === 0) {
            throw new Error('Nenhum carro encontrado');
        }

        // Limpar container
        carsContainer.innerHTML = '';

        // Exibir dados dinamicamente no DOM
        todos.forEach(carro => {
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

    // Ano
    if (carro.year) {
        const yearElement = document.createElement('small');
        yearElement.className = 'car-card-id';
        yearElement.textContent = `📅 ${carro.year}`;
        cardBody.appendChild(yearElement);
    }

    // Marca
    const marcaElement = document.createElement('h5');
    marcaElement.className = 'car-card-mark';
    marcaElement.textContent = `${carro.make} ${carro.model}`;
    cardBody.appendChild(marcaElement);

    // Informações adicionais
    const infoElement = document.createElement('p');
    infoElement.className = 'car-card-country';
    const info = [];
    if (carro.class) info.push(carro.class);
    if (carro.fuel_type) info.push(`⛽ ${carro.fuel_type}`);
    if (carro.city_mpg) info.push(`🏙️ ${carro.city_mpg} mpg`);
    infoElement.textContent = info.join(' | ');
    cardBody.appendChild(infoElement);

    card.appendChild(cardBody);
    col.appendChild(card);

    return col;
}

// Chamar função ao carregar a página
document.addEventListener('DOMContentLoaded', carregarMarcas);
