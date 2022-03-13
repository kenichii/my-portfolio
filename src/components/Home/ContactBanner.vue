<style lang="scss">
.contact-banner {
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 5rem !important;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
}
</style>
<template>
  <div class="contact-banner">
    <div class="container">
      <div class="contactBanner__wrapper">
        <p class="sub">Have a project in mind</p>
        <h3 class="contactBanner__heading">Let me help you</h3>
        <button class="action-btn mx-4">Contact Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactBanner',
  components: {},
};
</script>
