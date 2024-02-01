const successHandler=(res ,data)=>{
    res.json({
        success:true,
        error:false,
        ...data,
    })
}

module.exports = successHandler