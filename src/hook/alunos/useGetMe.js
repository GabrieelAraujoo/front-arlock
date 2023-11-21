export async function GetMe(email, setNewData) {
  fetch(`https://naovai.000webhostapp.com/php/PUT/Aluno.php?email=${email}`)
    .then((response) => response.json())
    .then((data) => {
      const newData = {
        curso: data?.data?.curso,
        email: data?.data?.email,
        nome: data?.data?.nome,
        rm: data?.data?.rm,
      };

      setNewData(newData);
    })

    .catch((error) => {
      console.error(error);
    });
}
