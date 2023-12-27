
```ts
interface User {
  id: number;
  name: string;
  email: string;
}

function getUserProperty(user: User, property: keyof User) {
  return user[property];
}

const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
};

const name = getUserProperty(user, 'name');
console.log(name); // Output: John Doe

const invalidProperty = getUserProperty(user, 'age'); // Error: Argument of type '"age"' is not assignable to parameter of type '"id" | "name" | "email"'

```