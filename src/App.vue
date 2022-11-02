<template>
  <div>
  </div>

  <nav>
    <router-link to="/">home  </router-link>
    <router-link to="/login">login  </router-link>
    <router-link to="/register">register  </router-link>
    <router-link to="/superiorhome">superiorhome  </router-link>
  </nav>

  <!-- abajo de esto, aparecen los links, componentes -->
  <RouterView></RouterView>
</template>

<script setup>

</script>
