import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer LN5qjJ0QmXAPSv1H4Ov8sdfNvoPwOzCmbasdfsdTmq1pl1slYMS7NgWqHSXncsIPRx367ba_pSxlyvao4mku6hV77R3UjmKw1uNE3aX8bHQKSqu0ZYQcQoCY_7dMylggd1CnXXYx'
    }
});