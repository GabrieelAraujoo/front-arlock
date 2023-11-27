export async function DelArmarios(id) {
  // Realize a solicitação HTTP para obter a lista de usuários
  fetch(`http://localhost/innotech/php/DELETE/Armario.php?IDs=${id}`) // Substitua "/api/usuarios" pela URL da sua API
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
