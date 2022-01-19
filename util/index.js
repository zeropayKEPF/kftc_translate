
function exportFile(headerRecord, dataRecord, trailerRecord) {
    var nb = xlsx.utils.book_new();
    
    var dataSheet = xlsx.utils.json_to_sheet(dataRecord);
    var trailerSheet = xlsx.utils.json_to_sheet(trailerRecord);

    xlsx.utils.book_append_sheet(nb, dataSheet, '본 내역');
    xlsx.utils.book_append_sheet(nb, trailerSheet, '내역 합');

    xlsx.writeFile(nb, `${headerRecord[0].업무구분}_${headerRecord[0].거래기준일}.xlsx`);
}


function log(text) {
    var node = document.createElement('li')
    node.textContent = text;
    $progressList.appendChild(node);

    console.info(text);
};