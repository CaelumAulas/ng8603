export class UserInputDTO {

  name = "";
  username = "";
  phone = "";
  password = "";
  avatar = "";

  constructor({nome, usuario, senha, telefone, avatar}){
    this.name = nome;
    this.username = usuario;
    this.phone = telefone;
    this.password = senha;
    this.avatar = avatar;
  }

}
