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
    
}