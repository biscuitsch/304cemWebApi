<template>
  <div>
<!-- display search parameter component -->
    <app-platform></app-platform>        
    <app-name></app-name>
    <app-creator></app-creator>    
    <app-tool></app-tool> 
    <app-language></app-language>      
  </div>
</template>

<script>
   import PlatformSearch from './PlatformGame.vue'
   import NameSearch from './NameGame.vue'
   import CreatorSearch from './CreatorGame.vue'   
   import ToolSearch from './ToolGame.vue' 
   import LanguageSearch from './LanguageGame.vue'

    export default {
      
      components:{
        'app-platform': PlatformSearch,        
        'app-name': NameSearch,
        'app-creator': CreatorSearch,
        'app-tool': ToolSearch,   
        'app-language': LanguageSearch               
      }
    }
</script>