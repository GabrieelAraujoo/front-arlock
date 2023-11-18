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
  if (userData.email === undefined || userData.email.length === 0) {
    errors.push("Campo 'E-mail' está vazio");
    visibleErro = { ...visibleErro, errorEmail: true };
  } else {
    if (userData.email.indexOf("@") === -1 || userData.email.indexOf("@") < 3) {
      errors.push(
        "Endereço de email invalido. Digite um endereço de email válido."
      );
      visibleErro = { ...visibleErro, errorEmail: true };
    } else {
      visibleErro = { ...visibleErro, errorEmail: false };
    }
  }

  //validação rm
  if (userData.rm === undefined || userData.rm.length === 0) {
    errors.push("Campo 'RM' está vazio");
    visibleErro = { ...visibleErro, errorRm: true };
  } else {
    if (userData.rm.length < 5 || userData.rm.length > 5) {
      errors.push("Campo 'RM' inválido");
      visibleErro = { ...visibleErro, errorRm: true };
    } else {
      visibleErro = { ...visibleErro, errorRm: false };
    }
  }

  //validação curso
  if (userData.curso === undefined || userData.curso === "") {
    errors.push("Campo 'Curso' não foi selecionado");
    visibleErro = { ...visibleErro, errorCurso: true };
  } else {
    visibleErro = { ...visibleErro, errorCurso: false };
  }

  //validação senha
  if (userData.senha === undefined || userData.senha.length === 0) {
    errors.push('Campo "Senha" está vazia');
    visibleErro = { ...visibleErro, errorSenha: true };
  } else {
    if (userData.senha.length < 6) {
      errors.push(
        "Sua senha não atende os critérios necessários. Ela deverá conter: - mínimo 6 caracteres"
      );
      visibleErro = { ...visibleErro, errorSenha: true };
    } else {
      const onlyAlphaMai = userData.senha.replace(/[^A-Z]/g, "");

      const onlyAlphaMin = userData.senha.replace(/[^a-z]/g, "");

      const onlyNum = userData.senha.replace(/[^0-9]/g, "");

      const onlyCaract = userData.senha.replace(/[a-z0-9]/gi, "");

      if (
        onlyAlphaMai.length === 0 ||
        onlyAlphaMin.length === 0 ||
        onlyNum.length === 0 ||
        onlyCaract.length === 0
      ) {
        errors.push(
          "Sua senha não atende os critérios necessários. Ela deverá conter: letra minúscula, letra maiúscula, caracteres especiais e número"
        );
        visibleErro = { ...visibleErro, errorSenha: true };
      } else {
        visibleErro = { ...visibleErro, errorSenha: false };
      }
    }
  }

  if ((userData.senha === undefined || userData.confirmarSenha.length) === 0) {
    errors.push('Campo "Confirma Senha" está vazio');
    visibleErro = { ...visibleErro, errorConfirmarSenha: true };
  } else {
    if (
      userData.senha !== userData.confirmarSenha &&
      userData.senha.length !== 0
    ) {
      errors.push("As senhas devem ser iguais");
      visibleErro = { ...visibleErro, errorConfirmarSenha: true };
    } else {
      visibleErro = { ...visibleErro, errorConfirmarSenha: false };
    }
  }

  setError(visibleErro);
  return errors;
}
