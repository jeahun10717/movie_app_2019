# React Lecture _ nomad coder's movie app

## 1. SETUP

### 1.0. Creating your first React App

react 를 설치하려면 `node.js 10.16 이상, npm 5.6` 이상의 버전이 설치 되어 있어야 한다.

1. react 설치 명령어

```
npx create-react-app `{폴더 이름}`
```

2. react 실행 명령어

react 가 설치된 디렉토리로 진입한 뒤 아래 명령어 실행.

```
npm start
yarn start
```


### 1.2. How does React Work?

기본적으로 public 파일에 존재하는 html 에 src 폴더 안에 존재하는 컴포넌트들을 삽입하는 형태이다.

---

## 2 JSX & PROPS

### 2.0 Creating your first React Component

1. Component 란

Component 란 html 을 반환해주는 함수이다. 즉 js 로 html 을 반환하게 되는데 이러한 특수한 상황에서 쓰는 것이 jsx 이다.
jsx 는 js 와 html 이 혼재하는 듯한 특이한 모습을 가진다


```javascript
function App() {
  return (
    <div> hello! </div>
  );
}

export default App;
```

2. 새로운 Component 만들기

src 폴더안에 potato.js 라는 폴더를 만든다.

**[/src/potato.js]**

```javascript
import  React  from "react";

function Potato(){
    return <h3>I love Potato</h3>
}

export default Potato;
```

**주의 !** : 만들어진 potato 라는 컴포넌트를 아래와 같이 쓰면 안된다.


**[/src/index.js]**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Potato from './potato'
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Potato />
  </React.StrictMode>,
  document.getElementById('root')
);
```

react Application 은 하나의 Component 만은 rendering 한다. 그 default 는 App 이다. 위와 같이 <App /> 과 <Potato /> 가 동시에 사용되면 에러를 뱉게 된다. 따라서 아래와 같은 방식을 취해야 한다.

**[/src/App.js]**

```javascript
import Potato from './Potato';

function App() {
  return (
    <div>
      <Potato/>
    </div>
  );
}

export default App;

```

또한 위에서처럼 파일을 분리하지 않고 아래와 같이 사용해도 동작한다.

```javascript
function Potato() {
  return (
    <h1>I like potato</h1>
  )
}

function App() {
  return (
    <div>
      <Potato/>
    </div>
  );
}

export default App;
```

### 2.1 Reusable Components with JSX + Props

```javascript
function Food(props) {
  console.log(props);
  return (
    <h1>I like potato</h1>
  )
}

function App() {
  return (
    <div>
      <Food
      fav = "kimchi"
      something = {true}
      test33 = {["hello", 1,2,3,4,true]}/>
    </div>
  );
}

export default App;
```

위의 소스에서 콘솔에는 아래와 같은 정보가 찍힌다

```JSON
{
    "fav": "kimchi",
    "something": true,
    "test33": [
        "hello",
        1,
        2,
        3,
        4,
        true
    ]
}
```

react 에서는 html 에서의 속성을 사용하는 것처럼 Property 를 사용해서 그 정보를 다른 곳으로 넘기는 게 가능하다.</br>
위의 소스에서는 Food 라는 Component 에서 fav, something, test33 이라는 props 를 Food 라는 함수에 넘겨서 그 결과를 출력 해 봤다.</br>
위의 소스에서 props 는 객체이므로 아래와 같이 접근이 가능하다.

```javascript
function Food(props) {
  console.log(props.fav);
  return (
    <h1>I like potato</h1>
  )
}

function App() {
  return (
    <div>
      <Food
      fav = "kimchi"
      something = {true}
      test33 = {["hello", 1,2,3,4,true]}/>
    </div>
  );
}

export default App;
```

위의 소스에서 콘솔에는 kimchi 가 찍히게 된다. 추가로 ES6 에서는 아래와 같은 문법도 적용 가능하다.

```javascript
function Food({fav}) {
  console.log(fav);
  return (
    <h1>I like {fav}</h1>
  )
}

function App() {
  return (
    <div>
      <Food
      fav = "kimchi"
      something = {true}
      test33 = {["hello", 1,2,3,4,true]}/>
    </div>
  );
}

export default App;
```
위 코드에 대한 결과값이 아래의 사진과 같다.

![props img 1](./image/img1.png)

즉 다른 props 를 매개변수로 전달하여 다른 Jsx 에 적용이 가능하게 된다. 이러한 강점은 하나의 컴포넌트를 props 에 따라 간편하게 수정이 가능하다는 것이다.

```javascript
function Food({fav}) {
  console.log({fav});
  return (
    <h1>I like {fav}</h1>
  )
}

function App() {
  return (
    <div>
      <Food fav = "kimchi" />
      <Food fav = "rice" />
      <Food fav = "meat" />
      <Food fav = "cake" />
      <Food fav = "coke" />
    </div>
  );
}

export default App;
```

![props img 1](./image/img2.png)


### 2.2 Dynamic Component Generation

```javascript
function Food({fav}) {
  console.log({fav});
  return (
    <h1>I like {fav}</h1>
  )
}

function App() {
  return (
    <div>
      <Food fav = "kimchi" />
      <Food fav = "rice" />
      <Food fav = "meat" />
      <Food fav = "cake" />
      <Food fav = "coke" />
    </div>
  );
}

export default App;
```

위의 코드에서 Food 라는 컴포넌트를 사용할 때 그 개수가 많아지면 매번 복붙을 해야 하는 번거로움이 있다. REST API 를 사용한다고 가정할 때 서버에서 던져주는 자료들이 동적일 경우가 있는데 이 때마다 맞춰서 복붙을 하는 것은 불가능하다. 따라서 props 를 사용하여 서버가 던져주는 자료들을 동적으로 처리할 수 있게 만들 수 있다.

```javascript
const foodILike = [
  {
    name: 'kimchi',
    image: 'https://www.wearesovegan.com/wp-content/uploads/2020/09/howtomakevegankimchirecipe-h1-1170x1645.jpg'
  },
  {
    name: 'steak',
    image: 'https://www.seriouseats.com/thmb/EZaQnk1yjGYVIkASseEWqtFRHyc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg'
  },
  {
    name: 'coke',
    image: 'https://images.heb.com/is/image/HEBGrocery/001397056?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0'
  },
]
```

서버가 던져주는 데이터가 위와 같다고 가정해 보자. 우리는 이러한 자료를 어떻게 우리가 만든 Component 에 적용할 수 있는 지 알아보자</br>

```javascript
const foodILike = [
  {
    name: 'kimchi',
    image: 'https://www.wearesovegan.com/wp-content/uploads/2020/09/howtomakevegankimchirecipe-h1-1170x1645.jpg'
  },
  {
    name: 'steak',
    image: 'https://www.seriouseats.com/thmb/EZaQnk1yjGYVIkASseEWqtFRHyc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg'
  },
  {
    name: 'coke',
    image: 'https://images.heb.com/is/image/HEBGrocery/001397056?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0'
  },
]

function Food(props) {
  console.log(props.name);
  return (
    <div>
    <h1>I like {props.name}</h1>
    <img src={props.image}></img>
    </div>
  )
}

function App() {
  return (
    <div>
      {foodILike.map(dish=>(
      <Food name={dish.name} image={dish.image}/>
      ))}
    </div>
  );
}

export default App;
```

위의 소스에서 map 에 의해 배열 안을 순회하면서 `<Food>` 태그를 return 하게 된다. `<Food>` 태그에 `name`, `image` 라는 props 를 각각 부여했고 위의 `Food` Component(함수) 에서 이를 각각 `h1`, `img` 태그에 부여했다. 이에 따라 위의 소스는 아래와 같은 결과를 가진다.

![use map for reveal API data](./image/img3.png)

### 2.3 map Recap

map 함수의 기본 사용 형태는 아래와 같다.</br>

`arr.map(callback(currentValue[, index[, array]])[, thisArg])`

위의 형태에서 callback 은 콜백**함수** 를 의미하며 이는 사용자화 할 수 있다. 즉 아래의 소스와 같은 형태를 쓸 수 있다.

```javascript
function Food(props) {
  console.log(props.name);
  return (
    <div>
    <h1>I like {props.name}</h1>
    <img src={props.image}></img>
    </div>
  )
}

function renderFood(dish) {
  console.log(dish);
  return <Food name={dish.name} image={dish.image}/>
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}
```

* react 의 Component 를 사용하다보면 아래와 같은 에러가 뜨는 경우가 았다.

![use map for reveal API data](./image/img4.png)

이는 React 의 Component 들은 uniqueness 즉 독립성을 보장받아야 하기 때문이다. 사람의 관점에서는 위의 `<Food>` Component 는 name, image 속성이 다르지만 React 는 이를 인지하지 못한다. 따라서 unique 한 값을 부여해서 각각의 `<Food>` Component 들이 다름을 react 에게 인지시켜줘야 한다.

```javascript
const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://www.wearesovegan.com/wp-content/uploads/2020/09/howtomakevegankimchirecipe-h1-1170x1645.jpg'
  },
  {
    id: 2,
    name: 'steak',
    image: 'https://www.seriouseats.com/thmb/EZaQnk1yjGYVIkASseEWqtFRHyc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg'
  },
  {
    id: 3,
    name: 'coke',
    image: 'https://images.heb.com/is/image/HEBGrocery/001397056?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0'
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish=>(
      <Food key={dish.id} name={dish.name} image={dish.image}/>
      ))}
    </div>
  );
}
```

위와 같이 Food 컴포넌트에 key 라는 props 를 부여해서 독립성을 보장해 주었다. 이 key 라는 props 는 프로그래머가 사용하는 것이 아니라 위에서 설명했듯이 react 가 혼동하지 않게 해 주려고 써준것이다.</br>

또한 react 를 사용하다 보면 아래와 같은 오류메시지도 볼 수 있다.

![use map for reveal API data](./image/img5.png)

이는 img 태그의 속성에 alt 를 부여하지 않아서 발생하는 오류이다. alt 속성은 시각장애인을 위한 속성으로 왠만하면 이를 적어주는 것이 좋다.


### 2.4 Protection with PropTypes
