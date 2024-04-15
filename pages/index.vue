<script setup lang="ts">
useSeoMeta({
  title: "Homepage",
  description:
    "Hi! My name is VIAL Sébastien and I'm a junior full-stack developer",
})
</script>

<template>
  <HomeSection>
    <div class="lg:w-1/2 w-full">
      <h1 class="2xl:text-8xl lg:text-7xl font-thin w-64">VIAL Sébastien</h1>
      <h3 class="text-3xl font-medium">
        Junior full-stack developer, passion senior
      </h3>
      <p class="text-xl font-thin">
        Learn more about me and my journey in computer science through this
        website
      </p>
      <NuxtLink href="#story">
        <Button class="mt-8 mr-4">Read my story</Button>
      </NuxtLink>
      <NuxtLink href="mailto:sebastien@shyrogan.fr">
        <Button variant="ghost" class="mt-8">
          Mail me! (sebastien@shyrogan.fr)
        </Button>
      </NuxtLink>
    </div>
    <div id="story" class="flex flex-col lg:w-1/2 w-full justify-center">
      <HomeImageCarousel
        class="-space-y-24 space-x-32 2xl:h-[48rem] xl:h-96 justify-center items-center w-full p-12"
        :imgs="[
          {
            alt: 'Spicy client (2017)',
            src: '/spicy.png',
          },
          {
            alt: 'Adventum Minecraft server (2018)',
            src: '/adventum.png',
          },
          {
            alt: 'Mizu Client (2022)',
            src: '/mizu.png',
          },
          {
            alt: 'Mentor (2024)',
            src: '/mentor.png',
          },
        ]"
      />
    </div>
  </HomeSection>
  <HomeSection>
    <div class="lg:w-1/3 w-full font-serif space-y-2 xl:mr-44 lg:mr-12">
      <h1 class="text-5xl font-thin pb-2">
        8 years ago, I fell in love with
        <span class="text-blue-500">Java</span>.
      </h1>
      <p>
        It all began when I discovered the power to modify my favorite game,
        Minecaft, unlocking a new world of possibilities.
      </p>
      <p>
        From that moment on, I dedicated myself to enhancing my gaming
        experience, particularly on my favorite Minecraft server, 2b2t.
      </p>
      <p>
        What started as simple modifications evolved into a collaborative effort
        with like-minded individuals, forging friendships that endure to this
        day. Together, we didn't just tweak the game; we built a community — a
        tool that bound us together within the virtual realms.
      </p>
      <p>
        Our creations were more than just enhancements; they were innovations.
        We developed sophisticated tools, enabling real-time information
        sharing, integrated private chats, and much more—fulfilling our every
        desire within the game.
      </p>
    </div>
    <img src="/2b2t.png" alt="2b2t" class="animate-float w-1/2" />
  </HomeSection>
  <HomeSection>
    <div
      class="flex flex-col lg:w-1/3 font-serif space-y-2 justify-center align-middle"
    >
      <h1 class="text-5xl font-thin pb-2">Push it to the limits!</h1>
      <p>
        There came a moment when we realized our code wasn't cutting it: lag
        spikes, convoluted spaghetti code... something had to change.
      </p>
      <p>
        It was time to start afresh, leveraging years of accumulated knowledge
        to craft something truly remarkable. And so, a new project was born:
        <NuxtLink
          href="https://github.com/MizuSoftware"
          class="text-blue-400 underline underline-offset-2 font-sans"
          >Mizu</NuxtLink
        >.
      </p>
      <p>
        Through techniques like annotation processing, runtime compilation, and
        bytecode modification, we not only pushed the boundaries of Minecraft
        but also stretched the JVM to minimize our impact on the game.
      </p>
      <p>
        For example, take
        <NuxtLink
          href="https://github.com/MizuSoftware/kawa"
          class="text-blue-400 underline underline-offset-2 font-sans"
        >
          Kawa</NuxtLink
        >, a prime example of our achievements. This event bus outperforms most
        open-source alternatives like
        <NuxtLink
          href="https://github.com/google/guava/wiki/EventBusExplained"
          class="text-blue-400 underline underline-offset-2 font-sans"
        >
          Google's Guava event bus</NuxtLink
        >
        or
        <NuxtLink
          href="https://github.com/greenrobot/EventBus"
          class="text-blue-400 underline underline-offset-2 font-sans"
        >
          greenrobot's event bus
        </NuxtLink>
        thanks to Kotlin's ability to inline functions.
      </p>
      <p>
        We developed libraries and tools tailored to our needs. At this
        juncture, we could have continued, but as most of us ventured into
        university and pursued our own paths, our collective journey stopped.
      </p>
    </div>
  </HomeSection>
  <HomeSection>
    <div class="lg:w-1/3 w-full font-serif space-y-2 xl:mr-44 lg:mr-12">
      <h1 class="text-5xl font-thin pb-2">
        However, there comes a time for
        <span class="text-blue-500">new horizons</span>.
      </h1>
      <p>
        Despite my affection for Java and Kotlin, I found their scope somewhat
        limiting, prompting a desire to venture into uncharted territory.
      </p>
      <p>
        This quest led me to explore various programming languages, eventually
        crossing paths with web development—both on the backend and frontend.
      </p>
      <p>
        Along this journey, I embarked on personal and university projects such
        as
        <NuxtLink
          href="https://github.com/JournaiFDS"
          class="text-blue-400 underline underline-offset-2 font-sans"
        >
          JournAI
        </NuxtLink>
        (Rust + OpenAI + React),
        <NuxtLink
          href="https://github.com/Errbmb"
          class="text-blue-400 underline underline-offset-2 font-sans"
        >
          Errbmb</NuxtLink
        >
        (Express + Angular),
        <NuxtLink
          href="https://github.com/EcoTrackerApp"
          class="text-blue-400 underline underline-offset-2 font-sans"
        >
          EcoTracker</NuxtLink
        >
        (Android) and some more personal projects
        <NuxtLink
          href="#"
          class="text-blue-400 underline underline-offset-2 font-sans"
        >
          JournAI
        </NuxtLink>
        (AWS CDK + Nuxt) and the development of my own website (Nuxt).
      </p>
      <p>
        Moreover, I had the privilege to apply my skills professionally,
        contributing to projects like sport-related data visualization using
        Svelte and collaborating with
        <NuxtLink
          href="https://myeasyfarm.com"
          class="text-blue-400 underline underline-offset-2 font-sans"
        >
          MyEasyFarm
        </NuxtLink>
        during internships.
      </p>
    </div>
    <iframe
      class="lg:w-2/3 w-full h-[32rem] border-zinc-200 border-2 rounded-lg"
      src="https://mentor.transitions.ag"
    />
  </HomeSection>
</template>
