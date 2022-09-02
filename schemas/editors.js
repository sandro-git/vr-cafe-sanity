export default {
    name:"editors",
    type:"document",
    title:"Editors", 
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
            name:"link",
            type:"string",
            title:"Lien Editeur",
        }
    ],
    
}