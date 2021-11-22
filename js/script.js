const ids=['red', 'green', 'blue']
let color ={red: 0, green: 0, blue: 0};
let background ={red: 0, green: 0, blue: 0};
let current = 'color'

$(document).ready(() => {
   
  const render =()=>{
    ids.forEach(id => {
        $( `#${id}` ).slider({
            classes: {
                "ui-slider": `${id}`
              },
              max: 100,
              slide: function( event, ui ) {
                  if(current==='color'){
                    color[`${id}`] = ui.value;
                    $('.text-container').css('color', `rgb(${color.red}%, ${color.green}%, ${color.blue}%)`);
                  } else {
                    background[`${id}`] = ui.value;
                    $('.text-container').css('background-color', `rgb(${background.red}%, ${background.green}%, ${background.blue}%)`)
                  }
                  $(`.${id}.ui-slider`).css('background', `linear-gradient(to right, ${id} ${ui.value}%, white ${ui.value}%)`);
              }
    }); 
       })
  };
  render()
})