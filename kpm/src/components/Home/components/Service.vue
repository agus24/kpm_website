<template>
  <div id="service">
    <section
      class="half-section"
      v-for="service in services"
      :key="service.id"
    >
      <div class="container-fluid">
        <div
          v-if="service.type == 'left'"
          class="row"
        >
          <service-content 
            :subtitle="service.subtitle"
            :title="service.title"
            :content="service.content"
          />
          <service-image
            :image="service.image"
            alt=""
          />
        </div>
        <div
          v-else
          class="row"
        >
          <service-image
            :image="service.image"
            alt=""
          />
          <service-content 
            :subtitle="service.subtitle"
            :title="service.title"
            :content="service.content"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ServiceContent from "./Service/Content"
import ServiceImage from "./Service/Image"

export default {
    name : "Service",
    components : {
        ServiceContent, ServiceImage
    },
    data : function() {
        return {
            services : [
                {
                    id : 1,
                    type : "left",
                    subtitle : "Service We Offer",
                    title : "Training & Development",
                    content : "KPM will thoroughly discuss your business, its vision & mission, challenges and issues, and will work with you to develop training program to focus on your business needs, concentrating on the objectives specific to your organization.",
                    image : "uploads/IMG_TRAINING.jpg"
                },
                {
                    id : 2,
                    type : "right",
                    subtitle : "Service We Offer",
                    title : "Digital Learning",
                    content : "Digital learning or e-Learning is a solution to deliver learning program in a more effective and efficient way. e-learning reaches a wider target audience by engaging learners who have difficulty attending conventional classroom training.",
                    image : "uploads/IMG_DIGLEARN.jpg"
                },
                {
                    id : 3,
                    type : "left",
                    subtitle : "Service We Offer",
                    title : "Mystery Shopping",
                    content : "Mystery Shopping Program is a tool used to measure the experience of a customer from an unbiased point of view, yet offering an authentic reflection of a real customer interaction.",
                    image : "uploads/IMG_MS.jpg"
                },
                {
                    id : 4,
                    type : "right",
                    subtitle : "Service We Offer",
                    title : "Learning Management System",
                    content : "Learning management system is a technological platform to provide a solution for faster, efficient and engaging learning & communication process.",
                    image : "uploads/IMG_LMS.jpg"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>