// 1/ Nhập nội dung poll và nhấn button Add để tạo mới
const inputElem = document.querySelector('#poll-input');
const btn = document.querySelector('.btn-primary');
const poll = document.querySelector('.poll-list')
const BtnClearAll = document.querySelector('.Clear-All')
// const clear=document.querySelector('.clear')
const length=document.querySelector('.length')

// ràng buộc sự kiện click cho button Add
btn.addEventListener('click', function(){
  // 2/ Hiển thị poll mới trong danh sách
  const value = inputElem.value;

  // validate dữ liệu
  const isValid = validateData(value)

  if (!isValid) {
    return;
  }

  // tạo mới các thẻ html
  createPoll(value)
  
})

function validateData(value) {
  let valid = false;
  
  if (value.trim() !== '') {
    console.log('valid', valid)
    valid = true;
  }

  console.log('valid', valid)

  return valid;
}

btn.addEventListener('click',()=>{
  if(!inputElem.value){
          alert('Vui lòng nhập nội dung!')
          return false;
  }
})
// Tạo sự kiện enter cho input
inputElem.addEventListener("keyup", function(event) {
  console.log(event)
  if (event.key === 'Enter') {
   event.preventDefault();
   btn.click();
  }
})
// chức năng check input checkbox
function changePollStatus(input, p) {
  input.addEventListener('change', function(event) {
    
    const checked = event.target.checked

    if (checked) {
      p.style.textDecoration = 'line-through'
    } else {
      p.style.textDecoration = ''
    }

  })
}
// chức năng xóa item
function deletePollItem(button) {
  button.addEventListener('click', function() {
    const item = button.parentElement   
    item.remove()
   
    UpdateConditonItem()
  })
}
//chức năng xóa tất cả 
function deleteAllPoll(BtnClearAll,item) {
  // Ràng buộc sự kiện cho button Clear-All
  BtnClearAll.addEventListener('click', function(){
    console.log(BtnClearAll)
    item.remove()
    
    UpdateConditonItem()
  })
}
// chức năng lọc trạng thái 
const ItemAll=document.querySelectorAll('.poll-item')

function conditonItem (){
  const ItemAll=document.querySelectorAll('.poll-item')
  // lọc trạng thái từ 1
  let todos=ItemAll.length+1
  console.log(todos)
  length.innerHTML=todos

}

//Cập nhật trạng thái 
function UpdateConditonItem(){
  const ItemAll=document.querySelectorAll('.poll-item')
  let todo=ItemAll.length
 length.innerHTML=todo
}

function createPoll(value) {
  const item = document.createElement('div')
  const input = document.createElement('input')
  const itemContent = document.createElement('div')
  const p = document.createElement('p')
  const button = document.createElement('button')


  item.className = 'poll-item'
  input.type = 'checkbox'
  input.className = 'input-checkbox'
  itemContent.className = 'poll-content'
  p.innerHTML = value;
  button.innerHTML = 'Delete'
  button.classList='delete'

  changePollStatus(input, p)
  deletePollItem(button)
  deleteAllPoll(BtnClearAll,item)
  conditonItem (ItemAll)

  // UpdateConditonItem(ItemAll)

  itemContent.appendChild(p)
  item.appendChild(input)
  item.appendChild(itemContent)
  item.appendChild(button)
  
  poll.appendChild(item)

}
//  function elementClick (e){
//   // item .addEventListener('click',function(){
//     if(e.ctrlKey) {
//       console.log(item)
//       p.style.textDecoration = 'line-through'
//     }
//   // })
// }

// console.log(ItemAll)


