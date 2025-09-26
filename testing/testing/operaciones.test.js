const {add, substrac, multiply, divide, residuo}=require("../operaciones");

describe("Probando el correcto funcionamiento de la función add",()=>{
    test("probar que la función add regresa 4 cuando recibe 2 y 2", ()=>{
        expect(add(2,2,)).toBe(4)
    })
    test("probar que -3-5=-8", ()=>{
        expect(add(-3,-5)).toBe(-8);
    })
    test("probar que al ingresar un string como argumento nos retorne undefined", ()=>{
        expect(add("4",4)).toBeUndefined();
    }) 
})

describe("Probando la función división",()=>{
    test("probando que si la divisipin es entre cero nos dé undefined",()=>{
        expect(divide(4,0)).toBeUndefined();
    })
   
})
describe("Probando la función de residuo",()=>{
    test("Probando que un número es impar, probar  que el residuo sea>0", ()=>{
        expect(residuo(17,2)).toBeGreaterThan(0);
    })
})
describe("Probando la función multiply",()=>{
    test("Probando que 5*6 es 30",()=>{
        expect(multiply(5,6)).toBe(30);
    })
    test("probando que al multiplicar un número string dé un número",()=>{
        expect(multiply("4",7)).toBe(28);
    })
    test("probando que al multiplicar un número por una string dé NaN",()=>{
        expect(multiply("4t",7)).toBeNaN();
    })
})