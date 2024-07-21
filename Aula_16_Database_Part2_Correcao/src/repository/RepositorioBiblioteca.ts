import { executarComandoSQL } from "../database/mysql";
import { Livro } from "../model/Livro";

export class RepositorioBiblioteca{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS Biblioteca.Livro (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(100) NOT NULL,
            publishedDate DATE,
            isbn VARCHAR(50) NOT NULL,
            pages NUMBER NOT NULL,
            language VARCHAR(100) NOT NULL,
            publisher VARCHAR(100) NOT NULL
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async CriarLivro(id:number, title: string, author: string, publishedDate: string, isbn:string, pages: number, language: string, publisher: string) :Promise<Livro>{
        const query = "INSERT INTO Biblioteca.Livro (title, author, publishedDate, isbn, pages, language, publisher) VALUES (?, ?, ?, ?, ?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [id,title, author, publishedDate, isbn, pages, language, publisher]);
            console.log('Produto inserido com sucesso, ID: ', resultado.insertId);
            const Novolivro = new Livro(id, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Livro>((resolve)=>{
                resolve(Novolivro);
            })
        } catch (err) {
            console.error('Erro ao inserir informações do livro:', err);
            throw err;
        }
    }

    async BuscarTodos() :Promise<Livro>{
        const query = "SELECT * FROM Biblioteca.Livro " ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Livro>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar os livros gerando o erro: ${err}`);
            throw err;
        }
    }

    async BuscarPorId(id: number) :Promise<Livro>{
        const query = "SELECT * FROM Biblioteca.Livro where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Produto encontrado com sucesso, ID: ', resultado);
            return new Promise<Livro>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao encontrar o produto de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async updateLivro(id:number, title: string, author: string, publishedDate: string, isbn:string, pages: number, language: string, publisher: string) :Promise<Livro>{
        const query = "UPDATE Biblioteca.Livro set title = ?, author ?, publishedDate ?, isbn ?, pages ?, language ?, publisher ?  where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [id,title, author, publishedDate, isbn, pages, language, publisher]);
            console.log('Produto atualizado com sucesso, ID: ', resultado);
            const LivroId = new Livro(id,title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Livro>((resolve)=>{
                resolve(LivroId);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }


    async DeletarLivro(id: number) :Promise<Livro>{
        const query = "SELECT * FROM Biblioteca.Livro where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Produto deletado com sucesso, ID: ', resultado);
            return new Promise<Livro>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o produto de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscarIsbn(isbn: number) :Promise<Livro>{
        const query = "SELECT * FROM Biblioteca.Livro where isbn = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [isbn]);
            console.log('Produto deletado com sucesso, isbn: ', resultado);
            return new Promise<Livro>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o produto de ID ${isbn} gerando o erro: ${err}`);
            throw err;
        }
    }

    
}