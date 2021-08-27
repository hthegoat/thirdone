<template lang="">
   <section class="text-gray-600 body-font relative">
  <div class="container bg-gray-100 dark:bg-gray-900 px-5 py-6 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-5xl text-5xl font-bold title-font mb-4 text-gray-900 dark:text-gray-300">Are you ready to chat? 😃 </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
    <form action="https://formspree.io/f/xnqlzkej" method="POST">
      <div class="flex flex-wrap -m-2">  
        <div class="p-2 w-1/2">
 

          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600 dark:text-gray-300">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 dark:bg-gray-900 bg-opacity-50 rounded border-4 border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600 dark:text-gray-300">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 dark:bg-gray-900 bg-opacity-50 rounded border-4 border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600 dark:text-gray-300">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 dark:bg-gray-900 bg-opacity-50 rounded border-4 border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-gray-300 h-32 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button type="submit" class="flex mx-auto dark:bg-indigo-600 hover:text-white dark:text-black dark-hover:bg-indigo-600 text-black font-bold bg-gray-100 border-4 border-black py-2 px-8 transition transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 focus:outline-none hover:bg-indigo-600 rounded-md text-lg"><svg xmlns="http://www.w3.org/2000/svg" class="text-black h-5 w-5 mr-1 mt-1" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
</svg> Send It</button>
        </div>
        
      </div>
      </form>
    </div>
    
  </div>
</section>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>