<style scoped lang="scss">
.container {
  max-width: 950px;
  width: 100%;
  overflow: hidden;
  padding: 80px 0;
}
.container .main-card {
  display: flex;
  //justify-content: space-evenly;
  width: 200% !important;
  //width: 170%;
  transition: 1s;
}
#two:checked ~ .main-card {
  margin-left: -100%;
}
.container .main-card .cards {
  width: calc(100% / 2 - 10px);
  display: flex;
  flex-wrap: wrap;
  margin: 0 20px;
  justify-content: space-between;
}
.main-card .cards .card {
  //width: calc(100% / 3 - 10px);
  align-self: center;
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.4s ease;
}
.main-card .cards .card:hover {
  transform: translateY(-15px);
}
.cards .card .content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.cards .card .content .img {
  height: 130px;
  width: 130px;
  // border-radius: 50%;
  // padding: 3px;
  // background: #FF676D;
  // margin-bottom: 14px;
}
.card .content .img img {
  height: 100%;
  width: 100%;
  // border: 3px solid #ffff;
  // border-radius: 50%;
  object-fit: cover;
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

.cards .card {
  width: 100%;
  .content .img {
    width: 100%;
    height: 100%;
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
</style>
<template>
  <div class="container">
    <input type="radio" name="dot" id="one" />
    <input type="radio" name="dot" id="two" />
    <div class="main-card">
      <div class="cards">
        <div class="card">
          <div class="content">
            <div class="img">
              <img src="@/assets/kasina/i1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="card">
          <div class="content">
            <div class="img">
              <img src="@/assets/kasina/i2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button">
      <label for="one" class="active one"></label>
      <label for="two" class="two"></label>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
