import React from "react";
import Highlight from "react-highlight";

import {
  Title,
  DateShow,
  ContentBox,
  CodeBox,
} from "../../styledComponents/pages/post";

const post_1 = () => {
  return (
    <div
      style={{
        width: "60%",
        margin: "0 auto",
        paddingTop: "120px",
      }}
    >
      <Title>[자바스크립트 중요 개념 정리 1] 스코프</Title>
      <DateShow>2020.07.13</DateShow>
      <hr />
      <ContentBox>
        이시리즈는 제가 개인적으로 자바스크립트를 코딩하면서 중요하다고 생각하는
        자바스크립트 개념에 대한 정리입니다. ​<br /> 스코프란 변수의
        유효범위라고 할 수 있습니다. 변수의 유효범위는 크게 3가지입니다.
        <br /> 1.전역 스코프 (최상위 스코프) <br />
        2. 함수 스코프 <br />
        3.블록( {} ) 스코프 ​ <br />​<br />​ 1.전역 스코프 전역스코프는 변수를
        선언하면, 자바스크립트 소스 어디에서나 사용할 수 있는 것을 말합니다.전역
        변수를 사용할려면, 변수를 함수 바디나 블록에 선언하면 안됩니다. 그
        이유는 함수바디에 변수를 선언하면 함수에만 해당변수를 사용할 수 있고,
        블록 {} 선언하면 블록 {} 에만 사용할 수 있기 때문입니다.
        <br />
        <Highlight language="javascript">
          <CodeBox>
            {`let num = 10;

console.log(num); //10

function sum(a) {
  return a + num;
}

{
  console.log(num); //10
}

sum(10); //12
`}
          </CodeBox>
        </Highlight>
        <br />
        2.함수 스코프 함수 스코프는 함수에서 선언된 변수를 함수에서만 쓸 수
        있습니다. ​
        <Highlight language="javascript">
          <CodeBox>
            {`function printMe(){
   let print='블로그에 오신걸 환영합니다.';
   return print;
}

console.log(print)  //Uncaught ReferenceError: print is not defined
`}
          </CodeBox>
        </Highlight>
        <br />
        함수 바디에서 print 변수가 선언및 정의되었고 함수 바깥에서 print 변수를
        사용하려할 때 접근할 수 없어서 에러가 발생합니다.
        <br /> 3.블록 {} 스코프 블록 스코프는 블록, 즉 중괄호 안에서 선언된
        변수는 블록에만 사용할 수 있습니다.
        <Highlight language="javascript">
          <CodeBox>
            {`{
  let num=10;
  console.log(num)  //10
}
console.write(num) //Uncaught ReferenceError: num is not defined
`}
          </CodeBox>
        </Highlight>
        <br />
        추가 스코프 체인이란? 스코프 체인은 스코프가 서로 연결되어 있다는
        뜻입니다. 만약 함수에 선언된 변수와 전역변수에 선언된 변수이름이 같다면
        자바스크립트는 어떤 변수를 사용할까요?
        <Highlight language="javascript">
          <CodeBox>
            {`let num=10;

function printNum(){
 let num=20;
 return num; 
}
printNum() //20
`}
          </CodeBox>
        </Highlight>
        <br />
        자바스크립트는 함수에서 선언된 변수를 함수에서 사용할려고 하면
        함수스코프에서 해당 변수가 있는지 확인합니다. 해당 변수가 있으면 해당
        변수를 사용하고, 만약 함수에 사용할려고 하는 변수가 없다면, 전역
        스코프를 참고 하여 해당 변수가 있는지 확인합니다.
        <Highlight language="javascript">
          <CodeBox>
            {`let num=10;

function printNum(){
   return num;
}
printNum();  //10

`}
          </CodeBox>
        </Highlight>
      </ContentBox>
    </div>
  );
};

export default post_1;
