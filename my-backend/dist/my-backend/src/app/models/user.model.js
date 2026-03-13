"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var user_model_exports = {};
__export(user_model_exports, {
  User: () => User
});
module.exports = __toCommonJS(user_model_exports);
var import_mongoose = require("mongoose");
const userSchema = new import_mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
    lowercase: true,
    trim: true
  },
  fullName: {
    // UI shows "Full Name" and "Admin Full Name"
    type: String,
    required: [true, "Full name is required"],
    trim: true
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
    minlength: [6, "Password must be at least 6 characters"],
    hashed: true
  },
  createdAt: { type: Date, default: () => /* @__PURE__ */ new Date() }
});
const User = (0, import_mongoose.model)("User", userSchema);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  User
});
//# sourceMappingURL=user.model.js.map
