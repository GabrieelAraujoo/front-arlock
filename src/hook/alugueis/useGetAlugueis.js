export async function GetAprovacao(setAprovacao) {
  // Realize a solicitação HTTP para obter a lista de usuários
  fetch("https://naovai.000webhostapp.com/php/GET/Aprovacao.php") // Substitua "/api/usuarios" pela URL da sua API
    .then((response) => response.json())
    .then((data) => {
      const newData = data.map((item) => ({
        armario: item.armario,
        aluno: item.aluno,
        rm: item.rm,
        curso: item.curso,
        pagamento: item.pagamento,
        status: item.status,
      }));

      setAprovacao(newData); // Atualiza o estado com os dados dos usuários
    })
    .catch((error) => {
      console.error("Erro ao buscar a lista de usuários:", error);
    });
}
