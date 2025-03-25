let address1 = {
    houseNumber: 119,
    lineOne: "Hest Bank Lane",
    postcode: "LA2 6AH"

}

let address2 = {
    houseNumber: 39,
    lineOne: "Eastfield Crescent",
    postcode: "YO10 5HZ"

}

let address3 = {
    houseNumber: 31,
    lineOne: "Kexby Avenue",
    postcode: "YO10 5HZ"
}

console.log(address1)
console.log(address2)
console.log(address3)

function address (houseNumber, lineOne, postcode) {
    this.houseNumber = houseNumber;
    this.lineOne = lineOne;
    this.postcode = postcode;
}

address4 = new address ("69", "tyler is hot", "YO10 420")

console.log(address4.lineOne)


class Address {
    houseNumber;
    lineOne;
    postcode;

    constructor(houseNumber, lineOne, postcode){
        this.houseNumber = houseNumber;
        this.lineOne = lineOne;
        this.postcode = postcode;
    }
}

let address5 = new Address("123", "Ivo loves tyler", "420420")

console.log(address5)