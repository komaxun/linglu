<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  font: 14px "Microsoft YaHei", tahoma, arial, sans-serif;
  position: relative;
  margin: 0 auto !important;
  position: relative;

  #app {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: #777 !important;
    opacity: 1;
  }

  .lianghangdian {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

body,
p,
form,
iframe,
input,
textarea,
span,
strong,
html,
nav,
header,
article,
button,
footer {
  padding: 0;
  margin: 0;
}
.fl {
  float: left;
}

.fr {
  float: right;
}

/* 清除浮动效果 */
.clearfix {
  zoom: 1;
}

.clearfix:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}

/* CSS实现内容超过长度后以省略号显示*/
.ellipsis {
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

a {
  text-decoration: 0;
}


.footer {
    width: 100%;
    height: 380px;
    background: #061455;
    padding-top: 80px;
    box-sizing: border-box;
    color: #fff;
    .linglu {
      float: left;
      width: 400px;
      height: 300px;
      .lltop {
        margin-bottom: 35px;
        .touxiang {
          width: 50px;
          height: 50px;
          margin-right: 25px;
          vertical-align: top;
        }
        .llname {
          display: inline-block;
          vertical-align: top;
          text-align: left;
          .llnamet {
            height: 30px;
            line-height: 20px;
            font-size: 28px;
            font-weight: bold;
          }
          .llnameb {
            line-height: 20px;
            font-size: 12px;
          }
        }
      }
    }
    .lingyu {
      float: left;
      width: 400px;
      height: 300px;
      .sublingyu {
        float: left;
        width: 150px;
      }
    }
    .lianjie,
    .lianxi {
      float: left;
      width: 340px;
      height: 300px;
      .sub {
        float: left;
        width: 320px;
        a {
          color: #fff;
        }
      }
      img.icons {
        width: 30px;
        height: 30px;
        margin: 20px 20px 0 0;
      }
    }
  }
  .t18 {
    font-size: 18px;
    font-weight: bold;
  }
  .t16 {
    font-size: 16px;
  }
  .t12 {
    font-size: 12px;
  }
  .mb12 {
    margin-bottom: 12px;
  }
  .mb40 {
    margin-bottom: 40px;
  }
  .mb80 {
    margin-bottom: 80px;
  }

</style>
