const solution = (people, limit) => {
    // let complete = new Array(people.length).fill(1)
    let boat = 0
    let answer = 0
    for (let i = 0; i < people.length; i++) {
        if (people[i] && boat + people[i] <= limit) {
            console.log('asd')
            console.log(people)
            people[i] = 0
            boat += people[i]
        }        
    }
    console.log('end')
    boat = 0
    answer += 1
    return answer
}

console.log(solution([70, 50, 80, 50], 100))
