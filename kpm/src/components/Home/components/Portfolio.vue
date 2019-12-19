<template>
  <section
    id="portfolio"
    class="bglight padding"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2 col-sm-12 text-center">
          <div
            class="heading-title wow fadeInUp"
            data-wow-delay="300ms"
          >
            <span>Our Portfolios</span>
            <h2 class="darkcolor bottom10">
              Portofolio
            </h2>
          </div>
        </div>
      </div>
      <div
        id="flat-gallery"
        class="cbp dark_overlay"
      >
        <div class="cbp-item web logo" v-for="value in portfolio" :key="value.id" @click="largeImage(value.id)" style="cursor:pointer">
          <img
            :src="value.src"
            alt=""
          >
          <div class="overlay center-block whitecolor">
            <a style="display:none" data-fancybox="gallery" :href="value.src" class="plus" :ref="'image-'+value.id"></a>
            <div class="portfolio-title">
              <span class="box top-left" />
              <span class="box top-right" />
              <span class="box bottom-left" />
              <span class="box bottom-right" />
              <h4 class="top30">
                {{ value.title }}
              </h4>
              <p>{{ value.subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
    export default {
        name : "Portfolio",
        data: function() {
          return {
            portfolio : [
              {id : 1, title : "PANASONIC GOBEL INDONESIA", subtitle: "Force Field Team Training", src: "uploads/portfolio/1.webp"},
              {id : 2, title : "PANASONIC GOBEL INDONESIA", subtitle: "Team Leader Training ", src: "uploads/portfolio/2.webp"},
              {id : 3, title : "SAMSONITE", subtitle: "Town Hall Conference", src: "uploads/portfolio/3.webp"},
              {id : 4, title : "PRUDENTIAL LIFE INSURANCE ", subtitle: "Country Trainers Training", src: "uploads/portfolio/4.webp"},
              {id : 5, title : "PRESTASI RETAIL INNOVATION", subtitle: "Surabaya Staff Training", src: "uploads/portfolio/5.webp"},
              {id : 6, title : "PRESTASI RETAIL INNOVATION", subtitle: "Train the Trainers", src: "uploads/portfolio/6.webp"},
              {id : 7, title : "MITRA ADI PERKASA", subtitle: "Growth Brand Leadership Conference", src: "uploads/portfolio/7.webp"},
              {id : 8, title : "MITRA ADI PERKASA", subtitle: "Krispy Kreme Leadership Conference", src: "uploads/portfolio/8.webp"},
              {id : 9, title : "IDEPRENEURS INDONESIA", subtitle: "Public Speaking Workshop", src: "uploads/portfolio/9.webp"},
            ]
          }
        },
        methods : {
          largeImage(id) {
            this.$refs['image-'+id][0].click()
          }
        }
    }
</script>

<style lang="scss" scoped>
  .portfolio-title {
    text-align: center;
    padding: 4%;
  }

  .box {
    width: 8%;
    height: 10%;
    content: " ";
    position: absolute;
    &.top-left {
      left: 5%;
      top: 25%;
      border-top: 1px solid white;
      border-left: 1px solid white;
    }

    &.top-right {
      right: 5%;
      top: 25%;
      border-top: 1px solid white;
      border-right: 1px solid white;
    }

    &.bottom-left {
      left: 5%;
      border-bottom: 1px solid white;
      border-left: 1px solid white;
      bottom: 15%;
    }

    &.bottom-right {
      right: 5%;
      border-bottom: 1px solid white;
      border-right: 1px solid white;
      bottom: 15%;
    }
  }
</style>