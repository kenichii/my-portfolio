<style lang="scss">
.action-btn {
  font-size: 2rem;
  background: #a9a1a14a;
  border-radius: 6px;
  padding: 10px;
  margin-top: 10px;
}

.sub {
  font-size: 2rem;
}

.heading {
  font-size: 5rem;
  font-weight: 800;
}
</style>
<template>
  <div>
    <HeroSection />
    <AboutMeSection />
    <ProjectsSection />
    <ContactBanner />
  </div>
</template>

<script>
import HeroSection from '../../components/Home/HeroSection.vue';
import AboutMeSection from '../../components/Home/AboutMeSection.vue';
import ProjectsSection from '../../components/Home/ProjectsSection.vue';
import ContactBanner from '../../components/Home/ContactBanner.vue';

export default {
  name: 'HomeV2',
  components: {
    HeroSection,
    AboutMeSection,
    ProjectsSection,
    ContactBanner,
  },
};
</script>
