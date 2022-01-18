const $fileUpload = document.getElementById("file_upload");
const $trButton = document.getElementById('tr_button');
const $taskText = document.getElementById('task-text');


$fileUpload.addEventListener('change', async (e) => {
    var file = e.target.files[0];
    
    $taskText.textContent = "파일 업로드 중입니다...";
    var fileText = await file.text();

    
    execute(fileText);
})
    
const MAX_LIMIT = 300000

const execute = async (data) => {
    let idx = 0;
    let headerBiz = data.slice(0, 6);
    
    console.log('업무구분 : ', headerBiz);

    $taskText.textContent  = headerBiz + "작업 중입니다...";

    
    switch (headerBiz) {
        case 'ZP0113': {
            await ZP0113(data, idx);
            break;
        }
        case 'ZP0123': {
            await ZP0123(data, idx);
            break;
        }
        case 'ZP0167': {
            await ZP0167(data, idx);
            break;
        }
        case 'ZP0168': {
            await ZP0168(data, idx);
            break;
        }
    };
    $taskText.textContent = headerBiz + " 작업완료! (다운로드를 확인해주세요)";
}

function exportFile(headerRecord, dataRecord, trailerRecord) {
    var nb = xlsx.utils.book_new();
    
    var dataSheet = xlsx.utils.json_to_sheet(dataRecord);
    var trailerSheet = xlsx.utils.json_to_sheet(trailerRecord);

    $taskText.textContent = '엑셀 변환 완료, 엑셀 내보내기 실행 시작';
    xlsx.utils.book_append_sheet(nb, dataSheet, '본 내역');
    xlsx.utils.book_append_sheet(nb, trailerSheet, '내역 합');

    $taskText.textContent = '엑셀 내보내기 중...';
    xlsx.writeFile(nb, `./xlsFile/${headerRecord.업무구분}_${headerRecord.거래기준일}.xlsx`);
}