// let userName: string
// userName = 'Max'

// let userID: string | number = 'abc1'

// userID = 123;

let user: {
    name: string;
    age: 34,
    isAdmin: boolean,
    id: string | number
};

user = {
    name: 'Max',
    age: 34,
    isAdmin: true,
    id: 'abc'
}



//let hobbies: Array<string>;
let hobbies: string[]

hobbies = ['Krav', 'Baking', 'Gym']

type AddFn = (a: number, b: number) => number;

function add(a: number, b: number): number {
    const result = a + b;
    return result
}

function calculate(a: number, b: number, calcFn: AddFn ) {
    calcFn(a,b);
}

calculate(2, 4, add)

interface Credentials {
    password: string;
    email: string
}

let creds: Credentials;

creds = {
    password: 'abc',
    email: 'test@hotmail.com'
}


class AuthCredentials implements Credentials {
    email: string;
    password: string;
    userName: string;
}

// type Admin = {
//     permissions: string[]
// };

// type AppUser = {
//     userName: string;
// }

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//     permissions: ['login'],
//     userName: 'Max'
// }

interface Admin {
     permissions: string[]
 };

 interface AppUser {
    userName: string;
 };

 interface AppAdmin extends Admin, AppUser {}

    let admin: AppAdmin;

    admin = {
    permissions: ['login'],
    userName: 'Max'
    }

    type Role = 'admin' | 'user' | 'editor'

  let role: Role // admin or user or editor


  function performAction(action: string, role: Role) {
    if (role === 'admin') {
        // do something ...
    }
  }

  let roles: Array<Role>
  roles = ['admin', 'editor'];


  type DataStorage<T> = {
    storage: T[],
    add: (data:T) => void;
  }

  const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {}
  }

  const userStorage: DataStorage<User> {
    storage [],
    add(user) {}
  }
