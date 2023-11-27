export async function GetUsuarios(setUsuarios) {
  // Realize a solicitação HTTP para obter a lista de usuários
  fetch("http://localhost/innotech/php/GET/Usuarios.php") // Substitua "/api/usuarios" pela URL da sua API
    .then((response) => response.json())
    .then((data) => {
      const newData = data.map((item) => ({
        id: item.ID,
        nome: item.nome,
        email: item.email,
      }));

      setUsuarios(newData); // Atualiza o estado com os dados dos usuários
    })
    .catch((error) => {
      console.error("Erro ao buscar a lista de usuários:", error);
    });
}
