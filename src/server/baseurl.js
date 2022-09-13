
const isBrowser = () => {
    try {
        return window !== null
    } catch (e) {
        return false
    }
}

const checkPath = path => {
    if(!path.match(/^\/.*[^/]$/)) {
        throw Error(`${path} does not match pattern /path`)
    }

    return path
}

const parseHref = href => {
    const parsed = href.replace(/^https?:\/\/[^\/]*/, '').replace(/\/$/, '')
    console.log(`href = ${href} => ${parsed}`)

    return parsed
}

const createBaseUrl = () => {
    let path = process.env.BASE_URL;
    if (path) return checkPath(path)

    path = isBrowser() && window.location && window.location.href
    if (path) return checkPath(parseHref(path))

    throw Error(`BASE_URL environment or window.location.href not set`)
}

const baseUrl = createBaseUrl()

const withBaseUrl = path => {
    if(!path || path === '' || path === '/') return baseUrl

    return baseUrl + checkPath(path)
}

export default withBaseUrl