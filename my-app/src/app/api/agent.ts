import axios, { AxiosResponse }  from 'axios'
import { IActivity,IListActivity } from '../model/activity';
axios.defaults.baseURL="http://localhost:56915/api"

//const 

const responseBody = (response:AxiosResponse)=>response.data;


const request = {
    get :(url:string) =>axios.get(url).then(responseBody),
    post:(url:string,body:{}) =>axios.post(url,body).then(responseBody),
    put:(url:string,body:{})=>axios.put(url,body).then(responseBody),
    del:(url:string)=>axios.delete(url).then(responseBody),
}

const Activities = {
    list:():Promise<IListActivity>=>request.get('/activity'),
    details:(id:string)=>request.get(`/activity${id}`),
    create:(activity:IActivity)=>request.post('/activity',activity),
    update:(activity:IActivity)=>request.put(`/activity/${activity.id}`,activity),
    delete:(id:string)=>request.del(`/activity/${id}`)
}


export default {
    Activities
}