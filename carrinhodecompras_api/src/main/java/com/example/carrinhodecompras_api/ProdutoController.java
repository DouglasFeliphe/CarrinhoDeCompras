package com.example.carrinhodecompras_api;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@RequestMapping(value = "/produtos")
@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
public class ProdutoController {
	
	private List<Produto> produtos =  new ArrayList<>();
	
	@GetMapping(value="/produtos") //rota get
	public List<Produto> getProdutos() {
		return this.produtos;
	}
	
	@PostMapping(value="/produtos") //rota post, que recebe um json. Necessário um request body para funcionar.
	public void setProdutos(@RequestBody List<Produto> produtos) {
		this.produtos = produtos;
	}

}
