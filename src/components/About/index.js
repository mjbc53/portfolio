import React from 'react'
import personalPhoto from '../../assets/images/about-me-image.jpg'

function About(){
  return(
    <section id="about" class="container pt-4">
    <div class="row">
      <h3 class="pink-text text-center large-text col-12">About me</h3>

      <div class="about-me-text text-center">
        <img src={personalPhoto}  class="img-style mt-2"/>
  
        <p class="m-0 py-5 black-text fs-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut 
          lectus pretium, rutrum ex a, gravida ipsum. Pellentesque ut mi in ipsum 
          porttitor egestas. Sed vel euismod quam, a placerat dolor. Phasellus
          neque neque, 
          facilisis quis rhoncus quis, tempor non libero. Orci varius natoque
          penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Proin suscipit dui
          eu libero 
          condimentum, eu faucibus urna tincidunt. Aliquam ligula ipsum, pulvinar
          non mi vitae,
          iaculis placerat augue. Maecenas ligula odio, blandit vel semper ut,
          mollis sed or
            ci. Nam dignissim sed diam vitae interdum.
        </p>
        <p class="m-0 pb-5 black-text fs-5">
          Nam egestas dui ipsum, eu tincidunt eros ma
          ttis a. Etiam a eros ac augue pellentesque cursus in vita
          e sem. Duis fringilla nunc turpis, id cursus lectus posuere non. P
          ellentesque sit amet ligula id lacus porta maximus. Sed non nunc
          facilisis, al
          iquam nisi eu, rutrum libero. Curabitur id elit interdum, tincidunt
          magna ac, 
          rhoncus elit. Vestibulum mi nisi, tempus a ullamcorper ac, hendrerit quis libero. 
          rutrum ante massa. Etiam ut erat dui. Nullam condimentum ligula ipsum,
          at accumsan 
          quam commodo tincidunt.
        </p>
      </div>
      </div>    
  </section>
  )
}

export default About