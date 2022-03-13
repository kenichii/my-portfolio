<style lang="scss">
.project-handled-content {
  .header-title {
    font-size: 18px;
    font-weight: 600;
  }

  img {
    object-fit: cover;
    height: 153px;
  }

  .greater-than-icon {
    width: 15px;
    heigth: 15px;
  }

  .project-title {
    font-size: 23px;
    color: #1c2883;
  }

  .project-description {
    text-align: justify;
    text-indent: 1em;
  }

  .stack-used {
    align-items: center;

    p {
      background: #1c2883;
      color: white;
    }
  }

  /*.carousel {
    img {
      height: 500px;
      object-fit: contain;
    }
  }

  .carousel-open:checked + .carousel-item {
    position: static;
    opacity: 100;
  }
  .carousel-item {
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
  }
  #carousel-1:checked ~ .control-1,
  #carousel-2:checked ~ .control-2,
  #carousel-3:checked ~ .control-3 {
    display: block;
  }
  .carousel-indicators {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 2%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
  }
  #carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
  #carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
  #carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
    color: #2b6cb0;  !*Set to match the Tailwind colour you want the active one to be *!
  }

  .carousel {
    .img-content {
      background: #e5cab299;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }

    .prev, .next {
      &:hover {
        background: #1c2883;
      }
    }
  }*/

  /*****************  Carousel  ******************/

  .wrapper_carousel {
    background: var(--primary-grey);
    height: 500px;
    border-radius: 12px;
    box-shadow: 2px 2px 12px 2px #a4a4a4;
  }

  .carousel-data {
    max-width: 600px;
    min-height: 400px;
    margin: 0 auto;
    z-index: 100;
    /*overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;*/
  }

  .carousel-item {
    opacity: 0;
    position: absolute;
    z-index: 500;
    transition: 500ms ease-in-out;
    visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .initial-slide,
  .active-slide {
    opacity: 1;
    position: relative;
    z-index: 1000;
    visibility: visible;
  }

  .next,
  .prev {
    z-index: 900;
  }

  .next {
    -webkit-animation: animate-right 500ms;
    animation: animate-right 500ms;
  }

  .prev {
    -webkit-animation: animate-left 500ms;
    animation: animate-left 500ms;
  }

  @-webkit-keyframes animate-right {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes animate-right {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @-webkit-keyframes animate-left {
    100% {
      transform: translateX(-100%);
    }
    0% {
      transform: translateX(0);
    }
  }

  @keyframes animate-left {
    100% {
      transform: translateX(-100%);
    }
    0% {
      transform: translateX(0);
    }
  }

  .author-profile {
    //width: 108px;
    //height: 108px;
    //border-radius: 50%;
    overflow: hidden;
  }

  .author-profile img {
    // min-height: 108px;
    height: 300px;

    -o-object-fit: cover;
    object-fit: cover;
  }

  .text_caption {
    font-size: var(--text_lg);
    font-weight: var(--text_weight-medium);
  }

  .caption-author {
    font-weight: 700;
    font-size: 14px;
  }

  .carousel-indicators {
    margin: 0 auto;
  }

  .carousel-indicators button {
    width: 8px;
    height: 8px;
    background: #a4a4a4;
    border-radius: 50%;
    margin-left: 8px;
  }

  .carousel-indicators button:first-of-type {
    margin-left: 0;
  }

  .carousel-controls button {
    background: var(--yellow);
    padding: 24px;
    font-size: var(--text_md);
    width: 60px;
    max-width: 100%;
    height: 60px;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-controls button .fas {
    line-height: 1em;
    font-size: 1.25em;
    pointer-events: none;
  }

  button.current-indicator {
    background: #197abe;
  }

  @media only screen and (max-width: 768px) {
    .about-tagline {
      font-size: var(--text_display-lg);
    }
  }

  @media only screen and (max-width: 700px) {
    .carousel-data {
      padding: 0 16px;
    }

    .text_caption {
      font-size: var(--text_md);
    }
  }

  @media only screen and (max-width: 640px) {
    .about-tagline {
      font-size: var(--text_display-sm);
    }

    .wrapper_carousel {
      width: 100vw !important;
      position: relative;
      left: 50%;
      margin-left: -50vw;
    }

    .carousel-data {
      padding: 0 24px;
    }

    .text_caption {
      font-size: var(--text_default);
      line-height: 1.75em;
    }

    .carousel-controls button {
      width: 100%;
    }
  }

  @media only screen and (max-width: 400px) {
    .wrapper_carousel {
      height: 700px;
    }

    .wrapper_carousel .page_title {
      margin-top: 2rem !important;
    }

    .carousel-data {
      margin-bottom: 2rem !important;
    }

    .carousel-indicators {
      margin-bottom: 2rem;
    }

    .carousel-indicators button {
      width: 40px;
    }
  }

  .carousel-item {
    position: absolute;
    top: 3rem;
    z-index: 1;
  }

  .button_carousel-prev,
  .button_carousel-next {
    z-index: 2;
    position: relative;
    img {
      height: 30px;
    }
  }

  .button_carousel-prev {
    right: 14rem;
  }

  .button_carousel-next {
    right: -14rem;
  }
}
</style>
<template>
  <div class="project-handled-content">
    <template v-if="!selectedProject">
      <div class="header-title pb-2">Projects</div>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="(proj, index) in projects" :key="index">
          <div class="max-w-sm cursor-pointer m-5" v-for="p in proj" :key="p.projectName">
            <img class="w-full hover:shadow-2xl rounded-xl" :src="p.displayImg" @click="selectedProject = p" />
            <div class="cursor-default">{{ p.projectName }}</div>
          </div>
          <!--<div class="max-w-sm cursor-pointer m-5">
            <img class="w-full hover:shadow-2xl rounded-xl" src="@/assets/coursemaker/course maker.png" />
            <div class="cursor-default">CourseMaker</div>
          </div>-->
        </div>
        <!-- <div>
          <div class="max-w-sm cursor-pointer m-5">
            <img class="w-full hover:shadow-2xl rounded-xl" src="@/assets/tothemast/Home Admin.png" />
            <div class="cursor-default">ToTheMast</div>
          </div>
          <div class="max-w-sm cursor-pointer m-5">
            <img class="w-full hover:shadow-2xl rounded-xl" src="@/assets/injoy/injoy1.png" />
            <div class="cursor-default">Injoy</div>
          </div>
        </div>-->
      </div>
    </template>
    <template v-else>
      <div class="flex items-center">
        <span @click="selectedProject = null" class="cursor-pointer"> Project </span>
        <svg viewBox="0 0 24 24" focusable="false" class="greater-than-icon">
          <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
        </svg>
        <div class="project-title">{{ selectedProject.projectName }}</div>
      </div>
      <div class="project-description">
        {{ selectedProject.description }}
      </div>

      <div class="stack-used flex pt-5">
        <p class="p-1">STACKS USED:</p>
        <div class="pl-2">
          <span> VUE TYPESCRIPT </span>
        </div>
      </div>
      <ImageSlider />
      <!-- <div class="project-imgs mt-10">
        <span> Use mouse wheel to zoom </span>
        <section
          class="wrapper_carousel flex flex-col justify-center w-full xs:w-90"
          role="region"
          aria-label="testimonial carousel"
        >
          <div class="carousel-data relative overflow-hidden flex items-center justify-center w-full mt-8 mb-8">
            <button type="button" class="button_carousel-prev" aria-label="previous" @click="moveBack">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAvUlEQVRoge3ZwQqCUBRF0U0fmBWFg/r3oMACP8HABjYIew28Du7hcRY49mzUgQpmVdsDD6AHjslbwlpgAMbP0efOiZlHjMAzdVFAKWIADpmjljrxG/ECzpmjlnKECkeocIQKR6hwhApHqHCEiioidpRfitrMURF3xCI2mSdXUM2tBdP3p9LDfskcFeUYVY5R5RhVjlHlGFWOUeUYVVXF/PsZ2mSOiirF3FIXrTCP6XLnrNMAV6arsU3eYvbtDV2c58xqHOMTAAAAAElFTkSuQmCC"
              />
            </button>
            <div
              class="carousel-item"
              role="group"
              :aria-label="`slide ${index + 1} of ${selectedProject.imgs.length}`"
              v-for="(projectImgs, index) in selectedProject.imgs"
              :key="`${projectImgs}-${index}`"
            >
              <div class="author-profile zoom">
                <img :src="getImage(projectImgs)" />
              </div>
            </div>
            <button type="button" class="button_carousel-next ml-1" aria-label="next" @click="moveForward">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAA7UlEQVR4nO3bMUpEMRgA4Q9BOxsPZK+9jReyU/AKgoUI6lWsrbyGwlooiLjauLzgZgbShn8GAu8FQkTE39nHGa5xOHiWIVxh9bFecDJ2nOV58hlgyggXvgaYLsIe7nyP8IrTgXMtShEUAUVAEVAEFAFFQBFQBBQBRQC7ilAEioAioAgoAoqAIqAIKALeP5sfrL9yPx4416L8FOFxE5vvbGKTQaxGD7AEvx2Bo4FzLcLUv83JSz755CWf/FaTvOTnlL+XfPLJSz75rSZ5ySefvEnk4dL6q+tpHkw8m1gebk0sDwc4x41Jn81FxP/kDWS2PLaLFh00AAAAAElFTkSuQmCC"
              />
            </button>
          </div>

          <div class="carousel-indicators pt-2 flex items-center"></div>
        </section>
      </div> -->
    </template>
  </div>
</template>

<script>
import ImageSlider from '../../components/shared/image-slider.vue';

export default {
  name: 'ProjectHandled',
  components: {
    ImageSlider,
  },
  data() {
    return {
      selectedProject: null,
      projects: [
        [
          {
            projectName: 'Kasina',
            description:
              'HRIS software used automates HR activities, such as employee leaves, attendance, and etc. It also have list of upcoming events and newsfeed for the other activities.',
            displayImg: require('@/assets/kasina/kasina.jpg'),
            imgs: ['/kasina/kasina.jpg'],
          },
          {
            projectName: 'ToTheMast',
            description: '',
            displayImg: require('@/assets/tothemast/Home Admin.png'),
            imgs: ['/tothemast/Home Admin.png', '/tothemast/Edit Article.png', '/tothemast/Article_1.png'],
          },
        ],
        [
          {
            projectName: 'CourseMaker',
            description: '',
            displayImg: require('@/assets/coursemaker/course maker.png'),
            imgs: ['/coursemaker/course maker.png'],
          },
          {
            projectName: 'Injoy',
            description: '',
            displayImg: require('@/assets/injoy/injoy1.png'),
            imgs: ['/injoy/injoy1.png'],
          },
        ],
      ],
      position: 0,
      indicatorButtons: [],
    };
  },
  mounted() {
    const zoomElement = document.querySelector('.zoom');
    let zoom = 1;
    const ZOOM_SPEED = 0.1;

    document.addEventListener('wheel', function (e) {
      if (e.deltaY > 0) {
        zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
      } else {
        zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
      }
    });
    this.initialSlide();
    this.setIndicators();

    document.addEventListener(
      'click',
      function (event) {
        if (event.target.matches('.carousel-indicators button')) {
          this.targetIndicator(parseInt(event.target.getAttribute('btindex')));
        }
      },
      false
    );
  },
  methods: {
    getImage(img) {
      return require(`@/assets${img}`);
    },
    initialSlide() {
      if (!this.selectedProject) {
        return false;
      }
      let position = 0;
      const slides = document.querySelectorAll('.carousel-item');

      if (position == 0) {
        slides[position].classList.add('active-slide');
      }
    },
    setIndicators() {
      const slides = document.querySelectorAll('.carousel-item');
      const totalSlides = slides.length;
      const indicatorContainer = document.querySelector('.carousel-indicators');

      if (indicatorContainer !== null) {
        for (let i = 0; i < totalSlides; i++) {
          const button = document.createElement('button');
          button.setAttribute('type', 'button');
          button.setAttribute('btindex', i);
          indicatorContainer.appendChild(button);
          this.indicatorButtons.push(button);
        }

        this.indicatorButtons[0].classList.add('current-indicator');
      }
    },
    updateIndicators(slides) {
      let position = this.position;

      if (position == 0) {
        slides[position].classList.add('active-slide');
      }

      this.indicatorButtons.forEach(function (element, index) {
        if (index === position) {
          element.classList.add('current-indicator');
          element.setAttribute('aria-current', true);
        } else {
          element.classList.remove('current-indicator');
          element.removeAttribute('aria-current');
        }
      });
    },
    updatePosition() {
      const slides = document.querySelectorAll('.carousel-item');
      let position = this.position;
      for (let slide of slides) {
        slide.classList.remove('active-slide');
        slide.classList.remove('next');
        slide.classList.remove('prev');
      }

      slides[position].classList.add('active-slide');

      this.updateIndicators(slides);
    },
    targetIndicator(elementId) {
      let position = this.position;
      let prevPosition = position;
      position = elementId;

      this.updatePosition();

      if (position > prevPosition) {
        this.animateRight();
      } else if (position < prevPosition) {
        this.animateLeft();
      }
    },
    animateLeft() {
      let position = this.position;
      let slides = this.slides;
      let totalSlides = this.totalSlides;

      if (position === totalSlides - 1) {
        slides[0].classList.add('prev');
      } else {
        slides[position + 1].classList.add('prev');
      }
    },
    animateRight() {
      let position = this.position;
      const slides = document.querySelectorAll('.carousel-item');
      const lastSlide = document.querySelector('.carousel-item:last-of-type');

      if (position === 0) {
        lastSlide.classList.add('next');
      } else {
        slides[position - 1].classList.add('next');
      }
    },
    moveForward() {
      const slides = document.querySelectorAll('.carousel-item');
      const totalSlides = slides.length;
      if (this.position === totalSlides - 1) {
        this.position = 0;
      } else {
        this.position += 1;
      }

      this.updatePosition();
      this.animateRight();
    },
    moveBack() {
      let position = this.position;
      let totalSlides = this.totalSlides;
      if (position === 0) {
        position = totalSlides - 1;
      } else {
        position--;
      }

      this.updatePosition();
      this.animateLeft();
    },
  },
};
</script>
