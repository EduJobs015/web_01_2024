import { Request, Response } from "express";
import { ServiceBiblioteca } from "../service/BibliotecaService";


const livroService = new ServiceBiblioteca();

export async function C_CriarLivro (req: Request, res: Response){
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

export async function C_BuscarTodos (req: Request, res: Response){
    try {
        const livro = await livroService.Serv_BuscarTodos();
        res.status(200).json(
            {
                mensagem:"Todos os livros em sua biblioteca!",
                produto:livro
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function C_BuscarPorId (req: Request, res: Response){
    try {
        const Livro = await livroService.Serv_filtrarLivro(req.query.id);
        res.status(200).json(
            {
                mensagem:"Livro encontrado com sucesso!",
                produto:Livro
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function C_updateLivro (req: Request, res: Response){
    try {
        const livro = await livroService.Serv_updateLivro(req.body);
        res.status(200).json(
            {
                mensagem:"Dados atualizados com sucesso!",
                produto:livro
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function C_DeletarLivro (req: Request, res: Response){
    try {
        const livroDeletado = await livroService.Ser_DeletarLivro(req.body);
        res.status(200).json(
            {
                mensagem:"Livro deletado com sucesso!!",
                produtos:livroDeletado
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};