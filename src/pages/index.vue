<template>
  <div class="index" @click.stop="clicktype(0)">
    <swiper id="sy" class="swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="topbar" v-if="scrollTop < 920">
        <div class="yexin">
          <div class="logo">LOGO</div>
          <div class="right clearfix">
            <div class="bar" @click.stop="scrollView('sy')">
              首页
              <div class="line"></div>
            </div>
            <div class="bar" @click.stop="scrollView('wmdfw')">我们的服务</div>
            <div class="bar" @click.stop="scrollView('fwal')">服务案例</div>
            <div class="bar" @click.stop="scrollView('gywm')">关于我们</div>
            <div class="bar" @click.stop="scrollView('hzhb')">合作伙伴</div>
          </div>
        </div>
      </div>
      <div class="left">
        <div class="t70">设计·研发·品牌·摄影</div>
        <div class="t30 mb40">Design, R & D, brand and photography</div>
        <div class="t30 mb40">专业一对一服务，拒绝多项目切换</div>
        <div class="t20">·16位核心成员(人均从业经验4年+)</div>
        <div class="t20">·20+签约设计师</div>
        <div class="t20">·20位签约研发工程师</div>
        <div class="zxbtn" @click.stop="zixun">
          马上咨询
        </div>
      </div>
    </swiper>
    <!-- 我们的服务 -->
    <div class="wmdfw" id="wmdfw">
      <div class="title">
        <div class="leftT lan"></div>
        <div class="centerT lan">
          <div class="centerTt">我们的服务</div>
          <div class="centerTb">Our services</div>
        </div>
        <div class="rightT lan"></div>
      </div>
      <div class="subTitle">
        <div class="subTitleIn hei">设计+研发 助力企业腾飞</div>
      </div>
      <div class="yexin fuwu clearfix">
        <div class="fuwxcx">
          <img src="../assets/xcx.png" alt="" />
          <div class="fwdesc">小程序/网站/APP</div>
          <div class="fwtext">各类型小程序搭建</div>
          <div class="fwtext">高端网站建设</div>
          <div class="fwtext">APP原生开发</div>
        </div>
        <div class="fuwxui">
          <img src="../assets/ui.png" alt="" />
          <div class="fwdesc">UI/插画设计</div>
          <div class="fwtext">产品功能原型</div>
          <div class="fwtext">Ui设计</div>
          <div class="fwtext">IP商业插画</div>
        </div>
        <div class="fuwxpm">
          <img src="../assets/pm.png" alt="" />
          <div class="fwdesc">平面/品牌</div>
          <div class="fwtext">企业VI设计</div>
          <div class="fwtext">海报，画册设计</div>
          <div class="fwtext">品牌形象升级</div>
        </div>
        <div class="fuwxgg">
          <img src="../assets/gg.png" alt="" />
          <div class="fwdesc">广告摄影</div>
          <div class="fwtext">活动拍摄</div>
          <div class="fwtext">课程拍摄</div>
          <div class="fwtext">企业宣传片</div>
        </div>
      </div>
    </div>
    <!-- 服务案例 -->
    <div class="fwal" id="fwal">
      <div class="title">
        <div class="leftT bai"></div>
        <div class="centerT bai">
          <div class="centerTt">服务案例</div>
          <div class="centerTb">Service cases</div>
        </div>
        <div class="rightT bai"></div>
      </div>
      <div class="subTitle">
        <div class="subTitleIn bai">全行业解决方案</div>
      </div>
      <div class="fwaltab">
        <div
          class="fwaltabsub"
          :class="{ active: fwaltab == 1 }"
          @click="clickfwtab(1)"
        >
          小程序
        </div>
        <div
          class="fwaltabsub"
          :class="{ active: fwaltab == 2 }"
          @click="clickfwtab(2)"
        >
          Web官网
        </div>
        <div
          class="fwaltabsub"
          :class="{ active: fwaltab == 3 }"
          @click="clickfwtab(3)"
        >
          平面/插画
        </div>
        <div
          class="fwaltabsub"
          :class="{ active: fwaltab == 4 }"
          @click="clickfwtab(4)"
        >
          广告摄影
        </div>
      </div>
      <div class="fwallist yexin clearfix">
        <div class="al">
          <img src="../assets/jjjjj.png" alt="" />
          <div class="albottom clearfix">
            <div class="albottoml">聚美优品</div>
            <div class="albottomr">商城购物</div>
          </div>
        </div>
        <div class="al"></div>
        <div class="al"></div>
        <div class="al"></div>
        <div class="al"></div>
        <div class="al"></div>
        <div class="al"></div>
        <div class="al"></div>
      </div>
      <div class="fwalzx" @click.stop="zixun">
        <div class="fwalzxl">了解更多行业案例</div>
        <div class="fwalzxr">免费咨询</div>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="gywm" id="gywm">
      <div class="title">
        <div class="leftT lan"></div>
        <div class="centerT lan">
          <div class="centerTt">关于我们</div>
          <div class="centerTb">About us</div>
        </div>
        <div class="rightT lan"></div>
      </div>
      <div class="subTitle">
        <div class="subTitleIn hei">专业的团队·优质的服务</div>
      </div>
      <div class="desc">
        鹿灵创享·品牌创立于2019年，主要从事软件研发、UI设计、商业插画定制、平面设计和广告拍摄等业务；
        团队成立至今，累计服务各类型企业200多家，获得大量好评；
        团队核心成员16名(人均从业经验均在4年以上），签约设计师20多名，签约开发人员20多名；
        真正做到一对一专业团队服务。
      </div>
      <swiper class="yexin swiper2" :options="swiperOptions2">
        <swiper-slide>
          <div class="cxy">
            <img src="../assets/tx1.png" alt="" />
            <div class="name">小林</div>
            <div class="zhiwei">研发总监</div>
            <div class="miaoshu lianghangdian">
              8年研发经验，服务过各种类型的大型项目，精通JAVA、爬虫，做过区块链相关项目8年研发经验
              8年研发经验，服务过各种类型的大型项目，精通JAVA、爬虫，做过区块链相关项目8年研发经验
            </div>
          </div>
          <div class="cxy">
            <img src="../assets/tx1.png" alt="" />
            <div class="name">小林</div>
            <div class="zhiwei">研发总监</div>
            <div class="miaoshu lianghangdian">
              8年研发经验，服务过各种类型的大型项目，精通JAVA、爬虫，做过区块链相关项目8年研发经验
              8年研发经验，服务过各种类型的大型项目，精通JAVA、爬虫，做过区块链相关项目8年研发经验
            </div>
          </div>
          <div class="cxy">
            <img src="../assets/tx1.png" alt="" />
            <div class="name">小林</div>
            <div class="zhiwei">研发总监</div>
            <div class="miaoshu lianghangdian">
              8年研发经验，服务过各种类型的大型项目，精通JAVA、爬虫，做过区块链相关项目8年研发经验
              8年研发经验，服务过各种类型的大型项目，精通JAVA、爬虫，做过区块链相关项目8年研发经验
            </div>
          </div>
          <div class="cxy">
            <img src="../assets/tx1.png" alt="" />
            <div class="name">小林</div>
            <div class="zhiwei">研发总监</div>
            <div class="miaoshu lianghangdian">
              8年研发经验，服务过各种类型的大型项目，精通JAVA、爬虫，做过区块链相关项目8年研发经验
              8年研发经验，服务过各种类型的大型项目，精通JAVA、爬虫，做过区块链相关项目8年研发经验
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="cxy">
            <img src="../assets/tx1.png" alt="" />
            <div class="name">小林</div>
            <div class="zhiwei">研发总监</div>
            <div class="miaoshu lianghangdian">
              8年研发经验，服务过各种类型的大型项目，精通JAVA、爬虫，做过区块链相关项目8年研发经验
              8年研发经验，服务过各种类型的大型项目，精通JAVA、爬虫，做过区块链相关项目8年研发经验
            </div>
          </div>
          <div class="cxy">
            <img src="../assets/tx1.png" alt="" />
            <div class="name">小林</div>
            <div class="zhiwei">研发总监</div>
            <div class="miaoshu lianghangdian">
              8年研发经验，服务过各种类型的大型项目，精通JAVA、爬虫，做过区块链相关项目8年研发经验
              8年研发经验，服务过各种类型的大型项目，精通JAVA、爬虫，做过区块链相关项目8年研发经验
            </div>
          </div>
          <div class="cxy">
            <img src="../assets/tx1.png" alt="" />
            <div class="name">小林</div>
            <div class="zhiwei">研发总监</div>
            <div class="miaoshu lianghangdian">
              8年研发经验，服务过各种类型的大型项目，精通JAVA、爬虫，做过区块链相关项目8年研发经验
              8年研发经验，服务过各种类型的大型项目，精通JAVA、爬虫，做过区块链相关项目8年研发经验
            </div>
          </div>
          <div class="cxy">
            <img src="../assets/tx1.png" alt="" />
            <div class="name">小林</div>
            <div class="zhiwei">研发总监</div>
            <div class="miaoshu lianghangdian">
              8年研发经验，服务过各种类型的大型项目，精通JAVA、爬虫，做过区块链相关项目8年研发经验
              8年研发经验，服务过各种类型的大型项目，精通JAVA、爬虫，做过区块链相关项目8年研发经验
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 合作伙伴 -->
    <div class="hzhb" id="hzhb">
      <div class="title">
        <div class="leftT bai"></div>
        <div class="centerT bai">
          <div class="centerTt">合作伙伴</div>
          <div class="centerTb">cooperative partner</div>
        </div>
        <div class="rightT bai"></div>
      </div>
      <div class="subTitle">
        <div class="subTitleIn bai">获得大量客户一致好评</div>
      </div>
      <swiper class="yexin swiper2" :options="swiperOptions2">
        <swiper-slide>
          <div class="huoban">
            <div class="hbtop">
              <img src="" alt="" class="touxiang" />
              <div class="hbname">
                <div class="hbnamet">聚美优品-李总</div>
                <div class="hbnameb">社区电商小程序定制</div>
              </div>
            </div>
            <div class="huobandesc">
              “专业！服务很好，从前期功能开发沟通专业！服务很专业！
              服务很好，从前期功能开发沟通专业！服务很专业！服务很好，从前期功能开发沟通专业！服务很专业！”
            </div>
          </div>
          <div class="huoban">
            <div class="hbtop">
              <img src="" alt="" class="touxiang" />
              <div class="hbname">
                <div class="hbnamet">聚美优品-李总</div>
                <div class="hbnameb">社区电商小程序定制</div>
              </div>
            </div>
            <div class="huobandesc">
              “专业！服务很好，从前期功能开发沟通专业！服务很专业！
              服务很好，从前期功能开发沟通专业！服务很专业！服务很好，从前期功能开发沟通专业！服务很专业！”
            </div>
          </div>
          <div class="huoban">
            <div class="hbtop">
              <img src="" alt="" class="touxiang" />
              <div class="hbname">
                <div class="hbnamet">聚美优品-李总</div>
                <div class="hbnameb">社区电商小程序定制</div>
              </div>
            </div>
            <div class="huobandesc">
              “专业！服务很好，从前期功能开发沟通专业！服务很专业！
              服务很好，从前期功能开发沟通专业！服务很专业！服务很好，从前期功能开发沟通专业！服务很专业！”
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="huoban">
            <div class="hbtop">
              <img src="" alt="" class="touxiang" />
              <div class="hbname">
                <div class="hbnamet">聚美优品-李总</div>
                <div class="hbnameb">社区电商小程序定制</div>
              </div>
            </div>
            <div class="huobandesc">
              “专业！服务很好，从前期功能开发沟通专业！服务很专业！
              服务很好，从前期功能开发沟通专业！服务很专业！服务很好，从前期功能开发沟通专业！服务很专业！”
            </div>
          </div>
          <div class="huoban">
            <div class="hbtop">
              <img src="" alt="" class="touxiang" />
              <div class="hbname">
                <div class="hbnamet">聚美优品-李总</div>
                <div class="hbnameb">社区电商小程序定制</div>
              </div>
            </div>
            <div class="huobandesc">
              “专业！服务很好，从前期功能开发沟通专业！服务很专业！
              服务很好，从前期功能开发沟通专业！服务很专业！服务很好，从前期功能开发沟通专业！服务很专业！”
            </div>
          </div>
          <div class="huoban">
            <div class="hbtop">
              <img src="" alt="" class="touxiang" />
              <div class="hbname">
                <div class="hbnamet">聚美优品-李总</div>
                <div class="hbnameb">社区电商小程序定制</div>
              </div>
            </div>
            <div class="huobandesc">
              “专业！服务很好，从前期功能开发沟通专业！服务很专业！
              服务很好，从前期功能开发沟通专业！服务很专业！服务很好，从前期功能开发沟通专业！服务很专业！”
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="yexin clearfix">
        <div class="linglu">
          <div class="lltop">
            <img src="" alt="" class="touxiang" />
            <div class="llname">
              <div class="llnamet">鹿灵创享</div>
              <div class="llnameb">Luck and links</div>
            </div>
          </div>
          <div class="t16">链接一群有趣的灵魂，做更多有趣的事</div>
          <div class="t12 mb80">More interesting things to do</div>
          <div class="t12">备案号：粤56056065546</div>
        </div>
        <div class="lingyu">
          <div class="t18 mb40">事业领域</div>
          <div class="sublingyu mb12 t12">品牌网站创意设计</div>
          <div class="sublingyu mb12 t12">高端网站建设</div>
          <div class="sublingyu mb12 t12">小程序/APP设计</div>
          <div class="sublingyu mb12 t12">小程序/APP研发</div>
          <div class="sublingyu mb12 t12">VI/Logo品牌设计</div>
          <div class="sublingyu mb12 t12">视频拍摄</div>
          <div class="sublingyu mb12 t12">画册/海报设计</div>
          <div class="sublingyu mb12 t12">广告摄影</div>
          <div class="sublingyu mb12 t12">IP商业插画设计</div>
        </div>
        <div class="lianjie">
          <div class="t18 mb40">友情链接</div>
          <div class="sub mb12 t12"><a href="">创造链</a></div>
          <div class="sub mb12 t12"><a href="">学UI网</a></div>
          <div class="sub mb12 t12"><a href="">乔礼传媒</a></div>
          <div class="sub mb12 t12"><a href="">官方微博</a></div>
        </div>
        <div class="lianxi">
          <div class="t18 mb40">联系我们</div>
          <div class="sub mb12 t12">合作邮箱：123136@163.com</div>
          <div class="sub mb12 t12">加入我们：123136@163.com</div>
          <div class="sub mb12 t12">商务专线：130 4984 7011</div>
          <div class="sub mb12 t12">
            企业地址：深圳市南山区西丽早安商务中心A座601室
          </div>
          <div>
            <img class="icons" src="../assets/btwb.png" alt="" />
            <img class="icons" src="../assets/btwx.png" alt="" />
            <img class="icons" src="../assets/btdy.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- 顶部导航 -->
    <div class="topbar fixed" v-if="scrollTop > 920">
      <div class="yexin">
        <div class="logo">LOGO</div>
        <div class="right clearfix">
          <div class="bar" @click.stop="scrollView('sy')">
            首页
            <!-- <div class="line"></div> -->
          </div>
          <div class="bar" @click.stop="scrollView('wmdfw')">我们的服务</div>
          <div class="bar" @click.stop="scrollView('fwal')">服务案例</div>
          <div class="bar" @click.stop="scrollView('gywm')">关于我们</div>
          <div class="bar" @click.stop="scrollView('hzhb')">合作伙伴</div>
        </div>
      </div>
    </div>
    <!-- 右侧固定 -->
    <div class="gudingright">
      <div class="sub mb12" @click.stop="zixun">
        <img src="../assets/rfzixun.png" alt="" />
        <div>咨询</div>
      </div>
      <div class="bgfff mb12">
        <div class="sub" @click.stop="clicktype(1)">
          <img src="../assets/rfqq.png" alt="" />
          <div>QQ</div>
          <div v-if="type == 1" class="number">362090224</div>
        </div>
        <div class="sub wx" @click.stop="clicktype(2)">
          <img src="../assets/rfwx.png" alt="" />
          <div>微信</div>
        </div>
        <div class="sub" @click.stop="clicktype(3)">
          <img src="../assets/rfshouji.png" alt="" />
          <div>手机</div>
          <div v-if="type == 3" class="number">13148850057</div>
        </div>
        <div v-if="type == 2" class="code">
          <img src="../assets/code.png" alt="" />
        </div>
      </div>
      <div class="sub top" @click="goTop">
        <img src="../assets/rftop.png" alt="" />
        <div>TOP</div>
      </div>
    </div>
    <!-- 联系弹窗 -->
    <div class="lianxiMask" v-show="showLx" @click.stop="closelx">
      <div class="lianxiMaskIn" @click.stop="stop">
        <div class="t20">提交您的联系方式</div>
        <div class="t14">官方客服将会在24h内联系您</div>
        <input
          type="text"
          oninput="if(value.length>8)value=value.slice(0,8)"
          v-model="name"
          placeholder="请输入您的姓名"
        />
        <input
          type="number"
          oninput="if(value.length>11)value=value.slice(0,11)"
          v-model="phone"
          maxlength="11"
          placeholder="请输入您的手机号"
        />
        <div class="submit" @click.stop="submit">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      scrollTop: 0,
      fwaltab: 1,
      type: 0,
      showLx: false,
      name: "",
      phone: "",
      swiperOptions: {
        autoplay: true,
        speed: 500, // 轮播速度
        pagination: {
          el: ".swiper-pagination",
        },
      },
      swiperOptions2: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        speed: 500, // 轮播速度
        // loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    clickfwtab(e) {
      this.fwaltab = e;
    },
    clicktype(e) {
      this.type = e;
    },
    goTop() {
      document.documentElement.scrollTop = 0;
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollTop = scrollTop;
      console.log(scrollTop);
      
    },
    scrollView(id) {
      document.getElementById(id).scrollIntoView();
    },
    zixun() {
      this.showLx = true;
    },
    closelx() {
      this.showLx = false;
    },
    stop() {
      return;
    },
    submit() {
      if(!this.name){
        alert("请输入姓名")
        return
      }
      if(!this.mobilePhone(this.phone)){
        alert("输入手机号码有误")
        return
      }

    },
    mobilePhone(value) {
      var regExp = /^1[0-9]{10}$/,
        boolean = false;
      boolean = regExp.test(value);
      return boolean;
    },
  },
};
</script>

<style scoped lang="scss">
.index {
  width: 100%;
  background: #f9f9f9;
  .yexin {
    width: 1480px;
    margin: 0 auto;
  }
  .swiper {
    width: 100%;
    height: 940px;
    position: relative;
    z-index: 10;
    .swiper-wrapper {
      width: 100%;
      height: 940px;
      .swiper-slide {
        width: 100%;
        height: 940px;
        background: url("../assets/banner1.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .left{
      width: 700px;
      height: 600px;
      position: absolute;
      left: 220px;
      top: 300px;
      color: #fff;
      .t70{
        font-size: 70px;
        font-weight: bold;
      }
      .t30{
        font-size: 30px;
        font-weight: bold;
      }
      .t20{
        font-size: 20px;
        color: 999;
        line-height: 36px;
      }
      .mb40{
        margin-bottom: 40px;
      }
      .zxbtn{
        width: 280px;
        height: 80px;
        background: #FF6B29;
        font-size: 30px;
        line-height: 80px;
        text-align: center;
        margin-top: 50px;
        border-radius: 40px;
        cursor: pointer;
      }
    }
  }
  .title {
    padding: 120px 0 30px 0;
    margin: 0 auto;
    height: 80px;
    text-align: center;

    > div {
      display: inline-block;
    }
    .leftT {
      width: 80px;
      height: 80px;

      &.lan {
        background: url("../assets/leftlan.png") no-repeat;
      }
      &.bai {
        background: url("../assets/leftbai.png") no-repeat;
      }
    }
    .centerT {
      margin: 0 30px;
      height: 80px;
      text-align: center;
      vertical-align: top;

      &.lan {
        color: #021d4a;
      }
      &.bai {
        color: #fff;
      }
      .centerTt {
        height: 50px;
        line-height: 50px;
        font-size: 40px;
        font-weight: bold;
      }
      .centerTb {
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        color: #ececec;
      }
      &.lan .centerTb {
        color: #666;
      }
    }
    .rightT {
      width: 80px;
      height: 80px;
      &.lan {
        background: url("../assets/rightlan.png") no-repeat;
      }
      &.bai {
        background: url("../assets/rightbai.png") no-repeat;
      }
    }
  }
  .subTitle {
    text-align: center;
    margin-bottom: 70px;
    font-size: 20px;
    font-weight: bold;
    .subTitleIn {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
      padding: 0 40px;
      &.hei {
        background: #ecf1fb;
        color: #021d4a;
      }
      &.bai {
        background: #3a5087;
        color: #fff;
      }
    }
  }
  .desc {
    width: 1200px;
    margin: 0 auto;
    font-size: 16px;
    color: #0042cc;
    line-height: 30px;
    margin-bottom: 40px;
  }

  .wmdfw {
    width: 100%;
    height: 875px;
    .fuwu {
      height: 440px;
      padding: 20px 10px;
      box-sizing: border-box;
      > div {
        width: 350px;
        height: 400px;
        border-radius: 20px;
        margin: 0 7.5px;
        background-color: #fff;
        float: left;
        box-shadow: 0 0 3px 3px #ececec;
        padding-top: 65px;
        box-sizing: border-box;
        text-align: center;
        img {
          width: 75px;
          height: 75px;
          margin-bottom: 30px;
        }
        .fwdesc {
          font-size: 32px;
          color: #fff;
          margin-bottom: 70px;
        }
        .fwtext {
          font-size: 16px;
          color: #666;
          line-height: 30px;
        }
      }
      .fuwxcx {
        background: url("../assets/fuwuxcx.png") no-repeat;
      }
      .fuwxui {
        background: url("../assets/fuwuui.png") no-repeat;
      }
      .fuwxpm {
        background: url("../assets/fuwuui.png") no-repeat;
      }
      .fuwxgg {
        background: url("../assets/fuwugg.png") no-repeat;
      }
    }
  }
  .fwal {
    background: url("../assets/fwal.png") no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 1500px;
    .fwaltab {
      margin: 40px 0;
      height: 60px;
      line-height: 56px;
      border-bottom: 1px solid #ccc;
      text-align: center;
      box-sizing: border-box;
      .fwaltabsub {
        display: inline-block;
        margin: 0 60px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        &.active {
          border-bottom: 3px solid #fff;
        }
      }
    }
    .fwallist {
      height: 810px;
      overflow-y: auto;
      margin-bottom: 80px;
      .al {
        width: 350px;
        height: 370px;
        background: #fff;
        float: left;
        margin: 0 20px 30px 0;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        cursor: pointer;
        &:nth-child(4n) {
          margin-right: 0;
        }
        img {
          width: 350px;
          height: 290px;
          display: block;
        }
        .albottom {
          width: 350px;
          height: 80px;
          padding: 24px;
          box-sizing: border-box;
          .albottoml {
            float: left;
            font-size: 18px;
            color: #021d4a;
          }
          .albottomr {
            float: right;
            color: #666;
            font-size: 16px;
            background: #f3f3f3;
            line-height: 32px;
            padding: 0 12px;
            border-radius: 5px;
          }
        }
      }
    }
    .fwalzx {
      width: 600px;
      height: 60px;
      margin: 0 auto;
      border: 1px solid #fff;
      border-radius: 10px;
      font-size: 20px;
      line-height: 60px;
      text-align: center;
      color: #fff;
      overflow: hidden;
      cursor: pointer;
      .fwalzxl {
        width: 440px;
        height: 60px;
        float: left;
      }
      .fwalzxr {
        width: 160px;
        height: 60px;
        float: right;
        background: #fff;
        color: #0052ff;
        font-weight: bold;
      }
    }
  }
  .gywm {
    width: 100%;
    height: 940px;
    .swiper2 {
      width: 1480px;
      height: 440px;
      z-index: 1;
      .swiper-wrapper {
        width: 100% !important;
        height: 100%;
        .swiper-slide {
          width: 100% !important;
          height: 100%;
          .cxy {
            width: 350px;
            height: 350px;
            border-radius: 20px;
            background: #fff;
            float: left;
            margin-right: 20px;
            padding: 50px 30px 0 30px;
            box-sizing: border-box;
            text-align: center;
            color: #666;

            img {
              margin-bottom: 20px;
              width: 75px;
              height: 75px;
            }
            .name {
              font-size: 22px;
              margin-bottom: 15px;
            }
            .zhiwei {
              font-size: 16px;
              margin-bottom: 30px;
            }
            .miaoshu {
              font-size: 14px;
              color: #666;
              height: 80px;
              text-align: left;
            }
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
  .hzhb {
    width: 100%;
    height: 830px;
    background: url("../assets/hzhb.png") no-repeat;
    background-size: 100% 100%;
    .swiper2 {
      width: 1480px;
      height: 380px;
      .swiper-wrapper {
        width: 100% !important;
        height: 100%;
        .swiper-slide {
          width: 100% !important;
          height: 100%;
          .huoban {
            width: 460px;
            height: 280px;
            border-radius: 20px;
            background: #fff;
            float: left;
            margin-right: 50px;
            box-sizing: border-box;
            padding: 60px 30px 0 30px;
            .hbtop {
              text-align: center;
              margin-bottom: 35px;
              .touxiang {
                width: 50px;
                height: 50px;
                margin: 0 25px;
                vertical-align: top;
              }
              .hbname {
                color: #002166;
                display: inline-block;
                vertical-align: top;
                text-align: left;
                .hbnamet {
                  height: 30px;
                  line-height: 20px;
                  font-size: 18px;
                }
                .hbnameb {
                  line-height: 20px;
                  font-size: 12px;
                }
              }
            }
            .huobandesc {
              font-size: 14px;
              color: #333;
              height: 100px;
              overflow: hidden;
              line-height: 24px;
            }
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }

  .topbar {
    position: absolute;
    width: 100%;
    height: 60px;
    color: #fff;
    &.fixed {
      position: fixed;
      left: 0;
      top: 0;
      background: #fff;
      color: #666;
      border-bottom: 1px solid #999;
      z-index: 998;
    }
    .logo {
      width: 200px;
      height: 60px;
      float: left;
    }
    .right {
      float: right;
      height: 60px;
      padding: 10px;
      line-height: 40px;
      box-sizing: border-box;
      .bar {
        text-align: center;
        float: left;
        margin: 0 30px;
        font-size: 16px;
        cursor: pointer;
        .line {
          width: 20px;
          height: 3px;
          background: #fff;
          margin: 0 auto;
        }
      }
    }
  }

  .gudingright {
    width: 80px;
    height: 400px;
    position: fixed;
    right: 5px;
    top: 200px;
    z-index: 2;
    .sub {
      width: 80px;
      height: 80px;
      border-radius: 5px;
      background: #fff;
      padding-top: 15px;
      box-sizing: border-box;
      font-size: 16px;
      color: #666;
      text-align: center;
      cursor: pointer;
      position: relative;
      img {
        width: 25px;
        height: 25px;
        margin-bottom: 3px;
      }
      &.top {
        height: 70px;
        img {
          height: 10px;
        }
      }
      .number {
        position: absolute;
        right: 70px;
        top: 0;
        width: 150px;
        height: 80px;
        line-height: 80px;
        color: #666;
        background: #fff;
        border-radius: 10px;
      }
    }

    .bgfff {
      position: relative;
      background: #fff;
      border-radius: 5px;
      .code {
        position: absolute;
        right: 80px;
        top: 30px;
        width: 180px;
        height: 180px;
        padding: 30px;
        box-sizing: border-box;
        background: #fff;
        vertical-align: middle;
        border-radius: 10px;
        img {
          width: 120px;
          height: 120px;
        }
      }
    }
  }
  .lianxiMask {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    .lianxiMaskIn {
      width: 480px;
      height: 540px;
      background: #fff;
      border-radius: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-sizing: border-box;
      padding: 80px 80px 0 70px;
      text-align: center;
      .t20 {
        font-size: 20px;
        color: #021d4a;
        margin-bottom: 10px;
        font-weight: bold;
      }
      .t14 {
        font-size: 14px;
        color: #999;
        margin-bottom: 50px;
      }
      input {
        width: 320px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 14px;
        color: #999;
        margin-bottom: 40px;
        outline: none;
        border: 1px solid #999;
        border-radius: 25px;
      }
      .submit {
        width: 330px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        background: #ff6b29;
        border-radius: 25px;
        margin-top: 40px;
        cursor: pointer;
      }
    }
  }
}
</style>
