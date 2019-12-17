<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="User Name:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          required
          placeholder="Username"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Password"
        ></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  // import $ from 'jquery'

  export default {
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        // window.console.log(this.form.username);
        // this.$store.dispatch("LoginStore", { 
        //     user:        this.form.username,
        //     password:    this.form.password
        // });
        // $.post("https://172.18.0.147/api/authenticate",
        // {
        //     "username": this.form.username,
        //     "password": this.form.password
        // },
        // ).done(function(data) {
        //   // this.$store.dispatch("LoginStore", { data: data });
          
        //   window.console.log(data);
        // });
        this.$store.dispatch("LoginStore", { 
          user:       this.form.username,
          password:   this.form.password
        }).then(Response => {
          window.console.log(Response);
        });
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.username = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>