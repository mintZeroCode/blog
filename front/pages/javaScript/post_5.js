import React from "react";
import Highlight from "react-highlight";

import {
  Title,
  DateShow,
  ContentBox,
  CodeBox,
} from "../../styledComponents/pages/post";

const post_5 = () => {
  return (
    <div
      style={{
        width: "60%",
        margin: "0 auto",
        paddingTop: "120px",
      }}
    >
      <Title>
        [자바스크립트 중요 개념 정리6] 일급함수(first-class function)
      </Title>
      <DateShow>2020. 8. 25</DateShow>
      <hr />
      <ContentBox>
        일급함수(first-class function)란?
        <br /> 일급함수란 함수를 변수처럼 취급하여 함수을 값으로 사용하는 것을
        뜻합니다. 따라서, 변수가 할수 있는 일을 변수에서 함수로 대체해 사용할 수
        있습니다. <br />​ 자바스크립트는 변수에 변수를 저장할 수 있는데요.
        함수도 변수 취급을 할 수 있으므로 변수에 함수를 저장할 수 있습니다.
        <br />
        다음 코드가 변수에 변수를 저장하고 콘솔에 로그를 찍는 코드입니다.
        <br />
        <br />
        <Highlight language="javascript">
          <CodeBox>
            {`let a = 1;
let b = a;
console.log(b); //1


`}
          </CodeBox>
        </Highlight>
        다음으로, 함수도 변수취급을 받으므로 변수에 함수를 저장할 수 도
        있습니다. 이런 코드를 함수 표현식이라고 합니다.
        <br />
        <Highlight language="javascript">
          <CodeBox>
            {`let a = (text) => {
  console.log(text);
};


`}
          </CodeBox>
        </Highlight>
        <br />
        변수의 값과 변수의 값이 더할 수 있듯이, 함수 또한 함수끼리 더할 수
        있습니다.변수와 함수의 비교를 위해 상수를 숫자로 초기화해 상수를 더하는
        코드를 작성합니다.
        <br />
        <Highlight language="javascript">
          <CodeBox>
            {` let a = 1;
let b = 2;
let c = a + b;
console.log(c);  //3

`}
          </CodeBox>
        </Highlight>
        위의 코드에서 상수와 상수를 더했는데요. 다음 코드는 상수대신 함수를
        사용해 함수와 함수를 더하는 코드입니다.
        <br />
        <Highlight language="javascript">
          <CodeBox>
            {`let aFunc = () => 1;
let bFunc = () => 2;
let c = aFunc() + bFunc();

console.log(c);  //3

`}
          </CodeBox>
        </Highlight>
        더나아가서 함수를 호출시켜 사칙연산을 할 수 있을까요? 변수에 사칙연산이
        가능하니, 함수도 당연히 가능합니다.
        <br /> ​
        <br />
        <Highlight language="javascript">
          <CodeBox>
            {`let a = () => 12;
let b = () => 2;
let c = () => 30;
let d = () => 40;
let e = (a() / b()) * c() + d();

console.log(e); //220

`}
          </CodeBox>
        </Highlight>
        또한 함수를 변수처럼 사용하기 때문에 함수의 인자로 변수대신 함수를 넣을
        수 있습니다.
      </ContentBox>
    </div>
  );
};

export default post_5;
