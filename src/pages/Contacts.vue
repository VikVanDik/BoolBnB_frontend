<script>

import {store} from "../data/store.js";

export default {
  name:'Contacts',
  data(){
    return {
      store,

    }
  },
}
</script>


<template>
  <h1 class="text-center py-5">Contatti</h1>
  <!-- <div class="container text-center pb-3">
    <div class="row row-sm d-flex justify-content-between ">
      <div 
        v-for="(member, index) in store.team"
        :key="index"
        class="col-4 mt-3 pb-4 align-content-center "
      >
        <h4>{{member.name}}</h4>
        <ul 
          class=" list-unstyled"
          v-for="(contact, index) in member.contacts"
          :key="index"
        >
          
          <li class="d-flex ">
            <p>E-mail:</p>
            <a href="#" class="text-decoration-none "> {{contact.mail?contact.mail:'-'}}</a>
          </li>
          <li class="d-flex ">
            <p>GitHub:</p>
            <a href="#" class="text-decoration-none "> {{contact.gitHub?contact.gitHub:'-'}}</a>
          </li>
          <li class="d-flex align-content-center ">
            <p>LinkedIn:</p>
            <a href="#" class="text-decoration-none text-sm"> {{contact.linkedIn?contact.linkedIn:'-'}}</a>
          </li>
     
        </ul>
      </div>

    </div>
  </div> -->
  <!-- <div class="container">
    <ul class="cards">
      <li
        v-for="(member, index) in store.team"
        :key="index"
      >
        <img src="" alt="">
        <div class="details">
          <span class="name">{{ member.name }}</span>
          <a class="mail">{{ member.contacts[0].mail }}</a>
          <a class="github">{{ member.contacts[0].gitHub }}</a>
          <a class="linkedin">{{ member.contacts[0].linkedIn }}</a>
        </div>
      </li>

    </ul>
  </div> -->

  
<div class="container">
  <ul class="cards">

    <li class="col-4"><img src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;cs=srgb&amp;s=1cd7edb2ed25c1de4908db807e545988&amp;w=150&amp;h=150"/>
      <div class="details"><span class="name">Emilia Jacobs</span><span class="title">UI/UX Designer</span><a class="phone" href="tel:123-456-789">123-456-789</a><a class="email" href="mailto:emilia.jacobs@email.com">emilia.jacobs@email.com</a></div>
    </li>

    <li class="col-4"><img src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;cs=srgb&amp;s=1cd7edb2ed25c1de4908db807e545988&amp;w=150&amp;h=150"/>
      <div class="details"><span class="name">Emilia Jacobs</span><span class="title">UI/UX Designer</span><a class="phone" href="tel:123-456-789">123-456-789</a><a class="email" href="mailto:emilia.jacobs@email.com">emilia.jacobs@email.com</a></div>
    </li>

    <li class="col-4"><img src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;cs=srgb&amp;s=1cd7edb2ed25c1de4908db807e545988&amp;w=150&amp;h=150"/>
      <div class="details"><span class="name">Emilia Jacobs</span><span class="title">UI/UX Designer</span><a class="phone" href="tel:123-456-789">123-456-789</a><a class="email" href="mailto:emilia.jacobs@email.com">emilia.jacobs@email.com</a></div>
    </li>

    <li class="col-4"><img src="https://images.unsplash.com/photo-1499057625772-bafa601ee80c?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;cs=srgb&amp;s=136e035a7d5740f54f2acaa940c07f0b&amp;w=150&amp;h=150"/>
      <div class="details"><span class="name">Tim Pawson</span><span class="title">Project Manager</span><a class="phone" href="tel:123-456-789">123-456-789</a><a class="email" href="mailto:tim.pawson@email.com">tim.pawson@email.com</a></div>
    </li>

    <li class="col-4"><img src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;cs=srgb&amp;s=5ba0eb3fce2a3b77dd7d18bf1615ddee&amp;w=150&amp;h=150"/>
      <div class="details"><span class="name">Amanda Tyler</span><span class="title">Frontend Developer</span><a class="phone" href="tel:123-456-789">123-456-789</a><a class="email" href="mailto:amanda.tyler@email.com">amanda.tyler@email.com</a></div>
    </li>

    <li class="col-4"><img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;cs=srgb&amp;s=952f907e565bc7c4c7eb53497510863f&amp;w=150&amp;h=150"/>
      <div class="details"><span class="name">Thomas Jones</span><span class="title">Fullstack Developer</span><a class="phone" href="tel:123-456-789">123-456-789</a><a class="email" href="mailto:tom.jones@email.com">tom.jones@email.com</a></div>
    </li>
  </ul>
</div>


  

</template>

<style lang="scss" scoped>
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVc.ttf) format('truetype');
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: normal;
  src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1x4gaVc.ttf) format('truetype');
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: normal;
  src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1x4gaVc.ttf) format('truetype');
}

.container {
  padding: 15px;

}
.clearfix {
  content: '';
  display: block;
  clear: both;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  
}
.cards li {
  
  // display: inline-block;
  // margin: 10px;
  // padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  font-size: 0.9em;
  transition: all 0.2s ease-in-out;
  text-align: center;
}
.cards li:after,
.cards li:before {
  content: '';
  display: block;
  clear: both;
}
.cards li img {
  display: inline-block;
  width: 100%;
  height: auto;
  max-width: 150px;
  float: left;
  border-radius: 50%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
}
.cards li .details {
  float: left;
  text-align: left;
  transition: all 0.5s ease-in-out;
  text-shadow: 1px 1px rgba(0, 0, 0, 0);
  min-width: 250px;
}
.cards li .details > span,
.cards li .details > a {
  display: block;
  padding: 0 15px 0 35px;
  margin-bottom: 15px;
  text-decoration: none;
  position: relative;
}
.cards li .details > span:before,
.cards li .details > a:before {
  display: inline-block;
  font: normal normal normal 13px/1 FontAwesome;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 15px;
  width: 15px;
  text-align: center;
  color: #444;
}
.cards li .details a {
  color: #57893c;
  transition: color 0.5s ease-in-out;
}
.cards li .details a:hover,
.cards li .details a:focus {
  color: #97c77e;
  transition: color 0.5s ease-in-out;
}
.cards li .details .name {
  font-weight: 600;
}
.cards li .details .name:before {
  content: "\f2c0";
}
.cards li .details .title:before {
  content: "\f2c1";
}
.cards li .details .phone:before {
  content: "\f095";
}
.cards li .details .email:before {
  content: "\f003";
}
.cards li:hover {
  background: rgba(235, 237, 189, 0.5);
  transition: all 0.2s ease-in-out;
  transform: scale(1.03);
}
.cards li:hover img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  transition: all 0.4s ease-in-out;
}
.cards li:hover .details {
  transition: all 0.5s ease-in-out;
  text-shadow: 1px 1px #dfe295;
}
@media (max-width: 550px) {
  .cards li {
    display: block;
    width: auto;
    max-width: 200px;
    margin: 30px auto;
  }
  .cards li img,
  .cards li .details {
    float: none;
  }
  .cards li img {
    margin: 0 auto;
  }
  .cards li .details {
    margin-top: 20px;
    text-align: center;
    min-width: 0;
  }
  .cards li .details span,
  .cards li .details a {
    padding: 0;
    white-space: break-all;
    word-wrap: break-word;
  }
  .cards li .details span:before,
  .cards li .details a:before {
    display: none;
  }
}

</style>