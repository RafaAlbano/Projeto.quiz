<script></script>
<template>
  <div class="questoes">
    <div class="login2">
      <div class="fundo-login">
        <h1>LOGIN</h1>
      </div>
    </div>
    <div class="login">
      <p>Nome:</p>
      <input type="text" />
      <p>Email:</p>
      <input type="text" />
      <div class="button">
        <button type="button" class="btn btn-outline-dark">Enviar</button>
      </div>
    </div>
  </div>
</template>
<style>
.questoes {
  display: flex;
  height: 100%;
}
.login2 {
  width: 50%;
  height: 100vh;
  background-color: rgb(223, 221, 221);
  font-size: 2.5em;
  font-family: "Times New Roman", Times, serif;
  background-image: url(src/assets/img/login.jpeg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.login {
  width: 50%;
  height: 100vh;
  background-color: rgb(223, 221, 221);

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  font-size: 2em;
}
input[type="text"] {
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: whitesmoke;
  border-color: whitesmoke;
  margin-left: 50px;
}
.btn-outline-dark {
  width: 15%;
  height: 30px;
  background-color: whitesmoke;
  border-color: whitesmoke;
  margin-left: 50px;
  font-family: "Times New Roman", Times, serif;
  font-size: 0.5em;
}
p {
  margin-left: 50px;
}

h1 {
}

.fundo-login {
  background-color: rgb(128, 128, 128, 0.5);
  color: whitesmoke;
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
