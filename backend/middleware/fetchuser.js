import jwt from 'jsonwebtoken'; 

const JWT_SECRET = 'Harsh&VERIFYSIGNATURE';

const fetchuser = (req,res,next)=>{
    //Get the user from jwt toked and add id to req object
    //Check auth-token in THUNDER CLIENT ::
    //const token = req.header('auth-token');
    //Check auth-token in BROWSER ::
    const token = req.cookies?.auth-token;
    if(!token){
        return res.status(401).send({error: "Please authenticate using a valid token"});
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.user;
    } catch (error) {
        res.status(401).send({error: "Please authenticate using a valid token"});
    }
    
    next();
}

export default fetchuser;