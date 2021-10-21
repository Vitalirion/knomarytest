<template>
  <header class="header">
    <div class="inner">
      <a href="/" class="logo">
        <img src="@/assets/images/logo.svg" class="img-responsive" alt="Logo">
      </a>

      <nav class="menu">
        <ul class="menu__list">
          <li class="menu__list-item">
            <a href="#" title="Курсы" :class="{ active: isActive }">Курсы</a>
          </li>
          <li class="menu__list-item">
            <a href="#" title="Курсы">Тестирования</a>
          </li>
          <li class="menu__list-item">
            <a href="#" title="Курсы">События</a>
          </li>
          <li class="menu__list-item">
            <a href="#" title="Курсы" :class="{ disable: isLinkDisabled }">База знаний</a>
          </li>
          <li class="menu__list-item">
            <a href="#" title="Курсы" :class="{ disable: isLinkDisabled }">Пользователи</a>
          </li>
          <li class="menu__list-item">
            <a href="#" title="Курсы" :class="{ disable: isLinkDisabled }">Отчеты</a>
          </li>
        </ul>
      </nav>

      <div class="account">
        <div class="account__img">
          <img src="@/assets/images/avatar.png" class="img-responsive img-responsive--cover" alt="Avatar">
        </div>

        <div class="account__inner">
          <div class="account__title">Виталий Лавов</div>
          <div class="account__desc">Сотрудник</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isActive: true,
      isLinkDisabled: true,
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.header {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $basicWhite;
  box-shadow: 0px 1px 0px #E9EBF0;
  padding: 12px 24px;

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    max-width: 142px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 40px 0 0;
  }

  .menu {
    margin: 0 auto 0 0;

    &__list {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;

      &-item {
        margin: 0 32px 0 0;

        a {
          position: relative;
          display: inline-block;
          line-height: 1.14;
          color: $mainColor;
          text-decoration: none;
          transition: color .4s;

          &::before {
            content: '';
            position: absolute;
            bottom: -25px;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: $accent;
            opacity: 0;
            transition: opacity .4s;
          }

          &:hover, &.active {
            color: $accent;

            &::before {
              opacity: 1;
            }
          }

          &.disable {
            pointer-events: none;
            color: $grayDark;
          }
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .account {
    display: flex;
    align-items: center;

    &__img {
      width: 40px;
      height: 40px;
      margin: 0 8px 0 0;
      border-radius: 10px;
    }

    &__title {
      line-height: 1.29;
      font-weight: 500;
      color: $basicBlack;
    }

    &__desc {
      font-size: 12px;
      line-height: 1.5;
      color: $accent;
    }
  }
}

</style>