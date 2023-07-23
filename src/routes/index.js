import HeaderAndFooterOnly from '~/components/Layout/HeaderAndFooterOnly';
import Home from '~/pages/Home';
import Movie from '~/pages/Movie';
import TVSHow from '~/pages/TVShow';
import Contact from '~/pages/Contact';

// Public routes
const publicRoutes = [
    { path: '/movie', component: Movie, name: 'our movies' },
    { path: '/contact', component: Contact, name: 'contact' },
    { path: '/', component: Home, name: '', layout: HeaderAndFooterOnly },
    { path: '/tv-show', component: TVSHow, name: 'Tv shows' },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
