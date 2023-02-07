import {CityType} from "./02-02";
import {AddressType} from "./02-02";

let city: CityType;

// beforeEach(() => {
//     city = {
//         title: "New York",
//         houses: [{
//             buildedAt: 2012, repaired: false, address: {
//                 number: 100, street: {
//                     title: "White street"
//                 }
//             }
//         }],
//         governmentBuildings: [],
//         citizensNumber: 1000000
//     }
// })
//
// test("test city should contains 3 houses", () => {
//     expect(city.houses.length).toBe(3);
//
//     expect(city.houses[0].buildedAt).toBe(2012);
//     expect(city.houses[0].repaired).toBe(false);
//     expect(city.houses[0].address.number).toBe(100);
//     expect(city.houses[0].address.street.title).toBe("White street");
//
//     expect(city.houses[1].buildedAt).toBe(2008);
//     expect(city.houses[1].repaired).toBe(false);
//     expect(city.houses[1].address.number).toBe(100);
//     expect(city.houses[1].address.street.title).toBe("Happy street");
//
//     expect(city.houses[2].buildedAt).toBe(2020);
//     expect(city.houses[2].repaired).toBe(false);
//
// })