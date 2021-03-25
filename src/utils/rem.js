/**
 * 用于动态计算html 的 font-size
 */
let resize = function(){

  // let designSize = 11520; //默认设计图尺寸
  let html = document.documentElement;
  // let wW = html.clientWidth; //窗口宽度
  // let wW = 5970; //窗口宽度
  // let rem = (wW*1000)/designSize;
  html.style.fontSize = 100+'px'
};
resize();//初始化
// window.addEventListener('resize', resize, false);