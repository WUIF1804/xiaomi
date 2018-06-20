window.onload=function(){
	// 顶部导航开始
	let hRightR=document.getElementsByClassName("hRightR")[0];
	let gwcBox=document.getElementsByClassName("gwcBox")[0];
	hRightR.onmouseenter=function(){
       gwcBox.style.height="98px";
       gwcBox.style.boxShadow="0 2px 5px 2px rgba(0,0,0,0.3)";
	   }
	   hRightR.onmouseleave=function(){
       gwcBox.style.height="0";
       gwcBox.style.boxShadow="none";
       }
       // 顶部导航结束
       // 中部导航开始
       let  daohangzhong=document.getElementsByClassName("daohangzhong")[0];
       let  alis=daohangzhong.getElementsByTagName("a");
       let  dhzBox=document.getElementsByClassName("dhzBox");
       for(let i=0;i<alis.length-2;i++){
       	   alis[i].onmouseenter=function(){
       	   	   for(let j=0;j<alis.length-2;j++){
       	   	   dhzBox[j].style.height="0";	
       	   	   } 
       	   	   dhzBox[i].style.height="230px";
       	   	   dhzBox[i].style.boxShadow="0 2px 5px 2px rgba(0,0,0,0.3)";
       	   }
       	   alis[i].onmouseleave=function(){
       	   	    dhzBox[i].style.height="0";
       	   	    dhzBox[i].style.boxShadow="none";
       	   }
       }
       // 中部导航结束
       // 侧导航开始
       let xialaL=document.getElementsByClassName("xialaL")[0];
       let lis=xialaL.getElementsByTagName("li");
       let asideBox=document.getElementsByClassName("asideBox");
       for(let i=0;i<lis.length;i++){
	       	 lis[i].onmouseenter=function(){
		           for(let j=0;j<lis.length;j++){
		           	asideBox[j].style.display="none";
		           } 
	         asideBox[i].style.display="block";
	         }
	         lis[i].onmouseleave=function(){
	           asideBox[i].style.display="none";
	         }
       }         
       // 侧导航结束
       // 单品开始
      let danpindi=document.querySelector(".danpindi");
      let zuo=document.querySelector(".zuo");
      let you=document.querySelector(".you");
       
      let lw=parseInt(getComputedStyle(danpindi,null).width)/3;
      console.log(danpindi,zuo,you,lw)

      let times=0;
      zuo.onclick=function(){
        times++;
        if(times==3){
          times=2;
        }
        danpindi.style.transform=`translateX(${-lw*times}px)`;
      }
      you.onclick=function(){
        times--;
        if(times<0){
          times=0;
        }
        danpindi.style.transform=`translateX(${-lw*times}px)`;
      }
       // 单品结束
       // 家电开始
            
    function xxk(jiadian){

        let jiadianHR=jiadian.getElementsByClassName("jiadianHR")[0];
        let jiadianWR=jiadian.getElementsByClassName("jiadianWR"); 
        let lis1=jiadianHR.getElementsByTagName("li");
        console.log(lis1);
         
         for(let i=0;i<lis1.length;i++){
	       	 
           lis1[i].onmouseenter=function(){
		           for(let j=0;j<lis1.length;j++){
		           	jiadianWR[j].style.display="none";
		           } 
	          jiadianWR[i].style.display="block";
	         }
       	 }         
       // 家电结束
    }
     let jiadian=document.getElementsByClassName("jiadian")[0];
     console.log(jiadian);
     xxk(jiadian);
     //智能开始
     let jiadian1=document.getElementsByClassName("jiadian")[1];
     console.log(jiadian);
     xxk(jiadian1);
     //智能结束
     //搭配开始
     let jiadian2=document.getElementsByClassName("jiadian")[2];
     console.log(jiadian);
     xxk(jiadian2);
     //搭配结束
      //配件开始
     let jiadian3=document.getElementsByClassName("jiadian")[3];
     console.log(jiadian);
     xxk(jiadian3);
     //配件结束
        //周边开始
     let jiadian4=document.getElementsByClassName("jiadian")[4];
     console.log(jiadian);
     xxk(jiadian4);
     //周边结束
     

     // banner轮播图开始
     let  lis2=document.querySelectorAll(".imgbox li");
     let  lbd=document.querySelectorAll(".lbd li");
     console.log(lis2,lbd);
     let banner=document.querySelector(".banner");
     let banL=document.querySelector(".banL");
     let banR=document.querySelector(".banR");
     console.log(banner,banL,banR);
    
     // 当前页面
     let lis2width=parseInt(getComputedStyle(banner,null).width);
     let current=0,next=0;
     let t=setInterval(moveR,2000);
     let flag=true;
      // 初始化
      lis2[0].style.left="0";
     function moveR(){
         next++;
         if(next==lis2.length){
          next=0;
         }
         lbd[current].classList.remove("hot");
         lbd[next].classList.add("hot");
         lis2[next].style.left=lis2width+"px";
         animate(lis2[current],{left:-lis2width});
         animate(lis2[next],{left:0},function(){
            flag=true;
         });
         current=next;
     } 
      // 初始化
     function moveL(){
         next--;
         if(next<0){         
          next=lis2.length-1;
         }
         lbd[current].classList.remove("hot");
         lbd[next].classList.add("hot");
         lis2[next].style.left=-lis2width+"px";
         animate(lis2[current],{left:lis2width});
         animate(lis2[next],{left:0},function(){
             flag=true;
         });
         current=next;
     }
     
     banner.onmouseenter=function(){
        clearInterval(t);
     }
     banner.onmouseleave=function(){
        t=setInterval(moveR,2000); 
     }

     banL.onclick=function(){
         if(!flag){
            return;
          } 
         if(next==0){
            next=0;
            return;
          }
         flag=false;
        moveL();
     }
     banR.onclick=function(){
          if(!flag){
            return;
          }
      
          if(next==lis2.length-1){
            next=lis2.length-1;
            return;
         }
          flag=false;
        moveR();
     }
     
     lbd.forEach(function(element,index,obj){
         element.onclick=function(){
          lbd[current].classList.remove("hot");
          lbd[index].classList.add("hot");

          if(current<index){
            lis2[index].style.left=lis2width+"px";
            animate(lis2[current],{left:-lis2width});
            animate(lis2[index],{left:0});
          }
          if(current>index){
            lis2[index].style.left=-lis2width+"px";
            animate(lis2[current],{left:lis2width});
            animate(lis2[index],{left:0});
          }
          next=current=index;
         }
     })
     // banner轮播图结束
     //内容轮播开始
 function nrlb(ttu1){
    let litu=document.querySelector(`.${ttu1}`); 
    let lunbotu=document.querySelectorAll(`.${ttu1} .lunbotu`);
    let dian=document.querySelectorAll(`.${ttu1} .dian a`);
    console.log(litu,lunbotu,dian);
     let btnL=litu.querySelector(".btnL");
     let btnR=litu.querySelector(".btnR");
    let lunbotuwidth=parseInt(getComputedStyle(litu,null).width);
    let current1=0,next1=0;
       dian[current1].classList.add("hot1");
      function moveRR(){ 
         next1++;
         if(next1==lunbotu.length){
          next1=0;
         }
         dian[current1].classList.remove("hot1");
         dian[next1].classList.add("hot1");
         lunbotu[next1].style.left=lunbotuwidth+"px";
         animate(lunbotu[current1],{left:-lunbotuwidth});
         animate(lunbotu[next1],{left:0},function(){
            flag=true;
         });
         current1=next1;
     } 
      // 初始化
     function moveLL(){
         next1--;
         if(next1<0){         
          next1=lis2.length-1;
         }
         dian[current1].classList.remove("hot1");
         dian[next1].classList.add("hot1");
         lunbotu[next1].style.left=-lunbotuwidth+"px";
         animate(lunbotu[current1],{left:lunbotuwidth});
         animate(lunbotu[next1],{left:0},function(){
             flag=true;
         });
         current1=next1;
     }

      btnL.onclick=function(){
         if(!flag){
            return;
          } 
         if(next1==0){
            next1=0;
            return;
          }
         flag=false;
        moveLL();
     }
     btnR.onclick=function(){
          if(!flag){
            return;
          }
      
          if(next1==lunbotu.length-1){
            next1=lunbotu.length-1;
            return;
         }
          flag=false;
        moveRR();
     }

     dian.forEach(function(element1,index1,obj1){
         element1.onclick=function(){
          dian[current1].classList.remove("hot1");
          dian[index1].classList.add("hot1");

          if(current1<index1){
            lunbotu[index1].style.left=lunbotuwidth+"px";
            animate(lunbotu[current1],{left:-lunbotuwidth});
            animate(lunbotu[index1],{left:0});
          }
          if(current1>index1){
            lunbotu[index1].style.left=-lunbotuwidth+"px";
            animate(lunbotu[current1],{left:lunbotuwidth});
            animate(lunbotu[index1],{left:0});
          }
          next1=current1=index1;
         }
     })
  }
    
     nrlb("tu1");
   
     nrlb("tu2");
     
     nrlb("tu3");
   
     nrlb("tu4");
     //内容轮播结束
}  