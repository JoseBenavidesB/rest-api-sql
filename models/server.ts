import express, { Application } from "express";
import userRoutes from "../routes/user";
import cors from "cors";
import db from "../database/config";

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users',

    }

    constructor () {
        this.app = express();
        this.port = process.env.PORT || '4000';

        //Db connetion
        this.dbConnection();

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();


    };

    async dbConnection() {

        try {
            
            await db.authenticate();
            console.log('Database Online');
            
        } catch (error:any) {
            throw new Error( error );
        }
    }

    middlewares() {
        //CORS
        this.app.use( cors() );

        //Parse BODY
        this.app.use( express.json() )

        //Public directory
        this.app.use( express.static('public') );
    };

    routes() {
        this.app.use( this.apiPaths.users, userRoutes)
    };

    listen() {
        this.app.listen( this.port, () => {
            console.log("Server running on port: ", this.port);
            
        })
    }
}

export default Server;