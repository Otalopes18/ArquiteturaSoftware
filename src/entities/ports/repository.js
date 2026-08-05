import{User} from "../users"
export default Repository = {
    findByEmail: (email)=> Promise.resolve (null),
    save: (User) => Promise.resolve(),
}
//OBJETO PARA VERIFICAR A VALIDAÇÃO DO EMAIL, E SALVAR NO BANCO DE DADOS