// let btn=document.querySelector('button');
// let ul=document.querySelector('ul')
// let input=document.querySelector('input')

// btn.addEventListener('click',()=>{
//    let li=document.createElement('li')
//    li.innerText=input.value;
//    ul.appendChild(li)
//    input.value=""
//    let dltBtn=document.createElement('button');
//    dltBtn.innerText='Delete'
//    dltBtn.classList.add('delete')
//    li.appendChild(dltBtn)
//    console.log(document.querySelectorAll('.delete'))

//    })

//    let delBtns=document.querySelectorAll('.delete');

//    console.log(delBtns)
  
//    ul.addEventListener('click',(event)=>{
//       if(event.target.nodeName=='BUTTON'){

//          let listItem=event.target.parentElement;
//          listItem.remove();
//          console.log(listItem)
         
//       }
     
//    })

let gameSeq=[];
let userSeq=[];
let btns=['yellow','red','purple','green'];
let highScore;

let started=false;
let level=0;

let h2=document.querySelector('h2')
let p=document.querySelector('p')

document.addEventListener('keypress',(event)=>{
  if(started==false){
   
   started=true;
   levelUp();
  }
})

function gameFlash(btn){
   btn.classList.add('flash')
   setTimeout(()=>{
      btn.classList.remove('flash')
   },250)

}

function userFlash(btn){
   btn.classList.add('userFlash')
   setTimeout(()=>{
      btn.classList.remove('userFlash')
   },250)

}

function levelUp(){
   userSeq=[];
   level++;
   h2.innerText=`Level ${level}`

   let randIdx=Math.floor(Math.random()*3)
   let randColor=btns[randIdx]
   let randBtn=document.querySelector(`.${randColor}`)
   // console.log(randIdx)
   // console.log(randColor)
   // console.log(randBtn)
   gameSeq.push(randColor)
   
   gameFlash(randBtn);

}



//step 3

function checkSeq(idx){
   
  
   if(userSeq[idx]==gameSeq[idx])
   {
      if(userSeq.length==gameSeq.length)
      {
         setTimeout(()=>{
            levelUp();
         },1000)
         
      }
     
   }else{
      h2.innerHTML=`Game over ! your score was <b>${level}</b> <br>  Press any key to Start`
      highScore=level;
       p.innerHTML=`Your previous High score is <b>${highScore}</b>`;
      
      document.querySelector('body').style.backgroundColor='red'
      setTimeout(()=>{
      document.querySelector('body').style.backgroundColor='white'
      },150);
      reset();
   }
   
}

function buttonPress(){
   let btn=this
   userFlash(btn)

   userColor=this.getAttribute('id');
   // console.log(userColor)
   userSeq.push(userColor)
 

   checkSeq(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns){
   btn.addEventListener('click',buttonPress)
}
   
function reset(){
started=false;
gameSeq=[];
userSeq=[];
level=0;
}





  


 



