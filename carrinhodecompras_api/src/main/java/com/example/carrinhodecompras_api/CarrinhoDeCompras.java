package com.example.carrinhodecompras_api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
public class CarrinhoDeCompras {

	private List<Produto> produtos = new ArrayList<>();

	@GetMapping(value = "/carrinhodecompras")
	public List<Produto> listarProdutosCarrinho() {
		return this.produtos;
	}
	
	@PostMapping(value = "/carrinhodecompras")
	public void esvaziarCarrinho() {
		this.produtos.clear();
	}

	@PostMapping(value = "/carrinhodecompras/produto")
	public void adicionarProduto(@RequestBody Produto produto) {
		this.produtos.add(produto);
	}
	
	@DeleteMapping(value = "/carrinhodecompras/produto/{id}")
	public void removerProduto(@PathVariable(value = "id") int IDProduto) {	
		
		this.produtos.remove(IDProduto);		
	}

}
