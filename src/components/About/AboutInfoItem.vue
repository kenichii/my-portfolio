<style lang="scss">
.about__info_item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 3rem;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }

  .is-grid-item {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    margin-top: 10rem;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
}
</style>
<template>
  <div class="about__info_item flex">
    <h1 class="title">{{ title }}</h1>
    <div class="items flex ml-5" :class="`${isGrid ? 'is-grid-item' : ''}`">
      <div class="item" v-for="(item, index) in items" :key="index">
        <p class="mx-2">{{ item }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: Array,
    title: String,
    isGrid: Boolean,
  },
};
</script>
