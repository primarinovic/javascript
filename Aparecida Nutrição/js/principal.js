var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente"); //acessando as informações do paciente

var tdPeso = paciente.querySelector(".info-peso"); //puxando a informação de peso
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura"); //puxando a informação da altura
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

var tdImc = paciente.querySelector(".info-imc"); //puxando a informação do imc
tdImc.textContent = imc; //alterando o valor do imc na tabela

var paciente = document.querySelector("#segundo-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

var paciente = document.querySelector("#terceiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

var paciente = document.querySelector("#quarto-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

var paciente = document.querySelector("#quinto-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;
