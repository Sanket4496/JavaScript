let assignment = function (currentMarks,totalMarks){
    let percentage = (currentMarks/totalMarks) * 100
    console.log(`your percentage is ${percentage}` )
    if(percentage >= 90)
    console.log('grade = A')
    else if(percentage >= 80)
    console.log('grade = B')
    else if(percentage >= 70)
    console.log('grade = C')
    else if(percentage >= 60)
    console.log('grade = D')
    else if(percentage >= 50)
    console.log('grade = E')
    else
    console.log('grade = F')
}
assignment(560,600)