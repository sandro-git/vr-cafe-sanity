export default {
    name:"game",
    type:"document",
    title:"Game",
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
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            title: 'Editeur',
            name: 'editor',
            type: 'reference',
            to: [{type: 'editors'}]
          }
    ]
}