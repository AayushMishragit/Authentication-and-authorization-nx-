"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var auth_middlewares_exports = {};
__export(auth_middlewares_exports, {
  default: () => auth_middlewares_default
});
module.exports = __toCommonJS(auth_middlewares_exports);
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var dotenv = __toESM(require("dotenv"));
var import_user = require("../models/user.model");
dotenv.config();
async function userVerification(req, res, next) {
  const token = req.cookies?.token;
  if (!token) {
    res.json({ status: false });
    return;
  }
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    res.json({ status: false });
    return;
  }
  try {
    const decoded = import_jsonwebtoken.default.verify(token, secret);
    const user = await import_user.User.findById(decoded.id).select("-password");
    if (user) {
      res.json({ username: user.fullName });
      return;
    } else {
      res.json({ status: false });
      return;
    }
  } catch (error) {
    res.json({ status: false });
    return;
  }
}
var auth_middlewares_default = userVerification;
//# sourceMappingURL=auth.middlewares.js.map
