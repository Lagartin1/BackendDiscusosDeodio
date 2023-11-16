import { Data,urlData } from "../models/dataModel";
import { Request, Response} from "express";
import { spawn } from 'child_process';

let listData: Data[] = [
  {
    url: 'https://www.test.com/' ,
    hatePercentage:90,
    date: 'dd/mm/yyyy',
  },
];


//cambiar paths de los scrapping
// ejecutar algun analisis de odio y enviar results 
// sin usuo
export const sendPercentajeHate = (req: Request, res: Response) =>{
    const newUrlData = new urlData(req.body)
    if (newUrlData.type =='I'){
        const pythonProcess = spawn('python', ['path/to/scraping_script.py']);
        const results = pythonProcess
        res.json({ ok: "success", data: { hatepercentage:results} })
    }
    else if (newUrlData.type =='T'){
        const pythonProcess = spawn('python', ['path/to/scraping_script.py']);
        const results = pythonProcess
        res.json({ ok: "success", data: { hatepercentage:results} })
    }else if (newUrlData.type =='F'){
        const pythonProcess = spawn('python', ['path/to/scraping_script.py']);
        const results = pythonProcess
        res.json({ ok: "success", data: { hatepercentage:results} })
    }else{
        res.json({error:'Fatal'}).sendStatus(400);
    }
};

export const createData = (req: Request, res: Response) => {
    const newData = new Data(req.body);
    listData.push(newData);
    res.json({ ok: "success", data: listData });
};

export const sendData = (req: Request,res: Response) => {  
    res.json({ ok: "success", data: listData });
};

