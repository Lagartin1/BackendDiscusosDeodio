import express from "express";
import{createData,sendData,sendPercentajeHate}from "../controllers/dataController"

// Crear instancia del router ()
const router = express.Router();

// Lo utilizamos igual que antes app.post -> router.post
router.post("/", createData );
router.get("/",sendData );
//router.get("/", sendPercentajeHate );

export { router as dataRouter };