<template>
<div>
<HomeHero />
<HomeQuestions />
<HomeProjects />
<HomeClientList />
<HomeStack />
<HomeContact />
</div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Harrison Kugler!'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'The amazing Nuxt application that teaches me all the cool features of Nuxt',
          image: 'https://i.ibb.co/r2Rt78D/DSC0764-3.jpg',  
        }
      ]
    }
  }
</script>

<style>

</style>
