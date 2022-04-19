interface Employee {
  name: string;
  position: Position;
  addr: Addr;
}
interface Position {
  name: string;
  salary: string;
}
interface Addr {
  country: string;
  city: string;
}
let position: Position = { name: "programmer", salary: "1000" };
let addr: Addr = { country: "Belarus", city: "Minsk" };

let employee: Employee = {
  name: "Dima",
  position: position,
  addr: addr,
};

console.log(employee);

interface Parents {
  mother: {
    name: string;
    age: number;
    parents: null;
  };
  father: {
    name: string;
    age: number;
    parents: null;
  };
}
interface User {
  name: string;
  age: number;
  parents: Parents;
}

let parents: Parents = {
  mother: {
    name: "jane",
    age: 30,
    parents: null,
  },
  father: {
    name: "eric",
    age: 30,
    parents: null,
  },
};
let user: User = {
  name: "john",
  age: 30,
  parents: parents,
};
console.log(user);
