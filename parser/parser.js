
// 헤더 영역 파싱
function headerParsing(bizCode, data, idx) {
    var headerList = Object.keys(PARSER[bizCode].HEADER);
    var headerRecord = {};

    headerList.forEach((KeyName) => {
        var format = PARSER[bizCode].HEADER[KeyName].format
        var num = PARSER[bizCode].HEADER[KeyName].num
        
        if (format == "string") {
            headerRecord[KeyName] = data.slice(idx, idx += num);
        } else if (format == "number") {
            headerRecord[KeyName] = Number(data.slice(idx, idx += num))
        }
    });

    return { headerRecord, idx }
};


// 본 데이터 영역 파싱
function dataParsing(bizCode, data, idx, headerRecord) {
    var dataList = Object.keys(PARSER[bizCode].DATA);

    var dataLength = Number(headerRecord['총_DATA_RECORD_수'])
    let dataRecord = new Array(Math.ceil(dataLength / MAX_LIMIT))
    var sheetNum = 0;
    for (let i = 0; i < dataRecord.length; i++) {
        dataRecord[i] = new Array(0)
    }

    for (let i = 0; i < dataLength;i++) {
        if (i != 0 && i % MAX_LIMIT == 0) sheetNum++;

        var dataObj = {};
        dataList.forEach((KeyName) => {
            var format = PARSER[bizCode].DATA[KeyName].format
            var num = PARSER[bizCode].DATA[KeyName].num

            if (format == "string") {
                dataObj[KeyName] = data.slice(idx, idx += num);
            } else if (format == "number") {
                dataObj[KeyName] = Number(data.slice(idx, idx += num))
            }
        });
        dataRecord[sheetNum].push(dataObj);
    }

    return { dataRecord, idx }
};


function trailerParsing(bizCode, data, idx) {
    var trailerList = Object.keys(PARSER[bizCode].TRAILER);
    var trailerRecord = {};

    trailerList.forEach((KeyName) => {
        var format = PARSER[bizCode].TRAILER[KeyName].format
        var num = PARSER[bizCode].TRAILER[KeyName].num
        
        if (format == "string") {
            trailerRecord[KeyName] = data.slice(idx, idx += num);
        } else if (format == "number") {
            trailerRecord[KeyName] = Number(data.slice(idx, idx += num))
        }
    });

    return { trailerRecord, idx }
};