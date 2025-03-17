const fs = require("fs");
const path = require("path");

async function nigerianStateController(req, res) {
  try {
    const filepath = path.join(__dirname, "..", "data", "stateCity.json");
    

    console.log("filepath", filepath)
    console.log("Absolute File Path:", path.resolve(filepath));


    const data = await fs.promises.readFile(filepath, "utf8");

    //console.log("data", data)

    const dataResponse = JSON.parse(data)

    console.log("dataResponse", dataResponse)

    if (!dataResponse.states || !Array.isArray(dataResponse.states)) {
      throw new Error("Invalid JSON format: 'states' key missing or not an array");
    }
   
    const states = await dataResponse.states.map(states => states.name );

    console.log("state", states )

    res.status(200).json({
      message: "Successful ",
      data: states,
      success: true,
      error: false,
    });
  } catch (error) {
    console.error("Error:", error);

    res.status(400).json({
      messeage: " Unsuccessful ",
      data: [],
      success: false,
      error: true,
    });
  }
}

module.exports = nigerianStateController;
