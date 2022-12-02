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
          class="justify-content-around px-5 rounded mb-5"
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
                type="text"
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
              class="form-control"
              id="inputAddress"
              rows="3"
              placeholder="Inpur your address"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary mb-5" id="btn-checkout">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "formComponent",
  props: ["imageLink"],
};
</script>

<style  scoped>
div .col {
  border-radius: 25px;
  border: 1px solid #007bff;
}
</style>>
