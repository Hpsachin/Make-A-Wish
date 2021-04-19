/* eslint-disable */
<template>
  <div>
    <div class="container-fluid">
      tEST
  <vue-google-autocomplete
    id="map"
    classname="form-control"
    placeholder="Start typing"
    v-on:placechanged="getAddressData"
>
</vue-google-autocomplete>
<a-button @click="check">check </a-button>
      <!-- <h1>E-Signature</h1>
      <p>Sign in the canvas below and save your signature as an image!</p>

      <canvas id="sig-canvas" width="620" height="160" >
        Get a better browser, bro.
      </canvas>
      <button class="btn btn-primary" id="sig-submitBtn">
        Submit Signature
      </button>
      <button class="btn btn-default" id="sig-clearBtn">Clear Signature</button>
      <textarea id="sig-dataUrl" class="form-control" rows="5" >
              Data URL for your signature will go here!</textarea
      >
      <br />
      <img id="sig-image" src="" alt="Your signature will go here!" />
      <button v-on:click='onChildClick1(signaturedata)'> take </button> -->
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import store from '../../../store/store'
 import VueGoogleAutocomplete from 'vue-google-autocomplete'
export default {
      props: {
       onChildClick1:Function
  },
  components: { VueGoogleAutocomplete },
  name: "Test",
  data() {
    return {
           signaturedata: '',
           location: ''
    };

  },


  created() {

  },
  mounted() {
    this.$refs.location.focus()
    // this.sign();
    console.log('check')
    // onChildClick1(this.signaturedata)


  },
  methods: {
    check(){
      console.log(this.location)
    },
    //  /**
    //         * When the location found
    //         * @param {Object} addressData Data of the found location
    //         * @param {Object} placeResultData PlaceResult object
    //         * @param {String} id Input container ID
    //         */
            getAddressData: function (addressData, placeResultData, id) {
                this.location=addressData;
            }
  },
};
</script>
<style>
/* #sig-submitBtn {
position: absolute;
    top: 50%;
    transform: translatey(-50%);
}
#sig-clearBtn{
    position: absolute;
    top: 62%;
    transform: translatey(-50%);
} */
</style>
