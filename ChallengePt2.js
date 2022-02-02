//exercicio usando filtrer

const list_number = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const Number = list_number.filter((object) => {

    return object % 2 == 0 && object % 5 == 0
})

console.log(Number)


const companies = [{
        Name: "Sansung",
        marketValue: 50,
        CEO: "Kim Hyun Suk",
        foundedOn: 1938
    },
    {
        Name: "Microsoft",
        marketValue: 415,
        CEO: "Satya Nadella",
        foundedOn: 1975
    },
    {
        Name: "Intel",
        marketValue: 117,
        CEO: "Brian Krzanich",
        foundedOn: 1968
    },
    {
        Name: "Facebook",
        marketValue: 383,
        CEO: "Mark Zuckerberg",
        foundedOn: 2004
    },
    {
        Name: "Spotify",
        marketValue: 30,
        CEO: "Daniel Ek",
        foundedOn: 2006
    },
    {
        Name: "Apple",
        marketValue: 845,
        CEO: "Tim cook",
        foundedOn: 1976
    },



]

const companies_list = companies.filter((object) => {

    let companies_chosen = object.foundedOn > 1975 && object.marketValue > 200

    return companies_chosen

})

console.log(companies_list)