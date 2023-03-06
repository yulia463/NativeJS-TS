import {hairDresser, moveUser, upgradeLaptop, UserTypePropsType, UserWithLapTopType} from "./10";


test("reference  type test", () => {
    let user: UserTypePropsType = {
        name: "Yulia",
        hair: 22,
        address: {
            title: "Kiel",
        }
    }

    const awesomeUser = hairDresser(user, 2)

    expect(awesomeUser).toBe(11)
    expect(user.hair).toBe(22)
})

test("change address", () => {
    let user: UserWithLapTopType = {
        name: "Yulia",
        hair: 22,
        address: {
           title: "Kiel",
            house:12
        },
        laptop: {
            title: "MAC"
        }
    }

    const awesomeUser = moveUser(user, "Kiev")

    expect(user).not.toBe(awesomeUser)
    expect(user.address).not.toBe(awesomeUser.address)
    expect(awesomeUser.address).toBe(awesomeUser.laptop)
    expect(awesomeUser.address.title).toBe("Kiev")
})

test("upgrade laptop", () => {
    let user: UserWithLapTopType = {
        name: "Yulia",
        hair: 22,
        address: {
            title: "Kiel",
            house:12
        },
        laptop: {
            title: "MAC"
        }
    }

    const userCopy = upgradeLaptop(user, "Macbook")

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe("Macbook")
    expect(user.laptop.title).toBe("MAC")

})