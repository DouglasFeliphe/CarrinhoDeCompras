app.controller('MainController', function ($scope, $http) {

    $scope.quantidade = 0

    // listando produtos
    $http.get("http://localhost:8080/produtos")
        .then(response => {
            $scope.produtos = response.data;

        }, function (response) {
            // Second function handles error
            alert("Erro ao exibir a lista de produtos.")
        });

    // listando a quantidade de produtos no carrinho
    $http.get("http://localhost:8080/carrinhodecompras")
        .then(response => {
            $scope.quantidade = response.data.length
        })

    // adicionando produtos
    $scope.addProduto = function (produto) {
        data = {
            nome: produto.nome,
            preco: produto.preco,
            quantidade: produto.quantidade
        }
        $http.post("http://localhost:8080/carrinhodecompras/produto",
            data
        )
        // incrementando a quantidade 
        $scope.quantidade++
        M.toast({ html: 'Produto adicionado ao carrinho.', classes: 'rounded green lighten-2' })
    }

    $scope.incrementarQuantidade = function (produto) {
        produto.quantidade++
    }
    $scope.decrementarQuantidade = function (produto) {
        if (produto.quantidade > 0) {
            produto.quantidade--
        }
    }

});