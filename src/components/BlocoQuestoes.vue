<script>
export default {
  data() {
    return {
      pergunta: "1 Na escola, quais eram suas matérias preferidas?",
      opcoes: [
        {
          id: 1,
          opcao: "Matemática e física.",
          correta: false,
        },
        {
          id: 2,
          opcao: "Português, inglês, filosofia e sociologia. ",
          correta: false,
        },
        {
          id: 3,
          opcao: "Química e biologia. ",
          correta: true,
        },
      ],
    };
  },
};
</script>
<template>
  <div class="questoes">
    <div class="pergunta">{{ pergunta }}</div>
    <div class="alternativas">
      <p v-for="opcao of opcoes" :key="opcao.id">{{ opcao.opcao }}</p>
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
  background-color: #c0aecd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  font-family: "Times New Roman", Times, serif;
  padding-left: 50px;
}

.alternativas {
  width: 50%;
  height: 100vh;
  background-color: #b19fbe;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 2em;
}

.alternativas p {
  width: 80%;
  padding: 10px;
}

.alternativas p:hover {
  background-color: #c0aecd;
  cursor: pointer;
}
</style>
