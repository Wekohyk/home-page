<script setup lang="ts">
const list = new Array(20).fill(0);
</script>

<template>
  <div class="w-full h-full">
    <!-- The Mobius ring -->
    <!--  -->
    <div class="loadingBox w-100% h-50% flex justify-center pt-50 relative">
      <div class="content flex justify-center items-center relative">
        <div class="circle bg-transparent relative">
          <span
            v-for="(_, index) in list"
            :key="index"
            :class="`span${index}`"
          ></span>
        </div>
        <div class="circle bg-transparent relative">
          <span
            v-for="(_, index) in list"
            :key="index"
            :class="`span${index}`"
          ></span>
        </div>
      </div>
    </div>
    <!-- loading text -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1rem justify-center items-center text-center text-#fff opacity-70"
    >
      <div class="text-1.5rem">
        {{ $t('homePage') }}
      </div>
      <div>
        {{ $t('loading') }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loadingBox {
  $circleWidth: 190px;
  $dotWidth: 16px;

  .content {
    animation: changeColor 2s linear infinite;

    .circle {
      width: $circleWidth;
      height: $circleWidth;
      margin: 0 calc($dotWidth / -2);

      @mixin span($i) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: rotate(calc((360deg / $spanNum) * $i));

        &::after {
          content: '';
          width: $dotWidth;
          height: $dotWidth;
          position: absolute;
          right: 0;
          top: calc(50% - ($dotWidth / 2));
          background-color: #00ff0a;
          border-radius: 50%;
          box-shadow:
            0 0 10px #00ff0a,
            0 0 20px #00ff0a,
            0 0 40px #00ff0a,
            0 0 60px #00ff0a,
            0 0 80px #00ff0a,
            0 0 100px #00ff0a;
          transform: scale(0.1);
          animation: animate 4s linear infinite;
          animation-delay: calc(0.1s * $i);
        }
      }

      $spanNum: 20;

      &:nth-child(1) {
        @for $i from 0 to $spanNum {
          .span#{$i} {
            @include span($i);
          }
        }
      }

      &:nth-child(2) {
        transform: rotate(calc(180deg + 360deg / $spanNum));

        @for $i from 0 to $spanNum {
          .span#{$i} {
            @include span($i);

            &::after {
              animation-delay: calc(-0.1s * $i);
            }
          }
        }
      }
    }
  }

  @keyframes animate {
    0% {
      transform: scale(1);
    }

    50%,
    100% {
      transform: scale(0.1);
    }
  }

  @keyframes changeColor {
    0% {
      filter: hue-rotate(0deg);
    }

    100% {
      filter: hue-rotate(360deg);
    }
  }
}
</style>
