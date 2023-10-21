export async function DelArmarios(id) {
    // Realize a solicitação HTTP para obter a lista de usuários
    fetch(`https://naovai.000webhostapp.com/php/DELETE/DeleteArm.php?ID_Arm=${id}`) // Substitua "/api/usuarios" pela URL da sua API
      .then((response) => response.json())
      .then((data) => {
       
        return(data.json())
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de usuários:", error);

        return(error)
      });
  }
  