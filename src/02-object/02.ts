type LocalCityType = {
    title: string,
    country: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type TechType = {
    id: number
    title: string
}
type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

const student: StudentType = {
    name: "Yulia",
    age: 23,
    isActive: true,
    address: {
        streetTitle: "Nyland",
        city: {
            title: "Atla",
            country: "Norway"
        }

    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        }, {
            id: 2,
            title: "JS"
        }, {
            id: 3,
            title: "React"
        }
    ]
}

