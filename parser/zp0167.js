const ZP0167 = (data, idx) => {

    var idx = 0;
    let headerRecord = {
        업무구분:          data.slice(idx, idx += 6),
        데이터구분:        data.slice(idx, idx += 2),
        일련번호:          data.slice(idx, idx += 8),
        기관코드:          data.slice(idx, idx += 3),
        총_DATA_RECORD_수: data.slice(idx, idx += 8),
        거래기준일:        data.slice(idx, idx += 8),
        FILLER :           data.slice(idx, idx += 465)
    }

    const dataLength = Number(headerRecord.총_DATA_RECORD_수);
    let dataRecord = new Array(Math.ceil(dataLength / MAX_LIMIT))
    for (let i = 0; i < dataRecord.length;i++){
        dataRecord[i] = new Array(0);
    }
    let trailerRecord = [];

    var sheetNum = 0;
    for (let i = 0; i < dataLength; i++){
        if ( i!=0 && i % MAX_LIMIT == 0) sheetNum++;

        dataRecord[sheetNum].push({
            업무구분             : data.slice(idx, idx+=6),
            데이터구분           : data.slice(idx, idx+=2),
            일련번호             : data.slice(idx, idx+=8),
            결제사업자코드       : data.slice(idx, idx+=3),
            출금은행코드         : data.slice(idx, idx+=3),
            은행결제앱구분코드   : data.slice(idx, idx+=2),
            가맹점ID             : data.slice(idx, idx+=20),
            QR구분               : data.slice(idx, idx+=1),
            QR등록기관ID         : data.slice(idx, idx+=2),
            // HOST가맹점코드       : data.slice(idx, idx+=3),
            고객결제금액         : Number(data.slice(idx, idx+=12)),
            결제거래고유번호     : data.slice(idx, idx+=13),
            결제거래일자         : data.slice(idx, idx+=8),
            가맹점수수료         : Number(data.slice(idx, idx+=12)),
            가맹점수수료공급가액 : Number(data.slice(idx, idx+=12)),
            가맹점수수료부가세액 : Number(data.slice(idx, idx+=12)),
            가맹점수수료율       : data.slice(idx, idx+=4),
            입금일자             : data.slice(idx, idx+=8),
            FILLER               : data.slice(idx, idx+=372)
        })
    };

    trailerRecord.push({
        업무구분                 : data.slice(idx, idx+=6),
        데이터구분               : data.slice(idx, idx+=2),
        일련번호                 : data.slice(idx, idx+=8),
        기관코드                 : data.slice(idx, idx+=3),
        총_DATA_RECORD_수        : data.slice(idx, idx+=8),
        고객결제금액합계         : Number(data.slice(idx, idx+=12)),
        가맹점수수료합계         : Number(data.slice(idx, idx+=12)),
        가맹점수수료공급가액합계 : Number(data.slice(idx, idx+=12)),
        가맹점수수료부가세액합계 : Number(data.slice(idx, idx+=12)),
        FILLER                   : data.slice(idx, idx+=425),
    });

    dataRecord.forEach(record => {
        console.log(record);
        exportFile(headerRecord, record, trailerRecord)
    })
    
}

