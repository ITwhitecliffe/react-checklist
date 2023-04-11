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
            
            .then((response) => {
                // console.table(response.items[0].item.sys.id)
                const avatar= response.items.map((item) => {
                    let obj = {
                        id: item.sys.id,
                        name: item.fields.name, 
                        description: item.fields.description, 
                        image: item.fields.avatar.fields.file.url
                    }
                    // console.log(obj)
                    return obj
                })
                // console.log(avatar) 
                return avatar
            })
               
        //     const info = entries.items.map((item) => {
        //         const avatar = item.fields;
        //         return {
        //           avatar
        //         };
        //       });
        
        //       return info;
        return entries
        // console.log(entries) 
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
 