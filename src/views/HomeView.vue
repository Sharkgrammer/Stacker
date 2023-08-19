<template>
    <p class="text-red-500">Test</p>


  <div class="pr-20 pl-20 pt-5 pb-5">
    <StackerWindow />
  </div>



  <div class="w-5 h-5 bg-stackBack" />
  <div class="w-5 h-5 bg-stackFor" />

</template>

<script>
import StackerWindow from "@/components/StackerWindow";
export default {
  name: "HomeView",
  components: {StackerWindow}
}
</script>

<style scoped>

</style>