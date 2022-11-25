import { createClient } from "contentful";


const useContenful = ()=> {
    // const contentful = require('contentful')

    const client = createClient({
        space: "9dvweq79pmh0",
        accessToken: "K7cRM-QQvNv8xGaLCCvWheZpVvc1Hy7zdybZ8drmqpU",
    })
    
    const getAuthors = async() => {
        try{
            const entries = await client.getEntries()
            
            .then((response) => console.log(response.items.fields))

         return entries
        } catch (error){
            console.log(`Error fetching authors: ${error}`);
        }
    }

    return {getAuthors}
}

export default useContenful
// Space ID

// for production mode
// Content Delivery API - access token


// for development mode
// Content Preview API - access token
