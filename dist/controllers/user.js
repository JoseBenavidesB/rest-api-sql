"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
/* --------Get Users-------- */
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll();
    if (!users) {
        return res.status(404).json({
            msg: "There is any users"
        });
    }
    ;
    res.json({
        msg: "Get Users",
        users
    });
});
exports.getUsers = getUsers;
/* --------Get User-------- */
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: `There is any user with the ID: ${id}`
        });
    }
    ;
    res.json({
        msg: "Get User",
        user
    });
});
exports.getUser = getUser;
/* --------Create User-------- */
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const emailExist = yield user_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (emailExist) {
            return res.status(400).json({
                msg: "User already exists",
            });
        }
        ;
        const user = yield user_1.default.create(body);
        res.json({
            msg: "Create User",
            user
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Talk with the manager",
        });
    }
    ;
});
exports.createUser = createUser;
/* --------Update User-------- */
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        let user = yield user_1.default.findByPk(id);
        if (!user) {
            return res.status(400).json({
                msg: "There is not any user with that ID",
            });
        }
        ;
        user = yield user.update(body);
        res.json({
            msg: "Create User",
            user
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Talk with the manager",
        });
    }
    ;
});
exports.updateUser = updateUser;
/* --------Delete User-------- */
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "delete User",
        id
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.js.map