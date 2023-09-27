import { api } from "../../services/api";

export async function GetArmarios() {
  try {
    const { data } = await api.get("getArmarios", {
      headers: { "Content-Type": "application/json" },
    });

    // const newData = {
    //   activeProc: data?.active_process,
    //   availableProc: data?.available_process,
    //   flaggedProc: data?.flagged_processes,
    // };

    // setData(newData);

    console.log(data);
  } catch (error) {
    if (error.response) {
      // A requisição foi feita e o servidor respondeu com um código de status
      // que sai do alcance de 2xx
      console.error(error.response.data);
      console.error(error.response.status);
      console.error(error.response.headers);
    } else if (error.request) {
      // A requisição foi feita mas nenhuma resposta foi recebida
      // `error.request` é uma instância do XMLHttpRequest no navegador e uma instância de
      // http.ClientRequest no node.js
      console.error(error.request);
    } else {
      // Alguma coisa acontenceu ao configurar a requisição que acionou este erro.
      console.error("Error", error.message);
    }
    console.error(error.config);
  }
}
