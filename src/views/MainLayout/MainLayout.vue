<style lang="scss">
.main-content {
  margin-top: 15px;
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
      <div class="grid gap-4 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3">
        <div ></div>
        <div class="center-column">
          <router-view></router-view>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/MainLayout/Navbar';
export default {
  name: 'MainLayout',
  components: {
    Navbar,
  },
};
</script>
