/**
** Create this by gaowei1 on 2017/11/23
**/
<template>
    <div class="home">
      <Toper></Toper>
      <sidebar></sidebar>
      <div class="content">

        <!--<transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>-->
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import Toper from './Toper.vue'
  import Sidebar from './Slider.vue'

  export default {
    components: {
      Toper, Sidebar
    }
  }
</script>

<style>
  @import '../common/css/reset.css';
  .home {
    font-size: 13px;
  }
  .content {
    background: none repeat scroll 0 0 #f2f2f2;
    position: absolute;
    left: 200px;
    right: 0;
    top: 70px;
    bottom: 0;
    width: auto;
    box-sizing: border-box;
    overflow-y: scroll;
  }
</style>
