import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

    let post = '강남 우동 맛집';
    let [글제목, setTitle] = useState(['남자코트 추천','강남 우동맛집','파이썬 독학']);
    let [logo, setLogo] = useState('ReactBlog');
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div className="black-nav">

                <h4>블로그임</h4>
åå
                <button onClick={()=>{
                    const copy = [...글제목];
                    copy[0] = '여자코트 추천';
                    setTitle(copy);
                    }}>눌러봐라</button>

                <button onClick={()=>{
                    const ascending = [...글제목];
                    setTitle(ascending.sort());
                }}>오름차순 정렬</button>

            </div>
            <div className="list">
                <h4>{ 글제목[0] } <span onClick={()=>{setCount(count+1)}}>👍</span>  {count} </h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{ 글제목[1] } <span>👍</span>  {count} </h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{ 글제목[2] } <span>👍</span>  {count} </h4>
                <p>2월 17일 발행</p>
            </div>
        </div>
    );
}

export default App;
