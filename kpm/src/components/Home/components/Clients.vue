<template>
  <div>
    <!-- <section
      id="clients"
      class="padding testimonial-bg parallaxie"
      v-if="testimonies.length != 0"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div id="owl-thumbs" class="owl-dots text-center bottom45">
                            <div class="owl-dot active"><img src="images/testimonial-1.jpg" alt=""></div>
                            <div class="owl-dot"><img src="images/testimonial-2.jpg" alt=""></div>
                            <div class="owl-dot"><img src="images/testimonial-3.jpg" alt=""></div>
                        </div>
            <div
              id="testimonial-quote-nav"
              class="owl-carousel no-quote"
            >
              <div
                class="item"
                v-for="testimony in testimonies"
                :key="testimony.id"
              >
                <div class="row">
                  <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                    <div class="testimonial-quote darkcolor">
                      <h3 class="bottom30 font-xlight">
                        {{ testimony.text }}
                      </h3>
                      <h6>{{ testimony.name }}</h6>
                      <small>{{ testimony.title }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <section class="padding_bottom">
      <div class="container">
        <h3 class="invisible">
          hidden
        </h3>
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div
              id="partners-slider"
              class="owl-carousel"
            >
              <div
                class="item"
                v-for="(client) in clients"
                :key="client.id"
              >
                <div class="logo-item">
                  <img
                    alt=""
                    :src="client.img"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name : "Clients",
        data : function() {
            return {
                testimonies : [
                ],
                clients : [
                    {id: 1, name: "LOGO_SAMPOERNA", img: "uploads/clients/LOGO_SAMPOERNA.webp"},
                    {id: 2, name: "LOGO_CCA", img: "uploads/clients/LOGO_CCA.webp"},
                    {id: 3, name: "LOGO_PANASONIC", img: "uploads/clients/LOGO_PANASONIC.webp"},
                    {id: 4, name: "LOGO_PRUDENT", img: "uploads/clients/LOGO_PRUDENT.webp"},
                    {id: 5, name: "LOGO_MAP", img: "uploads/clients/LOGO_MAP.webp"},
                    {id: 6, name: "LOGO_METRO", img: "uploads/clients/LOGO_METRO.webp"},
                    {id: 7, name: "LOGO_HONDA", img: "uploads/clients/LOGO_HONDA.webp"},
                    {id: 8, name: "LOGO_SAMSONITE", img: "uploads/clients/LOGO_SAMSONITE.webp"},
                    {id: 9, name: "LOGO_LUXOTTICA", img: "uploads/clients/LOGO_LUXOTTICA.webp"},
                    {id: 10, name: "LOGO_PRI", img: "uploads/clients/LOGO_PRI.webp"},
                    {id: 11, name: "LOGO_KK", img: "uploads/clients/LOGO_KK.webp"},
                    {id: 12, name: "LOGO_MARZANO", img: "uploads/clients/LOGO_MARZANO.webp"},
                    {id: 13, name: "LOGO_GS", img: "uploads/clients/LOGO_GS.webp"},
                    {id: 14, name: "LOGO_CSC", img: "uploads/clients/LOGO_CSC.webp"},
                    {id: 15, name: "LOGO_PAUL", img: "uploads/clients/LOGO_PAUL.webp"},
                    {id: 16, name: "LOGO_GODIVA", img: "uploads/clients/LOGO_GODIVA.webp"},
                    {id: 17, name: "LOGO_PS", img: "uploads/clients/LOGO_PS.webp"},
                    {id: 18, name: "LOGO_SS", img: "uploads/clients/LOGO_SS.webp"},
                    {id: 19, name: "LOGO_ADIDAS", img: "uploads/clients/LOGO_ADIDAS.webp"},
                    {id: 20, name: "LOGO_ASICS", img: "uploads/clients/LOGO_ASICS.webp"},
                    {id: 21, name: "LOGO_SKECHERS", img: "uploads/clients/LOGO_SKECHERS.webp"},
                    {id: 22, name: "LOGO_CONVERSE", img: "uploads/clients/LOGO_CONVERSE.webp"},
                    {id: 23, name: "LOGO_LINEA", img: "uploads/clients/LOGO_LINEA.webp"},
                    {id: 24, name: "LOGO_STACCATO", img: "uploads/clients/LOGO_STACCATO.webp"},
                    {id: 25, name: "LOGO_BIRKENSTOCK", img: "uploads/clients/LOGO_BIRKENSTOCK.webp"},
                    {id: 26, name: "LOGO_ROCKPORT", img: "uploads/clients/LOGO_ROCKPORT.webp"},
                    {id: 27, name: "LOGO_DM", img: "uploads/clients/LOGO_DM.webp"},
                    {id: 28, name: "LOGO_KIDZSTATION", img: "uploads/clients/LOGO_KIDZSTATION.webp"},
                    {id: 29, name: "LOGO_GOLFHOUSE", img: "uploads/clients/LOGO_GOLFHOUSE.webp"},
                    {id: 30, name: "LOGO_ECCO", img: "uploads/clients/LOGO_ECCO.webp"},
                    {id: 31, name: "LOGO_ODD", img: "uploads/clients/LOGO_ODD.webp"},
                    {id: 32, name: "LOGO_FF", img: "uploads/clients/LOGO_FF.webp"}
                ]
            }
        }
    }
</script>

<style scoped>
    .testimonial-bg {
        background-image : url(/uploads/IMG_TESTIMONI.jpg);
    }

    .container {
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 20px;
        padding: 2% 0%;
    }

    .logo-item {
      height: 150px !important;
    }
</style>