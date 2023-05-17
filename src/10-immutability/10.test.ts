import {
    addNewBooksToUser, apdateBook,
    hairDresser,
    moveUser, removeBook,
    upgradeLaptop,
    UserTypePropsType,
    UserWithBooksType,
    UserWithLapTopType
} from "./10";


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
            house: 12
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
            house: 12
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

test("add new books to user", () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: "Yulia",
        hair: 22,
        address: {
            title: "Kiel",
            house: 12
        },
        laptop: {
            title: "MAC"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, "ts")

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books).toBe(userCopy.books)
    expect(user.books.length).toBe(4)

})

test("update js to ts", () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: "Yulia",
        hair: 22,
        address: {
            title: "Kiel",
            house: 12
        },
        laptop: {
            title: "MAC"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = apdateBook(user, "js", "ts")

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books[2]).toBe("ts")

})
test("remove js book", () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: "Yulia",
        hair: 22,
        address: {
            title: "Kiel",
            house: 12
        },
        laptop: {
            title: "MAC"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = removeBook(user, "js", "ts")

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books[2]).toBe("react")

})