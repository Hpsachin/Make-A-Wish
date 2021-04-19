<template>
<div class="footer-box">
  <div class="container">
    <div class="line row">
    <div class="col-md-3 col-12 about">
      <h5 class="footer-heading"> ABOUT MAKE A WISH</h5>
      <p>About us</p>
       <p>Why wishes matter</p>
        <p>Our Boards </p>
         <p>Careers</p>
          <p>Contact us</p>
    </div>
    <div class="col-md-3 col-12 about">
    <h5 class="footer-heading">Partners & supporters</h5>
    <p >Partner With us</p>
      <p>Events</p>
    </div>
     <div class="col-md-3 col-12 about">
      <h5 class="footer-heading">Media & news</h5>
       <p>Wish stories </p>
        <p>News </p>
    </div>
      <div class="col-md-3 col-12 about">
      <h5 class="footer-heading">Community</h5>
       <p> Apply for a wish </p>
        <p>Volunteer Community login</p>
        <div class="icons">
        <a href="https://www.facebook.com/MakeAWishAust/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
           <a href="https://www.youtube.com/channel/UCfSX2aXl8uyHErXMhtxXiMg" target="_blank"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
           <a href="https://twitter.com/makeawishaust" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
           <a href="https://www.instagram.com/makeawishaust/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
    </div>
     <div class="col-md-3 col-12 about">
        <img src="@/assets/footerimage.png">
    </div>
  </div>
  <div class="copyright text-light">
    <p><i class="fa fa-copyright" aria-hidden="true"></i> 2020 Make-A-Wish Foundation of Australia Ltd | ABN 97006497632 | Donation over $2 are tax deductible Privacy Policy Terms of Use Commitment to Child Saftey</p>
  </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style>
.footer-box
{
background: #042F55;
padding: 0px 0px 27px 0px;
border-bottom: 1px solid #4d4d4d;
}
.line
{
  border-bottom: 1px solid #536C81;
  padding-top: 60px;
  padding-bottom: 20px;
  color: white!important;
}
.footer-heading{
  color: white!important;
  margin-bottom: 16px;
}

.icons .fa{
  width: 31px;
    height: 32px;
    border-radius: 100%;
    border: 1px solid #6C859C;
    line-height: 31px!important;
    text-align: center!important;
    margin: 0px 8px 0px 0px;
    color: #6C859C;
    cursor: pointer;
}
.copyright{
 color: white;
    font-size: 12.5px;
    margin-top: 14px;
    text-align: center;
}
@media (max-width: 480px) {
.footer-box {
 text-align: center;
}
  .about {
    padding: 8px 0px;
  }
  .about img{
width: 70%;
}
}
</style>
