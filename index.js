const $fileUpload = document.getElementById("file_upload");
const $trButton = document.getElementById('tr_button');
const $progressList = document.getElementById('progress-list');
const MAX_LIMIT = 300000

$fileUpload.addEventListener('change', async (e) => {
    $progressList.innerHTML = '';

    log("파일 업로드 중입니다.")
    var file = e.target.files[0];

    log("데이터를 읽고 있습니다.");
    execute(await file.text());
});
    

function execute (data) {
    let headerBiz = data.slice(0, 6);
    
    var idx = 0;

    var { headerRecord, idx }  = headerParsing(headerBiz, data, idx);
    var { dataRecord, idx }    = dataParsing(headerBiz, data, idx, headerRecord);
    var { trailerRecord, idx } = trailerParsing(headerBiz, data, idx);
    
    dataRecord.forEach(record => {
        exportFile([headerRecord], record, [trailerRecord]);
    });
    
    log(headerBiz + " 작업완료! (다운로드를 확인해주세요)");
}


