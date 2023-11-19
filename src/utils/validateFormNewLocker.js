export function validateFormNewLocker(userData, error, setError) {
  const errors = [];
  let visibleErro = error;

  //validação letra
  if (userData.letra === undefined || userData.letra.length === 0) {
    errors.push("Campo 'Letra' está vazio");
    visibleErro = { ...visibleErro, errorLetra: true };
  } else {
    visibleErro = { ...visibleErro, errorLetra: false };
  }

  //validação numero
  if (userData.numero === undefined || userData.numero.length === 0) {
    errors.push("Campo 'Numero' está vazio");
    visibleErro = { ...visibleErro, errorNumero: true };
  } else {
    visibleErro = { ...visibleErro, errorNumero: false };
  }

  //validação curso
  if (userData.curso === undefined || userData.curso.length === 0) {
    errors.push("Campo 'Curso' está vazio");
    visibleErro = { ...visibleErro, errorCurso: true };
  } else {
    visibleErro = { ...visibleErro, errorCurso: false };
  }

  //validação status
  if (userData.status === undefined || userData.status.length === 0) {
    errors.push("Campo 'Status' está vazio");
    visibleErro = { ...visibleErro, errorStatus: true };
  } else {
    visibleErro = { ...visibleErro, errorStatus: false };
  }

  setError(visibleErro);
  return errors;
}
