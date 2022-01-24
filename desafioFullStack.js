function onButtonClicked() {
    var container = document.querySelector("#produtos");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    var buscadorValue = document.getElementById("webSiteBuscador").value;
    var categoriaValue = document.getElementById("categorias").value;
    var querySearch = document.getElementById("searchInput").value

    if (buscadorValue == "" || categoriaValue == "" || querySearch == "") {
        alert("Selecione todos os campos!")
    } else {
        // apiRequest(categoriaValue, querySearch, buscadorValue);
        resultsControler(categoriaValue, querySearch, buscadorValue);
    }
}

const resultsControler = async(categoria, query, buscador) => {
    const url = 'http://localhost:3000/produtos';
    const promiseData = await fetch(url);
    const dataJson = await promiseData.json();
    const dados = dataJson
    let dadosBanco = []

    if (dados.length > 0) {
        dados.forEach(produto => {
            if (produto.categoria == categoria && produto.query == query && produto.buscador == buscador) {
                dadosBanco.push(produto);
            }
        })
    }

    if (dadosBanco.length > 0) {
        constroiDivBanco(dadosBanco)
    } else {
        apiRequest(categoria, query, buscador);
    }

}

function apiRequest(categoriaCrua, query, buscador) {
    console.log("entrei na api")
    const fetchProdutos = async(categoria, pesquisa) => {
        const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoria}&q=${pesquisa}&limit=10`;
        const promiseData = await fetch(url);
        const dataJson = await promiseData.json();
        const dados = dataJson.results;
        constroiDiv(dados, buscador, categoriaCrua, query);
    };

    let categoriaTratada = ""

    if (categoriaCrua == "geladeira") {
        categoriaTratada = "MLB181294"
    } else if (categoriaCrua == "celular") {
        categoriaTratada = "MLB1055"
    } else {
        categoriaTratada = "MLB1002"
    }

    fetchProdutos(categoriaTratada, query);
}


function constroiDiv(dados, buscador, categoria, query) {
    const divProductContent = document.getElementById("produtos");
    dados.forEach(async produto => {
        divProductContent.innerHTML += `
            <div class="product">
                <div class="product-content">
                    <div class="product-img">
                        <img src="${produto.thumbnail}" alt="product image">
                    </div>
                    <div class="product-btns">
                        <form action="${produto.permalink}" target="_blank" class="btn-buy">
                            <input type="submit" value="Ir a web" class="btn-buy" />
                        </form>
                    </div>
                    <div class="product-info">
                        <h2 class="sm-title">${buscador} - ${categoria}</h2>
                        <a href="#" class="product-name">${produto.title}</a>
                        <h3 class="sm-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus ducimus</h3>
                        <p class="product-price">${produto.price}</p>
                    </div>

                    <div class="off-info">
                        <h2 class="sm-title">25% Off</h2>
                    </div>
                </div>
            </div>
        `;
        const dados = {
            thumbnail: produto.thumbnail,
            permalink: produto.permalink,
            buscador: buscador,
            categoria: categoria,
            titulo: produto.title,
            price: produto.price,
            query: query
        }
        console.log(dados);
        const resposta = await fetch('http://localhost:3000/produtos', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
    })
}

function constroiDivBanco(dados) {
    const divProductContent = document.getElementById("produtos");
    dados.forEach(async produto => {
        divProductContent.innerHTML += `
            <div class="product">
                <div class="product-content">
                    <div class="product-img">
                        <img src="${produto.thumbnail}" alt="product image">
                    </div>
                    <div class="product-btns">
                        <form action="${produto.permalink}" target="_blank" class="btn-buy">
                            <input type="submit" value="Ir a web" class="btn-buy" />
                        </form>
                    </div>
                    <div class="product-info">
                        <h2 class="sm-title">${produto.buscador} - ${produto.categoria}</h2>
                        <a href="#" class="product-name">${produto.title}</a>
                        <h3 class="sm-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus ducimus</h3>
                        <p class="product-price">${produto.price}</p>
                    </div>

                    <div class="off-info">
                        <h2 class="sm-title">25% Off</h2>
                    </div>
                </div>
            </div>
        `;
    })
}