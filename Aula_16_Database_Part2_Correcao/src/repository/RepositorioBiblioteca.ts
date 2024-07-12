import { listarTodosProduto } from "../controller/ProductController";
import { Livro } from "../model/Livro";

export class RepositorioLivro{
    ListaBiblioteca : Livro[] = []

    CriarLivro(NovoLivro: Livro){
        this.ListaBiblioteca.push(NovoLivro)
    }
    ExibirBiblioteca():Livro[]{
        return this.ListaBiblioteca;
    }
    ConsultarPorId(id:number):Livro|undefined{
        return this.ListaBiblioteca.find(Livro => Livro.id === id )
    }
    AtualizarInformações(id: number, title: string, author: string, publishedDate: string, isbn: string, pages: number, language: string, publisher: string){
        const index = this.ListaBiblioteca.findIndex(Livro => Livro.id === id);
        if(index!== -1){
            this.ListaBiblioteca[index].title = title;
            this.ListaBiblioteca[index].author = author;
            this.ListaBiblioteca[index].publishedDate = publishedDate;
            this.ListaBiblioteca[index].isbn = isbn;
            this.ListaBiblioteca[index].pages = pages;
            this.ListaBiblioteca[index].language = language;
            this.ListaBiblioteca[index].publisher = publisher;
        }else{
            throw new Error("Livro não encontrado")
        }
    }
    deletarLivro(id:number): void{
        const deletLivro = this.ListaBiblioteca.findIndex(Livro => Livro.id === id);
        if(deletLivro !== -1){
            this.ListaBiblioteca.splice(deletLivro)
        }else{
            throw new Error ("livro não encontrado");
        }
    }
}