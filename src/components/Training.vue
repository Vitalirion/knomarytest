<template>
  <div class="training">
    <div class="container">
      <div class="inner">
        <h2 class="title">Назначенное обучение</h2>

        <el-tabs class="training__tabs" v-if="info">
          <el-tab-pane>
            <template #label>
              <span class="training__tabs-btn">
                Все
                <span class="number">
                  {{ info.data.length }}
                </span>
              </span>
            </template>

            <div class="row">
              <div class="col" v-for="item in info.data" :key="item.name">
                <div class="item">
                  <a href="#" class="item__img">
                    <img :src="item.image" class="img-responsive img-responsive--cover" :alt="item.name">
                  </a>

                  <div class="item__inner">
                    <div class="item__progress" :class="{ 'item__progress--empty': item.progress === null }">
                      <div class="item__progress-head">
                        <div v-if="item.type === 'course'" class="item__progress-name">Курс</div>
                        <div v-else-if="item.type === 'test'" class="item__progress-name">Тест</div>
                        <div v-else-if="item.type === 'event'" class="item__progress-name">Событие</div>

                        <div v-if="item.progress > 0 && item.progress < 100" class="item__progress-status">
                          {{ item.progress + '% ' + 'пройдено' }}
                        </div>
                        <div v-if="item.progress === 100" class="item__progress-status">пройден</div>
                        <div v-if="item.progress === 0" class="item__progress-status">не пройдено</div>
                      </div>

                      <div class="demo-progress item__progress-range" v-if="item.progress !== null">
                        <el-progress
                            :text-inside="true"
                            :stroke-width="4"
                            :percentage="item.progress"
                            status="success"
                        />
                      </div>
                    </div>

                    <a href="#" class="item__link" :title="item.name">{{ item.name }}</a>

                    <div class="item__date">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.02 7.37332L10.3133 6.66666L7.06 9.91999L5.64667 8.50666L4.94 9.21332L7.06 11.3333L11.02 7.37332ZM12.6667 1.99999H12V0.666656H10.6667V1.99999H5.33333V0.666656H4V1.99999H3.33333C2.59333 1.99999 2.00667 2.59999 2.00667 3.33332L2 12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33332C14 2.59999 13.4 1.99999 12.6667 1.99999ZM12.6667 12.6667H3.33333V5.33332H12.6667V12.6667Z" fill="#7D8395"/>
                      </svg>
                      <span>Доступен до: {{ item.date }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane>
            <template #label>
              <span class="training__tabs-btn">
                Курсы
                <span class="number">
                  {{ info.data.filter(item => item.type === 'course').length }}
                </span>
              </span>
            </template>

            <div class="row">
              <template v-for="item in info.data" :key="item.name">
                <div class="col" v-if="item.type === 'course'">
                  <div class="item">
                    <a href="#" class="item__img">
                      <img :src="item.image" class="img-responsive img-responsive--cover" :alt="item.name">
                    </a>

                    <div class="item__inner">
                      <div class="item__progress" :class="{ 'item__progress--empty': item.progress === null }">
                        <div class="item__progress-head">
                          <div v-if="item.type === 'course'" class="item__progress-name">Курс</div>
                          <div v-else-if="item.type === 'test'" class="item__progress-name">Тест</div>
                          <div v-else-if="item.type === 'event'" class="item__progress-name">Событие</div>

                          <div v-if="item.progress > 0 && item.progress < 100" class="item__progress-status">
                            {{ item.progress + '% ' + 'пройдено' }}
                          </div>
                          <div v-if="item.progress === 100" class="item__progress-status">пройден</div>
                          <div v-if="item.progress === 0" class="item__progress-status">не пройден</div>
                        </div>

                        <div class="demo-progress item__progress-range" v-if="item.progress !== null">
                          <el-progress
                              :text-inside="true"
                              :stroke-width="4"
                              :percentage="item.progress"
                              status="success"
                          />
                        </div>
                      </div>

                      <a href="#" class="item__link" :title="item.name">{{ item.name }}</a>

                      <div class="item__date">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.02 7.37332L10.3133 6.66666L7.06 9.91999L5.64667 8.50666L4.94 9.21332L7.06 11.3333L11.02 7.37332ZM12.6667 1.99999H12V0.666656H10.6667V1.99999H5.33333V0.666656H4V1.99999H3.33333C2.59333 1.99999 2.00667 2.59999 2.00667 3.33332L2 12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33332C14 2.59999 13.4 1.99999 12.6667 1.99999ZM12.6667 12.6667H3.33333V5.33332H12.6667V12.6667Z" fill="#7D8395"/>
                        </svg>
                        <span>Доступен до: {{ item.date }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </el-tab-pane>

          <el-tab-pane>
            <template #label>
              <span class="training__tabs-btn">
                Тесты
                <span class="number">
                  {{ info.data.filter(item => item.type === 'test').length }}
                </span>
              </span>
            </template>

            <div class="row">
              <template v-for="item in info.data" :key="item.name">
                <div class="col" v-if="item.type === 'test'">
                  <div class="item">
                    <a href="#" class="item__img">
                      <img :src="item.image" class="img-responsive img-responsive--cover" :alt="item.name">
                    </a>

                    <div class="item__inner">
                      <div class="item__progress" :class="{ 'item__progress--empty': item.progress === null }">
                        <div class="item__progress-head">
                          <div v-if="item.type === 'course'" class="item__progress-name">Курс</div>
                          <div v-else-if="item.type === 'test'" class="item__progress-name">Тест</div>
                          <div v-else-if="item.type === 'event'" class="item__progress-name">Событие</div>

                          <div v-if="item.progress > 0 && item.progress < 100" class="item__progress-status">
                            {{ item.progress + '% ' + 'пройдено' }}
                          </div>
                          <div v-if="item.progress === 100" class="item__progress-status">пройден</div>
                          <div v-if="item.progress === 0" class="item__progress-status">не пройден</div>
                        </div>

                        <div class="demo-progress item__progress-range" v-if="item.progress !== null">
                          <el-progress
                              :text-inside="true"
                              :stroke-width="4"
                              :percentage="item.progress"
                              status="success"
                          />
                        </div>
                      </div>

                      <a href="#" class="item__link" :title="item.name">{{ item.name }}</a>

                      <div class="item__date">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.02 7.37332L10.3133 6.66666L7.06 9.91999L5.64667 8.50666L4.94 9.21332L7.06 11.3333L11.02 7.37332ZM12.6667 1.99999H12V0.666656H10.6667V1.99999H5.33333V0.666656H4V1.99999H3.33333C2.59333 1.99999 2.00667 2.59999 2.00667 3.33332L2 12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33332C14 2.59999 13.4 1.99999 12.6667 1.99999ZM12.6667 12.6667H3.33333V5.33332H12.6667V12.6667Z" fill="#7D8395"/>
                        </svg>
                        <span>Доступен до: {{ item.date }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </el-tab-pane>

          <el-tab-pane>
            <template #label>
              <span class="training__tabs-btn">
                События
                <span class="number">
                  {{ info.data.filter(item => item.type === 'event').length }}
                </span>
              </span>
            </template>

            <div class="row">
              <template v-for="item in info.data" :key="item.name">
                <div class="col" v-if="item.type === 'event'">
                  <div class="item">
                    <a href="#" class="item__img">
                      <img :src="item.image" class="img-responsive img-responsive--cover" :alt="item.name">
                    </a>

                    <div class="item__inner">
                      <div class="item__progress" :class="{ 'item__progress--empty': item.progress === null }">
                        <div class="item__progress-head">
                          <div v-if="item.type === 'course'" class="item__progress-name">Курс</div>
                          <div v-else-if="item.type === 'test'" class="item__progress-name">Тест</div>
                          <div v-else-if="item.type === 'event'" class="item__progress-name">Событие</div>

                          <div v-if="item.progress > 0 && item.progress < 100" class="item__progress-status">
                            {{ item.progress + '% ' + 'пройдено' }}
                          </div>
                          <div v-if="item.progress === 100" class="item__progress-status">пройден</div>
                          <div v-if="item.progress === 0" class="item__progress-status">не пройден</div>
                        </div>

                        <div class="demo-progress item__progress-range" v-if="item.progress !== null">
                          <el-progress
                              :text-inside="true"
                              :stroke-width="4"
                              :percentage="item.progress"
                              status="success"
                          />
                        </div>
                      </div>

                      <a href="#" class="item__link" :title="item.name">{{ item.name }}</a>

                      <div class="item__date">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.02 7.37332L10.3133 6.66666L7.06 9.91999L5.64667 8.50666L4.94 9.21332L7.06 11.3333L11.02 7.37332ZM12.6667 1.99999H12V0.666656H10.6667V1.99999H5.33333V0.666656H4V1.99999H3.33333C2.59333 1.99999 2.00667 2.59999 2.00667 3.33332L2 12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33332C14 2.59999 13.4 1.99999 12.6667 1.99999ZM12.6667 12.6667H3.33333V5.33332H12.6667V12.6667Z" fill="#7D8395"/>
                        </svg>
                        <span>Доступен до: {{ item.date }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Training",
  data() {
    return {
      info: null,
    }
  },
  mounted() {
    this.axios
        .get('/education.json')
        .then(response => (this.info = response));
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/variables';

.training {
  margin: 0 0 56px;

  &__tabs {

    .el-tabs__header {
      margin-bottom: 21px;

      .el-tabs__nav-wrap {
        margin-bottom: 0;

        &::after {
          content: none;
        }
      }

      .el-tabs__active-bar {
        display: none;
      }

      .el-tabs__item {
        padding: 0;
        margin: 0 12px 0 0;

        &:last-child {
          margin-right: 0;
        }

        &:hover, &.is-active {

          .training__tabs-btn {
            color: $basicWhite;
            background-color: $accent;
          }
        }
      }
    }

    &-btn {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 1.16;
      background-color: #F8F8F8;
      letter-spacing: 0.0025em;
      color: $grayDark;
      border-radius: 40px;
      transition: background-color .4s, color .4s;

      .number {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 3px;
        margin: 0 0 0 8px;
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        font-size: 12px;
        line-height: 1.25;
        color: rgba($mainColor, .8);
        background: #FDF41F;
        border-radius: 4px;
      }
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -12px;
  }

  .col {
    width: calc(100%/4);
    padding: 0 12px;
    margin: 0 0 24px;
  }

  .item {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: $basicWhite;

    &__img {
      width: 100%;
      height: 200px;
      display: block;
      overflow: hidden;
      border-radius: 9px 9px 0 0;

      img {
        border-radius: 9px 9px 0 0;
        transform: translate3d(0, 0, 0);
        transition: transform .8s;
      }

      &:hover {

        img {
          transform: translate3d(0, 0, 0) scale(1.2);
        }
      }
    }

    &__inner {
      height: calc(100% - 200px);
      padding: 16px;
      display: flex;
      flex-direction: column;
      border: 1px solid #DBDEE5;
      border-top: none;
      border-radius: 0 0 9px 9px;
    }

    &__progress {
      margin: 0 0 16px;

      &-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 8px;
      }

      &-name, &-status {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.29;
        color: $grayDark;
      }

      &-range {

        .el-progress-bar__outer {
          background: #DBDEE5;
          border-radius: 10px;
        }

        .el-progress.is-success .el-progress-bar__inner {
          background: #6FCF97;
          border-radius: 10px;
        }

        .el-progress-bar__innerText {
          display: none;
        }
      }

      &--empty {
        margin-bottom: 8px;

        .item__progress-head {
          margin-bottom: 0;
        }
      }
    }

    &__link {
      margin: 0 0 16px;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.44;
      color: $mainColor;
      text-decoration: none;
      transition: color .4s;

      &:hover {
        color: $accent;
      }
    }

    &__date {
      display: flex;
      align-items: center;
      margin: auto 0 0;

      svg {
        width: 16px;
        height: 16px;
        margin: 0 8px 0 0;
      }

      span {
        font-size: 14px;
        line-height: 1.29;
        font-weight: 400;
        color: $grayDark;
      }
    }
  }

  @media only screen and (max-width: 1200px) {

    .title {
      font-size: 32px;
    }

    .col {
      width: calc(100%/3);
    }

    .item {

      &__img {
        height: 180px;
      }

      &__inner {
        height: calc(100% - 180px);
      }

      &__link {
        font-size: 16px;
      }
    }
  }

  @media only screen and (max-width: 992px) {

    .col {
      width: 50%;
    }
  }

  @media only screen and (max-width: 768px) {

    .title {
      font-size: 24px;
    }

    .item {

      &__img {
        height: 148px;
      }

      &__inner {
        height: calc(100% - 148px);
      }
    }
  }

  @media only screen and (max-width: 576px) {
    margin-bottom: 32px;

    .title {
      font-size: 20px;
    }

    &__tabs {

      .el-tabs__header {
        margin-bottom: 8px;

        .el-tabs__nav-scroll {
          overflow: visible;
        }

        .el-tabs__nav {
          display: flex;
          flex-wrap: wrap;
        }

        .el-tabs__item {
          margin-bottom: 12px;
        }
      }

      &-btn {
        font-size: 16px;
      }
    }

    .row {
      margin-left: -8px;
      margin-right: -8px;
    }

    .col {
      width: 100%;
      padding-right: 8px;
      padding-left: 8px;
      margin-bottom: 16px;
    }

    .item {

      &__img {
        height: auto;
        max-height: 260px;
      }

      &__inner {
        height: auto;
      }

      &__link, &__progress {
        margin-bottom: 8px;
      }
    }
  }
}

</style>