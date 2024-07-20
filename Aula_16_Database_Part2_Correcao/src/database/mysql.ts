import mysql, { Connection} from 'mysql2';

const dbConfig = {
    host: '177.105.115.180',
    port: 51521,
    user: 'root',
    password: 'BT303917X',
    database: 'BT303917X'
};

const mysqlConnection: Connection = mysql.createConnection(dbConfig);

mysqlConnection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        throw err;
    }
    console.log('Conexão bem-sucedida com o banco de dados MySQL');
});

export function executarComandoSQL(query: string, valores: any[]): Promise<any> {
    return new Promise<any>(
        (resolve, reject) => {
            mysqlConnection.query(query, valores, (err, resultado: any) => {
                if (err) {
                    reject(err);
                    throw err;
                }
                resolve(resultado);
            });
        }
    )
}
