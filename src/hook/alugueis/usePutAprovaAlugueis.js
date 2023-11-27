export async function PutAprovaAluguel(id) {
  fetch(`http://localhost/innotech/php/UPDATE/StatusAprovado.php?IDs=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data.error;
    })

    .catch((error) => {
      return error;
    });
}
