<style lang="scss">
.home-content {
  .header-greetings {
    background: #e5cab2;
    border-radius: 7px;
    font-size: 15px;
    padding: 10px;
  }

  .my-name {
    font-weight: 600;
    font-size: 42px;
    font-family: 'Santana', sans-serif;
  }

  .specialization {
    font-size: 14px;
    display: flex;
  }

  .image-content {
    display: flex;
    justify-content: flex-end;
  }

  .me {
    display: flex;
    justify-content: center;
  }

  .about-me {
    div {
      display: flex;
      font-weight: 600;
      font-family: 'Santana', sans-serif;
    }
  }

  .header-title {
    // border-bottom: 1px solid #958787;
    text-decoration: underline;
  }

  .content-body {
    p {
      text-align: justify;
      text-indent: 1em;
    }

    .text-indent-0 {
      text-indent: 0 !important;
    }
  }
}

@media (max-width: 768px) {
  .home-content .my-name {
    font-size: 40px;
  }
}

@media (max-width: 425px) {
  .home-content .my-name {
    font-size: 20px;
  }
  .specialization {
    font-size: 12px;
  }

  .image-content {
    width: 6.8rem;
    img {
      width: 4rem;
      height: 4rem;
    }
  }
}
</style>
<template>
  <div class="home-content">
    <div class="header-greetings">Hello, I'm a full-stack developer based in Philippines!</div>
    <div class="mt-5 me">
      <div class="mr-5">
        <div class="my-name">Kenneth G. Reyes</div>
        <div class="specialization">Specialization ( Photographer / Developer )</div>
      </div>
      <div class="image-content">
        <img
          class="inline-block ring-1 ring-white object-cover w-24 h-24 rounded-full"
          src="@/assets/me.jpg"
          alt="Avatar"
        />
      </div>
    </div>
    <div class="content-body mt-5 about-me">
      <div class="header-title">About Me</div>
      <p class="pt-2">
        Kenneth is a freelance and a full-stack developer based in Philippines. Outside of work, he loves hanging out
        with his camera and his friends in Church. He is also loves drinking coffee while he sing and play with guitar.
        He's also used to be a coach and fitness trainer.
      </p>
    </div>

    <div class="content-body mt-5 about-me">
      <div class="header-title">Bio</div>
      <span class="flex pt-2">
        <div>1997</div>
        <p class="text-indent-0 pl-2">Born in San Fernando Pampanga, Philippines</p>
      </span>
      <span class="flex pt-2">
        <div>2019</div>
        <p class="text-indent-0 pl-2">
          Year graduated bachelors degree in Information Technology in the University of the Assumption
        </p>
      </span>
    </div>

    <div class="content-body mt-5 about-me">
      <div class="header-title">Tech Stack</div>
      <span class="flex pt-2">
        <div>Front-End</div>
        <p class="text-indent-0 pl-2">VueJs and ReactJs</p>
      </span>
      <span class="flex pt-2">
        <div>Back-End</div>
        <p class="text-indent-0 pl-2">NodeJs</p>
      </span>
      <span class="flex pt-2">
        <div>Database</div>
        <p class="text-indent-0 pl-2">Mongo</p>
      </span>
    </div>

    <div class="content-body mt-10 about-me">
      <div class="header-title">Social Media</div>
      <span class="flex pt-2">
        <img class="h-5 w-5" src="@/assets/013-facebook.svg" />
        <a href="https://www.facebook.com/KENlCHl/" class="text-indent-0 pl-2">@KENICHI</a>
      </span>
      <span class="flex pt-2">
        <img class="h-5 w-5" src="@/assets/014-instagram.svg" />
        <a href="https://www.facebook.com/KENlCHl/" class="text-indent-0 pl-2">@HEY_KENICHI</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
