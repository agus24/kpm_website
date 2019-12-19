<template>
  <div class="col-lg-6 nopadding">
    <div class="image hover-effect img-container">
      <img
        :alt="alt"
        :src="image"
        class="equalheight"
      >
    </div>
  </div>
</template>

<script>
    export default {
        name: "Image",
        props : {
            image : {
                type: String,
                default : ""
            }, 
            alt : {
                type : String,
                default : ""
            }
        },
        data : function() {
            return {
                // 
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>