<?php
include("ClassConnect.php");

class ClassUsuario extends DbConnect {

    public function exibirFuncionarios() {
        $con = $this->connect(); // Obtém a conexão mysqli

        // Verifica se a conexão foi bem-sucedida
        if ($con->connect_error) {
            die("Falha de conexão com o MySQL: " . $con->connect_error);
        }

        $query = "SELECT nome, email, senha FROM tbUsuarios WHERE tipo LIKE 'prof%'";

        $result = $con->query($query);

        if (!$result) {
            die("Erro na consulta: " . $con->error);
        }

        $J = [];
       

        while ($row = $result->fetch_assoc()) {
            $J[] = [
                "nome" => $row['nome'],
                "email" => $row['email'],
                "senha" => $row['senha']
            ];
            
        }

        header("Access-Control-Allow-Origin: *");
        header("Content-type: application/json");
        echo json_encode($J);
    }
}
