const chatQuery = document.querySelector('#chat-popup');
const chatBox = document.querySelector('.edu-chatbox');

chatQuery.addEventListener('click', function() {
  if(chatQuery.innerHTML === '<i class="fa fa-angle-down" style="color: white; text-align: right; font-size: 24px;"></i>') {
    chatBox.style.transform = 'translateY(0rem)';
    chatQuery.innerHTML = '<i class="fa fa-angle-up" style="color: white; text-align: right; font-size: 24px;"></i>';
  } else {
    chatBox.style.transform = 'translateY(-22rem)';
    chatQuery.innerHTML = '<i class="fa fa-angle-down" style="color: white; text-align: right; font-size: 24px;"></i>';
  }
});