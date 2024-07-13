import express from 'express';
import { CriarLivro, BuscarTodos, updateLivro, BuscarPorId, DeletarLivro} from './controller/ProductController';

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/api/product", CriarLivro)
app.get("/api/product", BuscarTodos)
app.delete("/api/product", deletarProduto)
app.get("/api/product", filtrarProduto)
app.get("/api/products", listarTodosProduto)

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));