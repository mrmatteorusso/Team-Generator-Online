//varaibles
box = []

//shuffling rule
const shuffling = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

//sorting people
const groupPlayers = function (array, groupNum) {
    const groups = {};
    const peopleLeftOut = array.length % groupNum;
    const peopleEven = array.length - peopleLeftOut;
    const remainderPeople = array.slice(-peopleLeftOut)

    if (array.length % groupNum === 0) {
        for (let i = 1; i <= groupNum; i++) {
            groups[i] = array.slice(
                ((i - 1) * array.length) / groupNum,
                (array.length / groupNum) * i
            );
        }
    } else {
        for (let i = 1; i <= groupNum; i++) {
            groups[i] = array.slice(
                ((i - 1) * peopleEven) / groupNum,
                peopleEven / groupNum * i
            );
        }

        for (let j = 1; j <= remainderPeople.length; j++) {
            groups[j].push(remainderPeople[j - 1]
            );
        }
    }

    let str = ''
    Object.entries(groups).forEach(([key, value], index) => {
        console.log(key, value)
        str += `Team ${index + 1}\n\n`
        for (let person of value) {
            str +=
                `${person}\n`
        }
        str += `\n\n\n`
    });
    return str


};


document.getElementById("generate-button").addEventListener("click", sendToArray);

function sendToArray() {
    const areaContent = document.getElementById("outArray").value

    const prepareContent = areaContent.replaceAll("\r", " ").replaceAll("\n", " ").split(' ').filter(item => item !== '')
    box = prepareContent

    const groupNum = document.getElementById("inputGroupNumber").value;

    const shuffled = shuffling(box);



    const result = groupPlayers(shuffled, groupNum);
    document.getElementById("inputArray").innerHTML = result


}



// module.exports = groupPlayers
//#1 check index from shuffles
//#2 tidy up function: check return of groupPlayers
//when list in textarea is updated, plan to add it as new by delete the previous array
//error handling: groupNUm > group.length
//accidental space inbetween words like "pa blo"
//list as API

//tidy up input list and auto reprint it
