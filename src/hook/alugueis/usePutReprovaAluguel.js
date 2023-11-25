export async function PutReprovaAluguel() {
    // Realize a solicitação HTTP para obter a lista de usuários
   // fetch(`http://localhost/innotech/php/UPDATE/StatusAprovado.php?IDs=${id}`) // Substitua "/api/usuarios" pela URL da sua API
    fetch(`http://localhost/innotech/php/UPDATE/StatusNegado.php?IDs=1`) // Substitua "/api/usuarios" pela URL da sua API
      .then((response) => response.json())
      .then((data) => {
        return data.error;
      })
  
      .catch((error) => {
        return error;
      });
  }
  