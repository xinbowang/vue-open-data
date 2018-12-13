import Vue from 'vue';
import scrollReveal from 'scrollreveal';

let revealMetheds = (el, binding) => {
  let {value = {}} = binding;
  let {duration = 400, delay = 200, origin = 'right', offset = '100px', easing = 'linear'} = value;
  scrollReveal().reveal(el, {
    // 动画的时长
    duration,
    // 延迟时间
    delay,
    // 动画开始的位置，'bottom', 'left', 'top', 'right'
    origin,
    // 回滚的时候是否再次触发动画
    reset: false,
    // 在移动端是否使用动画
    mobile: false,
    // 动画执行的距离，单位可以用%，rem等
    distance: offset,
    // 其他可用的动画效果
    opacity: 0.001,
    easing,
    scale: 1
  });
};

Vue.directive('reveal', {
  inserted: function (el, binding) {
    revealMetheds(el, binding);
  },
  componentUpdated: function (el, binding) {
    revealMetheds(el, binding);
  }
});
