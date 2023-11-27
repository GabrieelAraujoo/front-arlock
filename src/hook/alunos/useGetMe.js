export async function GetMe(email, setNewData) {
  fetch(`http://localhost/innotech/php/UPDATE/AlunoLogin.php?email=${email}`)
    .then((response) => response.json())
    .then((data) => {
      const newData = {
        id: data?.data?.ID,
        curso: data?.data?.curso,
        email: data?.data?.email,
        nome: data?.data?.nome,
        rm: data?.data?.rm,
        status: data?.data?.status,
      };

      setNewData(newData);
    })

    .catch((error) => {
      console.error(error);
    });
}
