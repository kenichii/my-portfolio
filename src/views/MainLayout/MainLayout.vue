<style lang="scss">
.main-content {
  margin-top: 15px;
  .bcontent {
    grid-template-columns: 25% 50% !important;
  }
}

.center-column {
  margin-right: 5%;
  margin-left: 5%;
}

@media (max-width: 1024px) {
  .grid {
    width: 65%;
    margin: auto;
  }
}

@media (max-width: 425px) {
  .grid {
    width: 80%;
    margin: auto;
  }
}
</style>
<template>
  <div class="main-layout">
    <Navbar />
    <div class="main-content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/MainLayout/Navbar';
import Footer from '@/components/MainLayout/Footer';

export default {
  name: 'MainLayout',
  components: {
    Navbar,
    Footer,
  },
};
</script>
