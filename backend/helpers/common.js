 const IMAGE_BASEURL =()=>{
    return `${req.protocol}://${req.headers.host}/src/uploads/${label}/`
}

module.exports = {IMAGE_BASEURL}
