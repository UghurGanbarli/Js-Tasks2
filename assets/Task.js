// Task 1

let array1 = [1,1,2,2,5,5,70,70,3,4,25,1,1,1,70,2,70]

const arr=(deyisken)=>{
    let z = 0
    let eyniOlanReqem = []
    for(let i = 0; i < deyisken.length; i++){
        let eyniOlanReqemSayi = 0
        let k = 1
        for(let ind = 0; ind < deyisken.length; ind++){
            if(deyisken[ind] == deyisken[i]){
                eyniOlanReqemSayi +=1
                if(eyniOlanReqemSayi > 1){
                    if (!eyniOlanReqem.includes(deyisken[i])){
                       eyniOlanReqem.push(deyisken[i])
                        z+=1
                        k=0
                    }
                
                }
                
            }
            // console.log(eyniOlanReqemSayi,deyisken[ind],deyisken[i])
            

        }
        if(k==0){
            console.log(`array-de ${eyniOlanReqem[z-1]} - ededinden - ${eyniOlanReqemSayi} - ededdir`,z-1)
        }
    }
    
     return deyisken
}


// Task 2


arr(array1)

let arr1=['HTML','CSS','JS','PHP','JAVA']
let arr2=['HTML','CsS','JS','PYTHON','C','C++','C#','php']



const array = (array1,array2)=>{
    let arr=[]
    array1.forEach((a)=>{
        array2.forEach((b)=>{
            if (a.toLowerCase() == b.toLowerCase()){
                arr.push(a)
            }
        })
    })

    return arr
}

console.log(array(arr1,arr2))

// Task 3 forEach ile

let string = "JavaScript bir programlasdirma dilidir"
const basHerfiBoyuk = (x) => {
    x=x.split(" ")
    x.forEach((a,b)=>{
        x[b] = a[0].toUpperCase() + a.slice(1)
    })
    console.log(x)
    x = x.join(" ")
    return x
}

console.log(basHerfiBoyuk(string))

// Task 3 for ile

const basHerfiBoyuk1 = (x) => {
    for(let i = 0; i<x.length; i++){
        if (x[i] == " "){
            x[i+1].toUpperCase
        }
    }
    return x
}

console.log(basHerfiBoyuk1(string))

// Task 4
let massiv = [1,3,-1,5,7,8,12,-6,3,9]
function toplam (x){
    let y = 0
    for (i=0; i<x.length; i++){
        if(x[i]%2 != 0 || x[i]<0){
            y+=x[i]
        }
    }
    return y
}

const higherFunction = (x,y) => {
    return x-y
}


console.log(higherFunction(toplam(massiv),7))
