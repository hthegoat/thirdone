<template lang="">
    <section class="text-gray-600 body-font mx-5 my-5">
 <div class="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        <div class="hidden bg-cover lg:block lg:w-1/2" style="background-image:url('https://i.ibb.co/W6yB1rz/DSC8565.jpg')"></div>
        
        <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <h2 class="text-2xl font-semibold text-center text-gray-700 dark:text-white">Message Me</h2>

         

            
            <div class="flex items-center justify-between mt-4">
                <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                <a href="#" class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"></a>

                <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>

       <div class="mt-4 relative inline-block w-full text-gray-700">
    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Service?</label>
  <select class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
    <option>Advertising</option>
    <option>Social Media</option>
    <option>SEO</option>
    <option>Web Design</option>
  </select>
  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  </div>
</div>
 <form action="https://getform.io/f/2a956545-1194-4d2c-bfdd-72b9b157032e" method="POST">

            <div class="mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Name</label>
                <input id="LoggingEmailAddress" class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="name">
            </div>

            <div class="mt-4">
                <div class="flex justify-between">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Email Address</label>
        
                </div>

                <input id="loggingPassword" class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email">
            </div>
            <div class="mt-4">
                <div class="flex justify-between">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Message</label>
                   
                </div>

                <input id="loggingPassword" class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="message">
            </div>
            <div class="mt-8">
                <button class="w-full px-4 py-2 tracking-wide transition transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 dark:bg-indigo-700 dark-hover:bg-indigo-800 text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Send It!
                </button>
            </div>
            </form>
            <div class="flex items-center justify-between mt-4">
                <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                <a href="mailto:harrison@harrisonkugler.com" class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">Or Send Me An Email</a>
                
                <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
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