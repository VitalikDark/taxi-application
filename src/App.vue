<template>
 <v-app>
   <v-container>
     <h1>Taxi app</h1>
     <div id="nav">
       <router-link to="/">Home</router-link> |
       <router-link to="/login">Login</router-link> |
       <router-link to="/test">Orders</router-link>
  
     </div>
     <router-view/>
   </v-container>
 </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
