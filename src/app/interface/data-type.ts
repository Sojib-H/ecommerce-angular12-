export interface signUp{
    name:string,
    email:string,
    phone:string,
    password:string
    confirmPassword:string
    acceptTerms:boolean

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