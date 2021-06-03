// Singleton - GoF | Factory Method - GoF

export class Database {
  private static database: Database;

  constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Instancia já criada');
      return Database.database;
    }
    console.log('Criando nova instancia');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db = Database.getDatabase('localhost', 'root', '123456');
db.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

const db3 = Database.getDatabase('localhost', 'root', '123456');
db3.connect();

const db4 = Database.getDatabase('localhost', 'root', '123456');
db4.connect();
