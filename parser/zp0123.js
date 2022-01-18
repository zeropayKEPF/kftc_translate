const ZP0123 = (data, idx) => {
    
    var idx = 0;
    let headerRecord = {
        업무구분:          data.slice(idx, idx += 6),
        데이터구분:        data.slice(idx, idx += 2),
        일련번호:          data.slice(idx, idx += 8),
        기관코드:          data.slice(idx, idx += 3),
        총_DATA_RECORD_수: data.slice(idx, idx += 8),
        거래기준일:        data.slice(idx, idx += 8),
        FILLER :           data.slice(idx, idx += 665)
    }

    const dataLength = Number(headerRecord.총_DATA_RECORD_수)
    let dataRecord = [], trailerRecord = [];
    
    console.log('총_DATA_RECORD_수', dataLength);

    for (let i = 0; i < dataLength; i++){
        dataRecord.push({
            업무구분 :          data.slice(idx, idx+=6),
            데이터구분 :        data.slice(idx, idx+=2),
            일련번호 :          data.slice(idx, idx+=8),
            결제사업자코드 :    data.slice(idx, idx+=3),
            HOST가맹점코드 :    data.slice(idx, idx+=3),
            환불금액 :          Number(data.slice(idx, idx+=12)),
            봉사료 :            Number(data.slice(idx, idx+=12)),
            부가가치세 :        Number(data.slice(idx, idx+=12)),
            가맹점ID :          data.slice(idx, idx+=20),
            단말기관리번호 :    data.slice(idx, idx+=20),
            원거래일자 :        data.slice(idx, idx+=8),
            원거래고유번호 :    data.slice(idx, idx+=13),
            가맹점환불금액 :    Number(data.slice(idx, idx+=12)),
            환불가맹점수수료 :  Number(data.slice(idx, idx+=12)),
            차감예정일자 :      data.slice(idx, idx+=8),
            출금은행코드 :      data.slice(idx, idx+=3),
            은행결제앱구분코드 :data.slice(idx, idx+=2),
            환불거래고유번호 :  data.slice(idx, idx+=13),
            누적환불금액 :      Number(data.slice(idx, idx+=12)),
            FILLER :            data.slice(idx, idx+=519)
        })
    };

    console.log(dataRecord);

    trailerRecord.push({
        업무구분 :          data.slice(idx, idx+=6),
        데이터구분 :        data.slice(idx, idx+=2),
        일련번호 :          data.slice(idx, idx+=8),
        기관코드 :          data.slice(idx, idx+=3),
        총_DATA_RECORD_수 : data.slice(idx, idx+=8),
        환불금액합계 :      Number(data.slice(idx, idx+=12)),
        봉사료합계 :        Number(data.slice(idx, idx+=12)),
        부가가치세 :        Number(data.slice(idx, idx+=12)),
        FILLER :            data.slice(idx, idx+=437),
    })
    
    const nb = xlsx.utils.book_new();
    const dataSheet = xlsx.utils.json_to_sheet(dataRecord)
    const trailerSheet = xlsx.utils.json_to_sheet(trailerRecord)

    xlsx.utils.book_append_sheet(nb,dataSheet,'본 내역')
    xlsx.utils.book_append_sheet(nb,trailerSheet,'내역 합')

    xlsx.writeFile(nb, `./xlsFile/${headerRecord.업무구분}_${headerRecord.거래기준일}.xlsx`)
}
