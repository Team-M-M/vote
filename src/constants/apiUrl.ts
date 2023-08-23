export const API_URL = {
  BASE_URL: process.env.SERVER_URL,
  CLIENT: process.env.NEXT_PUBLIC_SERVER_URL,
  //! 사용자 인증
  USER_VOTE: '/office/user',
  //! 리스트
  VOTE_LIST: '/office/vote_projectnew',
  // ! 후보자
  CANDIDATE: '/office/player',
  //! 투표하기 - 관리인은 한명만 투표 가능
  VOTE_DO: '/office/vote',
  //! 여러명 투표하기 - 관리위원은 여러명을 투표할 수 있다.
  VOTE_MULTI_DO: '/office/votemulti',
  //! 현재 선거별로 투표율 표기
  VOTE_CUR_RATE: '/office/voteresult',
  VOTE_IMG: '/office/voteimagearray',
};
