import urls from './urls';

interface Navs {
    title: string;
    url: string;
    image?: any
}
const navs: Array<Navs> = [
    {
        title: 'DevsNest',
        url: urls.home
    }
];

export default navs;
