<style lang="scss">
.hero {
  //height: 100vh;
  min-height: 650px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.hero__heading {
  z-index: 2;
  font-size: 2rem;
  margin-bottom: -4rem;
  position: relative;
  span {
    display: inline-block;
    width: 100%;
  }
  .sub {
    font-size: 3rem;
  }
  .hero__name {
    font-family: 'Montserrat SemiBold';
    font-size: 7rem;
    color: var(--white);
  }
}
.hero__img {
  z-index: 1;
  //max-width: 900px;
  opacity: 30%;
  max-width: 400px;
  width: 100%;
  height: 500px;
  margin: 0 auto;
  border: 2px solid var(--gray-1);

  img {
    filter: brightness(80%);
    opacity: 80%;
  }
}
.hero__info {
  margin-top: -30rem;
  p {
    font-size: 1.5rem;
    padding-right: 40rem;
    padding-left: 40rem;
  }
}
.hero__social,
.hero__scrollDown {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;

  bottom: 20px;
  width: 50px;
}
.hero__social {
  left: 50px;
}
.hero__scrollDown {
  right: 50px;
}

.hero__social__indicator,
.hero__scrollDown {
  width: 50px;
  p {
    font-size: 1.6rem;
    transform: translateY(-70px) rotate(90deg);
    letter-spacing: 0.7rem;
    text-transform: uppercase;
  }
  img {
    max-height: 45px;
    width: 16px;
    margin: 0 auto;
    object-fit: contain;
  }
}
.hero__scrollDown {
  img {
    max-height: 70px;
  }
}

.hero__social__text {
  ul {
    li {
      margin-bottom: 1rem;
      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .hero {
    min-height: 750px;
  }
  .hero__heading {
    font-size: 1.4rem;
    margin-bottom: -3rem;
    .hero__name {
      font-size: 4.5rem;
    }
  }
  .hero__img {
    height: 300px;
  }
  .hero__info {
    margin-top: 3rem;
    p {
      padding: 0;
    }
  }
  .hero__social {
    left: 0px;
    bottom: -15%;
    width: 20px;
    .hero__social__indicator {
      width: 20px;
      p {
        font-size: 1.2rem;
      }
      img {
        max-height: 22px;
      }
    }
    .hero__social__text {
      ul {
        li {
          a {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
  .hero__scrollDown {
    right: 0;
    width: 20px;
    gap: 1rem;
    p {
      font-size: 1.3rem;
    }
  }

  .projects-allItems {
    margin: 0 !important;
  }

  .projects-allItems .container {
    min-width: 690px !important;
    max-width: auto !important;
  }
}
</style>
<template>
  <div class="hero">
    <div class="container">
      <h1 class="hero__heading">
        <span class="sub">Hello, I am</span>
        <span class="hero__name">Kenneth Reyes</span>
      </h1>
      <div class="hero__img">
        <img src="@/assets/other/me.jpg" />
      </div>
      <div class="hero__info">
        <p class="text-white">
          I am working as a freelance and fullstack software engineer for 3 years. I love to build websites and know
          more about technology.
        </p>
        <!-- <button class="action-btn">SEE MY WORK</button> -->
      </div>
      <!-- <div class="hero__social">
            <div class="hero__social__indicator">
              <p>Follow</p>
               <img src={SocialMediaArrow} alt="icon" /> 
            </div>
            <div class="hero__social__text">
               <ul>
                <li>
                  <a
                    href="http://facebook.com/webcifar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="http://twitter.com/webcifar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TW
                  </a>
                </li>
                <li>
                  <a
                    href="http://isntagram.com/web_cifar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  <a
                    href="http://webcifar.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
              </ul> 
            </div>
          </div>
          <div class="hero__scrollDown">
            <p>Scroll</p>
             <img src={ScrollDownArrow} alt="ScrollDown Arrow" /> 
          </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeroSection',
};
</script>
