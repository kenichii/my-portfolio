<style lang="scss">
.navbar {
  display: flex;
  align-items: center;
}

#nav,
.navbar {
  height: 55px;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: fixed;
  width: 100%;
  background: #e5cab299;
  z-index: 1;
  backdrop-filter: blur(10px);
}

.router-link-active {
  color: #1a202c !important;
}

.my-name {
  display: flex;
  color: #1a202c;
  font-weight: 600;

  img {
    width: 30px;
    height: 30px;
    margin-right: 6px;
    margin-bottom: 6px;
  }
}

.center-nav {
  width: 700px;
  display: flex;
}

.header-action {
  display: flex;
  align-items: center;
}

a {
  font-weight: 500 !important;
  &:hover {
    border-bottom: 1px solid #0000003d;
  }
}

.font-bold {
  font-weight: 600 !important;
}

.header-action.is-active {
  background: #f0e7db;
  a {
    font-weight: 700 !important;
  }
}
</style>
<template>
  <div class="navbar">
    <div id="nav">
      <div class="grid sm:grid-cols-1 md:grid-cols-3">
        <div></div>
        <div class="center-nav">
          <div class="header-action my-name mr-2">
            <img src="@/assets/coffee-cup.png" />
            <router-link to="/" class="font-bold cursor-pointer">Kenneth G. Reyes</router-link>
          </div>
          <div :class="`header-action px-2 ${getCurrentPage('project-handled')}`">
            <router-link to="/project-handled" href="#">Projects</router-link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    getCurrentPage(page) {
      return page === this.$route.name ? 'is-active' : '';
    },
  },
};
</script>
