export async function GetMe(email) {
  // Realize a solicitação HTTP para obter a lista de usuários
  fetch(
    `https://naovai.000webhostapp.com/php/PUT/Aluno.php?email=emilee6555@uorak.com`
  ) // Substitua "/api/usuarios" pela URL da sua API
    .then((response) => response.json())
    .then((data) => {
      // const newData = {
      //   message: data?.message,
      // };

      console.log(data);
      return data.message;
    })

    .catch((error) => {
      console.error(error);

      return error;
    });
}
