<template>
  <div id="app" class="d-flex align-items-center justify-content-center flex-column">
    <toggle-button 
      v-model="toggles.two"
      :sync="true"
      color="#82C7EB" />

    <toggle-button 
      v-model="toggles.three"
      :sync="true"
      color="#82C7EB" />

    <toggle-button 
      v-model="toggles.four"
      :sync="true"
      color="#82C7EB" />    
  </div>
</template>

<script>
  import api from './api';

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
    mounted() {
      this.getThing();
    },
    methods: {
      getThing() {
        for(let t in this.toggles) {
          api.get(t).then(res => {
            this.toggles = {...this.toggles, [t]:  res.state};
          })          
        }
      }
    },
    watch: {
      'toggles.two': function() {
        api.set('two', this.toggles['two']);
      },
      'toggles.three': function() {
        api.set('three', this.toggles['three']);
      },
      'toggles.four': function() {
        api.set('four', this.toggles['four']);
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
