const backendDomain = 'http://localhost:8080'

const StateCityApi = {
   stateList : {
        url : `${backendDomain}/api/states`,
        method : "Get"
   },
   citiesList : {
        url : `${backendDomain}/api/cities/:stateName`,
        method : "Get"
   }

}

export default StateCityApi

