//esta linea quiere decir que puede ser un string o un numero
const username: string | number = 'Carlos Santos';

const sum = (a: number, b: number) => {
    return a + b;
    }   

    sum(1,2)

    /*
    Esto seria lo que usualmente se usa pero podemos mantenerlo mas simple
    class Person {
       private age: number;
       private name: string;
        
        constructor(age: number, name: string) {
            this.age = age;
            this.name = name;
        }
    }
    */

    class Person {
        constructor(private age: number, private name: string) {}
        
    }

    const carlos = new Person(24, 'Carlos Alberto');

