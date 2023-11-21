export async function GetAlunos(setAlunos) {
  // Realize a solicitação HTTP para obter a lista de usuários
  fetch("http://localhost/innotech/php/GET/Aluno.php") // Substitua "/api/usuarios" pela URL da sua API
    .then((response) => response.json())
    .then((data) => {
      const newData = data.map((item) => ({
        rm: item.rm,
        nome: item.nome,
        curso: item.curso,
      }));

      
       setAlunos(newData); // Atualiza o estado com os dados dos usuários
    })
    .catch((error) => {
      console.error("Erro ao buscar a lista de usuários:", error);
    });
}
