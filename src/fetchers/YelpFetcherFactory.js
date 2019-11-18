import YelpFetcher from './YelpFetcher';
import { isProd } from '../Environment';

let serverUrl = isProd()
    ? 'https://zacks-superformula-interview.herokuapp.com'
    : 'http://localhost:1234';

export const getYelpFetcher = () => new YelpFetcher(serverUrl);