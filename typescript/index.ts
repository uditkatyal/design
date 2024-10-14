// DIP  - according to DIP -> high level modules should not depend  on low level modules. Both should depend on abstraction. 
// Abstractions should not depend on details but details should depend on abstractions



// in this example high level class is dependent on low level class
// class MySqlDatabase {
//     save(data: string):void {
//     }
// }

// class HighLevelModule {

//     constructor(public database : MySqlDatabase){
//     }
//     execute(data:string):void{
//       this.database.save(data);
//     }
// }

// instead use DIP

interface IDatabase {
    save(data:string):void;
}

class MySqlDatabase implements IDatabase {
    save(data: string): void {
        console.log(`${data} got saved to MySql Database`)
    }
}

class MongoDatabase implements IDatabase {
    save(data: string) : void {
        console.log(`${data} got saved to MongoDatabase`)
    }
}

class HighLevelModule {
    constructor(public database : IDatabase){
    }
    execute(data: string):void {
     this.database.save(data);
    }
}

let MySql: MySqlDatabase = new MySqlDatabase();
let MongoDb :MongoDatabase = new MongoDatabase()

let highLevel : HighLevelModule = new HighLevelModule(MySql)
let highLevel2 : HighLevelModule = new HighLevelModule(MongoDb);

highLevel.execute("Udit Katyal")
highLevel2.execute("some data")

