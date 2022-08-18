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
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose = require("mongoose");
const db = (db2) => __awaiter(void 0, void 0, void 0, function* () {
    mongoose.connect(db2, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    var connection = mongoose.connection;
    yield connection.on("connected", function () {
        console.log("db connected db2");
    });
});
exports.db = db;
