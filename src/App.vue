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
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJlbmMyOGo2MCIsImlhdCI6MTU1MTIxNTgxMiwianRpIjoiNWM3NWFjYzQ3N2QwNzViZTIzYmVmMjU2IiwidXNyIjoibWVqaXNvbiJ9.iU-AfqdBuiQ3cfaSi1x-McUyJ5j-oLGTfT8GtA8rDSI"
            },
            body: JSON.stringify({"in": this.toggles['two']})
          });   
      },
      'toggles.three': function() {
         fetch(`https://api.thinger.io/v2/users/mejison/devices/enc28j60/three`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJlbmMyOGo2MCIsImlhdCI6MTU1MTIxNTgxMiwianRpIjoiNWM3NWFjYzQ3N2QwNzViZTIzYmVmMjU2IiwidXNyIjoibWVqaXNvbiJ9.iU-AfqdBuiQ3cfaSi1x-McUyJ5j-oLGTfT8GtA8rDSI"
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
