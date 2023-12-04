import { Data,urlData } from "../models/dataModel";
import { Request, Response} from "express";
import { pool as p} from '../src/db' 

let listData: Data[] = [
  {
    url: 'https://www.test.com/' ,
    hatePercentage:90,
    date: 'dd/mm/yyyy',
  },
];

// para consultas utilizar funciones async y await, 
// para hacer CRUD
// p.quert("AQUI LA CONSULTA SQL")

export const createData = (req: Request, res: Response) => {
    const newData = new Data(req.body);
    listData.push(newData);
    res.json({ ok: "success", data: listData });
};

export const sendData = (req: Request,res: Response) => {  
    res.json({ ok: "success", data: listData });
};

