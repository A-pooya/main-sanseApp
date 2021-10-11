import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongoose";
import { Reserve , Sanse , ExtraSanse} from "../model/schema";
import {ReserveExtraSanse} from "../interfaces/interface"

export const Allsanse = async(req:Request , res:Response , next:NextFunction) => {
    const getAllSanse = await Sanse.find({}).countDocuments()
    try {
        if(getAllSanse === 0 ){
            const AllSanse = await Sanse.create({
                saturday:{
                    sanse1:{},
                    sanse2:{},
                    sanse3:{},
                    sanse4:{},
                }
            })
            res.json({AllSanse})
        }else{
            const Allsanse = await Sanse.findOne({})
            console.log(Allsanse);
            res.json({Allsanse})
        }
    } catch (err) {
        console.log(err);
    }
   
}

export const reserveSanse = async (req:Request , res:Response , next:NextFunction) => {
    const {day , sanse , date , sansenumber , isExtraSanse}:{day:string , sanse:string , date:string , sansenumber:string , isExtraSanse:boolean} = req.body;
    try {
        const reserving = await Reserve.create({
            day,
            sanse,
            date
        })
        //! reserve a usual sanse(not Extra sanse)
        if(isExtraSanse === false){
        const updateDC = await Sanse.findOne({} , `${day}.${sansenumber}`)

        if(updateDC[day][sansenumber].EX === 0){
            if(updateDC[day][sansenumber].DC !== 0){
                updateDC[day][sansenumber].DC -= 1
                await updateDC.save()
            }
            else{
                res.json({message:"this sanse is full :("})
            }
        }else{
                updateDC[day][sansenumber].EX -= 1
                await updateDC.save();
        }
        
         res.json({message:`you reserved the sanse ${sanse} in ${day} , ${date}` , reserved:reserving , updateDC})

         //! reserve a Extra Sanse
        }else{
            //*---------------------------- fix EX & DC in Sanse model 
            const getExtraSanses = await Sanse.findOne({} , "extraSanses");
            const data = getExtraSanses.extraSanses;
            data.map(async(item:ReserveExtraSanse) => {
                try {
                    if(item.day === day && item.sanse === sanse){
                        if(item.EX === 0){
                            if(item.DC === 0) return res.json({message:"this sanse is full:)"})
                            item.DC -= 1;
                        }else{
                            item.EX -= 1;  
                        }
                        await getExtraSanses.save();
                    }else{
                        return
                    }
                } catch (err) {
                    console.log(err);
                }
              
            })
            
            //*----------------------------- fix EX & DC in extraSanse model
            const updateDC = await ExtraSanse.findOne({day , sanse});
            if(!updateDC){
                return res.json({message:'there is not any sanse with this information'})
            }
            if(updateDC.EX === 0){
                if(updateDC.DC !== 0){
                    updateDC.DC -= 1;
                    await updateDC.save();
                    res.json({updateDC});
                }else{
                    res.json({message:'this sanse is full :('})
                }
            }else{
                updateDC.EX -= 1;
                await updateDC.save();
            }
                res.json({updateDC , getExtraSanses});
        }
    } catch (err) {
        console.log(err);
    }
}



