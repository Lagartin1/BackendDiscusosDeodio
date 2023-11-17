import { Data,urlData } from "../models/dataModel";
import { Request, Response} from "express";

let listData: Data[] = [
  {
    url: 'https://www.test.com/' ,
    hatePercentage:90,
    date: 'dd/mm/yyyy',
  },
];

export const createData = (req: Request, res: Response) => {
    const newData = new Data(req.body);
    listData.push(newData);
    res.json({ ok: "success", data: listData });
};

export const sendData = (req: Request,res: Response) => {  
    res.json({ ok: "success", data: listData });
};

