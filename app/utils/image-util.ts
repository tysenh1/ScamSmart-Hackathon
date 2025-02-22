function getImageURL(name: string) {
    return new URL(`../assets/product/${name}`, import.meta.url).href
}

export { getImageURL };