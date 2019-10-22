<template>
  <section
    id="contact"
    class="padding_top"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div
            class="heading-title heading_space wow fadeInUp"
            data-wow-delay="300ms"
          >
            <span>Lets Get In Touch</span>
            <h2 class="darkcolor">
              Contact KPM
            </h2>
          </div>
        </div>
        <div
          class="col-md-6 col-sm-12 margin_bottom wow fadeInUp"
          data-wow-delay="350ms"
        >
          <p>West is not just about graphic design; it's more than that. We offer integral communication services, and we're responsible for our process and results. We thank each client and their projects.</p>
          <div class="row">
            <div class="col-md-6 col-sm-6 our-address top40">
              <h5 class="bottom25">
                Our Address
              </h5>
              <p
                class="bottom15"
                v-html="company.address"
              />
              <a
                class="pickus"
                :href="company.direction"
                target="_blank"
                data-text="Get Directions"
              >Get Directions</a>
            </div>
            <div class="col-md-6 col-sm-6 our-address top40">
              <h5 class="bottom25">
                Our Phone
              </h5>
              <p class="bottom15">
                {{ company.phone }}
              </p>
            </div>
            <div class="col-md-12 col-sm-12 our-address top40">
              <h5 class="bottom25">
                Our Support
              </h5>
              <p class="bottom15">
                <table width="100%">
                  <tr>
                    <td>Main Support</td>
                    <td>:</td>
                    <td>{{ company.email.main }}</td>
                  </tr>
                  <tr>
                    <td>Inquiry</td>
                    <td>:</td>
                    <td>{{ company.email.inquiry }}</td>
                  </tr>
                </table>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 margin_bottom">
          <form
            class="getin_form wow fadeInUp"
            data-wow-delay="400ms"
            onsubmit="return false;"
          >
            <div class="row">
              <div
                class="col-sm-12"
                id="result"
              />
              <div class="col-md-6 col-sm-6">
                <div
                  class="form-group bottom35"
                  :class="{ 'form-group--error': $v.message.name.$error }"
                >
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Name :"
                    required
                    id="first_name"
                    v-model.trim="$v.message.name.$model"
                  >
                  <div
                    class="error"
                    v-if="$v.message.name.$error && !$v.message.name.required"
                  >
                    Name is required
                  </div>
                  <div
                    class="error"
                    v-if="!$v.message.name.minLength"
                  >
                    Name must have at least {{ $v.message.name.$params.minLength.min }} letters.
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-6">
                <div
                  class="form-group bottom35"
                  :class="{ 'form-group--error': $v.message.company.$error }"
                >
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Company :"
                    required
                    id="last_name"
                    v-model.trim="$v.message.company.$model"
                  >
                  <div
                    class="error"
                    v-if="$v.message.company.$error && !$v.message.company.required"
                  >
                    Company is required
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-6">
                <div
                  class="form-group bottom35"
                  :class="{ 'form-group--error': $v.message.email.$error }"
                >
                  <input
                    class="form-control"
                    type="email"
                    placeholder="Email :"
                    required
                    id="email"
                    v-model="$v.message.email.$model"
                  >
                  <div
                    class="error"
                    v-if="$v.message.email.$error && !$v.message.email.required"
                  >
                    Email is required
                  </div>
                  <div
                    class="error"
                    v-if="$v.message.email.$error && !$v.message.email.email"
                  >
                    Email format is invalid.
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-6">
                <div
                  class="form-group bottom35"
                  :class="{ 'form-group--error': $v.message.phone.$error }"
                >
                  <input
                    class="form-control"
                    type="tel"
                    placeholder="Phone :"
                    required
                    id="phone"
                    v-model="$v.message.phone.$model"
                  >
                  <div
                    class="error"
                    v-if="$v.message.phone.$error && !$v.message.phone.required"
                  >
                    Phone is required
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-sm-12">
                <div
                  class="form-group bottom35"
                  :class="{ 'form-group--error': $v.message.message.$error }"
                >
                  <textarea
                    class="form-control"
                    placeholder="Message"
                    id="message"
                    v-model="$v.message.message.$model"
                  />
                  <div
                    class="error"
                    v-if="$v.message.message.$error && !$v.message.message.required"
                  >
                    Message is required
                  </div>
                  <div
                    class="error"
                    v-if="!$v.message.message.minLength"
                  >
                    Message must have at least {{ $v.message.message.$params.minLength.min }} letters.
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <button
                  type="button"
                  class="button btnprimary"
                  @click="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
        
    <!--Location Map here-->
    <!-- <div id="map-container"></div>    -->
  </section>
</template>

<script>
    import { required, minLength, email } from 'vuelidate/lib/validators'

    export default {
        name : "Contact",
        data : function() {
            return {
                company : {
                    address : `Ruko The Springs SPRS49, 3rd Floor <br>Jl. Gading Golf Boulevard <br>Summarecon Serpong <br>Tangerang Selatan, Banten 15332 <br>Indonesia`,
                    phone : "08000000000",
                    email : {
                        main : "support@kpmportal.com",
                        inquiry : "inquiry@kpmportal.com"
                    },
                    direction : "https://goo.gl/maps/4nPwCvzYoraPhXmv9"
                }
            }
        },
        validations : {
            message: {
                name : {
                    required,
                    minLength : minLength(3)
                },
                email : {
                    required, email
                },
                company : {
                    required
                },
                phone : {
                    required
                },
                message : {
                    required,
                    minLength : minLength(10)
                }
            }
        },
        computed : {
            message: function() {
                return this.$store.state.message
            }
        },
        methods: {
            submit() {
                if(this.$v.$invalid) {
                    alert('Please check the contact field')
                } else {
                    alert('Your form has been submited')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .form-group--error .form-control{
        border-bottom: 1px solid red !important;
    }

    .form-group--error .form-control::placeholder{
        color: red !important;
    }

    .form-group .error {
        font-size: 10px;
        color: red;
    }
</style>