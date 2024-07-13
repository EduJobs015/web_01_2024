import { Livro } from "../model/Livro";
import { RepositorioBiblioteca } from "../repository/RepositorioBiblioteca";

export class ServiceBiblioteca{

    repositorioLivro: RepositorioBiblioteca = new RepositorioBiblioteca();

    async Serv_CriarLivro(livro: any): Promise<Livro> {
        const {id, title, author, publishedDate, isbn, pages, language, publisher} = Livro;
        if(!id || !title || !author || !publishedDate || !isbn || !pages || !language || !publisher){
            throw new Error("Informações incompletas");
        }

        const novoProduto =  await this.repositorioLivro.CriarLivro(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Insert ", novoProduto);
        return novoProduto;
    }

    async updateLivro(Livro: any): Promise<Livro> {
        const { id, title, author, publishedDate, isbn, pages, language, publisher } = Livro;
        if(!id || !title || !author || !publishedDate || !isbn || !pages || !language || !publisher){
            throw new Error("Informações incompletas");
        }

        const produto =  await this.repositorioLivro.updateLivro(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Update ", produto);
        return produto;
    }

    async BuscarTodos(): Promise<Livro> {
        const produto =  await this.repositorioLivro.BuscarTodos();
        console.log("Service - Livros Encontrados : ", produto);
        return produto;
    }

    async filtrarProduto(produtoData: any): Promise<Livro> {
        if(!produtoData ){
            throw new Error("Informações incompletas");
        }
        const id = parseInt(produtoData, 10);

        const produto =  await this.productRepository.filterProduct(id);
        console.log("Service - Filtrar", produto);
        return produto;
    }

    async listarTodosProdutos(): Promise<Product[]> {
        const produto =  await this.productRepository.filterAllProduct();
        console.log("Service - Filtrar Todos", produto);
        return produto;
    }

}