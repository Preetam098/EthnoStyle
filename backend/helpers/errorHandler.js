const errorHandler=(res , message)=>{
    res.json({
        success:false,
        error:true,
        message,
    })
}

module.exports = errorHandler