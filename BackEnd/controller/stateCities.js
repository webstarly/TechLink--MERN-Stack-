const fs = require("fs");
const path = require("path");

async function stateCitiesController(req,res) {
    try {

        const { stateName } =  req.params;

        console.log("statename", stateName )

        const filepath = path.join(__dirname, "..", "data", "stateCity.json");
    

        console.log("filepath", filepath)
        console.log("Absolute File Path:", path.resolve(filepath));


        const data = await fs.promises.readFile(filepath, "utf8");

        const dataResponse = JSON.parse(data)


        if (!dataResponse.states || !Array.isArray(dataResponse.states)) {
        throw new Error("Invalid JSON format: 'states' key missing or not an array");
        }

        const state = dataResponse.states.find((s) => s.name.toLowerCase() === stateName.toLowerCase());

        console.log("states", state)

        if(!state){
            return res.status(404).json({
                message: `State '${stateName}' not found`,
                data: [],
                success: false,
                error: true,
              });
        }

        res.status(200).json({
            message : "Cities Successfully updated",
            data : state.cities,
            success : true,
            error : false
        })

        
    } catch (error) {
        console.error(error);

        res.status(400).json({
            message : "Cities Unsuccessfully updated",
            data : [],
            success : true,
            error : false
        })
    }
}

module.exports = stateCitiesController;