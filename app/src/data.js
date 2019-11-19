import M from './Messages/messages';

const monasteryImgData = [
    { src: '/app/images/monasteries/Axtala.jpg', shortDesc: 'Axtala', name: ''},
    { src: '/app/images/monasteries/Dadivanq.jpg', shortDesc: 'Dadivanq', name: ''},
    { src: '/app/images/monasteries/Gayane.jpg', shortDesc: 'Gayane', name: ''},
    { src: '/app/images/monasteries/Haxpat.jpg', shortDesc: 'Haxpat', name: ''},
    { src: '/app/images/monasteries/Hayravanq.jpg', shortDesc: 'Hayravanq', name: ''},
    { src: '/app/images/monasteries/Makaravanq.jpg', shortDesc: 'Makaravanq', name: ''},
    { src: '/app/images/monasteries/Oshakan.jpg', shortDesc: 'Oshakan', name: ''},
    { src: '/app/images/monasteries/Sanahin.jpg', shortDesc: 'Sanahin', name: ''},
    { src: '/app/images/monasteries/Saxmosavanq.jpg', shortDesc: 'Saxmosavanq', name: ''},
    { src: '/app/images/monasteries/Tatev.jpg', shortDesc: 'Tatev', name: ''},
    { src: '/app/images/monasteries/Texer.jpg', shortDesc: 'Texer', name: ''},
    { src: '/app/images/monasteries/XorVirap.jpg', shortDesc: 'XorVirap', name: ''},
];

const hitoryImgData = [
    { src: '/app/images/history/Amberd.jpg', shortDesc: 'Amberd', name: ''},
    { src: '/app/images/history/AshotErkat.jpg', shortDesc: 'AshotErkat', name: ''},
    { src: '/app/images/history/LoriBerd.jpg', shortDesc: 'LoriBerd', name: ''},
    { src: '/app/images/history/MexriBerd.jpg', shortDesc: 'MexriBerd', name: ''},
    { src: '/app/images/history/Smbataberd.jpg', shortDesc: 'Smbataberd', name: ''}
];

const natureImgData = [
    { src: '/app/images/nature/Shake.jpg', shortDesc: 'Shake', name: ''},
    { src: '/app/images/nature/Tondrak.jpg', shortDesc: 'Tondrak', name: ''},
    { src: '/app/images/nature/VanaNemrut.jpg', shortDesc: 'VanaNemrut', name: ''},
    { src: '/app/images/nature/Aragats.jpg', shortDesc: 'Aragats', name: ''}

];

const getImages = (type) => {
    switch(type) {
        case M.monastery:
           return monasteryImgData;
        case M.history:
            return hitoryImgData;
        case M.nature:
            return natureImgData;
        default:
            return []
    }
}

export {getImages};