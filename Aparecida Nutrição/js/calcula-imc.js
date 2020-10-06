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

	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);

	if (!pesoValido) { // quando o peso não for válido, entra no if

		console.log("Peso inválido");
		pesoValido = false;
		tdPeso.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido"); //inserindo a nova classe que troca a cor de fundo em caso de dado invalido
	}

	if (!validaAltura) {

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

function validaPeso(peso) {

	if (peso >= 0 && peso < 1000) {

		return true;
	} else {

		return false;
	}
}

function validaAltura(altura) {

	if (altura >= 0 && altura <= 3.00) {

		return true;
	} else {

		return false;
	}
}

function calculaImc(peso, altura) {

	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2); //.toFixed(2) ajusta para 2 casas decimais
}




