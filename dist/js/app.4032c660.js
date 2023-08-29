(function(){"use strict";var t={2091:function(t,q,A){var e=A(9242),s=A(3396);function i(t,q,A,e,i,h){const n=(0,s.up)("HomeView");return(0,s.wg)(),(0,s.j4)(n)}const h={class:"flex flex-col min-h-screen h-full bg-darkBg"},n={class:"flex-grow -mt-1"},r={class:"flex justify-center"},a={class:"pr-20 pl-20 pt-10 pb-10"},o={class:"p-5"};function g(t,q,A,e,i,g){const l=(0,s.up)("StackerWindow"),c=(0,s.up)("DevSupport");return(0,s.wg)(),(0,s.iD)("div",h,[(0,s._)("div",n,[(0,s._)("div",r,[(0,s._)("div",a,[(0,s.Wm)(l)])])]),(0,s._)("div",o,[(0,s.Wm)(c)])])}var l=A(7139);const c=(0,s._)("div",{class:"flex justify-center"},[(0,s._)("span",{class:"text-white text-2xl font-bold"},"STACKER")],-1),d={class:"flex justify-center"},u=["id"],m=["id"],p={class:"pt-3 pb-3"},w={class:"flex justify-center"},S={class:"text-white text-xl font-bold"},B={class:"flex justify-center pt-1"},C={key:1},b={class:"flex justify-center pt-4"},T={class:"flex justify-center items-center"},y=(0,s._)("span",{class:"text-white mb-1 pr-1"},"Size:",-1),k={class:"flex justify-center items-center pt-1"},v=(0,s._)("span",{class:"text-white mb-1 pr-1"},"Width:",-1),f={class:"flex justify-center items-center pt-1"},x=(0,s._)("span",{class:"text-white mb-1 pr-1"},"Height:",-1),G={class:"flex justify-center items-center pt-1"},D=(0,s._)("span",{class:"text-white mb-1 pr-1"},"Theme:",-1),E={class:"flex justify-center items-center pt-1"},I=(0,s._)("span",{class:"text-white mb-1 pr-1"},"Difficulty:",-1),M={class:"flex justify-center items-center pt-2"};function R(t,q,A,i,h,n){return(0,s.wg)(),(0,s.iD)(s.HY,null,[((0,s.wg)(),(0,s.iD)("div",{key:h.resetWindow},[c,(0,s._)("div",d,[(0,s._)("div",{class:(0,l.C_)(["pt-0.5 border border-gray-900",h.bgGap])},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.height,(t=>((0,s.wg)(),(0,s.iD)("div",{id:"grid-"+(t-1),key:t,class:(0,l.C_)([n.getColHeight(),"mb-0.5 mr-0.5"])},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.width,(q=>((0,s.wg)(),(0,s.iD)("div",{class:(0,l.C_)(["inline-block ml-0.5",n.getCubeSize()+" "+this.bgBack]),key:q,id:t-1+"-"+q},null,10,m)))),128))],10,u)))),128))],2)]),(0,s._)("div",p,[h.showEndScreen?((0,s.wg)(),(0,s.iD)("div",{key:h.showEndScreen},[(0,s._)("div",w,[(0,s._)("span",S,(0,l.zw)(h.endText),1)]),(0,s._)("div",B,[(0,s._)("button",{class:(0,l.C_)(["text-white font-bold px-3 py-2 rounded-xl",n.getButtonColour()]),onClick:q[0]||(q[0]=(...t)=>n.reset&&n.reset(...t))}," Reset ",2)])])):((0,s.wg)(),(0,s.iD)("div",C,[((0,s.wg)(),(0,s.iD)("div",{class:"flex justify-center",key:h.pauseButton},[(0,s._)("button",{class:(0,l.C_)(["text-white font-bold w-20 h-20 rounded-full text-xl",n.getButtonColourPause()]),onClick:q[1]||(q[1]=(...t)=>n.stopCRow&&n.stopCRow(...t))},(0,l.zw)(h.stackText),3)]))])),(0,s._)("div",b,[(0,s._)("button",{class:(0,l.C_)(["text-white font-bold px-3 py-2 rounded-xl",n.getButtonColour()]),onClick:q[2]||(q[2]=(...t)=>n.showSettings&&n.showSettings(...t))},(0,l.zw)(h.settingsText),3)])])])),h.showSettingsScreen?((0,s.wg)(),(0,s.iD)("div",{key:h.showSettingsScreen},[(0,s._)("div",T,[y,(0,s.wy)((0,s._)("input",{type:"range",min:"1",max:"6",class:"slider w-24",id:"sizeSlider","onUpdate:modelValue":q[3]||(q[3]=t=>h.settingsGameSize=t)},null,512),[[e.nr,h.settingsGameSize]])]),(0,s._)("div",k,[v,(0,s.wy)((0,s._)("input",{type:"range",min:"5",max:"12",class:"slider w-24",id:"widthSlider","onUpdate:modelValue":q[4]||(q[4]=t=>h.settingsWidth=t)},null,512),[[e.nr,h.settingsWidth]])]),(0,s._)("div",f,[x,(0,s.wy)((0,s._)("input",{type:"range",min:"10",max:"20",class:"slider w-24",id:"heightSlider","onUpdate:modelValue":q[5]||(q[5]=t=>h.settingsHeight=t)},null,512),[[e.nr,h.settingsHeight]])]),(0,s._)("div",G,[D,(0,s.wy)((0,s._)("input",{type:"range",min:"1",max:"7",class:"slider w-24",id:"themeSlider","onUpdate:modelValue":q[6]||(q[6]=t=>h.settingsTheme=t)},null,512),[[e.nr,h.settingsTheme]])]),(0,s._)("div",E,[I,(0,s.wy)((0,s._)("input",{type:"range",min:"1",max:"9",class:"slider w-24",id:"diffSlider","onUpdate:modelValue":q[7]||(q[7]=t=>h.settingsTimerBaseSpeed=t)},null,512),[[e.nr,h.settingsTimerBaseSpeed]])]),(0,s._)("div",M,[(0,s._)("button",{class:(0,l.C_)(["text-white font-bold px-3 py-2 rounded-xl mr-2",n.getButtonColour()]),onClick:q[8]||(q[8]=(...t)=>n.muteSound&&n.muteSound(...t))},(0,l.zw)(h.settingsMuteText),3),(0,s._)("button",{class:(0,l.C_)(["text-white font-bold px-3 py-2 rounded-xl ml-2",n.getButtonColour()]),onClick:q[9]||(q[9]=(...t)=>n.resetSettings&&n.resetSettings(...t))}," Reset ",2)])])):(0,s.kq)("",!0)],64)}A(7658);var z="data:audio/mpeg;base64,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",L="data:audio/mpeg;base64,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",Q=A.p+"media/win.97f2a1c2.mp3",F=A.p+"media/gameover.d21d117f.mp3",Y={name:"StackerWindow",data(){return{height:15,width:7,cubeSize:6,wVal:.25,resetWindow:!1,gameBoard:null,gameCenter:0,cRowSize:3,showEndScreen:!1,pauseButton:!1,blinkCounter:0,endText:"GAME OVER",stackText:"Stack!",settingsText:"Settings",settingsMuteText:"Mute",timerInterval:null,timerTick:350,timerBaseSpeed:350,timerSpeedAdj:0,cStart:0,cLevel:0,cRight:!0,dPos:0,dContents:null,inDemo:!0,showSettingsScreen:!1,settingsGameSize:1,settingsHeight:15,settingsWidth:7,settingsTimerBaseSpeed:5,settingsTheme:1,settingsMute:!1,bgBack:"bg-stackBack",bgFor:"bg-stackFor",bgGap:"bg-stackGap"}},mounted(){this.resetBoard(),this.gameCenter=Math.round(this.width/2),this.cStart=this.gameCenter-1,this.cLevel=this.height-1,this.stackText="Start",this.settingsGameSize=this.$store.getters.settingsGameSize,this.settingsHeight=this.$store.getters.settingsHeight,this.settingsWidth=this.$store.getters.settingsWidth,this.settingsTimerBaseSpeed=this.$store.getters.settingsTimerBaseSpeed,this.settingsTheme=this.$store.getters.settingsTheme,this.settingsMute=this.$store.getters.settingsMute,this.settingsMuteText=this.settingsMute?"Unmute":"Mute",this.reloadWindow(),this.runDemo()},methods:{moveCRow(){this.pauseButton&&(this.pauseButton=!1),0===this.cRowSize&&this.stopInterval(),this.playSound(z),this.cRight?(this.gameBoard[this.cLevel][this.cStart]=0,this.cStart++):(this.gameBoard[this.cLevel][this.cStart+this.cRowSize-1]=0,this.cStart--);let t=this.cStart+this.cRowSize;for(let e=this.cStart;e<t;e++)this.gameBoard[this.cLevel][e]=1;let q=0,A=this.width+2;1===this.cRowSize&&(q=1,A-=1),this.cStart<=q?this.cRight=!0:t>=A&&(this.cRight=!1),this.displayFromArray(this.cLevel)},stopCRow(){if(this.pauseButton)return;if(this.inDemo)return this.runGame(!0),void(this.inDemo=!1);if(this.pauseButton=!0,this.stopInterval(),this.cRight=Math.random()>=.5,this.cLevel===this.height-1)return 1!==this.gameBoard[this.cLevel][0]&&1!==this.gameBoard[this.cLevel][this.width+1]||(this.cRowSize-=1),this.cLevel--,this.genRandomCRow(this.cLevel),this.displayFromArray(this.cLevel),void this.runGame();let t=[];for(let q=0;q<this.width+2;q++)1===this.gameBoard[this.cLevel][q]&&0===this.gameBoard[this.cLevel+1][q]&&(this.cRowSize--,this.gameBoard[this.cLevel][q]=0,t.push(q));this.upDifficulty(),this.cLevel--,0===this.cRowSize&&this.stopGame(!0),this.cLevel<0&&this.cRowSize>0?this.stopGame(!1):(this.cRowSize>0&&this.genRandomCRow(this.cLevel),t.length>0?this.runBlink(t,this.cLevel+1):(this.displayFromArray(this.cLevel),this.displayFromArray(this.cLevel+1),this.runGame()))},displayFromArray(t){for(let q=0;q<this.height;q++)this.setActive(t,q,1===this.gameBoard[t][q])},setActive(t,q,A=!0){if(q<1||q>this.width)return;let e=this.convertToId(t,q),s=document.getElementById(e);null!=s&&(A?s.classList.replace(this.bgBack,this.bgFor):s.classList.replace(this.bgFor,this.bgBack))},runBlink(t,q){this.blinkCounter=0,this.timerInterval=setInterval((()=>{this.blinkCubes(t,q)}),300)},blinkCubes(t,q){for(let A=0;A<t.length;A++)this.gameBoard[q][t[A]]=0===this.gameBoard[q][t[A]]?1:0;if(this.displayFromArray(q),this.blinkCounter%2===0&&this.cRowSize>0&&this.playSound(L),this.blinkCounter++>=7)if(this.stopInterval(),this.cRowSize>0){for(let A=0;A<t.length;A++)this.gameBoard[q][t[A]]=0;this.displayFromArray(this.cLevel),this.displayFromArray(this.cLevel+1),this.runGame()}else this.showEndScreen=!0},genRandomCRow(t){this.cStart=Math.round(Math.random()*(this.width-this.cRowSize-1)+1);for(let q=0;q<this.width+2;q++)this.gameBoard[t][q]=q<this.cStart||q>this.cStart+this.cRowSize-1?0:1},stopInterval(){clearInterval(this.timerInterval),this.dPos=0},convertToId(t,q){return t+"-"+q},getColHeight(){return"h-"+this.cubeSize},getCubeSize(){return"w-"+this.cubeSize+" h-"+this.cubeSize},runGame(t=!1){this.stopInterval(),t&&(this.resetBoard(),this.stackText="Stack!",this.settingsText="Stop",this.gameBoard[this.height-1][this.gameCenter-1]=1,this.gameBoard[this.height-1][this.gameCenter]=1,this.gameBoard[this.height-1][this.gameCenter+1]=1,this.displayFromArray(this.height-1)),this.timerInterval=setInterval((()=>{this.moveCRow()}),this.timerTick)},upDifficulty(){let t=(this.height-1-this.cLevel)/(this.height-1);this.timerTick=Math.max(this.timerBaseSpeed*(1-t),50*(1-this.timerSpeedAdj));let q=this.timerSpeedAdj/2;t>.6-q?2===this.cRowSize&&(this.gameBoard[this.cLevel-1][this.cStart+this.cRowSize-1]=0,this.cRowSize--):t>.25-q&&3===this.cRowSize&&(this.gameBoard[this.cLevel-1][this.cStart+this.cRowSize-1]=0,this.cRowSize--)},stopGame(t){this.stopInterval(),this.showEndScreen=!0,t?(this.playSound(F),this.endText="GAME OVER"):(this.playSound(Q),this.endText="YOU WIN")},reset(){this.resetBoard(),this.cLevel=this.height-1,this.cStart=this.gameCenter-1,this.cRowSize=3,this.timerTick=350,this.gameBoard[this.height-1][this.gameCenter-1]=1,this.gameBoard[this.height-1][this.gameCenter]=1,this.gameBoard[this.height-1][this.gameCenter+1]=1,this.displayFromArray(this.height-1),this.showEndScreen=!1,this.runGame(),this.endText="GAME OVER",this.stackText="Stack!"},printBoard(){console.clear();let t="";for(let q=0;q<this.gameBoard.length;q++){for(let A=0;A<this.gameBoard[q].length;A++)t+=this.gameBoard[q][A]+" ";t+="\n"}console.log(t),console.log("cStart: "+this.cStart),console.log("cRowSize: "+this.cRowSize)},resetBoard(){this.gameBoard=[];for(let t=0;t<this.height;t++){let q=[];for(let t=0;t<this.width+2;t++)q.push(0);this.gameBoard.push(q),this.displayFromArray(t)}},runDemo(){this.stopInterval(),this.resetBoard(),this.dContents=[[1,1,1],[1,0,0],[1,1,1],[0,0,1],[1,1,1],[0,0,0],[1,1,1],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,0,0],[1,1,1],[1,0,1],[1,1,1],[1,0,1],[1,0,1],[0,0,0],[1,1,1],[1,0,0],[1,0,0],[1,0,0],[1,1,1],[0,0,0],[1,0,1],[1,0,1],[1,1,0],[1,0,1],[1,0,1],[0,0,0],[1,1,1],[1,0,0],[1,1,1],[1,0,0],[1,1,1],[0,0,0],[1,1,0],[1,0,1],[1,1,0],[1,0,1],[1,0,1],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],this.timerInterval=setInterval((()=>{this.advanceDemo()}),500)},advanceDemo(){let t=Math.round(this.width/2)-1,q=this.height-1;for(let A=0;A<q;A++)this.gameBoard[A]=Array.from(this.gameBoard[A+1]),this.displayFromArray(A);this.gameBoard[q][t]=this.dContents[this.dPos][0],this.gameBoard[q][t+1]=this.dContents[this.dPos][1],this.gameBoard[q][t+2]=this.dContents[this.dPos][2],this.displayFromArray(q),this.dPos>=this.dContents.length-1?this.dPos=0:this.dPos++},showSettings(){if(!this.inDemo)return this.reset(),this.stackText="Start",this.settingsText="Settings",this.pauseButton=!1,this.stopInterval(),this.resetBoard(),this.inDemo=!0,void this.runDemo();this.showSettingsScreen=!this.showSettingsScreen,this.settingsText=this.showSettingsScreen?"Hide":"Settings",this.showSettingsScreen?(this.stopInterval(),this.pauseButton=!0):(this.runDemo(),this.pauseButton=!1)},reloadWindow(){this.resetWindow=!this.resetWindow},getButtonColour(){return this.bgBack+" hover:"+this.bgGap},getButtonColourPause(){return this.pauseButton?this.bgBack:this.getButtonColour()},playSound(t){if(this.settingsMute)return;let q=new Audio(t);q.play()},muteSound(){this.settingsMute=!this.settingsMute,this.settingsMuteText=this.settingsMute?"Unmute":"Mute"},resetSettings(){this.settingsGameSize=1,this.settingsHeight=15,this.settingsWidth=7,this.settingsTimerBaseSpeed=5,this.settingsTheme=1,this.settingsMute=!1,this.settingsMuteText="Mute"}},watch:{settingsGameSize(){let t=4;this.cubeSize=t+2*Number(this.settingsGameSize),this.reloadWindow(),this.$store.commit("setGameSize",this.settingsGameSize)},settingsWidth(){this.width=Number(this.settingsWidth),this.gameCenter=Math.round(this.width/2),this.cStart=this.gameCenter-1,this.resetBoard(),this.reloadWindow(),this.$store.commit("setWidth",this.settingsWidth)},settingsHeight(){this.height=Number(this.settingsHeight),this.cLevel=this.height-1,this.resetBoard(),this.reloadWindow(),this.$store.commit("setHeight",this.settingsHeight)},settingsTimerBaseSpeed(){this.settingsTimerBaseSpeed=Number(this.settingsTimerBaseSpeed);let t=this.settingsTimerBaseSpeed-5,q=20*t/100;this.timerBaseSpeed=350-200*q,this.timerSpeedAdj=q,this.timerTick=this.timerBaseSpeed,this.$store.commit("setTimerBaseSpeed",this.settingsTimerBaseSpeed)},settingsTheme(){let t,q,A,e=this.bgBack,s=this.bgFor;switch(Number(this.settingsTheme)){case 1:t="bg-stackBack",q="bg-stackFor",A="bg-stackGap";break;case 2:t="bg-red-900",q="bg-red-300",A="bg-red-700";break;case 3:t="bg-purple-900",q="bg-purple-300",A="bg-purple-700";break;case 4:t="bg-green-900",q="bg-green-300",A="bg-green-700";break;case 5:t="bg-pink-900",q="bg-pink-300",A="bg-pink-700";break;case 6:t="bg-yellow-900",q="bg-yellow-300",A="bg-yellow-700";break;case 7:t="bg-gray-900",q="bg-gray-300",A="bg-gray-700";break}this.bgBack=t,this.bgFor=q,this.bgGap=A;for(let i=1;i<this.gameBoard.length;i++)for(let t=1;t<this.gameBoard[i].length-1;t++){let q=this.convertToId(i,t),A=document.getElementById(q);A.classList.replace(e,this.bgBack),A.classList.replace(s,this.bgFor)}this.reloadWindow(),this.$store.commit("setTheme",this.settingsTheme)},settingsMute(){this.$store.commit("setMute",this.settingsMute)}}},U=A(89);const W=(0,U.Z)(Y,[["render",R]]);var Z=W;const j={class:"text-white"},H=(0,s.uE)('<p class="text-center font-semibold">Made by <span class="whitespace-nowrap">Daniel Keane Kelly</span></p><div class="flex justify-center pt-2"><a href="https://ko-fi.com/X8X7HOLE0" target="_blank"><img height="36" style="border:0px;height:36px;" src="https://storage.ko-fi.com/cdn/kofi2.png?v=3" border="0" alt="Buy Me a Coffee at ko-fi.com"></a></div>',2),N=[H];function J(t,q,A,e,i,h){return(0,s.wg)(),(0,s.iD)("div",j,N)}var P={name:"DevSupport"};const K=(0,U.Z)(P,[["render",J]]);var O=K,V={name:"HomeView",components:{DevSupport:O,StackerWindow:Z}};const X=(0,U.Z)(V,[["render",g]]);var _=X,$={name:"App",components:{HomeView:_}};const tt=(0,U.Z)($,[["render",i]]);var qt=tt,At=A(65),et=A(2415),st=(0,At.MT)({state(){return{settingsGameSize:1,settingsHeight:15,settingsWidth:7,settingsTimerBaseSpeed:5,settingsTheme:1,settingsMute:!1}},mutations:{setGameSize(t,q){t.settingsGameSize=q},setHeight(t,q){t.settingsHeight=q},setWidth(t,q){t.settingsWidth=q},setTimerBaseSpeed(t,q){t.settingsTimerBaseSpeed=q},setTheme(t,q){t.settingsTheme=q},setMute(t,q){t.settingsMute=q}},getters:{settingsGameSize:t=>t.settingsGameSize,settingsHeight:t=>t.settingsHeight,settingsWidth:t=>t.settingsWidth,settingsTimerBaseSpeed:t=>t.settingsTimerBaseSpeed,settingsTheme:t=>t.settingsTheme,settingsMute:t=>t.settingsMute},plugins:[(0,et.Z)()]});let it=(0,e.ri)(qt);it.use(st),it.mount("#app")}},q={};function A(e){var s=q[e];if(void 0!==s)return s.exports;var i=q[e]={exports:{}};return t[e].call(i.exports,i,i.exports,A),i.exports}A.m=t,function(){var t=[];A.O=function(q,e,s,i){if(!e){var h=1/0;for(o=0;o<t.length;o++){e=t[o][0],s=t[o][1],i=t[o][2];for(var n=!0,r=0;r<e.length;r++)(!1&i||h>=i)&&Object.keys(A.O).every((function(t){return A.O[t](e[r])}))?e.splice(r--,1):(n=!1,i<h&&(h=i));if(n){t.splice(o--,1);var a=s();void 0!==a&&(q=a)}}return q}i=i||0;for(var o=t.length;o>0&&t[o-1][2]>i;o--)t[o]=t[o-1];t[o]=[e,s,i]}}(),function(){A.n=function(t){var q=t&&t.__esModule?function(){return t["default"]}:function(){return t};return A.d(q,{a:q}),q}}(),function(){A.d=function(t,q){for(var e in q)A.o(q,e)&&!A.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:q[e]})}}(),function(){A.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){A.o=function(t,q){return Object.prototype.hasOwnProperty.call(t,q)}}(),function(){A.p="/stacker/"}(),function(){var t={143:0};A.O.j=function(q){return 0===t[q]};var q=function(q,e){var s,i,h=e[0],n=e[1],r=e[2],a=0;if(h.some((function(q){return 0!==t[q]}))){for(s in n)A.o(n,s)&&(A.m[s]=n[s]);if(r)var o=r(A)}for(q&&q(e);a<h.length;a++)i=h[a],A.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return A.O(o)},e=self["webpackChunkstacky"]=self["webpackChunkstacky"]||[];e.forEach(q.bind(null,0)),e.push=q.bind(null,e.push.bind(e))}();var e=A.O(void 0,[998],(function(){return A(2091)}));e=A.O(e)})();
//# sourceMappingURL=app.4032c660.js.map