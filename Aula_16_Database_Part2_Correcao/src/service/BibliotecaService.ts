import { Livro } from "../model/Livro";
import { RepositorioBiblioteca } from "../repository/RepositorioBiblioteca";

export class ServiceBiblioteca{

    repositorioLivro: RepositorioBiblioteca = new RepositorioBiblioteca();

    async Serv_CriarLivro(Livro: any): Promise<Livro> {
        const {id, title, author, publishedDate, isbn, pages, language, publisher} = Livro;
        if(!id || !title || !author || !publishedDate || !isbn || !pages || !language || !publisher){
            throw new Error("Informações incompletas");
        }
        const isbnExistente = this.repositorioLivro.buscarIsbn(isbn);
        if(isbnExistente === isbn){
            throw new Error("O isbn já esta em uso !!")
        }
        const novoLivro =  await this.repositorioLivro.CriarLivro(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Insert ", novoLivro);
        return novoLivro;
    }

    async Serv_updateLivro(Livro: any): Promise<Livro> {
        const { id, title, author, publishedDate, isbn, pages, language, publisher } = Livro;
        if(!id || !title || !author || !publishedDate || !isbn || !pages || !language || !publisher){
            throw new Error("Informações incompletas");
        }

        const novoLivro =  await this.repositorioLivro.updateLivro(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Update ", novoLivro);
        return novoLivro;
    }

    async Serv_BuscarTodos(): Promise<Livro> {
        const produto =  await this.repositorioLivro.BuscarTodos();
        console.log("Service - Livros Encontrados : ", produto);
        return produto;
    }

    async Serv_filtrarLivro(ID: any): Promise<Livro> {
        if(!ID ){
            throw new Error("Informações incompletas");
        }
        const id = parseInt(ID, 10);
        if(!id){
            throw new Error("O id fornecido não foi encontrado !!")
        }

        const Livro =  await this.repositorioLivro.BuscarPorId(id);
        console.log("Service - Filtrar", Livro);
        return Livro;
    }

    async Ser_DeletarLivro(Livro: any): Promise<Livro[]> {
        const { id, title, author, publishedDate, isbn, pages, language, publisher } = Livro;
        if(!id || !title || !author || !publishedDate || !isbn || !pages || !language || !publisher){
            throw new Error("Informações incompletas");
        }
        const idDeletar = parseInt(id)
        const DeletarLivro = await this.repositorioLivro.DeletarLivro(idDeletar)
        return id;
    }

}