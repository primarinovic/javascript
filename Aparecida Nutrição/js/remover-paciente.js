var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {

    event.target.parentNode.classList.add('fadeOut'); // esmaecer qdo clicar para apagar

    // espera 0.5s para remover
    setTimeout(function () {

        event.target.parentNode.remove();
    }, 500);



    //var alvoEvento = event.target;
    //var paiDoAlvo = alvoEvento.parentNode; // TR = paciente

    //paiDoAlvo.remove();
});


