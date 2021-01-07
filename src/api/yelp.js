import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer VDGPguXSaJgp3LZIUBuLOE5Hz2xgBX16z6JAW3LLFoK2MjBXAW7Y_Fzegsgv4Asw5NrFjlZZv0J91bxGGIERkwQwnrE5P2RmUOB7K8WJgYFbZGfYNeI9rzv207y6X3Yx'
    }
});
