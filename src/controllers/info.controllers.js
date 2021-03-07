
class InfoController {
    Index(req, res){
        res.json(
            { 
                version: "0.0.1",
                paths: [
                    "/suma",
                    "/resta",
                    "/multiplica",
                    "/divide",
                    "/free",
                    "/autores"
                ] 
            }
            ); 
    }

    Autores(req, res){
        res.json({
            autor1:"FATV",
            autor2:"JCOP"
        });
    }
}

module.exports = new InfoController();