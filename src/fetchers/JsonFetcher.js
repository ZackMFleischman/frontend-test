import isomorphicFetch from 'isomorphic-fetch';

class JsonFetcher {
    constructor(fetch = isomorphicFetch) {
        this.fetch = fetch;
    }

    fetchJson = (url) => this.fetch(url)
        .then(response => response.json());
}

export default JsonFetcher;