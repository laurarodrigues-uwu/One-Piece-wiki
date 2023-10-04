// Adicione um manipulador de evento de clique ao botão de pesquisa
document.getElementById("searchButton").addEventListener("click", function (e) {
    e.preventDefault(); // Isso impede o envio padrão do formulário

    // Obtenha o valor do campo de pesquisa
    var searchTerm = document.getElementById("search-input").value;

    // Procure todos os elementos <h1>, <h2>, <h3>, <h4> e parágrafos na página
    var elementsToSearch = document.querySelectorAll(".wiki_title, .wiki_subtitle, .sub_subtitle, .subsubsubtitle");

    // Defina a quantidade de espaço acima do elemento alvo (em pixels)
    var espaçoAcima = 50; // Ajuste o valor conforme necessário

    // Percorra os elementos e verifique o texto de cada um
    elementsToSearch.forEach(function (element) {
        var textContent = element.textContent || element.innerText;
        if (textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
            // Calcule a posição de destino com espaço acima
            var destino = element.offsetTop - espaçoAcima;

            // Role suavemente para a posição de destino
            window.scrollTo({
                top: destino,
                behavior: "smooth"
            });

            return; // Saia do loop após encontrar a primeira correspondência
        }
    });
});