import googleStore from '../assets/play-store2x.png';
import appleStore from '../assets/badge-apple4x.png';


const data = {
  left: [
    {
      id: 1,
      amount: 700,
      text1: '만 명',
      text2: '의 여행자'
    },
    {
      id: 2,
      amount: 100,
      text1: '만 개',
      text2: '의 여행 리뷰',
    },
    {
      id: 3,
      amount: 470,
      text1: '만 개',
      text2: '의 여행 일정'
    }
  ],
  right: [
    {
      id: 1,
      text1: '2018 구글 플레이스토어',
      text2: '올해의 앱 최우수상 수상',
      // img: process.env.REACT_APP_GOOGLE
      img: googleStore
    },
    {
      id: 2,
      text1: '2018 애플 앱스토어',
      text2: '오늘의 여행앱 선정',
      img: appleStore
    }
  ]
}

export default data;