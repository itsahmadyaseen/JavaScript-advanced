const randomColor = function(){
    const hex = "123456789ABCDEF";
    let color = '#';
    for(i=0;i<6;i++){
      color += hex[Math.floor(Math.random()*16)];
    }
    return color;
  }
  
  let intervalId;
  const startColorChanger = function () {
  
    intervalId = setInterval(changeBgColor, 1000);
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopColorChanger = function () {
    clearInterval(intervalId);
  };
  
  document.querySelector('#start').addEventListener('click', startColorChanger);
  
  document.querySelector('#stop').addEventListener('click', stopColorChanger);