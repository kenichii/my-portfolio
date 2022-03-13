<style lang="scss">
.about {
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  .description {
    font-size: 1.5rem;
  }

  .download_pdf {
    font-size: 2.2rem;
    background-color: var(--gray-1);
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: black;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
}
</style>

<template>
  <div class="about">
    <div class="container">
      <div class="top-section">
        <div class="text-left">
          <p class="about__subheading">Hi, I am <span>Kenneth Reyes</span></p>
          <h2 class="about__heading">A freelance/full-time fullstack software engineer</h2>
          <div class="about__info">
            <p class="description">
              I am from San Fernando Pampanga, Philippines. I love playing sports and also a varsity and one of the
              player that represents our school in terms of sports and programming. I also love coaching with other
              players and traveling with my love ones.
              <br />
              <br />
              I started coding since I was in college. Coding is became a hobby for me. I find it really interesting and
              I enjoyed the process a lot.
              <!-- <br />
              <br />
              My objective is to enhance my talents and skills and perform my duties to the best of my ability, and
              become asset to the company. -->
            </p>
          </div>
          <a href="/files/Kenneth-Reyes-(CV).pdf" download class="download_pdf">Download CV</a>
        </div>
        <!-- <div className="right">
              <img src={AboutImg} alt="me" />
            </div> -->
      </div>
      <div class="about__info__items">
        <div class="about__info__item">
          <h1 class="about__info__heading">Education</h1>
          <AboutInfoItem title="School(College)" :items="schoolItems" />
        </div>
        <div class="about__info__item">
          <h1 class="about__info__heading">My Skills</h1>
          <AboutInfoItem title="FrontEnd" :items="frontEnd" />
          <AboutInfoItem title="BackEnd" :items="backEnd" />
          <AboutInfoItem title="Database" :items="database" />
          <AboutInfoItem title="Others" :items="others" :isGrid="true" />
        </div>
        <!-- <div className="about__info__item">
          <h1 className="about__info__heading">Experiences</h1>

          <AboutInfoItem title="2010-2012" items=['junior developer at web Cifar'] /> 
          <AboutInfoItem title="2012-2016"
          items=['Front end developer at web Cifar '] /> 
          <AboutInfoItem title="2016-" items=['Freelance web
          Developer'] /> 
        </div>-->
      </div>
    </div>
    <ContactBanner />
  </div>
</template>

<script>
import AboutInfoItem from '../components/About/AboutInfoItem.vue';
import ContactBanner from '../components/Home/ContactBanner.vue';
export default {
  components: {
    AboutInfoItem,
    ContactBanner,
  },
  data() {
    return {
      frontEnd: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'VueJS'],
      backEnd: ['NodeJS', 'ExpressJS'],
      database: ['MongoDB'],
      schoolItems: ['University of the Assumption'],
      others: [
        'GA/Hubspot Integration',
        'Twilio Cloud (SendGrid & Twilio Whatsapp Chatbot)',
        'Camunda RESTapi',
        'PugJS',
        'ChaiJS',
        'MochaJS',
        'BulmaCSS',
        'Vuetify',
        'MaterialUI',
        'AWS',
        'ChartJS',
        'Ant Design',
        'Bootstrap',
      ],
    };
  },
};
</script>
