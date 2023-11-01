<?php
include("ClassConnect.php");

class ClassArmario extends DbConnect {

    public function exibirArmario() {
        $con = $this->connect(); // Obtém a conexão mysqli

        // Verifica se a conexão foi bem-sucedida
        if ($con->connect_error) {
            die("Falha de conexão com o MySQL: " . $con->connect_error);
        }

        $query = "SELECT Letra, quantidade, Curso, manutenção, Alugados FROM tbArmarios";

        $result = $con->query($query);

        if (!$result) {
            die("Erro na consulta: " . $con->error);
        }

        $J = [];
       

        while ($row = $result->fetch_assoc()) {
            $J[] = [
                "Letra" => $row['Letra'],
                "quantidade" => $row['quantidade'],
                "Curso" => $row['Curso'],
                "manutenção" => $row['manutenção'],
                "Alugados" => $row['Alugados'],
            ];
            
        }

        header("Access-Control-Allow-Origin: *");
        header("Content-type: application/json");
        echo json_encode($J);
    }
}
