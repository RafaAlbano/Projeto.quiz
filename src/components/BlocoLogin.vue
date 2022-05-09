<script>
export default {};
</script>
<template>
  <div class="questoes">
    <div class="pergunta">LOGIN</div>
    <div class="login">
      <p>Nome:</p>
      <input type="text" />
      <p>Email:</p>
      <input type="text" />
    </div>
  </div>
</template>
<style>
.questoes {
  display: flex;
  height: 100%;
}
.pergunta {
  width: 50%;
  height: 100vh;
  background-color: #b19fbe;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  font-family: "Times New Roman", Times, serif;
}

.login {
  width: 50%;
  height: 100vh;
  background-color: #b19fbe;

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
}
</style>
