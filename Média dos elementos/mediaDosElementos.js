function  media(arr) {
 const mediaDosElementos = arr.reduce((acc,e) => acc + e  ,0) / arr.length
 return mediaDosElementos
}



console.log(media([2,3,3,5,7,10]))