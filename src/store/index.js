import axios from "axios";
import {createStore} from "vuex"

export default createStore({
    state:{

    },
    mutations:{

    },
    actions:{
        async getapi() {
    
              const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            
              console.log(response.data); // You can log the response data directly
       
          }
        
    }
})