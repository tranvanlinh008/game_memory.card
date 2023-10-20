
const memoryGame = document.querySelector(`.app`);
let sothe = [{ten:'😊',cmnd:1},{ten:'🤣',cmnd:2},{ten:'❤',cmnd:3},{ten:'😍',cmnd:4},{ten:'😁',cmnd:5},{ten:'😜',cmnd:6},{ten:'💋',cmnd:7},{ten:'✨',cmnd:8},{ten:'🎁',cmnd:9},{ten:'😎',cmnd:10},{ten:'🎶',cmnd:11},{ten:'🐱‍👤',cmnd:12}];




sothe = sothe.concat(sothe);
// console.log(sothe);
function saotron(arr) {
    for(let i = 0; i< arr.length; i++){
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i] , arr[j]] = [arr[j],arr[i]];
        
    }
    return arr
}
// sothe = saotron(sothe)
// console.log(sothe)

function taothe(sothe){
    sothe = saotron(sothe)
    const timtheapp = document.getElementById(`app`);
    timtheapp.innerHTML=``;
    for( let i = 0 ; i < sothe.length; i++){
    //  let taothediv = document.createElement(`div`);
    //  taothediv.textContent = sothe[i];
    //  console.log(taothediv)
    const scene = document.createElement(`div`);
    scene.className = `scene`;

    const card = document.createElement(`div`);
    card.dataset.index = sothe[i].cmnd;
    card.className = `card`;
    const frontFace = document.createElement(`div`);
    frontFace.className = `card__face card__face--front`;
    frontFace.textContent = `?`;
    const backFace = document.createElement(`div`);
    backFace.className=`card__face card__face--back`;
    backFace.textContent=sothe[i].ten;
    card.appendChild(frontFace);
    card.appendChild(backFace);
    scene.appendChild(card);
    
    timtheapp.appendChild(scene);
    // console.log(document.querySelectorAll(`.card`));
    }
}
taothe(sothe);
// document.write(`adadasdsa`)
let dem =0;
  lichSu = []
  let luotChoi =[];
  let demKetQua =0;

function choigame() {
    let thecardall = document.querySelectorAll(`.card`);
    function sukienthecard(event) {
      console.log(`adasd`);
    // event.target.classList.add(`is-flipped`)
    const cardElement = event.target.closest(`.card`);
    luotChoi.push(cardElement)
    // console.log(luo)
    if(!cardElement.classList.contains(`is-flipped`)){
        cardElement.classList.add(`is-flipped`);
        lichSu.push(cardElement.dataset.index);
        dem++ ;
        // console.log(lichSu)
        if (dem === 2){
            if(lichSu[0] ===lichSu[1]){
                // cardElement.style.pointerEvents =`none`;
                document.querySelectorAll(`[data-index='${lichSu[0]}']`).forEach(function(i){
                    i.style.pointerEvents = 'none';
                })

                // console.log(`adsa`)
                demKetQua++
            }
            
            if(lichSu[0] !==lichSu[1]){
                // document.querySelector(`[data-index='${lichSu[0]}']`).classList.remove(`is-flipped`);
                // document.querySelector(`[data-index='${lichSu[1]}']`).classList.remove(`is-flipped`);

                // console.log(luotChoi)
                
                    luotChoi.forEach(function(i){
                        setTimeout(function(){
                            i.classList.remove(`is-flipped`)
                        },1000)
                        
                        
                    })
                    
                
                    
                
            }
            if(demKetQua===12){
                alert(`win`)
            }
            dem =0;
            lichSu=[];
            luotChoi=[];
        }
        
    }

    }
    for (let i = 0; i < thecardall.length; i++) {
      thecardall[i].addEventListener(`click`, sukienthecard );
    
    }
     
  }

  let choilai=document.querySelector(`.choilai`)
  choilai.addEventListener(`click`,function(){
    taothe(sothe)
    choigame();
    demKetQua=0;
  })

  choigame();
  

  
