import React from 'react'

const Error = () => {
  return (
    
    

<div class="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]">
  <header class="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
    <a href="#">
      <span class="sr-only">Mail Application</span>
      <img class="h-10 w-auto sm:h-12" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
    </a>
  </header>
  <main class="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
    <div class="max-w-lg">
      <p class="text-base font-semibold leading-8 text-cyan-600">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
      <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
      <div class="mt-10">
        <a href="#" class="text-sm font-semibold leading-7 text-teal-600"><span aria-hidden="true">&larr;</span> Back to home</a>
      </div>
    </div>
  </main>
  <footer class="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
    <div class="border-t border-gray-100 bg-gray-50 py-10">
      <nav class="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-gray-600 lg:px-8">
        <a href="#">Contact support</a>
        <svg viewBox="0 0 2 2" aria-hidden="true" class="h-0.5 w-0.5 fill-gray-300">
          <circle cx="1" cy="1" r="1" />
        </svg>
        <a href="#">Status</a>
      </nav>
    </div>
  </footer>
  <div class="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
    <img src="https://images.newscientist.com/wp-content/uploads/2020/02/25113425/fnb1ej_web.jpg" alt="" class="absolute inset-0 h-full w-full object-cover"/>
  </div>
</div>
    
  )
}

export default Error