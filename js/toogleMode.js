$('.button_color').click(()=>{
    current = 'color';
    ids.forEach(id => {
        $(`.${id}.ui-slider`).slider('value', color[`${id}`])
        $(`.${id}.ui-slider`).css('background', `linear-gradient(to right, ${id} ${color[`${id}`]}%, white ${color[`${id}`]}%)`);
    })
});

$('.button_background').click(()=>{
 current = 'background';
 ids.forEach(id => {
     $(`.${id}.ui-slider`).slider('value', background[`${id}`])
     $(`.${id}.ui-slider`).css('background', `linear-gradient(to right, ${id} ${background[`${id}`]}%, white ${background[`${id}`]}%)`);
 })
})