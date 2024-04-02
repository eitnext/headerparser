 


exports.getWhoami = (req, res) => {

 const   {host: ipaddress, 'accept-language': language, 'user-agent': software} = req.headers;
  
 console.log(req.headers['accept-language']);
 
     res.status(200).json({
        ipaddress,
        language,
        software
     })
}