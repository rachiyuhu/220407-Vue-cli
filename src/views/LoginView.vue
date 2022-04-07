<template>
    <v-container>
        <v-card>
            <v-text-field label="아이디" v-model="user"></v-text-field>
            <v-text-field label="패스워드" type="password"></v-text-field>
            <v-card-actions>

                <v-btn @click="loginUser">로그인</v-btn>
                <v-btn @click="$router.push('/')"> 취소 </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name:'LoginView',
    data : ()=>({
        user :''
    }),
    methods : {
        loginUser : function() {
            this.$emit('login-user',this.user);
            this.$router.push('/');
        }
    }
}
</script>