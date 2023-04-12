function intersecaoArray(arr1,arr2) {
    return arr1.filter((e) => arr2.includes(e))
}

const arr3 = [1,2,3,4,5]
const arr4 = [4,5,6,7,8]

const arrayIntersecao = intersecaoArray(arr3,arr4)

console.log(`A interseção entre os arrays é: [${arrayIntersecao.join(",")}]`)