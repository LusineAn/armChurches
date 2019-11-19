import M from './Messages/messages';

const monasteryImgData = [
    { src: '/app/images/monasteries/Axtala.jpg', shortDesc: 'Axtala', name: 'Axtala'},
    { src: '/app/images/monasteries/Dadivanq.jpg', shortDesc: 'Dadivanq', name: 'Dadivanq'},
    { src: '/app/images/monasteries/Gayane.jpg', shortDesc: 'Gayane', name: 'Gayane'},
    { src: '/app/images/monasteries/Haxpat.jpg', shortDesc: 'Haxpat', name: 'Haxpat'},
    { src: '/app/images/monasteries/Hayravanq.jpg', shortDesc: 'Hayravanq', name: 'Hayravanq'},
    { src: '/app/images/monasteries/Makaravanq.jpg', shortDesc: 'Makaravanq', name: 'Makaravanq'},
    { src: '/app/images/monasteries/Oshakan.jpg', shortDesc: 'Oshakan', name: 'Oshakan'},
    { src: '/app/images/monasteries/Sanahin.jpg', shortDesc: 'Sanahin', name: 'Sanahin'},
    { src: '/app/images/monasteries/Saxmosavanq.jpg', shortDesc: 'Saxmosavanq', name: 'Saxmosavanq'},
    { src: '/app/images/monasteries/Tatev.jpg', shortDesc: 'Tatev', name: 'Tatev'},
    { src: '/app/images/monasteries/Texer.jpg', shortDesc: 'Texer', name: 'Texer'},
    { src: '/app/images/monasteries/XorVirap.jpg', shortDesc: 'XorVirap', name: 'XorVirap'},
];

const hitoryImgData = [
    { src: '/app/images/history/Amberd.jpg', shortDesc: 'Amberd', name: 'Amberd'},
    { src: '/app/images/history/AshotErkat.jpg', shortDesc: 'AshotErkat', name: 'AshotErkat'},
    { src: '/app/images/history/LoriBerd.jpg', shortDesc: 'LoriBerd', name: 'LoriBerd'},
    { src: '/app/images/history/MexriBerd.jpg', shortDesc: 'MexriBerd', name: 'MexriBerd'},
    { src: '/app/images/history/Smbataberd.jpg', shortDesc: 'Smbataberd', name: 'Smbataberd'}
];

const natureImgData = [
    { src: '/app/images/nature/Shake.jpg', shortDesc: 'Shake', name: 'Shake'},
    { src: '/app/images/nature/Tondrak.jpg', shortDesc: 'Tondrak', name: 'Tondrak'},
    { src: '/app/images/nature/VanaNemrut.jpg', shortDesc: 'VanaNemrut', name: 'VanaNemrut'},
    { src: '/app/images/nature/Aragats.jpg', shortDesc: 'Aragats', name: 'Aragats'}

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