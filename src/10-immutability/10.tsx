export type UserTypePropsType={
    name:string
    hair:number
    address:{title:string,house?:number}
}

export type LapTopType={
    title:string
}
export type UserWithLapTopType = UserTypePropsType &{
    laptop:LapTopType
}

export function hairDresser(u: UserTypePropsType, power: number) {
    const userCopy = {
        ...u
    }
    userCopy.hair = u.hair / power

    return userCopy
}
export function moveUser(u: UserWithLapTopType,city:string) {

    return {
        ...u,
        address:{
            ...u.address,
            title:city
        }}


}
export function upgradeLaptop(u: UserWithLapTopType,laptop:string) {

    return {
        ...u,
        laptop:{
            ...u.laptop,
            title:laptop
        }
        }
}