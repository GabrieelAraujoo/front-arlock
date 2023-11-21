export async function DelArmarios(id, setResultDelet) {
  // Realize a solicitação HTTP para obter a lista de usuários
  fetch(
    `https://naovai.000webhostapp.com/php/DELETE/DeleteArm.php?Arm_ID=${id}`
  ) // Substitua "/api/usuarios" pela URL da sua API
    .then((response) => response.json())
    .then((data) => {
      // const newData = {
      //   message: data?.message,
      // };

      console.log(data);
      setResultDelet(data.message);
      return data.message;
    })

    .catch((error) => {
      console.error(error);

      return error;
    });
}
