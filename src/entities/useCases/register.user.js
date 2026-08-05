import {repository} from "../ports/repository";
const RegisterUserinput = {
    name,
    email,
    password
}
export const registerUser = async (
  RegisterUserinput,
  repository
) => {
 const exists = await repository.findByEmail(input.email);
 if (exists){
    throw new Error ("User email already exists");
 }
 const user = createUser(input);
 await repository.save(user);//SALVA NO DB
}
//dependencias ficam separadas a parte em cada responsabilidade