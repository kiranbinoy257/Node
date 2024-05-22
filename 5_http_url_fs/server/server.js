const http=require("http")
    const fs=require("fs")
    const url=require("url")

    const app=http.createServer((req,res)=>{
        let urlpath=url.parse(req.url)
        console.log(urlpath)
        if(urlpath.pathname=="/")
            {
                res.end(fs.readFileSync("../client/index.html"))
            }
            else if(urlpath.pathname=="/about")
                {
                    res.end(fs.readFileSync("../client/pages/about.html"))
                }
                else{
                    res.end(fs.readFileSync("../client/pages/404.html"))
                }
    })
