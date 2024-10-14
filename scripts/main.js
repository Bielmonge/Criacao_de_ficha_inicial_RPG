import { calcularIMC } from './calculoImc.js';

// Pega os elementos do DOM
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const resultadoImc = document.getElementById("resultadoImc");
const caixaResultado = document.getElementById("caixaResultado");
const dropbtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown');

// Adiciona evento de clique no botão para exibir/esconder as opções
dropbtn.addEventListener('click', () => {
    dropdown.classList.toggle('show');
});

// Adiciona evento para capturar a escolha do usuário e fechar o dropdown
const radios = document.querySelectorAll('input[type="radio"][name="classe"]');
radios.forEach((radio) => {
    radio.addEventListener('change', (event) => {
        dropbtn.textContent = `Classe: ${event.target.value}`;  
        dropdown.classList.remove('show');  // Fecha o dropdown após a escolha
    });
});

// Fecha o dropdown se o usuário clicar fora dele
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropbtn')) {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
});


// Função para exibir o resultado na página
function mostrarResultado() {
    // Chama a função calcularIMC do arquivo calculoImc.js
    const { imc, estado } = calcularIMC(altura, peso);

    // Verifica se os dados são válidos
    if (imc === null) {
        resultadoImc.innerText = estado;
    } else {
        resultadoImc.innerText = `${imc}`;
    }

    // Exibe a caixa de resultado se os dados forem válidos
    caixaResultado.style.display = imc !== null ? "block" : "none";
}

// Atualiza automaticamente o IMC ao alterar altura ou peso
altura.addEventListener('input', mostrarResultado);
peso.addEventListener('input', mostrarResultado);
