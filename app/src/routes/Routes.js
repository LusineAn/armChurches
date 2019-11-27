import Gallery from '../components/presentational/Gallery';
import M from '../messages/messages';

let routes = [
    {
        path: '/gallery/monasteries',
        component: Gallery,
        props: {
            title: M.nav.monasteries,
            galleryDescription: M.monasteryDesc,
            type: 'monastery'
        }
    },
    {
        path: '/gallery/history',
        component: Gallery,
        props: {
            title: M.nav.history,
            galleryDescription: M.historyDesc,
            type: 'history'
        }
    },
    {
        path: '/gallery/nature',
        component: Gallery,
        props: {
            title: M.nav.nature,
            galleryDescription: M.natureDesc,
            type: 'nature'
        }
    },
    {
        path: '/gallery/favorites',
        component: Gallery,
        props: {
            title: M.nav.favorite,
            galleryDescription: M.favoritesDesc,
            type: 'favorite'
        }
    }
];

export default routes;