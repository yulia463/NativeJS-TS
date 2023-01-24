import {mult, splitIntoWords, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3
})

test('sum should be correct', () => {
    let a = 1;
    let b = 2;
    let c = 3;

    const result1 = sum(a, b);
    a=100
    const result2 = sum(a,b);

    expect(result1).toBe(3);
    expect(result2).toBe(102);
})
test('multiply should be correct', () => {
    let a = 1;
    let b = 2;
    let c = 3;

    const result1 = mult(a, b);
    const result2 = mult(b, c);
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})
test('splitting info should be correct', () => {
    const set1 = 'hello my friend'
    const set2 = 'JS - the best programing language'

    const result1 = splitIntoWords(set1);
    const result2 = splitIntoWords(set2);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(result2.length).toBe(6);
    expect(result2[0]).toBe('JS');
    expect(result2[1]).toBe('-');
    expect(result2[2]).toBe('the');
    expect(result2[3]).toBe('best');
    expect(result2[4]).toBe('programing');
    expect(result2[5]).toBe('language');
})