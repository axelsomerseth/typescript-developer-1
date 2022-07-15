/**
 * 		6. Utilize various datatypes in TypeScript:
 */

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
console.log("6.g", inferredString);

// 6.h Type Casting: Use the as keyword or <> operator for type castings.
const three = 3 as unknown;
const threeStr = three as string;
console.log("6.h threeStr: ", threeStr);

// 6.i Difference between let and var
const ONE: number = 1;
let TWO: number = 2;

// 6.j Const declaration
const LANGUAGE = "TypeScript";

/**
 * 		7. Utilize destructuring & spread:
 */
// 7.a Array Destructuring
const [id, name, role] = superAdmin;

// 7.b Object Destructuring
interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  tax?: number;
}

const keyboard: Product = { id: 1, name: "Keychron K2", price: 39.99 };
const { price } = keyboard;
const printProduct = ({
  id,
  name,
  description = "n/a",
  price,
  tax = 0,
}: Product): void => {
  console.log(
    `7.b ID: ${id}, Name: ${name}, Description: ${description}, Price: $ ${price}, Tax: $ ${tax}`
  );
};
printProduct(keyboard);

// 7.c Property renaming
interface Operation {
  o: string;
  a: number;
  b: number;
  e?: string;
  r?: number;
}

const renameProperties = ({ o, ...others }: Operation) => ({
  operator: o,
  ...others,
});
const sumOperation: Operation = {
  a: 2,
  b: 3,
  o: "+",
};
const renamedSumOperation = renameProperties(sumOperation);
console.log("7.c renamedSumOperation: ", renamedSumOperation);

// 7.d Default Values
// Go to Product (7.b) example

/**
 * 		8. Utilize classes in TypeScript:
 */
// 8.a Writing and Using Classes
// 8.b Constructor method
class Framework {
  name: string;
  language: string;
  version: string;
  license?: string;
  constructor(name: string, language: string, version: string) {
    this.name = name;
    this.language = language;
    this.version = version;
  }
}

// 8.c Inheritance of classes
abstract class Clothing {
  materials: string[];
  colors: string[];

  constructor(materials: string[], colors: string[]) {
    this.materials = materials;
    this.colors = colors;
  }
}

class Shirt extends Clothing {
  static sleeves: number = 2;
  size: string;
  brand: string;
  constructor(
    materials: string[],
    colors: string[],
    size: string,
    brand: string
  ) {
    super(materials, colors);
    this.size = size;
    this.brand = brand;
  }
}

class Short extends Clothing {
  size: string;
  brand: string;
  type: string;
  constructor(
    materials: string[],
    colors: string[],
    size: string,
    brand: string,
    type: string
  ) {
    super(materials, colors);
    this.size = size;
    this.brand = brand;
    this.type = type;
  }
}

const tShirt = new Shirt(["polyester"], ["white"], "M", "Nike");
console.log("8.c ", tShirt);
const soccerShorts = new Short(
  ["polyester"],
  ["black", "white"],
  "L",
  "Nike",
  "soccer"
);
console.log("8.c ", soccerShorts);

// 8.d Static Properties
// Go to Shirt class, then sleeves static property
console.log("8.d Shirts sleeves:", Shirt.sleeves);

// 8.e Abstract class
// Go to Clothing (8.c)
// Uncomment: Cannot create an instance of an abstract class
// const cotton = new Clothing(["cotton", "white"]);

export {};
