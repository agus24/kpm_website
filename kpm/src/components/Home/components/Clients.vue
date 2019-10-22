<template>
  <div>
    <section
      id="clients"
      class="padding parallaxie"
      :style="testimonyStyle"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <!-- <div id="owl-thumbs" class="owl-dots text-center bottom45">
                            <div class="owl-dot active"><img src="images/testimonial-1.jpg" alt=""></div>
                            <div class="owl-dot"><img src="images/testimonial-2.jpg" alt=""></div>
                            <div class="owl-dot"><img src="images/testimonial-3.jpg" alt=""></div>
                        </div> -->
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
    </section>
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
                    :src="config.baseDir + client.img"
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
    import config from "../../../config"
    export default {
        name : "Clients",
        data : function() {
            return {
                testimonies : [
                    {
                        id : 1,
                        text : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, nonumy eirmod tempor invidunt ut laboret dolore magna aliquyam diam voluptua.",
                        name : "Munaroh",
                        title : "CEO, XeOne"
                    },
                    {
                        id : 2,
                        text : "If you are a small business and you are interested in small rebranding then this is a perfect plan for you",
                        name : "Sukirman",
                        title : "CEO, XeOne"
                    },
                    {
                        id : 3,
                        text : "We show you our professional achievements in numbers, which show the acquired skills",
                        name : "Hamdani",
                        title : "CEO, XeOne"
                    }
                ],
                clients : [
                    {id: 1, name: "LOGO_HMSAMPOERNA", img: "/uploads/clients/LOGO_HMSAMPOERNA.png"},
                    {id: 2, name: "LOGO_CCAI", img: "/uploads/clients/LOGO_CCAI.png"},
                    {id: 3, name: "LOGO_PANASONIC", img: "/uploads/clients/LOGO_PANASONIC.png"},
                    {id: 4, name: "LOGO_PRUDENTIAL", img: "/uploads/clients/LOGO_PRUDENTIAL.png"},
                    {id: 5, name: "LOGO_MAP", img: "/uploads/clients/LOGO_MAP.png"},
                    {id: 6, name: "LOGO_METRO", img: "/uploads/clients/LOGO_METRO.png"},
                    {id: 7, name: "LOGO_HONDA", img: "/uploads/clients/LOGO_HONDA.png"},
                    {id: 8, name: "LOGO_SAMSONITE", img: "/uploads/clients/LOGO_SAMSONITE.png"},
                    {id: 9, name: "LOGO_LUXOTTICA", img: "/uploads/clients/LOGO_LUXOTTICA.png"},
                    {id: 10, name: "LOGO_PRI", img: "/uploads/clients/LOGO_PRI.png"},
                    {id: 11, name: "LOGO_KK", img: "/uploads/clients/LOGO_KK.png"},
                    {id: 12, name: "LOGO_PM", img: "/uploads/clients/LOGO_PM.png"},
                    {id: 13, name: "LOGO_GENKI", img: "/uploads/clients/LOGO_GENKI.png"},
                    {id: 14, name: "LOGO_CSC", img: "/uploads/clients/LOGO_CSC.png"},
                    {id: 15, name: "LOGO_PAUL", img: "/uploads/clients/LOGO_PAUL.png"},
                    {id: 16, name: "LOGO_GODIVA", img: "/uploads/clients/LOGO_GODIVA.png"},
                    {id: 17, name: "LOGO_PS", img: "/uploads/clients/LOGO_PS.png"},
                    {id: 18, name: "LOGO_SS", img: "/uploads/clients/LOGO_SS.png"},
                    {id: 19, name: "LOGO_ADIDAS", img: "/uploads/clients/LOGO_ADIDAS.png"},
                    {id: 20, name: "LOGO_ASICS", img: "/uploads/clients/LOGO_ASICS.png"},
                    {id: 21, name: "LOGO_SKECHERS", img: "/uploads/clients/LOGO_SKECHERS.png"},
                    {id: 22, name: "LOGO_CONVERSE", img: "/uploads/clients/LOGO_CONVERSE.png"},
                    {id: 23, name: "LOGO_LINEA", img: "/uploads/clients/LOGO_LINEA.png"},
                    {id: 24, name: "LOGO_STACCATO", img: "/uploads/clients/LOGO_STACCATO.png"},
                    {id: 25, name: "LOGO_BIRKENSTOCK", img: "/uploads/clients/LOGO_BIRKENSTOCK.png"},
                    {id: 26, name: "LOGO_ROCKPORT", img: "/uploads/clients/LOGO_ROCKPORT.png"},
                    {id: 27, name: "LOGO_DRMARTENS", img: "/uploads/clients/LOGO_DRMARTENS.png"},
                    {id: 28, name: "LOGO_KIDZSTATION", img: "/uploads/clients/LOGO_KIDZSTATION.png"},
                    {id: 29, name: "LOGO_GOLFHOUSE", img: "/uploads/clients/LOGO_GOLFHOUSE.png"},
                    {id: 30, name: "LOGO_ECCO", img: "/uploads/clients/LOGO_ECCO.png"},
                    {id: 31, name: "LOGO_ODD", img: "/uploads/clients/LOGO_ODD.png"},
                    {id: 32, name: "LOGO_FF", img: "/uploads/clients/LOGO_FF.png"}
                ],
                testimonyStyle : {
                    backgroundImage : config.baseDir + "/uploads/IMG_TESTIMONI.jpg"
                }
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
</style>