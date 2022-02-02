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


const Sum_Companies = companies.reduce((Acc, Object) => {
    
    console.log("Acumulo", Acc)
    console.log("Valor somado", Object.marketValue)



    const Sum = Acc + Object.marketValue

    return Sum

}, 0)


console.log(Sum_Companies)