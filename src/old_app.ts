type Role = "admin" | "user" | "guest";

interface User {
  firstName: string;
  lastName: string;
  age?: number;
  role?: Role;
  isActive?: boolean;
  createdAt?: Date;
  products?: Product[];
}

interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
  createdAt?: Date;
}

const user: User = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isActive: true,
  role: "admin",
  createdAt: new Date(),
  products: [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      description: "A high-performance laptop",
      createdAt: new Date(),
    },
    {
      id: 2,
      name: "Smartphone",
      price: 499.99,
      description: "A latest model smartphone",
      createdAt: new Date(),
    },
  ],
};

const getUserFullName = (user: User): string => {
  return `${user.firstName} ${user.lastName}`;
};

const getUserfullNameBis = (firstName: string, lastName: string): void => {
  console.log(`${firstName} ${lastName}`);
};

getUserFullName(user);
getUserfullNameBis(user.firstName, user.lastName);

// interface IProps {
//   lastName: string;
//   firstName: string;
// }
