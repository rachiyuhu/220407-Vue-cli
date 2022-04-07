<template>
  <div id="app">
    
    <v-app>
      <div v-if='login'>
          <v-btn outlined @click="$router.push('/board')">글목록</v-btn>
          <v-btn outlined @click="$router.push(`/user/${user}`)">{{user}}님의 정보</v-btn>
          <v-btn @click="loginOut">로그아웃</v-btn>
        </div>
        <v-btn v-else @click="$router.push('/login')">로그인</v-btn>
    </v-app>
    <v-main> 
      <router-view @login-user="showLogin" />
    </v-main>
  </div>

</template>



      

<script>
export default {
  name:'App',
  data : ()=>({
    user : '',
    login : false
  }),
  methods : {
      showLogin : function(user) {
      this.user = user;
      this.login = true;},


    loginOut : function() {
      this.user= '';
      this.login = false;
      this.$router.push('/');
    }
  }
}
</script>
