import express from "express";
const router = express.Router();
import {
  getAllUser,
  getAllUserAndProduct,
  searchId,
  addUser,
  updateUser,
  deleteUser,
  searchNameAndAge
} from "./contorall/user.control.js";

// Get all users
router.get("/user", getAllUser);

// Get all users and products
router.get("/userAndPro", getAllUserAndProduct);

// Search user by ID
router.get("/user/:id", searchId);

// Add user
router.post("/user", addUser);

// Update user
router.patch("/user/:id", updateUser);

// Delete user
router.delete("/user/:id", deleteUser);

// Search user by name and age
router.get("/userSearch", searchNameAndAge);

export default router;