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
  <!-- 关注 -->
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
      <div class="usershows" v-for="i of 3" :key="i">
        <div class="userinfo">
          <img class="userphoto" src="../assets/userphoto.jpeg" alt />
          <img class="vipphoto" src="../assets/vip.png" alt />
          <span class="username">面对疾风吧</span>
          <img class="follow" data-index="0" @click="follow1" src="../assets/follow.png" alt />
          <img class="follow1" data-index="1" @click="follow1" src="../assets/hasfollowed.png" alt="">
        </div>
        <div class="userblog">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum quaerat saepe illum, dignissimos ex.beatae fugit.</p>
        </div>
        <div class="userphotoblog">
          <div class="user-photo">
            <img v-for="i of 6" :key="i" src="../assets/userphoto.jpeg" alt />
          </div>
          <div class="comment">
            <div class="share-btn"><img src="../assets/share.png" alt=""></div>
            <div class="r-comment">
              <img src="../assets/comment.png" alt="">
              <img src="../assets/star.png" alt="">
              <img src="../assets/zan.png" alt="">
            </div>
          </div>
        </div>
      </div>

      
    </div>
    <!-- 推荐面板 -->
    <div v-if="show1">
      <!-- 圆形图标 -->
      <div class="container">
        <div class="box">
          <div class="circle">
            <img src="../assets/anli.png" alt />
            <p>案例</p>
          </div>
          <div class="circle">
            <img src="../assets/anli.png" alt />
            <p>案例</p>
          </div>
          <div class="circle">
            <img src="../assets/anli.png" alt />
            <p>案例</p>
          </div>
          <div class="circle">
            <img src="../assets/anli.png" alt />
            <p>案例</p>
          </div>
          <div class="circle">
            <img src="../assets/anli.png" alt />
            <p>案例</p>
          </div>
          <div class="circle">
            <img src="../assets/anli.png" alt />
            <p>案例</p>
          </div>
          <div class="circle">
            <img src="../assets/anli.png" alt />
            <p>案例</p>
          </div>
        </div>
      </div>

      <!-- 推荐页主要内容 -->
      <div class="r-usershow">
        <div class="r-show">

          <div class="usershow-item">
            <img src="../assets/userphoto.jpeg" alt="">
            <p class="user-title">长得帅老的快,长得丑遍地走,你问我有没有,嘿,我还真没有 长得帅老的快,长得丑遍地走,你问我有没有,嘿,我还真没有</p>
            <div class="praise">
              <div class="user-img">
                <img src="../assets/userphoto.jpeg" alt="">
                <span class="my-small">Leo</span>
              </div>
              <div class="star">
                <img src="../assets/star.png" alt="">
                <span class="my-small">123</span>
              </div>
            </div>
          </div>

          <div class="usershow-item">
            <img src="../assets/usershow.png" alt="">
            <p class="user-title">长得帅老的快,长得丑遍地走,你问我有没有,嘿,我还真没有 长得帅老的快,长得丑遍地走,你问我有没有,嘿,我还真没有</p>
            <div class="praise">
              <div class="user-img">
                <img src="../assets/userphoto.jpeg" alt="">
                <span class="my-small">Leo</span>
              </div>
              <div class="star">
                <img src="../assets/star.png" alt="">
                <span class="my-small">123</span>
              </div>
            </div>
          </div>
        </div>
        <div class="r-show">
          <div class="usershow-item">
            <img src="../assets/usershow.png" alt="">
            <p class="user-title">长得帅老的快,长得丑遍地走,你问我有没有,嘿,我还真没有 长得帅老的快,长得丑遍地走,你问我有没有,嘿,我还真没有</p>
            <div class="praise">
              <div class="user-img">
                <img src="../assets/userphoto.jpeg" alt="">
                <span class="my-small">Leo</span>
              </div>
              <div class="star">
                <img src="../assets/star.png" alt="">
                <span class="my-small">123</span>
              </div>
            </div>
          </div>

          <div class="usershow-item">
            <img src="../assets/userphoto.jpeg" alt="">
            <p class="user-title">长得帅老的快,长得丑遍地走,你问我有没有,嘿,我还真没有 长得帅老的快,长得丑遍地走,你问我有没有,嘿,我还真没有</p>
            <div class="praise">
              <div class="user-img">
                <img src="../assets/userphoto.jpeg" alt="">
                <span class="my-small">Leo</span>
              </div>
              <div class="star">
                <img src="../assets/star.png" alt="">
                <span class="my-small">123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 收藏夹 -->
    <div v-if="show2" class="favorite">
      <div class="card-item" v-for="i of 6" :key="i">
        <img class="card-img" src="../assets/usershow.png" alt="">
        <span class="my-small">56个灵感</span>
        <p class="comment-font">Lorem ipsum dolor sit ame Similique iste odio neam commodi quas adipisci eos, assumenda recusandae?</p>
        <div class="praise margin-top-small">
              <div class="user-img">
                <img src="../assets/userphoto.jpeg" alt="">
                <span class="my-small">Leo</span>
              </div>
              <div class="star">
                <img src="../assets/favorite.png" alt="">
                <span class="my-small">收藏夹</span>
              </div>
            </div>
      </div>
    </div>
    <div class="space1"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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

    follow1(e) {
      var btn1=e.target;
      var btn2=btn1.nextElementSibling;
      if(btn1.dataset.index==0){
      if(btn1.className=="follow"){
        btn1.className="follow1";
        btn2.className="follow";
      }
    }else if(btn1.dataset.index==1){
      var btn3=btn1.previousElementSibling;
      btn1.className="follow1";
      btn3.className="follow"
    }
    },
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
.follow1{
  width:50px;
  height: 25px;
  display:none;
}

.user-photo{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.userphotoblog img {
  height:33%;
  width:33%;
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
  color: #000 !important;
  font-weight: bold !important;
}
.container {
  width: 100%;
  white-space: nowrap;
  max-width: 1200px;
  min-width: 375px;
}
.box {
  white-space: nowrap;
  overflow-x: auto;
  padding: 0.5rem 1rem;
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
.box > .cube:not(:first-child) {
  margin-left: 1rem;
}

.circle {
  display: inline-block;
  text-align: center;
  margin-top: 0.5rem;
  border-radius: 100%;
}
.box > .circle:not(:first-child) {
  margin-left: 1rem;
}
.circle > img {
  width: 3.6rem;
}
.r-usershow{
  display: flex;
  padding:1rem;
  justify-content: space-between;
  border-top:1px solid #e9e9e9;
}
.r-show{
  width:49%;
}
.usershow-item{
  margin-bottom:1rem;
}
.usershow-item>img{
  width:100%;
}
.user-title{
  font:0.8rem 苹方-简;
  max-height:3rem;
  padding:0.5rem 0;
  overflow: hidden;
}
.praise{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-img>img{
  width:1.3rem;
  border-radius:100%;
  margin-right:5px;
}
.my-small{
  font:0.8rem 苹方-简;
}
.star>img{
  width:1rem;
}
.favorite{
  background:#f5f5f5;
  padding:1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.card-item{
  width:49%;
  height:260px;
  background:white;
  margin-bottom:0.5rem;
  padding:0.5rem;
}
.card-img{
  height:150px;
  width:100%;
  object-fit: cover;
}
.comment-font{
  font-size:14px;
  color:#000;
  margin:0;
  height:38px;
  overflow: hidden;
}
.margin-top-small{
  margin-top:10px;
}
.comment,.r-comment{
  display: flex;
  justify-content: space-between;
}
.comment img{
  height:1.5rem;
  width: 1.5rem;
}
.comment{
  margin:1rem 0;
  margin-bottom:0;
}
.r-comment{
  width:50%;
}
</style>