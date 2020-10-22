package com.example.carrinhodecompras_api;

public class Produto {

	private String nome;
	private float preco;
	private int quantidade;

	public Produto(String nome, float preco) {
		this.nome = nome;
		this.preco = preco;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setPreco(float preco) {
		this.preco = preco;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}

	public float getPreco() {
		return this.preco;
	}

	public String getNome() {
		return this.nome;
	}
	
	public int getQuantidade() {
		return this.quantidade;
	}

}
