"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_express = __toESM(require("express"));
var import_cors = __toESM(require("cors"));
var dotenv = __toESM(require("dotenv"));
var import_auth = require("./app/routes/auth.route");
var import_mongoose = __toESM(require("mongoose"));
var import_cookie_parser = __toESM(require("cookie-parser"));
dotenv.config();
const app = (0, import_express.default)();
app.use((0, import_cors.default)({
  origin: [
    "http://localhost:4200",
    "https://authentication-and-authorization-nx.vercel.app"
  ],
  credentials: true
}));
app.use(import_express.default.json());
app.use((0, import_cookie_parser.default)());
app.use("/my-backend/routes/auth", import_auth.authRouter);
const PORT = process.env.PORT ? Number(process.env.PORT) : 4e3;
import_mongoose.default.connect(process.env.MONGO_URI).then(() => console.log("MongoDB connected successfully")).catch((err) => console.error(err));
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=main.js.map
