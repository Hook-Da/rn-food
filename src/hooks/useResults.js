import yelp from '../api/yelp';
import {useState, useEffect} from 'react';

export default () =>{
    const [restaurant, setRestaurant] = useState([]);
    const [error, setError] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const responce = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san francisco'
                }
            });
            setRestaurant(responce.data.businesses);
        } catch (err) {
            setError('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, [])
    return [searchApi,restaurant,error];
}