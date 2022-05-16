<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  components: { RouterLink, RouterView },
};
</script>
<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/questoes">Quiz</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
