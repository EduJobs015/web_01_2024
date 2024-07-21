import { Connection } from 'mysql2/typings/mysql/lib/Connection';
import oracledb from 'oracledb';

const dbConfig = {
    user: 'BT303917X',
    password: 'BT303917X',
    connectString: '177.105.115.180:51521'
};

let oracleConnection: any = connectToDatabase().catch(err => console.error(err));

async function connectToDatabase() {
    try {
        oracleConnection = await oracledb.getConnection(dbConfig);
        console.log('Conexão bem-sucedida com o banco de dados Oracle');
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        throw err;
    }
}

export async function executarComandoSQL(query: string, valores: any[]): Promise<any> {
    try {
        if (!oracleConnection) {
            await connectToDatabase();
        }
        const result = await oracleConnection.execute(query, valores, { autoCommit: true });
        return result;
    } catch (err) {
        console.error('Erro ao executar comando SQL:', err);
        throw err;
    }
}
