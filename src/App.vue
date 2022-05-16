<script>
import BlocoCabecalho from "@/components/BlocoCabecalho.vue";
import BlocoPrincipal from "@/components/BlocoPrincipal.vue";
import BlocoRodape from "@/components/BlocoRodape.vue";

export default {
  components: { BlocoCabecalho, BlocoPrincipal, BlocoRodape },
};
</script>
<template>
  <BlocoCabecalho />
  <main id="pag">
    <BlocoPrincipal />
  </main>
  <BlocoRodape />
</template>
