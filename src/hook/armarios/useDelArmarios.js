export async function DelArmarios(id, setResultDelet) {
  // Realize a solicitação HTTP para obter a lista de usuários
  fetch(
    `https://naovai.000webhostapp.com/php/DELETE/DeleteArm.php?ID_Arm=${id}`
  ) // Substitua "/api/usuarios" pela URL da sua API
    .then((response) => response.json())
    .then((data) => {
      const newData = {
        message: data?.message,
      };

      setResultDelet(data.message);
      return data.message;
    })

    .catch((error) => {
      console.error(error);

      return error;
    });
}
