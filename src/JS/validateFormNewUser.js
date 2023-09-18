export function validateFormNewUser(userData, error, setError) {
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
    if (userData.email === undefined || userData.email.length === 0) {
      errors.push("Campo 'Email' está vazio");
      visibleErro = { ...visibleErro, errorEmail: true };
    } else {
      visibleErro = { ...visibleErro, errorEmail: false };
    }
  
    //validação curso
  
    //validação senha
  
    setError(visibleErro);
    return errors;
  }