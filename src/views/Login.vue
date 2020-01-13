<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link to="/register">Need an account?</router-link>
          </p>

          <!-- <ul class="error-messages">
          <li>That email is already taken</li>
          </!-->

          <form>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="email" />
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="password" />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" @click.prevent="login">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import users from '@/store/modules/users'

export default class Login extends Vue {
  email = 'shaneiadt@gmail.com';
  password = 'shaneiadt';

  login = () => {
    users.login({
      email: this.email,
      password: this.password
    })
  }
}
</script>
