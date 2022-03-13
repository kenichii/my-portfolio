<style lang="scss">
// .navbar {
//   display: flex;
//   align-items: center;
// }

// #nav,
// .navbar {
//   height: 55px;
// }

// #nav {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0;
//   position: fixed;
//   width: 100%;
//   background: #e5cab299;
//   z-index: 1;
//   backdrop-filter: blur(10px);
// }

// .router-link-active {
//   color: #1a202c !important;
// }

// .my-name {
//   display: flex;
//   color: #1a202c;
//   font-weight: 600;

//   img {
//     width: 30px;
//     height: 30px;
//     margin-right: 6px;
//     margin-bottom: 6px;
//   }
// }

// .center-nav {
//   width: 700px;
//   display: flex;
// }

// .header-action {
//   display: flex;
//   align-items: center;
// }

// a {
//   font-weight: 500 !important;
//   &:hover {
//     border-bottom: 1px solid #0000003d;
//   }
// }

// .font-bold {
//   font-weight: 600 !important;
// }

// .header-action.is-active {
//   background: #f0e7db;
//   a {
//     font-weight: 700 !important;
//   }
// }
.navbar {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular', sans-serif;
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
<template>
  <div class="navbar">
    <ul :class="`${!showNav ? 'navItems hide-item' : 'navItems'}`">
      <!-- <div
          class="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div> -->
      <li>
        <router-link to="/" @click="showNav = !showNav">Home</router-link>
      </li>
      <li>
        <router-link to="/about" href="#">About</router-link>
        <!-- <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink> -->
      </li>
      <li>
        <router-link to="/project" href="#">Projects</router-link>
        <!-- <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Projects
          </NavLink> -->
      </li>
      <li>
        <router-link to="/contact" href="#">Contact</router-link>
        <!-- <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </NavLink> -->
      </li>
    </ul>
    <!-- <div id="nav">
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
    </div> -->
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
  data() {
    return {
      showNav: false,
    };
  },
};
</script>
