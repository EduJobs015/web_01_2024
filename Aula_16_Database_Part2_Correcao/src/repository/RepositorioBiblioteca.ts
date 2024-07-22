import { executarComandoSQL } from "../database/mysql";
import { Livro } from "../model/Livro";

export class RepositorioBiblioteca {

    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
            CREATE TABLE IF NOT EXISTS livros (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                author VARCHAR(255) NOT NULL,
                isbn VARCHAR(20) NOT NULL,
                pages INT NOT NULL,
                language VARCHAR(100) NOT NULL,
                publisher VARCHAR(100) NOT NULL
            );`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log('Tabela criada com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao criar tabela:', err);
        }
    }

    async CriarLivro(title: string, author: string, publishedDate: string, isbn: string, pages: number, language: string, publisher: string): Promise<Livro> {
        const query = "INSERT INTO livros (title, author, publishedDate, isbn, pages, language, publisher) VALUES (?, ?, ?, ?, ?, ?, ?);";

        try {
            const resultado = await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher]);
            console.log('Livro inserido com sucesso, ID: ', resultado.insertId);
            const Novolivro = new Livro(resultado.insertId, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Livro>((resolve) => {
                resolve(Novolivro);
            });
        } catch (err) {
            console.error('Erro ao inserir informações do livro:', err);
            throw err;
        }
    }

    async BuscarTodos(): Promise<Livro[]> {
        const query = "SELECT * FROM livros;";

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Livro[]>((resolve) => {
                resolve(resultado);
            });
        } catch (err: any) {
            console.error(`Falha ao procurar os livros gerando o erro: ${err}`);
            throw err;
        }
    }

    async BuscarPorId(id: number): Promise<Livro> {
        const query = "SELECT * FROM livros WHERE id = ?;";

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Livro encontrado com sucesso, ID: ', resultado);
            return new Promise<Livro>((resolve) => {
                resolve(resultado[0]);
            });
        } catch (err: any) {
            console.error(`Falha ao encontrar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async updateLivro(id: number, title: string, author: string, publishedDate: string, isbn: string, pages: number, language: string, publisher: string): Promise<Livro> {
        const query = "UPDATE livros SET title = ?, author = ?, publishedDate = ?, isbn = ?, pages = ?, language = ?, publisher = ? WHERE id = ?;";

        try {
            await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher, id]);
            console.log('Livro atualizado com sucesso, ID: ', id);
            const LivroAtualizado = new Livro(id, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Livro>((resolve) => {
                resolve(LivroAtualizado);
            });
        } catch (err: any) {
            console.error(`Erro ao atualizar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async DeletarLivro(id: number): Promise<void> {
        const query = "DELETE FROM livros WHERE id = ?;";

        try {
            await executarComandoSQL(query, [id]);
            console.log('Livro deletado com sucesso, ID: ', id);
            return new Promise<void>((resolve) => {
                resolve();
            });
        } catch (err: any) {
            console.error(`Falha ao deletar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscarIsbn(isbn: string): Promise<Livro> {
        const query = "SELECT * FROM livros WHERE isbn = ?;";

        try {
            const resultado = await executarComandoSQL(query, [isbn]);
            console.log('Livro encontrado com sucesso, ISBN: ', resultado);
            return new Promise<Livro>((resolve) => {
                resolve(resultado[0]);
            });
        } catch (err: any) {
            console.error(`Falha ao procurar o livro de ISBN ${isbn} gerando o erro: ${err}`);
            throw err;
        }
    }
}
