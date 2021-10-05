<template>
	<section class="py-6 sm:py-12 bg-coolGray-100 text-coolGray-800">
		<div class="container p-6 mx-auto space-y-8">
			<div class="space-y-2 text-center">
				<h2 class="text-3xl font-bold">Read More About My Work</h2>
				
			</div>
			<div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
				<article class="flex flex-col bg-coolGray-50">
					<NuxtLink to="/burythehatchet" aria-label="Te nulla oportere reprimique his dolorum">
						<img alt="Harrison Kugler Project #4" class="border-4 rounded-md border-black object-cover w-full h-52 bg-coolGray-500" src="https://i.ibb.co/R69hV92/th-31340404165-1560x1040.jpg">
					</NuxtLink>
					<div class="flex flex-col flex-1 p-6">
						<NuxtLink to="/burythehatchet"></NuxtLink>
						<NuxtLink to="/burythehatchet" class="text-xs tracking-wider uppercase hover:underline text-violet-600">Case Study</NuxtLink>
						<h3 class="flex-1 py-2 text-lg font-semibold leading-snug">Bury The Hatchet</h3>
						<div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
							<span>June 1, 2021</span>
							<span>Marketing</span>
						</div>
					</div>
				</article>
				<article class="flex flex-col bg-coolGray-50">
					<NuxtLink to="/keystone" aria-label="Te nulla oportere reprimique his dolorum">
						<img alt="Harrison Kugler Project #4" class="border-4 rounded-md border-black object-cover w-full h-52 bg-coolGray-500" src="https://i.ibb.co/RP6LzkD/168412935-2881821135426806-7230005200482607245-n.jpg">
					</NuxtLink>
					<div class="flex flex-col flex-1 p-6">
						<NuxtLink to="/keystone" aria-label="Te nulla oportere reprimique his dolorum"></NuxtLink>
						<NuxtLink to="/keystone" class="text-xs tracking-wider uppercase hover:underline text-violet-600">Case Study</NuxtLink>
						<h3 class="flex-1 py-2 text-lg font-semibold leading-snug">Keystone Roofing</h3>
						<div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
							<span>August 2, 2021</span>
							<span>Lead Generation</span>
						</div>
					</div>
				</article>
				<article class="flex flex-col bg-coolGray-50">
					<NuxtLink to="#" aria-label="Harrison Kugler">
						<img alt="Harrison Kugler Project #4" class="border-4 rounded-md border-black object-cover w-full h-52 bg-coolGray-500" src="https://i.ibb.co/L5KCx1G/o.jpg">
					</NuxtLink>
					<div class="flex flex-col flex-1 p-6">
						<NuxtLink to="#" aria-label="Te nulla oportere reprimique his dolorum"></NuxtLink>
						<NuxtLink to="#" class="text-xs tracking-wider uppercase hover:underline text-violet-600">Case Study</NuxtLink>
						<h3 class="flex-1 py-2 text-lg font-semibold leading-snug">COMING SOON</h3>
						<div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
							<span>Ongoing Project</span>
							<span>Paid Media</span>
						</div>
					</div>
				</article>
				<article class="flex flex-col bg-coolGray-50">
					<NuxtLink to="#" aria-label="Te nulla oportere reprimique his dolorum">
						<img alt="Harrison Kugler Project #4" class="border-4 rounded-md border-black object-cover w-full h-52 bg-coolGray-500" src="https://source.unsplash.com/user/harrisonkugler/204x204">
					</NuxtLink>
					<div class="flex flex-col flex-1 p-6">
						<NuxtLink to="#" aria-label="Te nulla oportere reprimique his dolorum"></NuxtLink>
						<NuxtLink to="#" class="text-xs tracking-wider uppercase hover:underline text-violet-600">Projects</NuxtLink>
						<h3 class="flex-1 py-2 text-lg font-semibold leading-snug">COMING SOON</h3>
						<div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
							<span>Ongoing</span>
							<span>2.4K views</span>
						</div>
					</div>
				</article><!---->
			</div>
		</div>
	</section>
</template>