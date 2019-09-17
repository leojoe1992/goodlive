<template>
  <div>
    <div class="space">
      <div class="header">
        <div class="calendar">
          <img src="../assets/calendar.png" alt />
        </div>
        <div class="search">
          <img src="../assets/search.png" alt />
          <span>请输入搜索内容</span>
        </div>
        <div class="info">
          <img src="../assets/info.png" alt />
        </div>
      </div>
      <div class="nav">
        <ul>
          <li @click="change(0)" :class="{blackline:show}">关注</li>
          <li @click="change(1)" :class="{blackline:show1}">推荐</li>
          <li @click="change(2)" :class="{blackline:show2}">收藏夹</li>
        </ul>
      </div>
    </div>
    <div class="space1"></div>
    <div v-if="show">
      <div class="container">
        <div class="box">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
        </div>
      </div>
      <div class="usershows">
        <div class="userinfo">
          <img class="userphoto" src="../assets/userphoto.jpeg" alt />
          <img class="vipphoto" src="../assets/vip.png" alt />
          <span class="username">面对疾风吧</span>
          <img class="follow" @click="follow1" :src="follow" alt />
        </div>
        <div class="userblog">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum quaerat saepe illum, dignissimos ex.beatae fugit.</p>
        </div>
        <div class="userphotoblog">
          <div class="leftphoto">
            <img src="../assets/userphoto.jpeg" alt />
            <img src="../assets/userphoto.jpeg" alt />
            <img src="../assets/userphoto.jpeg" alt />
          </div>
          <div class="middlephoto">
            <img src="../assets/userphoto.jpeg" alt />
            <img src="../assets/userphoto.jpeg" alt />
            <img src="../assets/userphoto.jpeg" alt />
          </div>
          <div class="rightphoto">
            <img src="../assets/userphoto.jpeg" alt />
            <img src="../assets/userphoto.jpeg" alt />
            <img src="../assets/userphoto.jpeg" alt />
          </div>
        </div>
      </div>

      <div class="usershows">
        <div class="userinfo">
          <img class="userphoto" src="../assets/userphoto.jpeg" alt />
          <img class="vipphoto" src="../assets/vip.png" alt />
          <span class="username">面对疾风吧</span>
          <img class="follow" @click="follow1" :src="follow" alt />
        </div>
        <div class="userblog">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum quaerat saepe illum, dignissimos ex.beatae fugit.</p>
        </div>
        <div class="userphotoblog">
          <div class="leftphoto">
            <img src="../assets/userphoto.jpeg" alt />
            <img src="../assets/userphoto.jpeg" alt />
            <img src="../assets/userphoto.jpeg" alt />
          </div>
          <div class="middlephoto">
            <img src="../assets/userphoto.jpeg" alt />
            <img src="../assets/userphoto.jpeg" alt />
            <img src="../assets/userphoto.jpeg" alt />
          </div>
          <div class="rightphoto">
            <img src="../assets/userphoto.jpeg" alt />
            <img src="../assets/userphoto.jpeg" alt />
            <img src="../assets/userphoto.jpeg" alt />
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐面板 -->
    <div v-if="show1">
      45
    </div>
    <!-- 收藏夹 -->
    <div v-if="show2">456789</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      follow: require("../assets/follow.png"),
      active: 0,
      show: true,
      show1: false,
      show2: false,
      showw: false
    };
  },
  methods: {
    change(i) {
      //显示隐藏开关

      if (i == 1) {
        this.show1 = true;
        this.show = false;
        this.show2 = false;
      } else if (i == 2) {
        this.show = false;
        this.show1 = false;
        this.show2 = true;
      } else if (i == 0) {
        this.show = true;
        this.show1 = false;
        this.show2 = false;
      }
    },

    follow1() {
      if (this.follow == require("../assets/follow.png")) {
        this.follow = require("../assets/hasfollowed.png");
      } else {
        this.follow = require("../assets/follow.png");
      }
    }
  }
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  width: 100%;
  height: 2.3rem;
  align-items: center;
  margin-top: 1.5rem;
}
.calendar {
  width: 10%;
}
.search {
  width: 70%;
  text-align: center;
  display: flex;
  justify-content: left;
  height: 2rem;
  border: 1px solid #eee;
  padding: 4px;
  padding-left: 8px;
  background: #ddd;
}
.search > img {
  height: 100%;
  line-height: 100%;
}
.search > span {
  color: #555;
  font-size: 12px;
  line-height: 1.5rem;
  margin-left: 1rem;
}
.info {
  width: 10%;
}

.title {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}
.checkall {
  color: #ddd;
  font-size: 12px;
}
.space {
  position: fixed;
  height: 7rem;
  z-index: 5;
  background: #fff;
}
.space1 {
  height: 7rem;
}
.userinfo {
  height: 5rem;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.userphoto {
  width: 30px;
  height: 30px;
  border-radius: 100%;
}
.vipphoto {
  width: 12px;
  height: 12px;
  margin-left: -170px;
  margin-top: 15px;
}
.username {
  font-size: 16px;
  margin-left: -150px;
}
.follow {
  width: 50px;
  height: 25px;
}

.userphotoblog {
  display: flex;
  justify-content: space-between;
}
.userphotoblog > div:not(:first-child) {
  margin-left: 0.4rem;
}
.userphotoblog img {
  margin-bottom: 0.4rem;
}
.usershows {
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 8px solid #efefef;
}
.nav > ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.nav {
  position: fixed;
  padding: 1rem;
  padding-bottom: 0;
  z-index: 10;
  background: #fff;
  border: none;
}
.nav > ul {
  display: flex;
  justify-content: left;
  list-style: none;
  padding: 0;
}
.nav > ul > li:not(:first-child) {
  margin-left: 1rem;
}
.nav > ul > li {
  color: #aaa;
  padding-bottom: 0.5rem;
}
.blackline {
  border-bottom: 3px solid #000;
}
 .container {
      width:100%;
      white-space: nowrap;
      max-width: 1200px;
      min-width: 375px;
    }
  .box{
    white-space: nowrap;
    overflow-x: auto;
    padding:0.5rem 1rem;
  }
    .box::-webkit-scrollbar {
      width: 0;
      height: 0;
      display: none;
    }

    .cube {
      display: inline-block;
      text-align: center;
      height: 100px;
      width: 200px;
      background: #f00;
      margin-top: 0.5rem;
    }
    .box>.cube:not(:first-child){
      margin-left:1rem;
    }
</style>