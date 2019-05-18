function hitung(){
    let kata = 'semoga saya bisa lolos tes kali ini'
    let a = kata.length
    let spasi = 0
    let hasil = 0

    for (let i = 0; i < a; i++){
        if (kata.charAt(i) == ' '){
            spasi++
        }
    }
    hasil = spasi++
    return hasil
}

console.log(hitung())