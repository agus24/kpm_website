<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/partials/Header"
import Footer from "./components/partials/Footer"

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
    .font-bold {
        font-weight: bold;
    }
    .justify {
        text-align: justify;
    }
    .left-align {
        text-align: left;
    }
</style>