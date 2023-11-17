import express from "express";
import{createData,sendData,}from "../controllers/dataController"

// Crear instancia del router ()
const router = express.Router();

// Lo utilizamos igual que antes app.post -> router.post
router.post("/", createData );
router.get("/",sendData );

export { router as dataRouter };