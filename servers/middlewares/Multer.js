const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage')
const storage = new GridFsStorage({
    url:"mongodb+srv://mahmoudalmoukhtar:R02m8QZ8AB7GqH4v@cluster0.bffsz32.mongodb.net/?retryWrites=true&w=majority",
    options:{useNewUrlParser:true,useUnifiedTopology:true},
    file:(req,file)=>{
        const match = ["image/png","image/jpg"]
    }
})