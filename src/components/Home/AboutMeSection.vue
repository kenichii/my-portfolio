<style lang="scss">
.about-section {
  //margin-top: 10rem;
  padding: 15rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }

  .aboutSection__right {
    .img-content {
      margin: 10px;
      img {
        height: 75%;
        transition: all 0.4s ease;
        opacity: 60%;

        &:hover {
          opacity: 90%;
          transform: translateY(-15px);
        }
      }
    }
  }

  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  .about-me-description {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>
<template>
  <div class="about-section">
    <div class="container">
      <div class="aboutSection__left">
        <section>
          <div class="sub">Let me introduce myself</div>
          <div class="heading">About Me</div>
        </section>
        <h1 class="about-me-description">
          I am a fullstack software engineer with thorough hands-on experience in all levels of testing, including
          functional, system integration, and user acceptance. I create various websites. I love to help clients
          todeliver they want in software development. I am a full-time developer based in Philippines.
        </h1>
        <br />
        <h1 class="about-me-description">
          My objective is to enhance my talents and skills and perform my duties to the best of my ability, and become
          asset to the company.
        </h1>
        <!-- <div class="aboutSection__buttons">
          <button class="action-btn mx-4">Works</button>
          <button class="action-btn mx-4">Read More</button>
        </div> -->
      </div>
      <div class="aboutSection__right flex">
        <div class="img-content flex items-center">
          <img src="@/assets/other/me.jpg" class="rounded-full" />
        </div>
        <div class="img-content flex items-center">
          <img src="@/assets/other/me4.jpg" class="rounded-full" />
        </div>
        <div class="img-content flex items-center">
          <img src="@/assets/other/me5.jpg" class="rounded-full" />
        </div>

        <!-- <img className="aboutImg" src="{AboutImg}" alt="Img" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMeSection',
};
</script>
