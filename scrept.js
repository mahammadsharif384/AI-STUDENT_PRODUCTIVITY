let p=document.querySelectorAll(".p");
let any=document.querySelector("#any");
let body=document.body;
let profile=document.querySelector(".profile");
let profilepic=document.getElementById("profilepic");
let fileinput=document.getElementById("fileinput");
profilepic.addEventListener("click",()=>{
   fileinput.click();
})
fileinput.addEventListener("change",()=>{
   let file=fileinput.files[0];
   if(file){
      let reader=new FileReader();
      reader.onload=function(e){
         profilepic.src=e.target.result;
      };
      reader.readAsDataURL(file);
   }
})
let mode=0;
let count=0;

p.forEach((el)=> {
   el.addEventListener("click",(e)=>{
     let m=e.target.innerText;
        if(m=="Settings"){
      let div=document.createElement("div");
      profile.after(div);
      div.style.height="500px";
       div.style.width="500px";
       div.style.borderRadius="50%";
       div.style.position="absolute";  
       div.style.backgroundColor="red";
       div.style.border="1px solid black";
        div.style.display="flex";
         div.style.flexDirection="row";
          div.style.justifyContent="Center";
          div.style.alignItems="Center"
      //  div.style.marginLeft="10em";
       div.style.color="white";
       div.style.fontSize="5em";
       
      div.innerText="mode";
     
       div.addEventListener("click",()=>{
       if(mode===0){
         body.style.backgroundColor="#1e1e2f";
         mode=1;
         div.remove();
       }
       else{
          body.style. backgroundColor="rgb(24, 24, 24)";
         mode=0;
          div.remove();
       }
       });
      
      }
      else if(m=="Calculeter"){
         let speech=new SpeechSynthesisUtterance(
            'opening calculeter'
         )
         speechSynthesis.speak(speech);
        
         window.location.href="https://mahammadsharif384.github.io/calculeter/";
      }
       else if(m=="Guessing_number"){
          let speech=new SpeechSynthesisUtterance(
            'opening GUessing number game'
         )
         speechSynthesis.speak(speech);
        
         window.location.href="https://mahammadsharif384.github.io/Guessing-number/";
      }
       else if(m=="stopwatch"){
          let speech=new SpeechSynthesisUtterance(
            'opening stopwatch'
         )
         speechSynthesis.speak(speech);
        
         window.location.href="https://mahammadsharif384.github.io/stop-watch/";
      }
       else if(m=="digital_counter"){
          let speech=new SpeechSynthesisUtterance(
            'opening digital counter'
         )
         speechSynthesis.speak(speech);
        
         window.location.href="https://mahammadsharif384.github.io/digital-counter/";
      }
       else if(m=="todays_goals"){
          let speech=new SpeechSynthesisUtterance(
            'opening today goals world'
         )
         speechSynthesis.speak(speech);
        
         window.location.href="https://mahammadsharif384.github.io/Today-s-Goals/";
      }
      else if(m=="Suport"){
          let speech=new SpeechSynthesisUtterance(
            'if you want to suport me follow my instagram and github'
         )
         speechSynthesis.speak(speech);
        
         window.location.href="https://www.instagram.com/sharif__9565?igsh=c2Y4bm9qdHBtY2sy";
      }
      else if(m=="Suport"){
          let speech=new SpeechSynthesisUtterance(
            'Are you shour to log out'
         )
         speechSynthesis.speak(speech);
         let res=alert("are you sure");
         if(res=='ok'){
         window.close();
      }
   }
      
      else{
         alert("sorry");
      }
      
      
      });
    
   });
// });
   
