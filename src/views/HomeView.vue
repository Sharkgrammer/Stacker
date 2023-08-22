<template>

  <div class="flex flex-col min-h-screen h-full bg-darkBg">

    <div class="flex-grow -mt-1">
      <div class="flex justify-center">
        <div class="pr-20 pl-20 pt-10 pb-10">
          <StackerWindow/>
        </div>
      </div>
    </div>


    <div class="p-5">
        <DevSupport/>
    </div>

  </div>

</template>

<script>
import StackerWindow from "@/components/StackerWindow";
import DevSupport from "@/components/DevSupport";

export default {
  name: "HomeView",
  components: {DevSupport, StackerWindow}
}
</script>

<style scoped>

</style>