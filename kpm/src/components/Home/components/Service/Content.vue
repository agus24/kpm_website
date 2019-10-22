<template>
  <div class="col-lg-6 nopadding">
    <div class="split-box text-center center-block container-padding equalheight">
      <div class="heading-title padding">
        <span
          class=" wow fadeIn"
          data-wow-delay="300ms"
        >{{ subtitle }}</span>
        <h2
          class="darkcolor bottom20 wow fadeIn"
          data-wow-delay="350ms"
        >
          {{ title }}
        </h2>
        <p
          class="heading_space wow fadeIn"
          data-wow-delay="400ms"
        >
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name : "Content",
        props : {
            subtitle : {
                type : String,
                default : ""
            },
            title : {
                type : String,
                default : ""
            },
            content : {
                type : String,
                default : ""
            }
        }
    }
</script>

<style scoped>
    p {
        font-size: 16px;
    }
</style>