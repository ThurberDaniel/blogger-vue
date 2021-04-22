<template>
  <div class="blog-photo col-12">
    <div class=" position-relative">
      <router-link :to="{name: 'BlogDetails', params: {id: blog.id}}">
        <img :src="blog.imgUrl" alt="Blog Cover Image">
        <h4>{{ blog.title }}</h4>
        <!-- <img class="rounded-circle small-img position-absolute" :src="blog.creator.picture" alt="Creator Photo"> -->
        <div class="text-left">
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogDetails',
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
 img{
   width: 100%
 }
 .small-img{
   width: 1em;
   left: 0;
   top: 5px
 }
</style>
