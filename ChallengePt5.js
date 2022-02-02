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

let companies_markeyValue = (companies) => {

    companies.marketValue = companies.marketValue + companies.marketValue * 0.10

    return companies
}

let foundedOn = (companies) => {

    let filter = companies.foundedOn < 2000
    return filter
}

let reduce = (Acc, companies) => {
  let marketValue =  Acc + companies.marketValue
    return marketValue

}
const companies_update = companies.map(companies_markeyValue).filter(foundedOn).reduce (reduce,0)


console.log(companies_update)