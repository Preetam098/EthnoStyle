
const IMAGE_BASEURL =(req, label)=>{
    return `${req.protocol}://${req.headers.host}/uploads/${label}/`
}

module.exports = {IMAGE_BASEURL}
