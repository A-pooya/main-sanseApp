import {Router} from "express";
import {Allsanse , reserveSanse  } from "../controller/handler";
import {addEX , updateSanses ,addNewSanse } from "../controller/addminController"
const router = Router();



router.get("/allSanse" , Allsanse);
router.get("/reserve-sanse" , reserveSanse);
router.get("/addEXD" , addEX);
router.get("/update-sanse" ,updateSanses )
router.get("/new-sanse" , addNewSanse)


export {
    router
}