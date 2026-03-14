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
var auth_controllers_exports = {};
__export(auth_controllers_exports, {
  Logout: () => Logout,
  deleteUser: () => deleteUser,
  login: () => login,
  register: () => register
});
module.exports = __toCommonJS(auth_controllers_exports);
var import_bcryptjs = __toESM(require("bcryptjs"));
var import_user = require("../models/user.model");
var import_secret_token = require("../utils/secret-token");
const register = async (req, res, next) => {
  try {
    const { email, fullName, password } = req.body;
    if (!fullName || !email || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    const existed = await import_user.User.findOne({ email });
    if (existed) {
      res.status(409).json({ message: "User already exists" });
      return;
    }
    const hashedPassword = await import_bcryptjs.default.hash(password, 10);
    const newUser = await import_user.User.create({
      email,
      fullName,
      password: hashedPassword,
      createdAt: /* @__PURE__ */ new Date()
    });
    const token = (0, import_secret_token.generateToken)(newUser._id.toString());
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1e3
      // 7 days
    });
    res.status(201).json({
      message: "User registered successfully",
      username: newUser.fullName,
      token
    });
  } catch (error) {
    next(error);
  }
};
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    const user = await import_user.User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "User does not exist" });
      return;
    }
    const validated = await import_bcryptjs.default.compare(password, user.password);
    if (!validated) {
      res.status(401).json({ message: "Incorrect email or password" });
      return;
    }
    const token = (0, import_secret_token.generateToken)(user._id.toString());
    res.status(200).json({
      message: "Logged in successfully",
      token,
      username: user.fullName
    });
  } catch (error) {
    next(error);
  }
};
const Logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "strict"
  });
  res.json({ status: true, message: "Logged out successfully" });
};
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("Delete request for ID:", id);
    const user = await import_user.User.findByIdAndDelete(req.params.id);
    if (user) {
      res.status(200).json({ message: "User deleted successfully " });
      return;
    } else {
      res.status(404).json({ message: "User not found" });
      return;
    }
  } catch (error) {
    res.status(400).json({ message: "Error occurred while deleting user" });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Logout,
  deleteUser,
  login,
  register
});
//# sourceMappingURL=auth.controllers.js.map
