<template>
  <div id="app" class="d-flex align-items-center justify-content-center flex-column">
    <toggle-button 
      v-model="toggles.two"
      color="#82C7EB" />

    <toggle-button 
        v-model="toggles.three"
      color="#82C7EB" />

    <toggle-button 
       v-model="toggles.four"
      color="#82C7EB" />    
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        toggles: {
          two: false,
          three: false,
          four: false
        }
      }
    },
    watch: {
      'toggles.two': function() {
          
       fetch(`https://api.thinger.io/v2/users/mejison/devices/enc28j60/two`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTEyMTEwOTcsImlhdCI6MTU1MTIwMzg5NywidXNyIjoibWVqaXNvbiJ9.yVyDNkFo6t19Uo3O0XClOm3V8A3YriCmnrXR2Q97IRs"
            },
            body: JSON.stringify({"in": this.toggles['two']})
          });   
      },
      'toggles.three': function() {
         fetch(`https://api.thinger.io/v2/users/mejison/devices/enc28j60/three`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTEyMTEwOTcsImlhdCI6MTU1MTIwMzg5NywidXNyIjoibWVqaXNvbiJ9.yVyDNkFo6t19Uo3O0XClOm3V8A3YriCmnrXR2Q97IRs"
            },
            body: JSON.stringify({"in": this.toggles['three']})
          });   
      }
    }
  }
</script>

<style>
  body,
  #app {
    height: 100vh;
  }
</style>
