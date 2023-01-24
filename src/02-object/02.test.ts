import {CityType} from "./02-02";
import {AddressType} from "./02-02";

let city:CityType;

beforeEach(()=>{
    city={
        title:"New York",
        houses:[],
        governmentBuildings:[],
        citizensNumber:1000000
    }
})

test ("test city should contains 3 houses",()=>{
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildeAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street");

    expect(city.houses[2].buildeAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);



})