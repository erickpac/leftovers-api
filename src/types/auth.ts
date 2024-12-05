export default interface RegisterUserBody {
  name: string;
  email: string;
  hashedPassword: string;
}