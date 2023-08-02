import HeaderAndFooterOnly from '~/components/Layout/HeaderAndFooterOnly';
import Home from '~/pages/Home';
import Movie from '~/pages/Movie';
import TVSHow from '~/pages/TVShow';
import Contact from '~/pages/Contact';
import Pricing from '~/pages/Pricing';
import Detail from '~/pages/Detail';
import Search from '~/pages/Search';
import Person from '~/pages/Person';

// Public routes
const publicRoutes = [
    { path: '/movie', component: Movie, name: 'our movies' },
    {
        path: '/movie/:id',
        component: Detail,
        name: '',
        layout: HeaderAndFooterOnly,
    },
    {
        path: '/tv/:id',
        component: Detail,
        name: '',
        layout: HeaderAndFooterOnly,
    },
    { path: '/search', component: Search, name: 'search' },
    {
        path: '/person/:id',
        component: Person,
        name: '',
        layout: HeaderAndFooterOnly,
    },
    { path: '/contact', component: Contact, name: 'contact' },
    { path: '/pricing-plan', component: Pricing, name: 'pricing plan' },
    { path: '/', component: Home, name: '', layout: HeaderAndFooterOnly },
    { path: '/tv-show', component: TVSHow, name: 'Tv shows' },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
