const buttonsEdit = document.querySelectorAll('[data-editbutton]')


buttonsEdit.forEach((element)=>{
    element.addEventListener('click',(event)=>{
        console.log(event)
    })
})