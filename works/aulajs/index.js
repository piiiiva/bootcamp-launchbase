
const studentsClassA = [
    {
        name: 'Rodrigo',
        score: 9.8
    },
    {
        name: 'Dayane',
        score: 10
    },
    {
        name: 'Mayk',
        score: 2
    },
    {
        name: 'Mais um aluno',
        score: 10
    }

]

const studentsClassB = [
    {
        name: 'Rafa',
        score: 9.8
    },
    {
        name: 'Dani',
        score: 1.8
    },
    {
        name: 'Lipe',
        score: 0
    },
    {
        name: 'Novo Aluno',
        score: 5
    }

]


const average1 = averageCalculation(studentsClassA)
const average2 = averageCalculation(studentsClassB)

function averageCalculation(students) {
    let sum = 0
    
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].score
    }
    
    const average = sum / students.length
    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`A média da turma ${turma} foi de ${average}. Parabéns!`)
    }
    else {
        console.log(`A média da turma ${turma} é menor que 5`)
    }
    
}


function markAsFlunked(student) {
    student.flunked = false;
    
    if (student.score < 5) {
        student.flunked = true;
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`O aluno ${student.name} está reprovado!`)
    }
}

function studentFlunked(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

sendMessage(average1, 'turmaA')
sendMessage(average2, 'turmaB')

studentFlunked(studentsClassA)
studentFlunked(studentsClassB)




