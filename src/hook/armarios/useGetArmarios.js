export async function GetArmarios(setArmarios) {
  // Realize a solicitação HTTP para obter a lista de usuários
  fetch("https://testarlock.000webhostapp.com/Api_v1_react/Armario.php") // Substitua "/api/usuarios" pela URL da sua API
    .then((response) => response.json())
    .then((data) => {
      const newData = data.map((item) => ({
        letra: item.Letra,
        quantidade: item.quantidade,
        curso: item.Curso,
        manutencao: item.manutenção,
        alugados: item.Alugados,
      }));

      setArmarios(newData); // Atualiza o estado com os dados dos usuários
    })
    .catch((error) => {
      console.error("Erro ao buscar a lista de usuários:", error);
    });
}
