$(document).ready(function() {
    $(".menu-toggle").on("click", function() {
      $(".nav").toggleClass("showing");
      $(".nav ul").toggleClass("showing");
    });
  
    $(".post-wrapper").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: $(".next"),
      prevArrow: $(".prev"),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });
  



  CKEDITOR.replace('editor1');
  var contentCopy = document.getElementById('editor-content-copy');
         var postButton = document.getElementById('post-button');

         postButton.addEventListener('click', ()=> {
             //contentCopy.innerHTML = CKEDITOR.instances.editor1.document.getBody().getText(); // For plain text
             contentCopy.innerHTML = CKEDITOR.instances.editor1.getData(); // For formatted text
            
         });



         //comment//
         function fun(){
          var w3review = document.getElementById('w3review').value;
          var myPTag = document.createElement("p");
          var myPTagContant =document.createTextNode(""+ w3review );
          document.getElementById('here').appendChild(myPTag);
          myPTag.appendChild(myPTagContant);
          document.getElementById('w3review').value="";
        
          }    

/*
like
*/

function myFunction(x) {
  x.classList.toggle("faRed");
}






































  /*Post*/
  /*
    function fun(){
      var editor = document.getElementById('editor').value;
       var myPTag = document.createElement("p");
        var myPTagContant =document.createTextNode(""+ editor );
        document.getElementById('here').appendChild(myPTag);
        myPTag.appendChild(myPTagContant);
      
         
      
      }*/

  