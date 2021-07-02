<template>
<section>
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base font-semibold md:ml-auto">
      <NuxtLink class="mr-5 hover:text-gray-900" to="/">Home</NuxtLink>
      <NuxtLink class="mr-5 hover:text-gray-900" to="about">About</NuxtLink>
      <NuxtLink class="mr-5 hover:text-gray-900" to="projects">Projects</NuxtLink>
      <NuxtLink class="hover:text-gray-900" to="contact">Contact</NuxtLink>
    </nav>
    <a href="/" class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      
      <span class="transition transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 ml-3 font-bold text-3xl dark:text-white">Harrison Kugler</span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    <div class="m-2">
   <div class="container">
    <ul>
      <li 
      v-for="color of colors" 
      :key="color" 
      
      >
        <component :is="`icon-${color}`" 
        @click="$colorMode.preference = color"
        :class="getClasses(color)"
        />
      </li>
    </ul>
  </div>
    </div>
     <a href="https:calendly.com/harrisonkug-1/quick-chat" target="_blank"> <button class= "transition transform duration-500 ease-in-out inline-flex items-center bg-gray-100 dark:bg-gray-300 border-0 px-3 py-1 focus:outline-none hover:bg-indigo-600 hover:-translate-y-1 hover:scale-110 hover:text-white rounded font-bold text-base mt-4 md:mt-4">Schedule A Call
        <svg xmlns="http:www.w3.org/2000/svg" class="animate-pulse
          mx-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>
    </a>    

    </div>
  </div>
</header>
</section>
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
        colors: ['light', 'dark', 'sepia']
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
<style scoped>
ul {

  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  width: 50px;
  height: 50px;
  display: inline-flex;
  padding: 0px;
}
p {
  margin: 0;
  padding-top: 0px;
  padding-bottom: px;
}

.feather {
  padding-top: 1px;
  padding-bottom: 1px;
  
    width: 40px;

  height: 40px;
    position: relative;
    top: 0px;
    cursor: pointer;
    padding: 7px;
    background-color: var(--bg-secondary);
    border: 2px solid var(--border-color);
    margin: 2px;
    border-radius: 5px;
    transition: all 0.1s ease;
  }
  .feather:hover {
    top: -3px;
  }
  .feather.preferred {
    border-color: var(--color-primary);
    top: -3px;
  }
  .feather.selected {
    color: var(--color-primary);
  }
</style>