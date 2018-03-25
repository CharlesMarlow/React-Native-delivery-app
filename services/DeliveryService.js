import { _Data } from '../deliveryMock';

function getData() {
    var data = JSON.parse(JSON.stringify(_Data));
    return Promise.resolve(data);
}

export const mapsKey = 'AIzaSyBzF-3tqVNitBAgiu3I56wTwAAPtqfXA0E';


export default {
    getData
}