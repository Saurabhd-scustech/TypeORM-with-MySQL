import express, {Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import router from './routes/routes.user'
import { Photos } from './entity/Photos';
import { User } from './entity/User';
import { Post } from './entity/Post';
import { Content } from './entity/Content';
import { Concrete } from './entity/Concrete';
import { Student } from './relations-entity/OneToOne/Students';
import { College } from './relations-entity/OneToOne/College';
import { Book } from './relations-entity/OneToMany/entity.book';
import { Pages } from './relations-entity/OneToMany/entity.pages';
import { Questions } from './relations-entity/ManyToMany/Ouestions';
import { Category } from './relations-entity/ManyToMany/Category';


dotenv.config();    
const app = express();
const { PORT } = process.env;

//json middleware
app.use(express.json());

//router middleware
app.use('/users', router)


app.use((err: Error, req: Request, res: Response, next: NextFunction ) => {
    console.log(next, req)
    res.json({ message: err.message })
})

createConnection({
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "Srdx@//97",
  "database": "mydb",
  "logging": true,
  "entities": [User, Content, Photos, Post, Concrete, Student, College, Book, Pages, Questions, Category],
  "migrationsTableName": "migrated_table",
  "migrations": ["./migration/*.ts"],
  "cli": {
    migrationsDir: "src/migration/"
  }
}).then(():void=>console.log(`Connected to MySQL Database`)).catch((err)=>console.log(err.message))

app.listen(PORT, ():void=>console.log(`server up and running on port number: ${PORT}`))