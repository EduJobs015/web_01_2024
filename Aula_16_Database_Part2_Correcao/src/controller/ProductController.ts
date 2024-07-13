import { Request, Response } from "express";
import { ServiceBiblioteca } from "../service/BibliotecaService";


const livroService = new ServiceBiblioteca();

export async function CriarLivro (req: Request, res: Response){
    try {
        const novoLivro = await livroService.Serv_CriarLivro(req.body);
        res.status(201).json(
            {
                mensagem:"Livro adicionado com sucesso!",
                produto:novoLivro
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function atualizarProduto (req: Request, res: Response){
    try {
        const produto = await productService.atualizarProduto(req.body);
        res.status(200).json(
            {
                mensagem:"Produto atualizado com sucesso!",
                produto:produto
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function deletarProduto (req: Request, res: Response){
    try {
        const produto = await productService.deletarProduto(req.body);
        res.status(200).json(
            {
                mensagem:"Produto deletado com sucesso!",
                produto:produto
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function filtrarProduto (req: Request, res: Response){
    try {
        const produto = await productService.filtrarProduto(req.query.id);
        res.status(200).json(
            {
                mensagem:"Produto encontrado com sucesso!",
                produto:produto
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function listarTodosProduto (req: Request, res: Response){
    try {
        const produtos = await productService.listarTodosProdutos();
        res.status(200).json(
            {
                mensagem:"Produtos listados com sucesso!",
                produtos:produtos
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};