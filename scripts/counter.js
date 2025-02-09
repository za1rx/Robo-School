const countNumbers = document.querySelectorAll('.info__list-item__title')
let interval = 3000

countNumbers.forEach(num => {
    let valueStart = 0;
    let valueEnd = Number(num.getAttribute("data-value"))
    let duration = Math.floor(interval / valueEnd)
    let counter = setInterval( () => {
        valueStart += 1;
        num.textContent = valueStart
        if(valueStart == valueEnd){
            clearInterval(counter)
        }
    }, duration)
    
    
})

