// 천 단위 마다 끊어주는 함수, 10,000
export const formattingNum = (price: number) => {
  return `${price?.toLocaleString('ko-KR')}`;
};

// base64 변환용
export const toBase64 = (startConfig: any) => {
  const json = JSON.stringify(startConfig);
  return encodeURI(Buffer.from(json).toString('base64'));
};

// 날짜 월일 변환
export const formatDate = () => {
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  return `${month}월 ${day}일`;
};

// 하이라이트 텍스트용
export const highlightedText = (text: string, query: string) => {
  if (query !== '' && text.includes(query)) {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts;
  }

  return text;
};

// 긴 글자 자르기용
export const sliceText = (text: string, maxLeng: number) => {
  const new_txt = text.length > maxLeng ? `${text.substr(0, maxLeng + 1)}...` : text;
  return new_txt;
};

// 지역 정보 api 전달용
export const location = (lat: string, lon: string) => {
  if (!lat && !lon) {
    return `?lat=${0}&lon=${0}`;
  }

  return `?lat=${lat}&lon=${lon}`;
};

// 휴대 전화 번호 - 추가
export const changePhone = (phone: string) =>
  phone
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
    .replace(/(\-{1,2})$/g, '');

// 딜레이 시간 후 실행
export async function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// 브라우저 환경인지 비교
export const isClient = () => {
  if (typeof window !== 'undefined') {
    return true;
  }
  return false;
};

// 성능 측정용
export const measureTime = (action: () => void) => {
  const startTime = performance.now();
  action();
  const endTime = performance.now();
  return `${parseFloat(((endTime * 100 - startTime * 100) / 100).toFixed(3)) / 1000}s`;
};
