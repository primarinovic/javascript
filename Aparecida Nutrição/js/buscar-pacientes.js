var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {

    console.log("Buscando...");

    //AJAX requisição com o js de modo assíncrono

    var xhr = new XMLHttpRequest(); //responsável por fazer as requisições

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes111");

    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {

            var resposta = xhr.responseText;
            console.log(resposta);
            console.log(typeof resposta);
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(paciente => {

                adicionaPacienteNaTabela(paciente);
            });
        } else {

            console.log(xhr.status);
            console.log(xhr.responseText);
        }



        xhr.send();

    });

});
