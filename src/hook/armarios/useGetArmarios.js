export async function GetArmarios(setArmarios) {
  // Realize a solicitação HTTP para obter a lista de usuários
  fetch("https://naovai.000webhostapp.com/php/GET/Armario.php") // Substitua "/api/usuarios" pela URL da sua API
    .then((response) => response.json())
    .then((data) => {
      const newData = data.map((item) => ({
        letra: item.letra,
        quantidade: item.quantidade,
        curso: item.curso,
        manutencao: item.manutencao,
        alugados: item.Alugados,
        id: item.ID_Arm
      }));

      setArmarios(newData); // Atualiza o estado com os dados dos usuários
    })
    .catch((error) => {
      console.error("Erro ao buscar a lista de usuários:", error);
    });
}


