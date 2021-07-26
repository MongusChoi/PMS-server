// 에러 메세지의 구조화
const GenerateMessage = (ERR_CODE, DESCRIPTION) => {
  return {
    ERR_CODE,
    DESCRIPTION
  }
}

// 자주 사용하는 메세지들을 미리 정의하여 사용
module.exports = {
  INVALID_PARAM: GenerateMessage('ERR_INVALID_PARAM', '파라미터가 잘못되었습니다.'),
  NOT_FOUND: GenerateMessage('ERR_NOT_FOUND', '데이터를 찾을 수 없습니다.'),
  ALREADY_EXIST: GenerateMessage('ERR_ALREADY_EXIST', '데이터가 이미 존재합니다.'),
  INTERNAL_ERROR: GenerateMessage('ERR_INTERNAL_ERROR', '서버에 오류가 발생했습니다.')
}