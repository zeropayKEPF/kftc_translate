const PARSER = {
    ZP0113: {
        HEADER : {
            업무구분          : { num:6  , format:"string" },
            데이터구분        : { num:2  , format:"string" },
            일련번호          : { num:8  , format:"string" },
            기관코드          : { num:3  , format:"string" },
            총_DATA_RECORD_수 : { num:8  , format:"number" },
            거래기준일        : { num:8  , format:"string" },
            FILLER            : { num:665, format:"string" },
        },
    
        DATA : { 
            업무구분           : { num:6    , format:"string" }, 
            데이터구분         : { num:2    , format:"string" },
            일련번호           : { num:8    , format:"string" },
            결제사업자코드     : { num:3    , format:"string" },
            HOST가맹점코드     : { num:3    , format:"string" },
            원거래일자         : { num:8    , format:"string" },
            원거래고유번호     : { num:13   , format:"string" },
            거래금액           : { num:12   , format:"number" },
            봉사료             : { num:12   , format:"number" },
            부가가치세         : { num:12   , format:"number" },
            결제시간           : { num:6    , format:"string" },
            QR구분             : { num:1    , format:"string" },
            QR등록기관ID       : { num:2    , format:"string" },
            가맹점ID           : { num:20   , format:"string" },
            단말기관리번호     : { num:20   , format:"string" },
            QR체크문자         : { num:4    , format:"string" },
            가맹점수수료       : { num:12   , format:"number" },
            미완료여부         : { num:1    , format:"string" },
            입금예정일자       : { num:8    , format:"string" },
            출금은행코드       : { num:3    , format:"string" },
            은행결제앱구분코드 : { num:2    , format:"string" },
            FILLER             : { num:542  , format:"string" },
        },
    
        TRAILER : {
            업무구분           : { num:6    , format:"string" },
            데이터구분         : { num:2    , format:"string" },
            일련번호           : { num:8    , format:"string" },
            기관코드           : { num:3    , format:"string" },
            총_DATA_RECORD_수  : { num:8    , format:"number" },
            환불금액합계       : { num:12   , format:"number" },
            봉사료합계         : { num:12   , format:"number" },
            부가가치세         : { num:12   , format:"number" },
            FILLER             : { num:637  , format:"string" },
        }
    },

    ZP0123: {
        HEADER : {
            업무구분           : { num:6  , format:"string" },
            데이터구분         : { num:2  , format:"string" },
            일련번호           : { num:8  , format:"string" },
            기관코드           : { num:3  , format:"string" },
            총_DATA_RECORD_수  : { num:8  , format:"number" },
            거래기준일         : { num:8  , format:"string" },
            FILLER             : { num:665, format:"string" },
        },
    
        DATA : { 
            업무구분           : { num:6    , format:"string" },
            데이터구분         : { num:2    , format:"string" },
            일련번호           : { num:8    , format:"string" },
            결제사업자코드     : { num:3    , format:"string" },
            HOST가맹점코드     : { num:3    , format:"string" },
            환불금액           : { num:12   , format:"number" },
            봉사료             : { num:12   , format:"number" },
            부가가치세         : { num:12   , format:"number" },
            가맹점ID           : { num:20   , format:"string" },
            단말기관리번호     : { num:20   , format:"string" },
            원거래일자         : { num:8    , format:"string" },
            원거래고유번호     : { num:13   , format:"string" },
            가맹점환불금액     : { num:12   , format:"number" },
            환불가맹점수수료   : { num:12   , format:"number" },
            차감예정일자       : { num:8    , format:"string" },
            출금은행코드       : { num:3    , format:"string" },
            은행결제앱구분코드 : { num:2    , format:"string" }, 
            환불거래고유번호   : { num:13   , format:"string" },
            누적환불금액       : { num:12   , format:"number" },
            FILLER             : { num:519  , format:"string" },
        },
    
        TRAILER : {
            업무구분           : { num:6    , format:"string" },
            데이터구분         : { num:2    , format:"string" },
            일련번호           : { num:8    , format:"string" },
            기관코드           : { num:3    , format:"string" },
            총_DATA_RECORD_수  : { num:8    , format:"number" },
            환불금액합계       : { num:12   , format:"number" },
            봉사료합계         : { num:12   , format:"number" },
            부가가치세         : { num:12   , format:"number" },
            FILLER             : { num:437  , format:"string" },
        }
    },

    ZP0167: {
        HEADER : {
            업무구분                     : { num:6  , format:"string" },
            데이터구분                   : { num:2  , format:"string" },
            일련번호                     : { num:8  , format:"string" },
            기관코드                     : { num:3  , format:"string" },
            총_DATA_RECORD_수            : { num:8  , format:"number" },
            거래기준일                   : { num:8  , format:"string" },
            FILLER                       : { num:465, format:"string" },
        },
    
        DATA : { 
            업무구분                     : { num:6    , format:"string" },
            데이터구분                   : { num:2    , format:"string" },
            일련번호                     : { num:8    , format:"string" },
            결제사업자코드               : { num:3    , format:"string" },
            출금은행코드                 : { num:3    , format:"string" },
            은행결제앱구분코드           : { num:2    , format:"string" },
            가맹점ID                     : { num:20   , format:"string" },
            QR구분                       : { num:1    , format:"string" },
            QR등록기관ID                 : { num:2    , format:"string" },
            고객결제금액                 : { num:12   , format:"number" },
            결제거래고유번호             : { num:13   , format:"string" },
            결제거래일자                 : { num:8    , format:"string" },
            가맹점수수료                 : { num:12   , format:"number" },
            가맹점수수료공급가액         : { num:12   , format:"number" },
            가맹점수수료부가세액         : { num:12   , format:"number" },
            가맹점수수료율               : { num:4    , format:"string" },
            입금일자                     : { num:8    , format:"string" },
            FILLER                       : { num:372  , format:"string" },
        },
    
        TRAILER : {
            업무구분                     : { num:6      , format:"string" },
            데이터구분                   : { num:2      , format:"string" },
            일련번호                     : { num:8      , format:"string" },
            기관코드                     : { num:3      , format:"string" },
            총_DATA_RECORD_수            : { num:8      , format:"string" },
            고객결제금액합계             : { num:12     , format:"number" },
            가맹점수수료합계             : { num:12     , format:"number" },
            가맹점수수료공급가액합계     : { num:12     , format:"number" },
            가맹점수수료부가세액합계     : { num:12     , format:"number" },
            FILLER                       : { num:425    , format:"string" },
        }
    },
    
    ZP0168: {
        HEADER : {
            업무구분                     : { num:6  , format:"string" },
            데이터구분                   : { num:2  , format:"string" },
            일련번호                     : { num:8  , format:"string" },
            기관코드                     : { num:3  , format:"string" },
            총_DATA_RECORD_수            : { num:8  , format:"number" },
            거래기준일                   : { num:8  , format:"string" },
            FILLER                       : { num:465, format:"string" },
        },
    
        DATA : { 
            업무구분                     : { num:6    , format:"string" },
            데이터구분                   : { num:2    , format:"string" },
            일련번호                     : { num:8    , format:"string" },
            결제사업자코드               : { num:3    , format:"string" },
            출금은행코드                 : { num:3    , format:"string" },
            은행결제앱구분코드           : { num:2    , format:"string" },
            가맹점ID                     : { num:20   , format:"string" },
            환불금액                     : { num:12   , format:"number" },
            환불거래고유번호             : { num:13   , format:"string" },
            결제거래일자                 : { num:8    , format:"string" },
            원거래고유번호               : { num:13   , format:"string" },
            원거래일자                   : { num:8    , format:"string" },
            환불가맹점수수료             : { num:12   , format:"number" },
            환불가맹점수수료공급가액     : { num:12   , format:"number" },
            환불가맹점수수료부가세액     : { num:12   , format:"number" },
            가맹점수수료율               : { num:4    , format:"string" },
            차감일자                     : { num:8    , format:"string" },
            누적환불금액                 : { num:12   , format:"number" },
            FILLER                       : { num:342  , format:"string" },
        },
    
        TRAILER : {
            업무구분                     : { num:6    , format:"string" },
            데이터구분                   : { num:2    , format:"string" },
            일련번호                     : { num:8    , format:"string" },
            기관코드                     : { num:3    , format:"string" },
            총_DATA_RECORD_수            : { num:8    , format:"string" },
            환불금액합계                 : { num:12   , format:"number" },
            환불가맹점수수료합계         : { num:12   , format:"number" },
            환불가맹점수수료공급가액합계 : { num:12   , format:"number" },
            환불가맹점수수료부가세액합계 : { num:12   , format:"number" },
            FILLER                       : { num:425  , format:"string" },
        }
    },


};