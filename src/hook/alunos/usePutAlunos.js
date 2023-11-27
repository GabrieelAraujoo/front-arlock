export async function PutAluno(id) {
  // Realize a solicitação HTTP para obter a lista de usuários
  fetch(`http://localhost/innotech/php/UPDATE/Aluno.php?ID=${id}`) // Substitua "/api/usuarios" pela URL da sua API
    .then((response) => response.json())
    .then((data) => {
      return data.error;
    })

    .catch((error) => {
      return error;
    });
}
