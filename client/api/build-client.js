import axios from 'axios';

export default function Main({req}) {
    if(typeof window === 'undefined') {
        //we are on server
        return axios.create({
            baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
            headers: req.headers
        });
    } else {
        //we must be on browser
        return axios.create({
            baseUrl: '/'
        });
    }
};