function urut(){

    let a =['h','g','a','b','d','f'];
    let b = a.length; 
    let c =[]
    let d =[]
    
    for(let i = 0; i < b; i++){
        c.push(a[i])
        d.push(a[i])
    }

    c=c.sort()

    for(let i = 0; i < b; i++){
        if (c[0] == a[i]){
            break
        } else {
            d.shift()  
        }
    }

    for(let i = 1; i < d.length; i++){
        d.splice(1,1)
    }

    d.forEach(item => {
        console.log(item); 
    })
}

urut();