var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso"); //puxando a informação de peso
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura"); //puxando a informação da altura
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc"); //puxando a informação do imc

	var pesoValido = true;
	var alturaValida = true;

	if (peso <= 0 || peso >= 1000) {

		console.log("Peso inválido");
		pesoValido = false;
		tdPeso.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido"); //inserindo a nova classe que troca a cor de fundo em caso de dado invalido
	}

	if (altura <= 0 || altura >= 3.00) {

		console.log("Altura inválida");
		alturaValida = false;
		tdAltura.textContent = "Altura inválida";
		paciente.classList.add("paciente-invalido");
	}

	if (pesoValido && alturaValida) {

		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc; //alterando o valor do imc na tabela 
	}

}

function calculaImc(peso, altura) {

	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2); //.toFixed(2) ajusta para 2 casas decimais
}


