function toggle(){
    const isOn = document.querySelector('#switch:checked') !== null;
    var unPapers = document.getElementsByClassName("unfeatured")
    for (let index = 0; index < unPapers.length; index++) {
        console.log(unPapers[index].classList)
        if (isOn) {unPapers[index].style.display = 'none';}
        if (isOn == false) {unPapers[index].style.display = '';}
    }
}