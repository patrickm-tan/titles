export function HelloWorld() {
    console.log("hi i was clicked")
    var i;
    var getMaxitems = 10;
    for (i=0;i<getMaxitems;i++) {
        console.log(i)
    }
}

export function getTitles(jsonFile) {
    const titlesList = [];
    for (var i=0; i<jsonFile.categories.length; i++) {
        titlesList.push(jsonFile.categories[i].title);
    }
    return titlesList;
}