let input = document.getElementById('input-field');
let output = document.getElementById('output-field')

const UC = document.querySelector('.btn_uppercase');
const LC = document.querySelector('.btn_lowercase');
const Cap = document.querySelector('.btn_capitalize');
const B = document.querySelector('.btn_bold');
const I = document.querySelector('.btn_italic');
const UL = document.querySelector('.btn_underline');

UC.addEventListener('click', function(e){
  output.innerHTML = `${input.value.toUpperCase()}`
})

LC.addEventListener('click', function(e){
  output.innerHTML = `${input.value.toLowerCase()}`
})

Cap.addEventListener('click', function(e){
  const inputValue = input.value
  output.innerHTML = `${inputValue.charAt(0).toUpperCase() + inputValue.slice(1)}`
})

B.addEventListener('click', function(e){
  const boldValue = `<strong>${input.value}</strong`
  output.innerHTML = boldValue
})

I.addEventListener('click', function(e){
  const italicValue = `<em>${input.value}</em>`
  output.innerHTML = italicValue
})

UL.addEventListener('click', function(e){
  const underline = `<u>${input.value}</u>`
  output.innerHTML = underline
})
