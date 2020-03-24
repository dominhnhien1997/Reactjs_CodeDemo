export interface IActivity {
    id:string,
    title:string,
    desscription:string,
    category:string,
    venue:string,
    date:string
}

export interface IListActivity {
    activities :IActivity[],
    count:number
}