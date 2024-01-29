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

<div class="container">
  <h1 class="text-center py-5">Contatti</h1>
  <div class="row">

    <div 
      class="col-4 custom-card"
      v-for="(member, index) in store.team"
      :key="index"
    >
      <div class="img-holder">
        <img src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;cs=srgb&amp;s=1cd7edb2ed25c1de4908db807e545988&amp;w=200&amp;h=200"/>
      </div>
      <div class="details">
        <span class="name">{{member.name}}</span>
        <a class="mail">{{ member.contacts[0].mail }}</a>
        <a class="git" href="tel:123-456-789">{{ member.contacts[0].gitHub }}</a>
        <a class="linkedin" href="mailto:emilia.jacobs@email.com">{{ member.contacts[0].linkedIn }}</a>
      </div>
    </div>

  </div>
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

.container-custom {
  width: 90%;
  margin: 0 auto;


}
.clearfix {
  content: '';
  display: block;
  clear: both;
}

.custom-card {
  display: flex;
  border: 1px solid black;
  margin: 35px 15px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  text-align: center;
  width: 31%;
  cursor: pointer;
}
.custom-card li:after,
.custom-card li:before {
  content: '';
  display: block;
  clear: both;
}
.img-holder {
  display: inline-block;
  width: 110px;
  height: 110px;
  border: 1px solid black;
  overflow: hidden;
  max-width: 110px;
  float: left;
  border-radius: 50%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
  img {
    width: 100%;
    object-fit: cover;
    
  }
}
.details {
  float: left;
  text-align: left;
  transition: all 0.5s ease-in-out;
  text-shadow: 1px 1px rgba(0, 0, 0, 0);
  max-width: 250px;

}
.details > span,
.details > a {
  display: block;
  padding: 0 0 0 10px;
  margin-bottom: 5px;
  text-decoration: none;
  position: relative;
  font-size: 0.75rem;
}
.details > span:before,
.details > a:before {
  display: inline-block;
  font: normal normal normal 13px/1 FontAwesome;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 5px;
  width: 15px;
  text-align: center;
  color: #444;
}
.details a {
  color: #57893c;
  transition: color 0.5s ease-in-out;
}
.details a:hover,
.details a:focus {
  color: #97c77e;
  transition: color 0.5s ease-in-out;
}
.details .name {
  font-weight: 600;
}
.name:before {
  content: "\f2c0";
}
.mail:before {
  content: "\f0e0";
}
.git:before {
  content: "\f09b";
}
.linkedin:before {
  content: "\f08c";
}
.custom-card:hover {
  background: rgba(235, 237, 189, 0.5);
  transition: all 0.2s ease-in-out;
  transform: scale(1.03);
}
.custom-card:hover img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  transition: all 0.4s ease-in-out;
}
.custom-card:hover .details {
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