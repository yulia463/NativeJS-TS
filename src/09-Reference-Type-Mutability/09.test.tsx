type UserType = {
    name: string
    age: number
    address: { title: string }
}

function icreaseAge(u: UserType) {
    u.age++;
}

test("big test", () => {

    let user: UserType = {
        name: "Yulia",
        age: 23,
        address: {
            title: "Minsk"
        }
    }
    icreaseAge(user)

    expect(user.age).toBe(24)

    const superman = user
    superman.age = 1000;
    expect(user.age).toBe(1000)

})
test("Array test", () => {

    let users = [
        {name: "Yulia", age: 23},
        {name: "Yopi", age: 26}
    ]

    let admin = users
    admin.push({name: "bandit", age: 10})

    expect(users[2]).toEqual({name: "bandit", age: 10})

})
test("value type test", () => {

    let usersCount = 100

    let adminCount = usersCount
    adminCount++

    expect(adminCount).toEqual(101)

})
test("reference type test", () => {

    let user: UserType = {
        name: "Yulia",
        age: 23,
        address: {
            title: "Minsk"
        }
    }
    // let addr=user.address

    let user2: UserType = {
        name: "Natasha",
        age: 30,
        address: user.address
    }

 user2.address.title ="Kanary";

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe("Kanary")

})
