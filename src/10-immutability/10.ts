export type UserTypePropsType = {
    name: string
    hair: number
    address: { title: string, house?: number }
}

export type LapTopType = {
    title: string
}
export type UserWithLapTopType = UserTypePropsType & {
    laptop: LapTopType
}
export type UserWithBooksType = {
    books: Array<string>

}

export function hairDresser(u: UserTypePropsType, power: number) {
    const userCopy = {
        ...u
    }
    userCopy.hair = u.hair / power

    return userCopy
}

export function moveUser(u: UserWithLapTopType, city: string) {

    return {
        ...u,
        address: {
            ...u.address,
            title: city
        }
    }


}

export function upgradeLaptop(u: UserWithLapTopType, laptop: string) {

    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function addNewBooksToUser(u: UserWithLapTopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }


}

export function apdateBook(u: UserWithLapTopType & UserWithBooksType, newBook: string, oldBook: string) {
    const copy = {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }

    return copy

}export const removeBook=(u: UserWithLapTopType & UserWithBooksType, bookForDelete: string) =>({
        ...u,
        books: u.books.filter(b => b !== bookForDelete)

})