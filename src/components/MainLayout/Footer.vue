<style lang="scss">
.footer {
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }

  .desc {
    font-size: 1.5rem;
  }

  .col-title {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  .col2__links {
    a,
    p {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
<template>
  <div class="footer">
    <div class="container">
      <div class="footer__col1">
        <h1 class="footer__col1__title">Kenneth Reyes</h1>
        <p class="desc">A freelance and full-time fullstack software engineer from Philippines.</p>
      </div>
      <div class="footer__col2">
        <div class="text-left">
          <h1 class="col-title">Important Links</h1>
          <div class="col2__links grid">
            <router-link to="/home">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/contact">Contact</router-link>
          </div>
        </div>
      </div>
      <div class="footer__col3">
        <div class="text-left">
          <h1 class="col-title">Contact Info</h1>
          <div class="col2__links grid">
            <p>+63-965-3415-455</p>
            <p>reyeskenichi@gmail.com</p>
            <p>San Fernando Pampanga, Philippines</p>
          </div>
        </div>
      </div>
      <div class="footer__col4">
        <div class="text-left">
          <h1 class="col-title">Social Links</h1>
          <div class="col2__links grid">
            <a href="https://www.facebook.com/KENlCHl/" class="text-indent-0 pl-2 flex items-center">
              <img class="h-10 w-5 mr-2" src="@/assets/013-facebook.svg" />
              @KENICHI
            </a>
            <a href="https://www.facebook.com/KENlCHl/" class="text-indent-0 pl-2 flex mt-5 items-center">
              <img class="h-6 w-6 mr-2" src="@/assets/014-instagram.svg" />
              @HEY_KENICHI
            </a>
            <a
              href="https://www.linkedin.com/in/kenneth-reyes-270939174/"
              class="text-indent-0 pl-2 flex mt-5 items-center"
            >
              <img class="h-7 w-7 mr-1" src="@/assets/linkedin.svg" />
              @LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <p>© 2021 - Kenneth Reyes</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
