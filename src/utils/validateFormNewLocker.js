export function validateFormNewLocker(userData, error, setError) {
    const errors = [];
    let visibleErro = error;
  
    //validação nome
    if (userData.letra === undefined || userData.letra.length === 0) {
      errors.push("Campo 'Letra' está vazio");
      visibleErro = { ...visibleErro, errorLetra: true };
    } else {
      visibleErro = { ...visibleErro, errorLetra: false };
    }
  
    //validação email
  
    //validação rm
    if (userData.quantidade === undefined || userData.quantidade.length === 0) {
      errors.push("Campo 'Quantidade' está vazio");
      visibleErro = { ...visibleErro, errorQuantidade: true };
    } else {
      visibleErro = { ...visibleErro, errorQuantidade: false };
    }
    //validação curso
  
    //validação senha
  
    setError(visibleErro);
    return errors;
  }
  