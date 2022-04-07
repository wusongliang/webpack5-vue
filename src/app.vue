<template>
  <div>
    <nav>
      <router-link to="/"> Home </router-link>&nbsp;&nbsp;

      <router-link to="/about"> About </router-link>&nbsp;&nbsp;

      <router-link to="/error"> Secret </router-link>
    </nav>

    <router-view />
  </div>
</template>
