<template>
  <section
    id="process"
    class="padding bglight"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 text-center">
          <div
            class="heading-title wow fadeInUp"
            data-wow-delay="300ms"
          >
            <span>Why Choose Us</span>
            <h2 class="darkcolor bottom20">
              Work Process
            </h2>
          </div>
        </div>
      </div>
      <div class="row our-process">
        <div
          class="col-lg-3 col-md-2"
          v-for="process in processes"
          :key="process.number"
        >
          <div
            class="process-number top60 wow fadeInUp"
            data-wow-delay="350ms"
          >
            <span :class="process.number % 2 == 0 ? 'pro-step even' : 'pro-step'">{{ process.number }}</span>
            <h4 class="font-bold darkcolor top20 bottom20">
              {{ process.title }}
            </h4>
            <p class="left-align">
              {{ process.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name : "WorkProcess",
        data : function() {
            return {
                processes : [
                    {
                        number : 1,
                        title : "Needs Analysis",
                        content : "We work closely with our clients to make sure that we delivered the best program and use the most accurate approach. We discuss client's need where we can effectively work on with our services to improve the performance."
                    },
                    {
                        number : 2,
                        title : "Program Development",
                        content : "We tailor-made each program for every client to make sure the maximum effectiveness. Because we believe that every client is unique and important."
                    },
                    {
                        number : 3,
                        title : "Program Implementation",
                        content : "From traditional in-class learning programs to modern digital e-learning modules and assessment through mystery shopping, we are fully geared up to deliver extensive programs."
                    },
                    {
                        number : 4,
                        title : "Reporting",
                        content : "To make sure the effectiveness for every program, we will always evaluate every program by gathering reaction feedback from participants and making report delivered to every client timely."
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .even {
        background : #643094;
    }
    .process-number {
        height: 280px;
        padding: 0 2rem 2.5rem 2rem;
    }

    .process-number p {
        font-size: 13px;
    }
</style>