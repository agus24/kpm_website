<template>
  <div>
    <home-banner />
    <home-service />
    <home-work-process />
    <home-portfolio />
    <home-clients />
    <home-contact />
  </div>
</template>

<script>
import HomeBanner from "./components/Banner"
import HomeService from "./components/Service"
import HomeWorkProcess from "./components/WorkProcess"
import HomePortfolio from "./components/Portfolio"
import HomeClients from "./components/Clients"
import HomeContact from "./components/Contact"

export default {
    name : "HomeComponent",
    components : {
        HomeBanner,
        HomeService,
        HomeWorkProcess,
        HomePortfolio,
        HomeClients,
        HomeContact
    }
}
</script>

<style lang="scss" scoped>

</style>