<template>
  <div>
    <!-- <nav class="navbar navbar-expand-lg px-5 navbar-light bg-dark">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link text-white" href="#">Home /&nbsp;</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Office Room /&nbsp;</a>
          </li>
          <router-link to="/Detail">
            <li class="nav-item">
              <a class="nav-link disabled text-white" href="#"
                >Detail /&nbsp;</a
              >
            </li>
          </router-link>
          <li class="nav-item">
            <a class="nav-link disabled text-white" href="#">Shipping</a>
          </li>
        </ul>
      </div>
    </nav> -->
    <!--  -->
    <div class="row justify-content-center">
      <div class="col col-md-5 my-5">
        <form
<<<<<<< HEAD
          class="justify-content-around px-5 rounded mb-5"
=======
          @submit.prevent="inputShipping"
          v-show="!success"
          class="justify-content-around px-5 py-1 rounded mb-2"
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604
          id="form-checkout"
        >
          <center>
            <h1 class="my-5">Shipping Form</h1>
          </center>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="firs-name" class="font-weight-normal"
                >First Name</label
              >
              <input
<<<<<<< HEAD
=======
                v-model="shippingData.first_name"
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604
                type="text"
                class="form-control"
                id="first-name"
                placeholder="Fist Name"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="phone-number">Phone Number</label>
              <input
<<<<<<< HEAD
=======
                v-model="shippingData.phone_number"
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604
                type="text"
                class="form-control"
                id="phone-number"
                placeholder="Phone Number"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="last-name">Last Name</label>
              <input
<<<<<<< HEAD
=======
                v-model="shippingData.last_name"
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604
                type="text"
                class="form-control"
                id="last-name"
                placeholder="Last Name"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="city">City</label>
              <input
<<<<<<< HEAD
=======
                v-model="shippingData.city"
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604
                type="text"
                class="form-control"
                id="city"
                placeholder="City"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="email">Email Address</label>
              <input
<<<<<<< HEAD
=======
                v-model="shippingData.email"
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="pos-code">Post Code</label>
              <input
<<<<<<< HEAD
                type="text"
=======
                v-model="shippingData.postal_code"
                type="number"
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604
                class="form-control"
                id="pos-code"
                placeholder="Zip Code"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <textarea
<<<<<<< HEAD
=======
              v-model="shippingData.address"
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604
              class="form-control"
              id="inputAddress"
              rows="3"
              placeholder="Inpur your address"
              required
            ></textarea>
          </div>
<<<<<<< HEAD
          <button type="submit" class="btn btn-primary mb-5" id="btn-checkout">
            Submit
          </button>
        </form>
=======
          <button type="submit" class="btn mb-5 py-2 px-3" id="btn-checkout">
            {{ buttonValue }}
          </button>
        </form>
        <!-- Success Section -->
        <SuccessForm v-show="success"></SuccessForm>
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: "formComponent",
  props: ["imageLink"],
=======
import shippingServices from "@/services/shippingServices.js";
import SuccessForm from "./successForm.vue";

export default {
  name: "formComponent",
  // props: ["imageLink"],

  data() {
    return {
      shippingData: {
        first_name: null,
        last_name: null,
        email: null,
        phone_number: null,
        city: null,
        postal_code: null,
        address: null,
      },
      success: false,
      buttonValue: "Submit",
    };
  },

  methods: {
    inputShipping() {
      let data = this.shippingData;

      if (this.buttonValue === "Submit") {
        shippingServices
          .create(data)
          .then((response) => {
            console.log(response.data);
            this.success = true;
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        shippingServices
          .updateShipping(data.id, data)
          .then((response) => {
            console.log(response.data);
            this.success = true;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
  components: {
    SuccessForm,
  },
  props: ["shippingDataProps"],
  watch: {
    shippingDataProps(newValue) {
      this.shippingData = newValue;
      console.log(this.shippingData);
      this.buttonValue = "Update";
    },
  },
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604
};
</script>

<style  scoped>
div .col {
  border-radius: 25px;
  border: 1px solid #007bff;
}
<<<<<<< HEAD
</style>>
=======

#btn-checkout {
  background: #007bff;
  color: aliceblue;
  border-radius: 10px;
  margin: 15px auto;
}
</style>
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604
