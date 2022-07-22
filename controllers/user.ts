import { Request, Response } from "express";
import User from "../models/user";

/* --------Get Users-------- */
export const getUsers = async (req: Request, res: Response) => {

    const users = await User.findAll();
    if ( !users ) {
        return res.status(404).json({
            msg: "There is any users"
        });
    };

    res.json({
        msg: "Get Users",
        users
    });
};

/* --------Get User-------- */
export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await User.findByPk(id)
    if( !user ) {
        return res.status(404).json({
            msg: `There is any user with the ID: ${id}`
        });
    };

    res.json({
        msg: "Get User",
        user
    });
};

/* --------Create User-------- */
export const createUser = async(req: Request, res: Response) => {
    const { body } = req;

    try {

        const emailExist = await User.findOne({
            where:{
                email: body.email
            }
        });

        if( emailExist ) {
            return res.status(400).json({
                msg: "User already exists",
    
            }); 
        };

        const user = await User.create(body);
        
        res.json({
            msg: "Create User",
            user
        });

    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            msg: "Talk with the manager",

        });  
    };
    
};

/* --------Update User-------- */
export const updateUser = async(req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        let user = await User.findByPk(id);

        if( !user ) {
            return res.status(400).json({
                msg: "There is not any user with that ID",
            }); 
        };

        user = await user.update( body );
        
        res.json({
            msg: "Create User",
            user
        });

    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            msg: "Talk with the manager",

        });  
    };
    
};

/* --------Delete User-------- */
export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: "delete User",
        id
    });
};