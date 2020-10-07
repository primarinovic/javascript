var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function (event) {   //addEventListener "ouve" o evento click
    event.preventDefault(); //previne a ação padrão do html por exemplo o submit do form que recarrega a pagina

    var form = document.querySelector('#form-adiciona');

    // Pegando as infos do paciente no form
    var paciente = obtemInfoDoForm(form);

    var erros = validaPaciente(paciente);
    console.log(erros);

    if (erros.length > 0) {

        exiberMensagensDeErro(erros);

        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset(); //limpa o formulario dps q enviado

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = ""; //limpando as msgs de erro dps que adiciona um paciente corretamente

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

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {

        erros.push("O Nome não pode ser em branco!")
    }

    if (!validaPeso(paciente.peso)) {

        erros.push("O Peso é inválido!");
    }

    if (!validaAltura(paciente.altura)) {

        erros.push("A Altura é inválida!");
    }

    if (paciente.gordura.length == 0) {

        erros.push("A Gordura não pode ser em branco!")
    }

    if (paciente.peso.length == 0) {

        erros.push("O Peso não pode ser em branco!")
    }

    if (paciente.altura.length == 0) {

        erros.push("A Altura não pode ser em branco!")
    }

    return erros;
}

function exiberMensagensDeErro(erros) {

    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = ""; //apaga os li dps q corrige os dados
    erros.forEach(function (erro) { //tipo diferente de loop for

        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaPacienteNaTabela(paciente) {

    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

}