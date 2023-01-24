export type StreetType={
    title:string
}
export type AddressType={
    number:number
    street:StreetType
}
export type HouseType={
    buildeAt:number
    repaired:false
    address:AddressType
}
export type CityType={
    title:string
    houses:Array<string>
    governmentBuildings:Array<HouseType>
    citizensNumber:number
}