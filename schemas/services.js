export default {
    name:"services",
    type:"document",
    title:"Services",
    fields:[
        {
            name:"name",
            type:"string",
            title:"Name"
        },
        {
            name:"image",
            type:"image",
            title:"Image",
            fields:[
                {
                    name:"alt",
                    type:"string",
                    title:"Alternative Text"
                }
            ]
        },
        {
            name:"slug",
            type:"slug",
            title:"slug",
            options:{
                source:"name"
            }
        },
        
        
        {
            title: 'Description', 
            name: 'text',
            type: 'text', 
        },
        
    ]
}