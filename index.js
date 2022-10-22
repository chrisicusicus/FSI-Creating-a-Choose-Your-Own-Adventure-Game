//Your Code here

let firstAnswer  = window.prompt('Do you head left or right?')
if(firstAnswer === 'left'){
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path?`)
}
else if (firstAnswer === 'right') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take?`)
}
if(secondAnswer === 'follow'){
    let thirdAnswer = window.prompt(`You follow the cat to a colony of cats, 
nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. 
They are content with you staying, but you wonder if you should alert the world to this magical safe haven.`)
}
else if(secondAnswer ==='continue') {
    let thirdAnswer = window.prompt(`You come across a chamber that reaches upward to a shining light above. 
There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?`)
}
else if(secondAnswer ==='past the dragon'){
    let thirdAnswer = window.prompt(`The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:`)
} 
else if(secondAnswer === 'stay'){
    let thirdAnswer = window.prompt(`You and the dragon have an uplifting conversation about local politics and become lifelong friends.`)
}
if (thirdAnswer === 'staircase'){
    let fourthAnswer = window.prompt('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.')
} else if (thirdAnswer==='ladder'){
let fourthAnswer=window.prompt('After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.')
}

