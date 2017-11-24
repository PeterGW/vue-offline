/**
** Create this by gaowei1 on 2017/11/23
**/
<template>
      <div class="slider">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>门派</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1"><router-link to='/test'>逍遥派</router-link></el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">天山派</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
       
      </div>
</template>

<script>
  export default {
    data() {
      return {
        role: '',
        titles: [],
        items: [{
          icon: 'el-icon-date',
          index: '/home',
          title: '武林至尊'
        },
          {
            icon: 'el-icon-date',
            index: '/test',
            title: '大理寺'
          },
          {
            icon: 'el-icon-date',
            index: '2',
            title: '少林寺',
            subs: [
              {
                icon: 'el-icon-date',
                index: 'base',
                title: '藏经阁'
              }
            ]
          }]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style>
  .slider {
    display: block;
    position: absolute;
    width: 200px;
    left: 0;
    top: 70px;
    bottom: 0;
    background: #2E363F;
  }
  .el-col-12{
    width: 100%;
  }
</style>
