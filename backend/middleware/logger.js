const logger= (req,res, next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
};

module.exports=logger;
// This code defines a middleware function that logs the request method and URL along with the current date and time.