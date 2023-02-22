import React from "react";
import {usersObj, usersArray} from "./07";

type UsersType = {
    [key: string]: { id: number, name: string }
}
let users: UsersType
beforeEach(() => {
    let users = {
        "101": {id: 101, name: "Yulia"},
        "1011": {id: 1011, name: 'Karina'},
        "1012": {id: 1012, name: 'Kolya'},
        "1013": {id: 1013, name: 'Vova'}
    };
})

test("should select corresponding user", () => {
    users["101"].name = "Ekaterina"
    expect(users["101"]).toEqual({id: 101, name: "Ekaterina"});

})
test("should delete corresponding user", () => {
    delete users["101"]
    expect(users["101"]).toBeUndefined();

})