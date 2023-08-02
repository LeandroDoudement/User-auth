interface User {
  id: number;
  email: string;
  fullname: string;
  age: string;
  phone: string;
  gender: 'male' | 'female' | 'notDeclared';
  password?: string;
  termsOfService: boolean;
}
