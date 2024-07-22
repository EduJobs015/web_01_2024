import express from 'express';
import { C_CriarLivro, C_BuscarTodos, C_DeletarLivro, C_BuscarPorId, C_updateLivro } from './controller/BibliotecaController';

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/api/livro", C_CriarLivro);
app.get("/api/livro/:id", C_BuscarPorId);
app.get("/api/livro/todos", C_BuscarTodos);
app.put("/api/livro/up", C_updateLivro);  
app.delete("/api/livro/:id", C_DeletarLivro);

app.listen(PORT, () => console.log("API online na porta: " + PORT));
