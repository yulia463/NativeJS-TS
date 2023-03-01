import React from "react";

type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType

// beforeEach(() => {

    test("testing for destructuring", () => {


        const age=props.age
        const lessons=props.lessons
        // const {age, lessons} = props
        const title = props.address.street.title


        const a = props.age
        const l = props.lessons

        expect(age).toBe(21);
        expect(lessons.length).toBe(2);

        expect(a).toBe(21);
        expect(l.length).toBe(2);

        expect(title).toBe("Lenina");

    })

    test("array testing", () => {
        const l1 =props.lessons[0];
        const l2 =props.lessons[1];

        const [ls1,ls2] = props.lessons;

        expect(l1.title).toBe("1")
        expect(l2.title).toBe("2")
    })
// })