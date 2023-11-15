export async function GetArmarios(setArmarios) {
  // Realize a solicitação HTTP para obter a lista de usuários
  fetch("https://naovai.000webhostapp.com/php/GET/Armario.php") // Substitua "/api/usuarios" pela URL da sua API
    .then((response) => response.json())
    .then((data) => {
      const newData = data.map((item) => ({
        id: item.Arm_ID,
        letra: item.letra,
        numero: item.numero,
        curso: item.curso,

        aluno: item.aluno,
        rm: item.rm,
        status: item.status,
        pagamento: item.status,
        statusAluguel: item.statusAluguel,
      }));



      setArmarios(newData); // Atualiza o estado com os dados dos usuários
    })
    .catch((error) => {
      console.error("Erro ao buscar a lista de usuários:", error);
    });
}
