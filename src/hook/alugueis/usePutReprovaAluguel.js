export async function PutReprovaAluguel(id) {
  fetch(`http://localhost/innotech/php/UPDATE/StatusNegado.php?IDs=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data.error;
    })

    .catch((error) => {
      return error;
    });
}
