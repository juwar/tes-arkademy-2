function acak(peng,f){
	let a='';
	let b='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let c=32;
    let d=b.length;
    let e=[]
    
    for (let u = 0; u < peng; u++) {
		for (let i = 0; i < c; i++) {
            a+=b.charAt(Math.floor(Math.random()*d));
        }
        ulang(a,e)
        if (f =='sama' ){
            peng++;
		}else{
            e.push(a);
            a=''
		}
    }
    
    e.forEach(item=>{
		console.log(item);
    })
    
    return e
}

function ulang(a,e){
    let f
	if (e.includes(a)) {
        peng(f)
		f = 'sama'
	}
    return f
}

acak(2);