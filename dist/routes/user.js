"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
/* ----------Get Users---------- */
router.get('/', user_1.getUsers);
/* ----------Get User---------- */
router.get('/:id', user_1.getUser);
/* ----------Create User---------- */
router.post('/', user_1.createUser);
/* ----------Create User---------- */
router.put('/:id', user_1.updateUser);
/* ----------Delete User---------- */
router.delete('/:id', user_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map