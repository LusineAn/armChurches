import Gallery from '../components/presentational/Gallery';
import M from '../messages/messages';

let routes = [
    {
        path: '/gallery/monasteries',
        component: Gallery,
        props: {
            title: 'Monasteries and Churches',
            galleryDescription: M.monasteryDesc,
            type: 'monastery'
        }
    },
    {
        path: '/gallery/history',
        component: Gallery,
        props: {
            title: 'History',
            galleryDescription: M.historyDesc,
            type: 'history'
        }
    },
    {
        path: '/gallery/nature',
        component: Gallery,
        props: {
            title: 'Nature',
            galleryDescription: M.natureDesc,
            type: 'nature'
        }
    }
];

export default routes;