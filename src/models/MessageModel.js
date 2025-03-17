function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = class MessageModel {
  static getSucess(nome) {
    return `${capitalize(nome)} obtido com sucesso.`;
  }
  static getFail(nome) {
    return `Erro ao obter ${nome}.`;
  }
  static postSucess(nome) {
    return `${capitalize(nome)} adicionado com sucesso.`;
  }
  static postFail(nome) {
    return `Erro ao adicionar o ${nome}.`;
  }
  static putSucess(nome) {
    return `${capitalize(nome)} editado com sucesso.`;
  }
  static putFail(nome) {
    return `Erro ao editar o ${nome}.`;
  }
  static deleteSucess(nome) {
    return `${capitalize(nome)} deletado com sucesso.`;
  }
  static deleteFail(nome) {
    return `Erro ao deletar o ${nome}.`;
  }
};
