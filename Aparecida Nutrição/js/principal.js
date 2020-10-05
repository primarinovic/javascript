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

		var imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2); //alterando o valor do imc na tabela .toFixed(2) ajusta para 2 casas decimais
	}

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function (event) {   //addEventListener "ouve" o evento click
	event.preventDefault(); //previne a ação padrão do html por exemplo o submit do form que recarrega a pagina

	var form = document.querySelector('#form-adiciona');
	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	var pacienteTr = document.createElement('tr'); //createElement cria qualquer tag html

	var nomeTd = document.createElement('td');
	var pesoTd = document.createElement('td');
	var alturaTd = document.createElement('td');
	var gorduraTd = document.createElement('td');
	//var imcTd = document.createElement('td');

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;

	pacienteTr.appendChild(nomeTd); //appendChild adiciona o nomeTd como filho do pacienteTr
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);

	var tabela = document.querySelector('#tabela-pacientes');

	tabela.appendChild(pacienteTr);

});


