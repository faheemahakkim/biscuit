fetch('data.json')
  .then(res => res.json())
 .then(data => {
    const biscuitsBox = document.querySelector('#biscuits')



 data.biscuits.forEach(biscuit => {

    biscuitsBox.innerHTML +=`
    <div class="biscuit">
    <h3>"${biscuit.name}"</h3>
    <img src="${biscuit.img}" alt="" class="image"/>
    <p>"${biscuit.RDT}"</p>
    <p class="desc">"${biscuit.desc}"</p>
    <a href="${biscuit.wikipedia}">wikipedia</a>
    
    </div>
    `
 
            
        })
      })

 

console.log('The rest of our code')