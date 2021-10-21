<template>
  <div class="news">
    <div class="container">
      <div class="inner">
        <h2 class="title">Новости</h2>

        <div class="row" v-if="info">
          <div class="col" v-for="item in info.data" :key="item.name">
            <div class="item">
              <a href="#" class="item__img">
                <img :src="item.image" class="img-responsive img-responsive--cover" :alt="item.name">
                <span class="item__tags">
                  <span class="item__tags-el" :class="{ blue: el === 'Facebook' || el === 'Profession' }" v-for="el in item.tags" :key="el">
                    {{ el }}
                  </span>
                </span>
              </a>

              <div class="item__inner">
                <a href="#" class="item__link" :title="item.name">{{ item.name }}</a>
                <p class="item__text"> {{ item.description }} </p>

                <div class="item__bottom">
                  <div class="item__likes">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="#7D8395"/>
                    </svg>
                    {{ item.likes }}
                  </div>
                  <div class="item__comments">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="#7D8395"/>
                    </svg>
                    {{ item.comments }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      info: null,
    }
  },
  mounted() {
    this.axios
        .get('/news.json')
        .then(response => (this.info = response));
  },
}
</script>



<style scoped lang="scss">
@import '@/assets/styles/variables';

.news {

  .title {
    margin-bottom: 32px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -12px;
  }

  .col {
    width: calc(100%/3);
    padding: 0 12px;
  }

  .item {
    height: 100%;

    &__img {
      position: relative;
      display: block;
      width: 100%;
      height: 248px;
      margin: 0 0 16px;
      overflow: hidden;
      background-color: #C4C4C4;
      border-radius: 10px;

      img {
        border-radius: 10px;
        transform: translate3d(0, 0, 0);
        transition: transform .8s;
      }

      &:hover {

        img {
          transform: translate3d(0, 0, 0) scale(1.2);
        }
      }
    }

    &__tags {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 16px;
      display: flex;
      align-items: flex-start;

      &-el {
        display: inline-block;
        padding: 3px 4px;
        margin: 0 8px 0 0;
        font-size: 14px;
        line-height: 1.29;
        color: $basicWhite;
        background: #EB5757;
        border-radius: 4px;

        &.blue {
          background-color: #2D9CDB;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }

    &__link {
      display: inline-block;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.44;
      text-decoration: none;
      color: $mainColor;
      transition: color .4s;
      margin: 0 0 8px;

      &:hover {
        color: $accent;
      }
    }

    &__text {
      margin: 0 0 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-height: 1.71;
      max-height: 3.42;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: $grayDark;
    }

    &__bottom {
      display: flex;
      align-items: center;
    }

    &__likes, &__comments  {
      display: flex;
      align-items: center;
      line-height: 1.29;
      color: $grayDark;

      svg {
        margin: 0 8px 0 0;
      }
    }

    &__likes {
      margin: 0 24px 0 0;
    }
  }
  
  @media only screen and (max-width: 1200px) {

    .title {
      font-size: 32px;
      margin-bottom: 24px;
    }

    .item {

      &__img {
        height: 194px;
      }

      &__link {
        font-size: 16px;
      }
    }
  }

  @media only screen and (max-width: 992px) {

    .col {
      width: 50%;
      margin-bottom: 24px;
    }
  }

  @media only screen and (max-width: 768px) {

    .title {
      font-size: 24px;
      margin-bottom: 16px;
    }

    .item {

      &__img {
        height: 160px;
      }
    }
  }

  @media only screen and (max-width: 576px) {

    .title {
      font-size: 20px;
    }

    .col {
      width: 100%;
    }
    .item {

      &__img {
        height: auto;
        margin-bottom: 8px;
      }

      &__tags {
        padding: 8px;
      }

      &__text {
        margin-bottom: 8px;
      }

      &__likes {
        margin-right: 16px;
      }
    }
  }
}

</style>