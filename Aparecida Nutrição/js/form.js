var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function (event) {   //addEventListener "ouve" o evento click
    event.preventDefault(); //previne a ação padrão do html por exemplo o submit do form que recarrega a pagina

    var form = document.querySelector('#form-adiciona');

    // Pegando as infos do paciente no form
    var paciente = obtemInfoDoForm(form);

    // Cria td e tr do paciente
    var pacienteTr = montaTr(paciente);

    // adicionando o paciente na tabela
    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);

    form.reset(); //limpa o formulario dps q enviado

});

function obtemInfoDoForm(form) {
    // criando um objeto:
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement('tr'); //createElement cria qualquer tag html
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome')); //appendChild adiciona o nomeTd como filho do pacienteTr
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;

}

function montaTd(dado, classe) {

    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}