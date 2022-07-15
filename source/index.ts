// 6. Utilize various datatypes in TypeScript:

// 6.a Basic (Built-in) types
const five: number = 5;
const firstName: string = "Axel";
const isTypeScript: boolean = true;

// 6.b Arrays
const numbers: Array<number> = [1, 2, 3, 4, 5];
const months: Array<string> = ["January", "February", "March", "April"];

// 6.c Tuples
const superAdmin: [number, string, string] = [1, "Axel", "super_admin"];
const admin: [number, string, string] = [2, "Isis", "admin"];
const user: [number, string, string] = [3, "Kris", "user"];

// 6.d Enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

enum StatusCodes {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NON_AUTHORITATIVE_INFORMATION = 203,
  NO_CONTENT = 204,
}

// 6.e Any and void
const greeting: any = "Hello world";
let greet = (): void => {
  console.log(greeting);
};

// 6.f null and undefined
let nullVar: null;
let undefinedVar: undefined;

// 6.g Type Inference
const inferredString = "this is a string";
console.log(inferredString);

// 6.h Type Casting: Use the as keyword or <> operator for type castings.
const three = 3 as unknown;
const threeStr = three as string;
console.log("6.h threeStr: ", threeStr);

// 6.i Difference between let and var
const ONE: number = 1;
let TWO: number = 2;

// 6.j Const declaration
const LANGUAGE = "TypeScript";

export {};
