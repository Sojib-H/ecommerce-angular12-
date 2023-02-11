export interface signUp{
    name:string,
    password:string,
    email:string

}

export interface login{
    email:string,
    password:string
}


export interface product{
    name:string,
    price:string,
    color:string,
    category:string,
    description:string,
    image:string,
    id:number
}