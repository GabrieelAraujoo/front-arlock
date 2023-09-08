export function validateFormCadastro(userData, error, setError) {
  const errors = [];
  let visibleErro = error;

  //validação nome
  if (userData.nome === undefined || userData.nome.length === 0) {
    errors.push("Campo 'Nome' está vazio");
    visibleErro = { ...visibleErro, errorNome: true };
  } else {
    visibleErro = { ...visibleErro, errorNome: false };
  }

  //validação email

  //validação rm
  if (userData.rm === undefined || userData.rm.length === 0) {
    errors.push("Campo 'RM' está vazio");
    visibleErro = { ...visibleErro, errorRm: true };
  } else {
    visibleErro = { ...visibleErro, errorRm: false };
  }

  //validação curso

  //validação senha

  setError(visibleErro);
  return errors;
}
