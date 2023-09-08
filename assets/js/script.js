const form = document.querySelector('#form');


form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);

    if(!peso || peso <= 0) {
        setResult('Peso inválido.', false);
        return;

    }

    if(!altura || altura <= 0) {
        setResult('Altura inválida.', false)
        return;
    }

    const imc = getImc(peso, altura);

    setResult(`Seu IMC é de ${imc} (${getNivelImc(imc)})`);
})

function setResult(msg, isValid = true) {
    const result = document.querySelector('#result');
    result.innerHTML = '';

    const content = document.createElement('p');
    content.id = 'content-result';
    if(!isValid) content.classList.add('invalid');
    content.innerHTML = msg;
    result.appendChild(content);
    result.scrollIntoView();
}

function getNivelImc(imc) {
    if(imc > 40) return 'Obesidade Grau III';
    if(imc >= 35) return 'Obesidade Grau II';
    if(imc >= 30) return 'Obesidade Grau I';
    if(imc >= 25) return 'Sobrepeso';
    if(imc >= 18.5) return 'Saudável';
    if(imc >= 17) return 'Magrez leve';
    if(imc >= 16) return 'Magreza moderada';
    return 'Magreza grave';

}

function getImc(peso, altura) {
    return (peso / (altura/100) ** 2).toFixed(2);
}