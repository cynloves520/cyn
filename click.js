const pet = document.getElementById('pet');
const modal = document.getElementById('modal');

 pet.addEventListener('click', () => {
  modal.style.display = 'block';
});
function closeModal() {
  modal.style.display = 'none';
}
function submitForm() {
  // 获取表单中输入的值
  const username = document.getElementById('username').value;
  
  // 在这里可以根据需要执行相应的操作，比如显示输入的信息
  alert('谢谢你，' + username + '小天使！欢迎来到猫咪乐园！');
}