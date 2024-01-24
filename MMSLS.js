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
 
    "https://www.maimemo.com/page?sid=ece349832e1428c9f63c31bcf6fee47e&uid=32958816&pid=9cf76b575daec2549dfcf24c634ad51b&tid=4509c5035824398c897a639f2e8cbfa9&view_time=1706106384&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDityKAL3myU6P1cI-KK0MqPqk&token=cc3f4daa0dc9e7b4e8297676be3d9cc94d36f5c244fb744cddbe8c9d355d89cf&expired_time=2025-01-23T22:26:23%2008:00",


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
