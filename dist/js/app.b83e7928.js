(function(){"use strict";var t={473:function(t,e,A){var s=A(9242),i=A(3396);function V(t,e,A,s,V,q){const h=(0,i.up)("HomeView");return(0,i.wg)(),(0,i.j4)(h)}const q={class:"flex flex-col min-h-screen h-full bg-darkBg"},h={class:"flex-grow -mt-1"},n={class:"flex justify-center"},r={class:"pt-5 pb-5 pl-2 pr-2"},a={class:"p-5"};function o(t,e,A,s,V,o){const g=(0,i.up)("StackerWindow"),l=(0,i.up)("DevSupport");return(0,i.wg)(),(0,i.iD)("div",q,[(0,i._)("div",h,[(0,i._)("div",n,[(0,i._)("div",r,[(0,i.Wm)(g)])])]),(0,i._)("div",a,[(0,i.Wm)(l)])])}var g=A(7139);const l=t=>((0,i.dD)("data-v-1d8afb82"),t=t(),(0,i.Cn)(),t),c=l((()=>(0,i._)("div",{class:"flex justify-center"},[(0,i._)("span",{class:"text-white text-2xl font-bold"},"STACKER")],-1))),d={class:"flex justify-center"},u=["id"],m=["id"],p={class:"pt-3 pb-3"},w={class:"flex justify-center"},S={class:"text-white text-xl font-bold"},B={class:"flex justify-center pt-1"},y={key:1},f={class:"flex justify-center pt-4"},C={class:"flex justify-center items-center"},k=l((()=>(0,i._)("span",{class:"text-white mb-1 pr-1"},"Size:",-1))),v={class:"flex justify-center items-center pt-1"},T=l((()=>(0,i._)("span",{class:"text-white mb-1 pr-1"},"Width:",-1))),b={class:"flex justify-center items-center pt-1"},x=l((()=>(0,i._)("span",{class:"text-white mb-1 pr-1"},"Height:",-1))),D={class:"flex justify-center items-center pt-1"},E=l((()=>(0,i._)("span",{class:"text-white mb-1 pr-1"},"Theme:",-1))),L={class:"flex justify-center items-center pt-1"},M=l((()=>(0,i._)("span",{class:"text-white mb-1 pr-1"},"Difficulty:",-1))),R={class:"flex justify-center items-center pt-2"};function G(t,e,A,V,q,h){return(0,i.wg)(),(0,i.iD)(i.HY,null,[((0,i.wg)(),(0,i.iD)("div",{key:q.resetWindow},[c,(0,i._)("div",d,[(0,i._)("div",{class:(0,g.C_)(["pt-0.5 border border-gray-900",q.bgGap])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(q.height,(t=>((0,i.wg)(),(0,i.iD)("div",{id:"grid-"+(t-1),key:t,class:(0,g.C_)([h.getColHeight(),"mb-0.5 mr-0.5"])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(q.width,(e=>((0,i.wg)(),(0,i.iD)("div",{class:(0,g.C_)(["inline-block ml-0.5",h.getCubeSize()+" "+this.bgBack]),key:e,id:t-1+"-"+e},null,10,m)))),128))],10,u)))),128))],2)]),(0,i._)("div",p,[q.showEndScreen?((0,i.wg)(),(0,i.iD)("div",{key:q.showEndScreen},[(0,i._)("div",w,[(0,i._)("span",S,(0,g.zw)(q.endText),1)]),(0,i._)("div",B,[(0,i._)("button",{id:"resetButton",class:(0,g.C_)(["text-white font-bold px-3 py-2 rounded-xl",h.getButtonColour()]),onClick:e[0]||(e[0]=(...t)=>h.reset&&h.reset(...t))}," Reset ",2)])])):((0,i.wg)(),(0,i.iD)("div",y,[((0,i.wg)(),(0,i.iD)("div",{class:"flex justify-center",key:q.pauseButton},[(0,i._)("button",{id:"stackButton",class:(0,g.C_)(["text-white font-bold w-20 h-20 rounded-full text-xl",h.getButtonColourPause()]),onClick:e[1]||(e[1]=(...t)=>h.stopCRow&&h.stopCRow(...t))},(0,g.zw)(q.stackText),3)]))])),(0,i._)("div",f,[(0,i._)("button",{class:(0,g.C_)(["text-white font-bold px-3 py-2 rounded-xl",h.getButtonColour()]),onClick:e[2]||(e[2]=(...t)=>h.showSettings&&h.showSettings(...t))},(0,g.zw)(q.settingsText),3)])])])),q.showSettingsScreen?((0,i.wg)(),(0,i.iD)("div",{key:q.showSettingsScreen},[(0,i._)("div",C,[k,(0,i.wy)((0,i._)("input",{type:"range",min:"1",max:"6",class:"slider w-24",id:"sizeSlider","onUpdate:modelValue":e[3]||(e[3]=t=>q.settingsGameSize=t)},null,512),[[s.nr,q.settingsGameSize]])]),(0,i._)("div",v,[T,(0,i.wy)((0,i._)("input",{type:"range",min:"5",max:"12",class:"slider w-24",id:"widthSlider","onUpdate:modelValue":e[4]||(e[4]=t=>q.settingsWidth=t)},null,512),[[s.nr,q.settingsWidth]])]),(0,i._)("div",b,[x,(0,i.wy)((0,i._)("input",{type:"range",min:"10",max:"20",class:"slider w-24",id:"heightSlider","onUpdate:modelValue":e[5]||(e[5]=t=>q.settingsHeight=t)},null,512),[[s.nr,q.settingsHeight]])]),(0,i._)("div",D,[E,(0,i.wy)((0,i._)("input",{type:"range",min:"1",max:"7",class:"slider w-24",id:"themeSlider","onUpdate:modelValue":e[6]||(e[6]=t=>q.settingsTheme=t)},null,512),[[s.nr,q.settingsTheme]])]),(0,i._)("div",L,[M,(0,i.wy)((0,i._)("input",{type:"range",min:"1",max:"9",class:"slider w-24",id:"diffSlider","onUpdate:modelValue":e[7]||(e[7]=t=>q.settingsTimerBaseSpeed=t)},null,512),[[s.nr,q.settingsTimerBaseSpeed]])]),(0,i._)("div",R,[(0,i._)("button",{class:(0,g.C_)(["text-white font-bold px-3 py-2 rounded-xl mr-2",h.getButtonColour()]),onClick:e[8]||(e[8]=(...t)=>h.muteSound&&h.muteSound(...t))},(0,g.zw)(q.settingsMuteText),3),(0,i._)("button",{class:(0,g.C_)(["text-white font-bold px-3 py-2 rounded-xl ml-2",h.getButtonColour()]),onClick:e[9]||(e[9]=(...t)=>h.resetSettings&&h.resetSettings(...t))}," Reset ",2)])])):(0,i.kq)("",!0)],64)}A(7658);var I="data:audio/mpeg;base64,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",F="data:audio/mpeg;base64,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",Q=A.p+"media/win.97f2a1c2.mp3",z=A.p+"media/gameover.d21d117f.mp3",W={name:"StackerWindow",data(){return{height:15,width:7,cubeSize:6,resetWindow:!1,gameBoard:null,gameCenter:0,cRowSize:3,showEndScreen:!1,pauseButton:!1,blinkCounter:0,endText:"GAME OVER",stackText:"Stack!",settingsText:"Settings",settingsMuteText:"Mute",timerInterval:null,timerTick:350,timerBaseSpeed:350,timerSpeedAdj:0,cStart:0,cLevel:0,cRight:!0,dPos:0,dContents:null,inDemo:!0,showSettingsScreen:!1,settingsGameSize:1,settingsHeight:15,settingsWidth:7,settingsTimerBaseSpeed:5,settingsTheme:1,settingsMute:!1,bgBack:"bg-stackBack",bgFor:"bg-stackFor",bgGap:"bg-stackGap"}},mounted(){this.resetBoard(),document.addEventListener("keyup",this.handleSpace),this.gameCenter=Math.round(this.width/2),this.cStart=this.gameCenter-1,this.cLevel=this.height-1,this.stackText="Start",this.settingsGameSize=this.$store.getters.settingsGameSize,this.settingsHeight=this.$store.getters.settingsHeight,this.settingsWidth=this.$store.getters.settingsWidth,this.settingsTimerBaseSpeed=this.$store.getters.settingsTimerBaseSpeed,this.settingsTheme=this.$store.getters.settingsTheme,this.settingsMute=this.$store.getters.settingsMute,this.settingsMuteText=this.settingsMute?"Unmute":"Mute",this.reloadWindow(),this.runDemo()},beforeUnmount(){document.removeEventListener("keyup",this.handleSpace)},methods:{moveCRow(){this.pauseButton&&(this.pauseButton=!1),0===this.cRowSize&&this.stopInterval(),this.playSound(I),this.cRight?(this.gameBoard[this.cLevel][this.cStart]=0,this.cStart++):(this.gameBoard[this.cLevel][this.cStart+this.cRowSize-1]=0,this.cStart--);let t=this.cStart+this.cRowSize;for(let s=this.cStart;s<t;s++)this.gameBoard[this.cLevel][s]=1;let e=0,A=this.width+2;1===this.cRowSize&&(e=1,A-=1),this.cStart<=e?this.cRight=!0:t>=A&&(this.cRight=!1),this.displayFromArray(this.cLevel)},stopCRow(){if(this.pauseButton)return;if(this.inDemo)return this.runGame(!0),void(this.inDemo=!1);if(this.pauseButton=!0,this.stopInterval(),this.cRight=Math.random()>=.5,this.cLevel===this.height-1)return 1!==this.gameBoard[this.cLevel][0]&&1!==this.gameBoard[this.cLevel][this.width+1]||(this.cRowSize-=1),this.cLevel--,this.genRandomCRow(this.cLevel),this.displayFromArray(this.cLevel),void this.runGame();let t=[];for(let e=0;e<this.width+2;e++)1===this.gameBoard[this.cLevel][e]&&0===this.gameBoard[this.cLevel+1][e]&&(this.cRowSize--,this.gameBoard[this.cLevel][e]=0,t.push(e));this.upDifficulty(),this.cLevel--,0===this.cRowSize&&this.stopGame(!0),this.cLevel<0&&this.cRowSize>0?this.stopGame(!1):(this.cRowSize>0&&this.genRandomCRow(this.cLevel),t.length>0?this.runBlink(t,this.cLevel+1):(this.displayFromArray(this.cLevel),this.displayFromArray(this.cLevel+1),this.runGame()))},displayFromArray(t){for(let e=0;e<this.width+1;e++)this.setActive(t,e,1===this.gameBoard[t][e])},setActive(t,e,A=!0){if(e<1||e>this.width)return;let s=this.convertToId(t,e),i=document.getElementById(s);null!=i&&(A?i.classList.replace(this.bgBack,this.bgFor):i.classList.replace(this.bgFor,this.bgBack))},runBlink(t,e){this.blinkCounter=0,this.timerInterval=setInterval((()=>{this.blinkCubes(t,e)}),300)},blinkCubes(t,e){for(let A=0;A<t.length;A++)this.gameBoard[e][t[A]]=0===this.gameBoard[e][t[A]]?1:0;if(this.displayFromArray(e),this.blinkCounter%2===0&&this.cRowSize>0&&this.playSound(F),this.blinkCounter++>=7)if(this.stopInterval(),this.cRowSize>0){for(let A=0;A<t.length;A++)this.gameBoard[e][t[A]]=0;this.displayFromArray(this.cLevel),this.displayFromArray(this.cLevel+1),this.runGame()}else this.showEndScreen=!0},genRandomCRow(t){this.cStart=Math.round(Math.random()*(this.width-this.cRowSize-1)+1);for(let e=0;e<this.width+2;e++)this.gameBoard[t][e]=e<this.cStart||e>this.cStart+this.cRowSize-1?0:1},stopInterval(){clearInterval(this.timerInterval),this.dPos=0},convertToId(t,e){return t+"-"+e},getColHeight(){return"h-"+this.cubeSize},getCubeSize(){return"w-"+this.cubeSize+" h-"+this.cubeSize},runGame(t=!1){this.stopInterval(),t&&(this.resetBoard(),this.stackText="Stack!",this.settingsText="Stop",this.gameBoard[this.height-1][this.gameCenter-1]=1,this.gameBoard[this.height-1][this.gameCenter]=1,this.gameBoard[this.height-1][this.gameCenter+1]=1,this.displayFromArray(this.height-1)),this.timerInterval=setInterval((()=>{this.moveCRow()}),this.timerTick)},upDifficulty(){let t=(this.height-1-this.cLevel)/(this.height-1);this.timerTick=Math.max(this.timerBaseSpeed*(1-t),50*(1-this.timerSpeedAdj));let e=this.timerSpeedAdj/2;t>.6-e?2===this.cRowSize&&(this.gameBoard[this.cLevel-1][this.cStart+this.cRowSize-1]=0,this.cRowSize--):t>.25-e&&3===this.cRowSize&&(this.gameBoard[this.cLevel-1][this.cStart+this.cRowSize-1]=0,this.cRowSize--)},stopGame(t){this.stopInterval(),this.showEndScreen=!0,t?(this.playSound(z),this.endText="GAME OVER"):(this.playSound(Q),this.endText="YOU WIN")},reset(){this.resetBoard(),this.cLevel=this.height-1,this.cStart=this.gameCenter-1,this.cRowSize=3,this.timerTick=350,this.gameBoard[this.height-1][this.gameCenter-1]=1,this.gameBoard[this.height-1][this.gameCenter]=1,this.gameBoard[this.height-1][this.gameCenter+1]=1,this.displayFromArray(this.height-1),this.showEndScreen=!1,this.runGame(),this.endText="GAME OVER",this.stackText="Stack!"},printBoard(){console.clear();let t="";for(let e=0;e<this.gameBoard.length;e++){for(let A=0;A<this.gameBoard[e].length;A++)t+=this.gameBoard[e][A]+" ";t+="\n"}console.log(t),console.log("cStart: "+this.cStart),console.log("cRowSize: "+this.cRowSize)},resetBoard(){this.gameBoard=[];for(let t=0;t<this.height;t++){let e=[];for(let t=0;t<this.width+2;t++)e.push(0);this.gameBoard.push(e),this.displayFromArray(t)}},runDemo(){this.stopInterval(),this.resetBoard(),this.dContents=[[1,1,1],[1,0,0],[1,1,1],[0,0,1],[1,1,1],[0,0,0],[1,1,1],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,0,0],[1,1,1],[1,0,1],[1,1,1],[1,0,1],[1,0,1],[0,0,0],[1,1,1],[1,0,0],[1,0,0],[1,0,0],[1,1,1],[0,0,0],[1,0,1],[1,0,1],[1,1,0],[1,0,1],[1,0,1],[0,0,0],[1,1,1],[1,0,0],[1,1,1],[1,0,0],[1,1,1],[0,0,0],[1,1,0],[1,0,1],[1,1,0],[1,0,1],[1,0,1],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],this.timerInterval=setInterval((()=>{this.advanceDemo()}),500)},advanceDemo(){let t=Math.round(this.width/2)-1,e=this.height-1;for(let A=0;A<e;A++)this.gameBoard[A]=Array.from(this.gameBoard[A+1]),this.displayFromArray(A);this.gameBoard[e][t]=this.dContents[this.dPos][0],this.gameBoard[e][t+1]=this.dContents[this.dPos][1],this.gameBoard[e][t+2]=this.dContents[this.dPos][2],this.displayFromArray(e),this.dPos>=this.dContents.length-1?this.dPos=0:this.dPos++},showSettings(){if(!this.inDemo)return this.reset(),this.stackText="Start",this.settingsText="Settings",this.pauseButton=!1,this.stopInterval(),this.resetBoard(),this.inDemo=!0,void this.runDemo();this.showSettingsScreen=!this.showSettingsScreen,this.settingsText=this.showSettingsScreen?"Hide":"Settings",this.showSettingsScreen?(this.stopInterval(),this.pauseButton=!0):(this.runDemo(),this.pauseButton=!1)},reloadWindow(){this.resetWindow=!this.resetWindow},getButtonColour(){return this.bgBack+" hover:"+this.bgGap},getButtonColourPause(){return this.pauseButton?this.bgBack:this.getButtonColour()},playSound(t){if(this.settingsMute)return;let e=new Audio(t);e.play()},muteSound(){this.settingsMute=!this.settingsMute,this.settingsMuteText=this.settingsMute?"Unmute":"Mute"},resetSettings(){this.settingsGameSize=1,this.settingsHeight=15,this.settingsWidth=7,this.settingsTimerBaseSpeed=5,this.settingsTheme=1,this.settingsMute=!1,this.settingsMuteText="Mute"},handleSpace(t){if(32===t.keyCode){let t=null;this.pauseButton||(t=document.getElementById("stackButton")),this.showEndScreen&&(t=document.getElementById("resetButton")),null!==t&&(t.focus(),t.click())}}},watch:{settingsGameSize(){let t=4;this.cubeSize=t+2*Number(this.settingsGameSize),this.reloadWindow(),this.$store.commit("setGameSize",this.settingsGameSize)},settingsWidth(){this.width=Number(this.settingsWidth),this.gameCenter=Math.round(this.width/2),this.cStart=this.gameCenter-1,this.resetBoard(),this.reloadWindow(),this.$store.commit("setWidth",this.settingsWidth)},settingsHeight(){this.height=Number(this.settingsHeight),this.cLevel=this.height-1,this.resetBoard(),this.reloadWindow(),this.$store.commit("setHeight",this.settingsHeight)},settingsTimerBaseSpeed(){this.settingsTimerBaseSpeed=Number(this.settingsTimerBaseSpeed);let t=this.settingsTimerBaseSpeed-5,e=20*t/100;this.timerBaseSpeed=350-200*e,this.timerSpeedAdj=e,this.timerTick=this.timerBaseSpeed,this.$store.commit("setTimerBaseSpeed",this.settingsTimerBaseSpeed)},settingsTheme(){let t,e,A,s=this.bgBack,i=this.bgFor;switch(Number(this.settingsTheme)){case 1:t="bg-stackBack",e="bg-stackFor",A="bg-stackGap";break;case 2:t="bg-red-900",e="bg-red-300",A="bg-red-700";break;case 3:t="bg-purple-900",e="bg-purple-300",A="bg-purple-700";break;case 4:t="bg-green-900",e="bg-green-300",A="bg-green-700";break;case 5:t="bg-pink-900",e="bg-pink-300",A="bg-pink-700";break;case 6:t="bg-yellow-900",e="bg-yellow-300",A="bg-yellow-700";break;case 7:t="bg-gray-900",e="bg-gray-300",A="bg-gray-700";break}this.bgBack=t,this.bgFor=e,this.bgGap=A;for(let V=1;V<this.gameBoard.length;V++)for(let t=1;t<this.gameBoard[V].length-1;t++){let e=this.convertToId(V,t),A=document.getElementById(e);A.classList.replace(s,this.bgBack),A.classList.replace(i,this.bgFor)}this.reloadWindow(),this.$store.commit("setTheme",this.settingsTheme)},settingsMute(){this.$store.commit("setMute",this.settingsMute)}}},Y=A(89);const N=(0,Y.Z)(W,[["render",G],["__scopeId","data-v-1d8afb82"]]);var j=N;const U={class:"text-white"},H=(0,i.uE)('<p class="text-center font-semibold">Made by <span class="whitespace-nowrap">Daniel Keane Kelly</span></p><div class="flex justify-center pt-2"><a href="https://ko-fi.com/X8X7HOLE0" target="_blank"><img height="36" style="border:0px;height:36px;" src="https://storage.ko-fi.com/cdn/kofi2.png?v=3" border="0" alt="Buy Me a Coffee at ko-fi.com"></a></div>',2),P=[H];function J(t,e,A,s,V,q){return(0,i.wg)(),(0,i.iD)("div",U,P)}var O={name:"DevSupport"};const Z=(0,Y.Z)(O,[["render",J]]);var K=Z,X={name:"HomeView",components:{DevSupport:K,StackerWindow:j}};const _=(0,Y.Z)(X,[["render",o]]);var $=_,tt={name:"App",components:{HomeView:$}};const et=(0,Y.Z)(tt,[["render",V]]);var At=et,st=A(65),it=A(2415),Vt=(0,st.MT)({state(){return{settingsGameSize:1,settingsHeight:15,settingsWidth:7,settingsTimerBaseSpeed:5,settingsTheme:1,settingsMute:!1}},mutations:{setGameSize(t,e){t.settingsGameSize=e},setHeight(t,e){t.settingsHeight=e},setWidth(t,e){t.settingsWidth=e},setTimerBaseSpeed(t,e){t.settingsTimerBaseSpeed=e},setTheme(t,e){t.settingsTheme=e},setMute(t,e){t.settingsMute=e}},getters:{settingsGameSize:t=>t.settingsGameSize,settingsHeight:t=>t.settingsHeight,settingsWidth:t=>t.settingsWidth,settingsTimerBaseSpeed:t=>t.settingsTimerBaseSpeed,settingsTheme:t=>t.settingsTheme,settingsMute:t=>t.settingsMute},plugins:[(0,it.Z)()]});let qt=(0,s.ri)(At);qt.use(Vt),qt.mount("#app")}},e={};function A(s){var i=e[s];if(void 0!==i)return i.exports;var V=e[s]={exports:{}};return t[s].call(V.exports,V,V.exports,A),V.exports}A.m=t,function(){var t=[];A.O=function(e,s,i,V){if(!s){var q=1/0;for(a=0;a<t.length;a++){s=t[a][0],i=t[a][1],V=t[a][2];for(var h=!0,n=0;n<s.length;n++)(!1&V||q>=V)&&Object.keys(A.O).every((function(t){return A.O[t](s[n])}))?s.splice(n--,1):(h=!1,V<q&&(q=V));if(h){t.splice(a--,1);var r=i();void 0!==r&&(e=r)}}return e}V=V||0;for(var a=t.length;a>0&&t[a-1][2]>V;a--)t[a]=t[a-1];t[a]=[s,i,V]}}(),function(){A.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return A.d(e,{a:e}),e}}(),function(){A.d=function(t,e){for(var s in e)A.o(e,s)&&!A.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){A.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){A.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){A.p="/Stacker/"}(),function(){var t={143:0};A.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,V,q=s[0],h=s[1],n=s[2],r=0;if(q.some((function(e){return 0!==t[e]}))){for(i in h)A.o(h,i)&&(A.m[i]=h[i]);if(n)var a=n(A)}for(e&&e(s);r<q.length;r++)V=q[r],A.o(t,V)&&t[V]&&t[V][0](),t[V]=0;return A.O(a)},s=self["webpackChunkStacker"]=self["webpackChunkStacker"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=A.O(void 0,[998],(function(){return A(473)}));s=A.O(s)})();
//# sourceMappingURL=app.b83e7928.js.map