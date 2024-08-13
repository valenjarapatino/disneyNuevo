


const btnLeft = document.querySelector("#btn-left");
      btnRight = document.querySelector("#btn-right");
      slider = document.querySelector("#section");
      /*hace el llamado a las imagenes creando una variable sliderSection*/
      sliderSection = document.querySelectorAll(".section");

      btnLeft.addEventListener("click", e => moveToLeft())
      btnRight.addEventListener("click", e => moveToRight())

      let operacion = 0;
      counter = 0,
      widthImg = 100 / sliderSection.length;
    /*boton de la derecha*/
      function moveToRight (){
        if (counter >= sliderSection.length-1) {
            operacion = 0;
            counter = 0;
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "none"
            
          
        } else{
        counter++;

        operacion = operacion + widthImg;
          slider.style.transform = `translate(-${operacion}%)`;
          slider.style.transition = "all ease .6s"
        }

      }


      function moveToLeft(){
        counter --;
        if (counter < 0 ) {
            counter = sliderSection.length-1;
            operacion = widthImg * (sliderSection.length-1)
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "none";
            return;
        } else{
             operacion = operacion - widthImg;
             slider.style.transform = `translate(-${operacion}&)`
             slider.style.transition = "all ease .6s"
        }

       
        
      }
