const http = require("http");
const characters = require("./utils/data.js");

const PORT = 3001
http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // acceso a todo 

    // /rickandmorty/character/:id /rickandmorty/characters

    // forma 1 
    // if (req.url.includes("/rickandmorty/characters")){
    // }
    const url = req.url.split("/")
    // console.log(url); //rickandmorty/characters responde => [ '', 'rickandmorty', 'characters' ]
    const param1 = url[1]
    // console.log(param1);
    const param2 = url[2]
    // console.log(param2);
    const id = url[3]
    // console.log(id);
    if (param1 === "rickandmorty" && param2 === "characters") {  // /rickandmorty/characters
        //devolver un json
        res.writeHead(200, { "Content-type": "application/json" })
        // metodo transforma un objeto a un json stringify
        return res.end(JSON.stringify(characters));
    }
    if (param1 === "rickandmorty" && param2 === "character") {  // /rickandmorty/character/:id 
        const character = characters.find((ch) => {
            return ch.id === Number(id)
        })
        if (character) {
            return res
                .writeHead(200, { "Content-type": "application/json" })
                // metodo transforma un objeto a un json stringify
                .end(JSON.stringify(character));
        }

    }

    return res
        .writeHead(404, { "Content-type": "text/plain" })
        .end("not found");

    // solo probar que si esta arriba el server 
    // res.end("hola rickosos")

}).listen(PORT, () => {
    console.log("in port http://localhost:3001");
})