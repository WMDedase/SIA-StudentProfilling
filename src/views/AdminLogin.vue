<template>
  <div>
    <v-form>
      <v-text-field v-model="loginInfo.email" label="Email"/>
      <v-text-field v-model="loginInfo.password" label="Password"/>
    </v-form>

    <v-btn>LOGINVUE</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginInfo: {
      email: ' ',
      password: ' '
      }
    }
  },

}
</script>

<style scoped>

</style>