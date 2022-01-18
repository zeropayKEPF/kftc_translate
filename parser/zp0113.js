const ZP0113 = (data, idx) => {

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
    console.log(dataLength);
    let dataRecord = new Array(Math.ceil(dataLength / MAX_LIMIT))
    for (let i = 0; i < dataRecord.length;i++){
        dataRecord[i] = new Array(0);
    }
    let trailerRecord = [];

    var sheetNum = 0;
    for (let i = 0; i < dataLength; i++){
        if (i != 0 && i % MAX_LIMIT == 0) sheetNum++;
        
        dataRecord[sheetNum].push({
            업무구분           : data.slice(idx, idx+=6),
            데이터구분         : data.slice(idx, idx+=2),
            일련번호           : data.slice(idx, idx+=8),
            결제사업자코드     : data.slice(idx, idx+=3),
            HOST가맹점코드     : data.slice(idx, idx+=3),
            원거래일자         : data.slice(idx, idx+=8),
            원거래고유번호     : data.slice(idx, idx+=13),
            거래금액           : Number(data.slice(idx, idx+=12)),
            봉사료             : Number(data.slice(idx, idx+=12)),
            부가가치세         : Number(data.slice(idx, idx+=12)),
            결제시간           : data.slice(idx, idx+=6),
            QR구분             : data.slice(idx, idx+=1),
            QR등록기관ID       : data.slice(idx, idx+=2),
            가맹점ID           : data.slice(idx, idx+=20),
            단말기관리번호     : data.slice(idx, idx+=20),
            QR체크문자         : data.slice(idx, idx+=4),
            가맹점수수료       : Number(data.slice(idx, idx+=12)),
            미완료여부         : data.slice(idx, idx+=1),
            입금예정일자       : data.slice(idx, idx+=8),
            출금은행코드       : data.slice(idx, idx+=3),
            은행결제앱구분코드 : data.slice(idx, idx+=2),
            FILLER             : data.slice(idx, idx+=542)
        })
    };

    trailerRecord.push({
        업무구분 :          data.slice(idx, idx+=6),
        데이터구분 :        data.slice(idx, idx+=2),
        일련번호 :          data.slice(idx, idx+=8),
        기관코드 :          data.slice(idx, idx+=3),
        총_DATA_RECORD_수 : data.slice(idx, idx+=8),
        환불금액합계 :      Number(data.slice(idx, idx+=12)),
        봉사료합계 :        Number(data.slice(idx, idx+=12)),
        부가가치세 :        Number(data.slice(idx, idx+=12)),
        FILLER :            data.slice(idx, idx+=637),
    })

    dataRecord.forEach(record => {
        console.log(record);
        exportFile(headerRecord, record, trailerRecord)
    })
}
