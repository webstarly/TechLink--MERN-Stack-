import axios from "axios";
import StateCityApi from "../appApi/frontendApi"

const getState = () =>{
    axios.get(StateCityApi/stateList/url)
    .then(response => console.log(response))


    getState();
} 

export default getState