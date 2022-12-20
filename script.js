
const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){

    btn.addEventListener("click", function(e){

        const color = e.currentTarget.classList;

        if(color.contains("btn1")){
            theme.style.setProperty("--theme-color", "#3498db");
        }
        else if(color.contains("btn2")){
            theme.style.setProperty("--theme-color", "#ff1756");
        }
        else if(color.contains("btn3")){
            theme.style.setProperty("--theme-color", "#1cb65d");
        }
        else if(color.contains("btn4")){
            theme.style.setProperty("--theme-color", "#8e44ad");
        }
        else{
            theme.style.setProperty("--theme-color", "#f4b932");
        }
    });
});
// photo taking
const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});
// name giving 
document.getElementById("name").innerHTML=localStorage.getItem("textvalue");
document.getElementById("post").innerHTML=localStorage.getItem("textvalue1");

// post giving
//let b= document.getElementById("post-name").value;

   
   // console.log(a);
    //console.log(b);
    