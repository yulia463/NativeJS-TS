test("should take old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const predicate = (age: number) => age > 90;


    const oldAges = ages.filter(predicate);
    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);

})


test("should take courses chipper 160", () => {
    const courses = [
        {title: "Css", price: 110},
        {title: "JS", price: 200},
        {title: "React", price: 150}
    ]

    const cheapPredicate = (course: CourseType) => course.price < 160


    const chipCourses = courses.filter(cheapPredicate);
    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("Css");
    expect(chipCourses[1].title).toBe("React");

})

test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Solt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ]
    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);

})