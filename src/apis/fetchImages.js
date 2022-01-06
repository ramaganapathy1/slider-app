import axios from 'axios';

const uri = 'https://demo5110359.mockable.io/images'

export const fetchImageUrls = () => {
    return axios.get(uri)
        .then((response) => {
            return response.data.images
        }).catch((error) => {
            return error
        });
}