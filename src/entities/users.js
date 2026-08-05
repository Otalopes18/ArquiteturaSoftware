import {v4} from "uuid";
import{hashSync} from "bcryptjs";
// SER UMA ENTIDADE TESTAVEL

export default User = {
    id :String,
    name: String,
    email: String,
    passwordHash: String,
    cratedAt: Date,
}

const user = {
    name: String,
    email: String,
    password: String
}

export const createUser = (user) => {

    const id = v4(),
    const passwordHash = hashSync(password),
    const cratedAt = new Date();
   
    return Object.freeze({
        id,
        name,
        email,
        passwordHash,
        createdAt
    }); 
}
/* NESTA CRIAÇÃO DE USUÁRIOS, O USUÁRIO EXISTE?,
SALVAR USUÁRIO, E FAZER TESTES COM VALIDAÇÕES É O QUE ESTA 
ENTIDADE FAZ
*/