<style lang="scss">
.projects-section {
  // padding: 10rem 0;
  .projects-allItems {
    display: flex;
    gap: 3rem;
    // margin-top: 5rem;

    .container {
      height: 785px;
      max-width: 950px;
      width: 100%;
      overflow: hidden;
      padding: 80px 0;
    }
    .container .main-card {
      display: flex;
      // justify-content: space-evenly;
      width: 200%;
      transition: 1s;
    }
    #two:checked ~ .main-card {
      margin-left: -100%;
    }
    .container .main-card .cards {
      width: calc(100% / 2 - 10px);
      display: flex;
      flex-wrap: wrap;
      margin: 0 20px 0 0;
      justify-content: space-between;
    }
    .main-card .cards .card {
      padding: 0;
      width: calc(100% / 3 - 10px);
      height: 400px;
      // background: #fff;
      border-radius: 12px;
      // padding: 30px;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
      transition: all 0.4s ease;
    }
    .main-card .cards .card:hover {
      transform: translateY(-15px);
    }
    .cards .card .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      overflow: hidden;
      border: 3px solid #363636;
      margin: 0;
      border-radius: 12px;
    }
    .cards .card .content .img {
      // height: 130px;
      // width: 130px;
      height: 100%;
      width: 100%;
      margin: 0;
      // border-radius: 50%;
      // padding: 3px;
      // background: #ff676d;
      // margin-bottom: 14px;
      padding: 0;
    }
    .card .content .img img {
      height: 100%;
      width: 100%;
      // border: 3px solid #ffff;
      // border-radius: 50%;
      object-fit: cover;
      border-radius: 12px;
    }
    .card .content .name {
      font-size: 20px;
      font-weight: 500;
    }
    .card .content .job {
      font-size: 20px;
      color: #ff676d;
    }
    .card .content .media-icons {
      margin-top: 10px;
      display: flex;
    }
    .media-icons a {
      text-align: center;
      line-height: 33px;
      height: 35px;
      width: 35px;
      margin: 0 4px;
      font-size: 14px;
      color: #fff;
      border-radius: 50%;
      border: 2px solid transparent;
      background: #ff676d;
      transition: all 0.3s ease;
    }
    .media-icons a:hover {
      color: #ff676d;
      background-color: #fff;
      border-color: #ff676d;
    }
    .container .button {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 20px;
    }
    .button label {
      height: 15px;
      width: 15px;
      border-radius: 20px;
      background: #fff;
      margin: 0 4px;
      cursor: pointer;
      transition: all 0.5s ease;
    }
    .button label.active {
      width: 35px;
    }
    #one:checked ~ .button .one {
      width: 35px;
    }
    #one:checked ~ .button .two {
      width: 15px;
    }
    #two:checked ~ .button .one {
      width: 15px;
    }
    #two:checked ~ .button .two {
      width: 35px;
    }
    input[type='radio'] {
      display: none;
    }
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }

  .content-description {
    margin-top: 1rem;
    background-color: #1e1e1e;
    padding: 1rem;
    border-radius: 12px;
    font-size: 2.2rem;

    .project-description {
      font-size: 1.6rem;
      font-family: 'RobotoMono Regular';
      margin-top: 1rem;
    }
  }

  .tech-stacks {
    .title {
      font-size: 1.5rem;
    }

    .stacks {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .projects-allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }

    .main-card .cards .card {
      height: 300px !important;
    }
  }

  @media (max-width: 768px) {
    .main-card .cards .card {
      margin: 20px 0 10px 0;
      width: calc(100% / 2 - 10px);
    }
  }
  @media (max-width: 600px) {
    .main-card .cards .card {
      /* margin: 20px 0 10px 0; */
      width: 100%;
    }
  }
}
</style>
<template>
  <div class="projects-section">
    <div class="container">
      <section>
        <!-- <div class="sub">My recent works</div> -->
        <div class="heading">Projects</div>
      </section>
      <div class="projects-allItems">
        <div class="container">
          <input type="radio" name="dot" id="one" />
          <input type="radio" name="dot" id="two" />
          <div class="main-card">
            <div class="cards">
              <div class="card">
                <div class="content">
                  <div class="img">
                    <img src="@/assets/kasina/kasina1.png" class="" alt="" />
                  </div>
                </div>
                <div class="content-description">
                  <a class="title flex text-left">
                    <h3 class="project-title">KASINA</h3>
                  </a>
                  <p class="project-description text-left">
                    ERP (HR feature & Chat feature) – HR related functions which includes onboarding and it has chat
                    features and newsfeed for everyone.
                  </p>
                  <p class="tech-stacks pt-5 grid">
                    <span class="title"> Tech Stacks Used: </span>
                    <span class="stacks">VueTS, Vuex, BulmaCSS</span>
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="content">
                  <div class="img">
                    <img src="@/assets/sleek/onboarding.jpg" class="" alt="" />
                  </div>
                </div>
                <div class="content-description">
                  <a class="title flex text-left">
                    <h3 class="project-title">SLEEK APP</h3>
                  </a>
                  <p class="project-description text-left">
                    All-in-one software for business formation such as governance, accounting, and tax compliance
                    online.
                  </p>
                  <p class="tech-stacks pt-5 grid">
                    <span class="title"> Tech Stacks Used: </span>
                    <span class="stacks"
                      >VueJS, ReactJs, NodeJS (ExpressJS), Twilio Whatsapp Chatbot, Vuex, Vuetify, MaterialUI, Camunda
                      RESTapi, PugJS, MochaiJS, ChaiJS, GA/Hubspot Integration, AWS, MongoDB</span
                    >
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="content">
                  <div class="img">
                    <img src="@/assets/injoy/injoy1.png" class="" alt="" />
                  </div>
                </div>
                <div class="content-description">
                  <a class="title flex text-left">
                    <h3 class="project-title">Doxo/Injoypreneur App</h3>
                  </a>
                  <p class="project-description text-left">
                    Software to support customer with their loyalty and to track data analytics in admin app.
                  </p>
                  <p class="tech-stacks pt-5 grid">
                    <span class="title"> Tech Stacks Used: </span>
                    <span class="stacks">
                      ReactJs, ChartJs, ExpressJs, MongoDB, AWS, Twilio Cloud, Ant Design and Bootstrap</span
                    >
                  </p>
                </div>
              </div>
            </div>

            <!-- <div class="cards">
              <div class="card">
                <div class="content">
                  <div class="img">
                    -<img src="images/img4.jpg" alt="">-
                  </div>
                  <div class="details">
                    <div class="name">Appolo Reef</div>
                    <div class="job">Web Designer</div>
                  </div>
                  <div class="media-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
          <!-- <div class="button">
            <label for="one" class="active one"></label>
            <label for="two" class="two"></label>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsSection',
};
</script>
