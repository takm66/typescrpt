// types

// boolean
let a: boolean = true;
let ab = true;

// number
let b: number = 1;
let bb = 1;

// string
let c: string = "sam";
let cb = "sam";

// any
let testAny : any = "a"; // 1 or aaaなど なんでも

// void
function funcNumber(b: number, bb: number) :void {
    let c =  b + bb;
}

function funcString(c: string, cb: string) : string {
  return c;
}

// Array
let testArrayaa: string[] = ["a", "b", "c"];
let testArraybb: number[] = [1, 2, 3];

// Object
interface Hoge {
  a: number,
  b: number,
}
let o: Hoge = { a: 1, b: 2 };

// undefined
interface Huga {
  a: number,
  b?: number,
}
let ou: Huga = { a: 1 };

// nullable
interface Piyo {
  a: number,
  b: number | null,
}
let on: Piyo = { a: 1, b: null };
