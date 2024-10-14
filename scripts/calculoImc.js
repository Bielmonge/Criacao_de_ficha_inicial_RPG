
export function calcularIMC(altura, peso) {
    const alturaValor = altura.value;
    const pesoValor = peso.value;

    if (alturaValor <= 0 || pesoValor <= 0) {
        return { imc: null, estado: "Insira valores válidos." };
    }

    const imc = (pesoValor / (alturaValor * alturaValor)) * 10000;

    let estadoDoPersonagem = '';
    if (imc < 18.5) {
        estadoDoPersonagem = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        estadoDoPersonagem = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        estadoDoPersonagem = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        estadoDoPersonagem = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
        estadoDoPersonagem = 'Obesidade grau 2';
    } else {
        estadoDoPersonagem = 'Obesidade grau 3 (mórbida)';
    }

    return { imc: imc.toFixed(2), estado: estadoDoPersonagem };
}
