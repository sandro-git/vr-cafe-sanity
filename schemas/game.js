export default {
    name: "game",
    type: "document",
    title: "Game",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name"
        },
        // {
        //     type: "cloudinary.asset",
        //     name: "cloudinaryImage",
        //     description: "This asset is served from Cloudinary",
        // },
        {
            name: "image",
            type: "image",
            title: "Image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "slug",
            type: "slug",
            title: "slug",
            options: {
                source: "name"
            }
        },
        {
            name: "players",
            type: "string",
            title: "players",
        },
        {
            title: 'Youtube URL',
            name: 'youtube',
            type: 'string',
        },
        {
            name: "difficulty",
            title: "Difficulty",
            type: 'string',
            options: {
                list: [
                    { title: "Easy", value: "easy" },
                    { title: "Medium", value: "medium" },
                    { title: "Hard", value: "hard" },
                ],
                layout: 'dropdown'
            }
        },
        {
            title: 'Description',
            name: 'text',
            type: 'text',
        },
        {
            title: 'Editeur',
            name: 'editor',
            type: 'reference',
            to: [{ type: 'editors' }]
        }
    ]
}