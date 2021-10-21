<template>
  <footer class="footer">
    <div class="inner">
      <a href="/" class="logo">
        <img src="@/assets/images/logo.svg" class="img-responsive" alt="Logo">
      </a>

      <button class="support">Нужна помощь?</button>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.footer {
  padding: 24px 32px;
  margin-top: auto;
  background-color: $gray;

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
  }

  .support {
    padding: 15px 21px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.12;
    font-weight: 700;
    color: $accent;
    text-transform: uppercase;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: $grayLight;
    border-radius: 6px;
    transition: background-color .4s, color .4s;

    &:hover {
      color: $grayLight;
      background-color: $accent;
    }
  }
  
  @media only screen and (max-width: 576px) {

    .inner {
      flex-direction: column;
    }

    .logo {
      margin-bottom: 24px;
    }

    .support {
      padding: 8px 16px;
      font-size: 14px;

      &:hover {
        color: $grayLight;
        background-color: $accent;
      }
    }
  }
}

</style>