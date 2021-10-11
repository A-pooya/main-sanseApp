import * as mongoose from "mongoose";

const sanseSchema = new mongoose.Schema({
   saturday:{
        sanse1:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"8-10"}},
        sanse2:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"10-12"}},
        sanse3:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"12-14"}},
        sanse4:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"14-16"}},
   },
   sunday:{
        sanse1:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"8-10"}},
        sanse2:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"10-12"}},
        sanse3:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"12-14"}},
        sanse4:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"14-16"}},
    },
   monday:{
        sanse1:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"8-10"}},
        sanse2:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"10-12"}},
        sanse3:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"12-14"}},
        sanse4:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"14-16"}}
   },
   tuesday:{
        sanse1:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"8-10"}},
        sanse2:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"10-12"}},
        sanse3:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"12-14"}},
        sanse4:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"14-16"}}
   },
   wednesday:{
        sanse1:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"8-10"}},
        sanse2:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"10-12"}},
        sanse3:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"12-14"}},
        sanse4:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"14-16"}}
   },
   thursday:{
        sanse1:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"8-10"}},
        sanse2:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"10-12"}},
        sanse3:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"12-14"}},
        sanse4:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"14-16"}}
   },
   friday:{
        sanse1:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"8-10"}},
        sanse2:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"10-12"}},
        sanse3:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"12-14"}},
        sanse4:{DC:{type:Number,default:2}, EX:{type:Number,default:0} ,sanse:{type:String,default:"14-16"}}
   },
   extraSanses:[]
})

const reserveSchema = new mongoose.Schema({
    day:String,
    sanse:String,
    date:String,
},
{
    timestamps:true
})

const additionalSanse = new mongoose.Schema({
     day:String,
     sanse:String,
     DC:{type:Number,default:2},
     EX:{type:Number,default:0}
})

const Sanse = mongoose.model("AllSanse" , sanseSchema);
const Reserve = mongoose.model("reserve" , reserveSchema);
const ExtraSanse = mongoose.model("extraSanse" , additionalSanse);

export {
    Sanse,
    Reserve,
    ExtraSanse
}