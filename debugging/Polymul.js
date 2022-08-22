// sample Polymul run
const listA = [1,2,3]; // corresponds to 1x^2 + 2x^1 + 3x^0 => x^2 + 2x + 3
const listB = [2,4]; // corresponds to the polynomial 2x^1 + 4x^0 => 2x + 4
console.log(Polymul(listA, listB)); // must print { '0': 12, '1': 14, '2': 8, '3': 2 } which corresponds to the polynomial 2x^3 + 8x^2 + 14x^1 + 12x^0 => 2x^3 + 8x^2 + 14x + 12

function Polymul (list1,list2) {
    let result = {}

    list1.forEach((e,i) => {
        list2.forEach((f,j) =>{
            let exponent1 = list1.length -1 -i
            let exponent2 = list2.length -1 -j

            let existing = result[exponent1 + exponent2] ? result[exponent1 + exponent2] : 0

            result[exponent1 + exponent2] = (e * f) + existing
        })

    })
    return result
}




