<?php
include("ClassConnect.php");

class ClassAluno extends DbConnect {

    public function exibirAluno() {
        $con = $this->connect(); // Obtém a conexão mysqli

        // Verifica se a conexão foi bem-sucedida
        if ($con->connect_error) {
            die("Falha de conexão com o MySQL: " . $con->connect_error);
        }

        $query = "SELECT RM, Nome, Curso FROM tbUsuarios WHERE tipo LIKE 'alun%';";

        $result = $con->query($query);

        if (!$result) {
            die("Erro na consulta: " . $con->error);
        }

        $J = [];
       

        while ($row = $result->fetch_assoc()) {
            $J[] = [
                "RM" => $row['RM'],
                "Nome" => $row['Nome'],
                "Curso" => $row['Curso']                
            ];
            
        }

        header("Access-Control-Allow-Origin: *");
        header("Content-type: application/json");
        echo json_encode($J);
    }
}
