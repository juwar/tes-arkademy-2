function cetak(piro){
    let a = [];
    let lihat = ''
    let l = ''
    
	for (let i = 0; i < piro; i++) {
		a.push([]);
    }
    
    let iki = piro - 1;
	for (let i = 0; i < piro; i++) {
		for (let i = 0; i < piro; i++) {
            a[i][i] = 'X';
            l = piro - (i + 1)
            a[i][l] = 'X';
        }
        l--
    }

    for (let i = 0; i < piro; i++) {
		for (let l = 0; l < piro; l++) {
            if (a[i][l] == 'X'){
                lihat += 'X '
            } else {
                lihat += '= '
            }
        }
        lihat += '\n'
    }
    return lihat
    
}

function proses(iku){
    if (iku % 2 == 0){
        console.log('Angka harus ganjil');
    } else {
        console.log(cetak(iku));
    }
}
	



proses(11);