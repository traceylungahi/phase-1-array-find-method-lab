const superbowlWin = (record) => {
    for (const item of record) {
        if(item.result === "W"){
            return item.year
        }
    }
}
const sadReality = [
    {result: "N/A"}
] 


