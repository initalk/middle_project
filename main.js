const menus = [
  {
    name: '비빔밥',
    desc: '다양한 나물과 고추장을 곁들인 영양식',
    img: 'images/bibimbap.jpg',
  },
  {
    name: '김치찌개',
    desc: '얼큰하고 따뜻한 국물 요리',
    img: 'images/kimchi.jpg',
  },
  {
    name: '불고기',
    desc: '달콤 짭짤한 소고기 요리',
    img: 'images/bulgogi.jpg',
  },
  {
    name: '짜장면',
    desc: '춘장의 깊은 맛이 나는 면 요리',
    img: 'images/jajang.jpg',
  },
  {
    name: '짬뽕',
    desc: '얼큰한 국물과 해산물이 가득한 면 요리',
    img: 'images/jjamppong.jpg',
  },
  {
    name: '탕수육',
    desc: '겉은 바삭, 속은 촉촉한 고기 튀김',
    img: 'images/tangsuyuk.jpg',
  },
  {
    name: '초밥',
    desc: '신선한 생선과 밥의 조화',
    img: 'images/sushi.jpg',
  },
  {
    name: '라멘',
    desc: '진한 국물과 면발의 일본식 요리',
    img: 'images/ramen.jpg',
  },
  {
    name: '우동',
    desc: '굵은 면발과 시원한 국물',
    img: 'images/udon.jpg',
  },
  {
    name: '파스타',
    desc: '크림, 토마토, 오일 등 다양한 소스',
    img: 'images/pasta.jpg',
  },
  {
    name: '스테이크',
    desc: '육즙 가득한 서양식 고기 요리',
    img: 'images/steak.jpg',
  },
  {
    name: '피자',
    desc: '치즈와 토핑이 가득한 대표 양식',
    img: 'images/pizza.jpg',
  },
  {
    name: '샐러드',
    desc: '신선한 채소와 드레싱',
    img: 'images/salad.jpg',
  },
]

function recommendMenu() {
  const randomIndex = Math.floor(Math.random() * menus.length)
  const menu = menus[randomIndex]
  const card = document.getElementById('result-card')

  card.innerHTML = `
        <img src="${menu.img}" alt="${menu.name}">
        <h3>${menu.name}</h3>
        <p>${menu.desc}</p>
      `
  card.classList.remove('hidden')
  card.classList.add('show')
}
