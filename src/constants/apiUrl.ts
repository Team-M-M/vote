export const API_URL = {
  BASE_URL: process.env.SERVER_URL,
  CLIENT: process.env.NEXT_PUBLIC_SERVER_URL,
  //! 리스트
  VOTE_LIST: '/office/vote_projectnew',
  // ! 후보자 
  CANDIDATE: '/office/player',
  //! 투표하기
  VOTE_DO: '/office/vote',

};
