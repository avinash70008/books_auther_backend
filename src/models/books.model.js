const mongoose = require("mongoose")

const booksSchema = new mongoose.Schema({

    name : { type : String , required:true },
    image: {type: String , required: true},
    auther:{type: String , required: true},
    page: {type: String, required : true},
    price: {type: Number , required: true}
},
{
    versionKey : false,
    timestamps : true
}
)




const books = mongoose.model("books", booksSchema);
module.exports= books;