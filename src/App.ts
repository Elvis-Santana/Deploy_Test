import  express  from "express";
import router from "./Router/User.router";
import  'dotenv/config';

export  class App {
    private app:express.Application
    private PORT:Number=Number(process.env.PORT)||8080;

    constructor()
    {
        this.app = express();
        this.AppStart();
        this.app.use(express.json())
        this.app.use(router);
    }
    
    public getApp():express.Application{
        return this.app;
    }


    private AppStart(){
        this.app.listen(this.PORT,()=>console.log(`http://localhost:${this.PORT}`))
    }

    
}
