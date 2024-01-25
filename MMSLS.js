/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=32454734&pid=ff6a8b3a651ee2874e97b338d9ef1358&tid=e9417164027beb4e9ae0bf3d49b79ffb",
    "https://www.maimemo.com/share/page?uid=32454734&pid=51406dd9e063b581acceb3363d60e3c3&tid=e22a83446318a25969f7f24f913fa60c",
    "https://www.maimemo.com/share/page?uid=32454734&pid=ff6a8b3a651ee2874e97b338d9ef1358&tid=e9417164027beb4e9ae0bf3d49b79ffb",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [ 
    "https://www.maimemo.com/share/page?uid=32958816&pid=14bf2950f93c05efc461fbea94fcc973&tid=68122bb9431d7e8b8d00113864a43bfd",
    "https://www.maimemo.com/share/page?uid=33782761&pid=14bf2950f93c05efc461fbea94fcc973&tid=7e22df5e1d1eaf6dbf44060fb5d01071",


  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
