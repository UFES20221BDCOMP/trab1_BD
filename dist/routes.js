"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSauce = void 0;
const CreateSauceService_1 = __importDefault(require("./CreateSauceService"));
function createSauce(request, response) {
    CreateSauceService_1.default.execute("Branco", 4);
    return response.send();
}
exports.createSauce = createSauce;
