// 1. Aplikasi Perpus
var data = [
    {
        judul : "Harry Potter",
        status : true
    },
    {
        judul : "Twilight",
        status : false
    },
    {
        judul : "Si Doel",
        status : false
    },
    {
        judul : "One Punch Man",
        status : true
    }
]

var statusPinjam = (str) => {
    hasil = ""
    for (var i=0 ; i<data.length ; i++ ) {
        if(data[i].judul == str) {
            hasil = data[i].status
            if (hasil == true) {
                hasil = `buku dengan judul ${data[i].judul} telah dipinjam`
            } else {
                hasil = `buku dengan judul ${data[i].judul} tersedia`
            }
        }
        
    } return hasil
}

var bukuStatus = () => {
    var hasil = ""
    for (var i=0 ; i<data.length ; i++) {
        if(data[i].status == false) {
            hasil += `buku ${data[i].judul} available \n`
        }
        
    } return hasil
}

console.table(data)
console.log(statusPinjam("Harry Potter"))
console.log(statusPinjam("One Punch Man"))
console.log(bukuStatus())


// 2. Mesin Printer
var huruf = "aiueo"
var data = huruf.split("")
var perintah = [true, false, false, false, true]


var printer = (arr) => {
    var hasil = ""
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            hasil += data[i]
        }

    }
    return hasil
}

console.log(printer(perintah))


// 3. Mean, Median, Modus
var arr = [5,7,2,9,1,2,2,5,2,2]

var median = () => {
    sort = arr.sort((a,b) => a-b)
    if (arr.length % 2 == 0) {
        var nilai1 = parseInt(arr[(arr.length/2)-1])
        var nilai2 = parseInt(arr[arr.length/2])
        var hasil = (nilai1+nilai2) / 2
    } else {
        hasil = arr[(arr.length - 1) / 2]
    }


    return `nilai median dari ${arr} adalah ${hasil}`
}

var modus = () => {
    hasil = 0
    total = 0
    for (var i = 0; i < arr.length; i++) {
        var jumlah = 0
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                jumlah++
            }                
        }

        if (jumlah > total) {
            total = jumlah
            hasil = arr[i]
        }
    }
    
    return `modus dari ${arr} adalah ${hasil} karena ada ${total} nilai`
}

var mean = () => {
    hasil = 0
    for (var i = 0; i < arr.length; i++) {
        hasil += parseInt(arr[i])
    }
    return `nilai rata-rata dari ${arr} adalah ${(hasil/arr.length)}`
}

console.log(median())
console.log(modus())
console.log(mean())


// 4. Spread Operator
var data = [
	{
		name: "Tatas",
		company: "Arkademy",
		job: "Trainer",
		status: "single",
		city: "Jogja"
	},
	{
		name: "Pratama",
		company: "Emago",
		job: "Trainer",
		status: "single",
		city: "Jakarta"
	}
]

var tatasMenikah = true
var pratamaDirekrut = true

var spread = () => {
    if(tatasMenikah && pratamaDirekrut) {
        var hasil = [...data.splice(0,0),Object.assign({},data[0],{
            status :'Menikah',
            city : 'Jakarta'
    }),...data.splice(1,0),Object.assign({},data[1],{
            company : 'Arkademy',
            city : 'Jogja'
    })]
    } else {
        hasil = data
    }
    
    return hasil
}

console.log(spread())