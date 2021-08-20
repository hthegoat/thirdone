<<template>
    <article>
    <h1>{{ article.title }}</h1>
    <div class="container mx-auto flex px-5 py-6 md:flex-row justify-center items-center">
        <nuxt-content :document="article" />
    </div>
    </article>
</template>


<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    }
  }
</script>