    <template lang="">
        <section class="text-gray-600 body-font mx-5 my-5">
 <div class="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg border-2 border-black dark:border-indigo-600 shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        <div class="hidden bg-cover lg:block lg:w-1/2" style="background-image:url('https://i.ibb.co/W6yB1rz/DSC8565.jpg')"></div>
        
        <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <h2 class="text-2xl font-semibold text-center text-gray-700 dark:text-white">Message Me</h2>

         

            
            <div class="flex items-center justify-between mt-4">
                <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                <a href="#" class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"></a>

                <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>

      
 <form accept-charset="UTF-8"
        action="https://formspree.io/f/xnqlzkej"
        method="POST"
        >
            <div class="mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Name</label>
                <input 
                name="name"
                class="border-2 border-black block w-full px-4 py-2 text-black bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" 
                type="text" 
                placeholder="Name"
                required="required"
            >
            </div>

            <div class="mt-4">
                <div class="flex justify-between">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Email Address</label>
        
                </div>

                <input 
                name="email"
                class="block w-full px-4 py-2 text-gray-700 bg-gray-100 border-2 border-black rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-300 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" 
                type="email"
                placeholder="Email"
                >
            </div>
            <div class="mt-4">
                <div class="flex justify-between">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Message</label>
                   
                </div>

                <input 
                type="text"
                name="message" 
                class="block w-full px-4 py-2 text-gray-700 bg-gray-100 border-2 border-black dark:border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" 
                placeholder="Message"
                required="required" >
            </div>
            <div class="success" v-if="isSuccess"></div>
            <div class="mt-8">
                
                <button type="submit" class="w-full px-4 py-2 font-bold text-xl tracking-wide transition transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 dark:bg-indigo-700 dark-hover:bg-indigo-800 text-black bg-gray-300 rounded-md border-2 border-black hover:bg-indigo-600 hover:text-white focus:outline-none focus:bg-gray-600">
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

    </script>
    <style lang="">
        
    </style>