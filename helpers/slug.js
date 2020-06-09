import slugify from 'slugify'

function slug(name) {
    return slugify(name, { lower: true }).replace(/[^\w\-]+/g, '')
}

export default slug