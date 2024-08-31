let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search);

params.append("foo", 5)

//params.delete("foo", 1)

let addr = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL_API");
let host = addr.host;
let path = addr.pathname;

console.log(url)
console.log(url.search)
console.log(params)
console.log(addr)


const searchParams = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: 'Nick',
    gsrlimit: '20',
    props: 'pageimages|extracts',
    exchars: '100',
    exintro: 'true',
    explaintext: 'true',
    exlimit: 'max',
    format: 'json',
    origin: '*',
})


