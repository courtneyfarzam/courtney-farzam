export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'deployedLink',
            title: 'Deployed Link',
            type: 'string'
        },
        {
            name: 'codeLink',
            title: 'Code Link',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImageURL',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'string'
                }
            ]
        }
    ]
}