app.controller('MainController', function ($scope, $http) {

    $scope.total = 0
    $scope.subtotal = 0
    $scope.produtos = []
    // listando produtos do carrinho
    $http.get("http://localhost:8080/carrinhodecompras")
        .then(function (response) {
            $scope.produtos = response.data;

            // percorrendo o valor de todos os produtos do carrinho e 
            // gerando o total
            $scope.produtos.map(produto => {
                $scope.total += produto.preco * produto.quantidade
            })
        });

    // removendo produtos do carrinho
    $scope.removeProduto = function (produto) {

        if (confirm("Deseja realmente remover este produto?")) {

            const produtoRemovido = produto

            $http.delete(`http://localhost:8080/carrinhodecompras/produto/${produto.id}`)
                .then(reponse => {

                    alert('Produto removido do carrinho com sucesso.')

                    // atualizando a lista de produtos
                    $scope.produtos = $scope.produtos.filter(produto => {
                        if (produto != produtoRemovido) {
                            return produto
                        }
                    })

                    // gerando o total
                    $scope.produtos.map(produto => {
                        $scope.total = 0
                        $scope.total += produto.preco * produto.quantidade
                    })
                })
        } else {
            alert("Operação cancelada.")
        }


    }

    $scope.finalizarCompra = function () {
        if (confirm("Deseja realmente concluir a compra?")) {
            alert("Compra concluída com sucesso.")
            // esvaziando o carrinho
            $scope.produtos = []
            $scope.total = 0

        } else {
            alert('Operação cancelada.')
        }
    }

    $scope.cancelarCompra = function () {
        if (confirm("Deseja realmente cancelar a compra?")) {
            alert("Compra cancelada com sucesso.")
            // esvaziando o carrinho
            $scope.produtos = []
            $scope.total = 0

        } else {
            alert('Operação cancelada.')
        }

    }

});
