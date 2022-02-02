const list = [{
        Name: "Rodolfo",
        vip: true
    },
    {
        Name: "Maria",
        vip: false
    },
    {
        Name: "João",
        vip: true
    },
    {
        Name: "Bruno",
        vip: true
    },
    {
        Name: "Carla",
        vip: false
    },
    {
        Name: "Ana",
        vip: true
    },
    {
        Name: "Julio",
        vip: false
    },

]

//Exercicio usando map

const list_format = list.map((Students) => {

    let List_update = {
        Name: Students.Name,
        Vip: Students.vip,
        Sector: Students.vip == true ? "Black" : "Green"
    }

    return List_update

})

console.log(list_format)


const students = [{
        Name: "Rodolfo",
        testGrade: 7
    },
    {
        Name: "Maria",
        testGrade: 5
    },
    {
        Name: "João",
        testGrade: 8
    },
    {
        Name: "Bruno",
        testGrade: 9
    },
    {
        Name: "Carla",
        testGrade: 3
    },
    {
        Name: "Ana",
        testGrade: 2
    },
    {
        Name: "Julio",
        testGrade: 10
    },

]

//exercicio utilizando map

const students_list = students.map((Students) => {


    const List = {
        Name: Students.Name,
        FinalResult: Students.testGrade >= 7 ? "Approved" : "Disapproved"

    }

    return List

})


console.log(students_list)
