<template>
  <div>
    <ul>
      <li 
      v-for="color of colors" 
      :key="color" 
      
      >
        <component :is="`icon-${color}`" @click="$colorMode.preference = color"/>
      </li>
    </ul>
  </div>
</template>

<script>
 import IconSystem from '@/assets/icons/system.svg?inline'
  import IconLight from '@/assets/icons/light.svg?inline'
  import IconDark from '@/assets/icons/dark.svg?inline'
  import IconSepia from '@/assets/icons/sepia.svg?inline'


  export default {
      components: {
      IconSystem,
      IconLight,
      IconDark,
      IconSepia
    },
    data() {
      return {
        colors: ['system', 'light', 'dark', 'sepia']
      }
    },

methods: {
  getClasses (color) {
    // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
    if (this.$colorMode.unknown) {
      return {}
    }
    return {
      preferred: color === this.$colorMode.preference,
      selected: color === this.$colorMode.value
    }
  }
}
  }
</script>