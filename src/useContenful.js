import { Select } from "@material-ui/core";
import { PersonalVideoTwoTone } from "@material-ui/icons";
import { createClient } from "contentful";


const useContenful = ()=> {
    // const contentful = require('contentful')

    const client = createClient({
        space: "9dvweq79pmh0",
        accessToken: "K7cRM-QQvNv8xGaLCCvWheZpVvc1Hy7zdybZ8drmqpU",
    })
    
    const getAuthors = async() => {
        try{
            const entries = await client.getEntries({
                "type": "author",
                "select" : "fields"
            })
            // .then((response) => response.json())
            const displayEntries = entries.items.map((item) => {
                const avatar = item.fields.avatar.fields;
                return {
                    // entries
                    ...item.fields, avatar
                }
            })
           return displayEntries
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
