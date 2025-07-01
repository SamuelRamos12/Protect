<?php
include 'conexao.php';

// Receber dados do formulário
$nome_usuario = $_POST['username'];
$email = $_POST['email'];
$senha = $_POST['password'];

// Preparar e executar a consulta SQL para verificar as credenciais
$sql = "SELECT * FROM usuarios WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

// Verificar se o usuário existe e se a senha está correta
if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    
    // Verificar se a senha está correta
    if (password_verify($senha, $user['password'])) {
        // Iniciar sessão e redirecionar o usuário para a página inicial ou dashboard
        session_start();
        $_SESSION['id_usuario'] = $user['id_usuario'];
        $_SESSION['nome_usuario'] = $user['nome_usuario'];
        header("Location: /PROJECT/Inicio copy/index.html"); // Substitua com a página de destino após o login
        exit();
    } else {
        echo "Senha incorreta.";
    }
} else {
    echo "Usuário não encontrado.";
}

// Fechar conexão
$conn->close();
?>