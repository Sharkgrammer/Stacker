<template>

  <div class="flex flex-col min-h-screen h-full bg-darkBg">

    <div class="flex-grow -mt-1">
      <div class="flex justify-center">
        <div class="pt-5 pb-5 pl-2 pr-2">
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