import express from 'express';
import { C_CriarLivro, C_BuscarTodos, C_DeletarLivro, C_BuscarPorId } from './controller/BibliotecaController';

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/api/product", C_CriarLivro);
app.get("/api/product/:id", C_BuscarPorId);
app.get("/api/products", C_BuscarTodos); 
app.delete("/api/product/:id", C_DeletarLivro);

app.listen(PORT, () => console.log("API online na porta: " + PORT));
