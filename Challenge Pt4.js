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

const Update_companies = companies.map((Object) => {
        let marketValue = Object.marketValue + Object.marketValue * 0.10
        let list = {

            Name: Object.Name,
            marketValue:  marketValue,
            CEO: Object.CEO,
            foundedOn: Object.foundedOn,
        }

        return list
    }

)



const Old_Companies = Update_companies.filter((Object) => {

    let filter = Object.foundedOn < 2000

    return filter

})





const companies_valor = Old_Companies.reduce ((Acc,Object) => {

    console.log ("Valor acumulado", Acc)
    console.log ("Valor atual", Object.marketValue)

let marketValue = Acc + Object.marketValue
return marketValue

}, 0)
console.log(companies_valor)

