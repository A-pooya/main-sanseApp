import { NextFunction, Request, Response } from "express";
import { Reserve , ExtraSanse , Sanse} from "../model/schema";


export const addEX = async (req:Request , res:Response , next:NextFunction) => {
    const {day , sansenumber , EXC}:{day:string , sansenumber:string , EXC:number} = req.body;
    try {
        const addEXC = await Sanse.findOne({} , `${day} ${sansenumber}`)
        addEXC[day][sansenumber].EX = EXC
        await addEXC.save();
        res.json({addEXC})
    } catch (err) {
        console.log(err);
    }
}

export const updateSanses = async (req:Request , res:Response , next:NextFunction) => {
    const {day , newsanse ,sansenumber , newEX}:{day:string , newsanse:string , sansenumber:string , newEX:any} = req.body;
    try {
        if(newEX === undefined || typeof newEX === "string" || newEX === null){
            const newAllSanse = await Sanse.findOne({} , `${day}.${sansenumber}.sanse`)
            console.log(newAllSanse);
            newAllSanse[day][sansenumber].sanse = newsanse;

            await newAllSanse.save();
            return res.json({newAllSanse});
        }else{
            const newAllSanse = await Sanse.findOne({} , `${day}.${sansenumber}`)
            console.log(newAllSanse);
            newAllSanse[day][sansenumber].sanse = newsanse;
            newAllSanse[day][sansenumber].EX = newEX;

            await newAllSanse.save();
            return res.json({newAllSanse});
        }
        
    } catch (err) {
        console.log(err); 
    }
}

export const addNewSanse = async (req:Request , res:Response , next:NextFunction) => {
    const {day , sanse , EX}:{day:string , sanse:string , EX:number|undefined|string|null} = req.body;
    
    try {
        if(EX === undefined || typeof EX === "string" || EX === null){

            const addedSanse = await ExtraSanse.create({
                day,
                sanse,
            })
            
            const AllSanse = await Sanse.findOne({})
            AllSanse.extraSanses.push(addedSanse)

            await AllSanse.save();
            
            res.json({addedSanse,AllSanse});

        }else{
            const addedSanse = await ExtraSanse.create({
                day,
                sanse,
                EX
            })
            const AllSanse = await Sanse.findOne({})
            AllSanse.extraSanses.push(addedSanse)

            await AllSanse.save();
            res.json({addedSanse,AllSanse});
        }
        
        

    } catch (err) {
        console.log(err);
    }
}