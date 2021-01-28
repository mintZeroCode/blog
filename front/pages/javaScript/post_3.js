import React from "react";
import Highlight from "react-highlight";

import {
  Title,
  DateShow,
  ContentBox,
  CodeBox,
  Div,
} from "../../styledComponents/pages/post";

const post_1 = () => {
  return (
    <Div>
      <Title>
        [자바스크립트 중요 개념 정리 3]기본데이터 타입의 prototype 기능
      </Title>
      <DateShow> 2020. 8. 13</DateShow>
      <hr />
      <ContentBox>
        1.기본데이터 타입에서의 prototype이란?
        <br /> 자바스크립트에서 prototype은 기본적으로 객체입니다. prototype을
        사용하면 객체지향언어의 특징 중 하나인 상속을 사용할 수 있습니다.
        자바스크립트 자체에서 미리 구현해 제공하는 prototype이 있습니다. 예를
        들어 기본 데이터 타입인 문자열(string)의 프로토타입은
        String.prototype이고, 문자열 타입은 String.prototype의 프로퍼티와
        메서드들을 사용할 수 있습니다. ​
        <br />
        <br />
        2.String.prototype 객체의 프로퍼티와 메서드 <br /> String.prototype의
        프로퍼티와 메서드을 알기 위해 크롬 콘솔창(크롬에서 ctrl+shift+i를
        입력하면 콘솔창으로 이동합니다.) 으로 이동한 후,
        console.dir(String.prototype);을 콘솔창에 입력하면 다음과 같은 결과를
        얻을 수 있습니다.
        <Highlight language="javascript">
          <CodeBox>
            {`console.dir(String.prototype);

String
anchor: ƒ anchor()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
           .
length: 0  //string.prototype의 프로퍼티는 length 프로퍼티 뿐입니다.
          .
          .
          .
// 더 많은 메서드는 줄관계로 생락함.


`}
          </CodeBox>
        </Highlight>
        기본값 데이터타입 중 (string,number,Boolean)은 prototype를 가지고
        있습니다. null과 undefined는 prototype을 가지지 않습니다. 단순히 기본값
        데이터를 메서드와 프로퍼티를 사용하지 않으면 기본 데이터타입으로
        작동하며, 기본 데이터타입에 프로퍼티와 메서드를 사용하면 기본 데이터
        타입은 일시적으로 객체가 되며, 이 객체의 상위 객체인
        기본데이터타입.prototype의 객체를 참조하며, 기본데이터타입.prototype은
        기본데이터 타입에게 프로퍼티와 메서드를 제공합니다. 즉 prototype의
        역할은 기본데이터 타입에 프로퍼티와 메서드를 제공한다는 것입니다.
        <br />
        <br />
        3. 문자열에 String.prototype 프로퍼티 사용해보기 먼저, 상수 a에 문자열
        선언 및 초기화를 합니다.
        <Highlight language="javascript">
          <CodeBox>
            {`const a='Hello World';  //11


`}
          </CodeBox>
        </Highlight>
        이 문자열의 길이를 알고 싶다면 어떻게 하면 될까요? string.prototype의
        length 프로퍼티를 사용하면 됩니다. length 프로퍼티는 문자열의 길이를
        반환 합니다.
        <br /> <br />
        <Highlight language="javascript">
          <CodeBox>
            {` console.log(a.length); 
`}
          </CodeBox>
        </Highlight>
        여기서 의문이 생기는데요. 기본적으로 상수 a의 데이터타입은 문자열이고
        string.prototype은 객체입니다. 어떻게 기본데이터 타입이 객체의
        프로퍼티를 사용할 수 있을까요? 해답은 문자열에 프로퍼티와 메서드를
        사용하면 자바스크립트는 일시적으로 객체로 변환됩니다. 따라서 기본데이터
        타입이 객체로 변환된 후 이 객체의 부모 객체인 string.prototype의 객체를
        참조할 수 있고, 상수a는 string.prototype이 가지고 있는 프로퍼티와
        메서드를 자유롭게 사용할 수 있습니다.​
        <br />
        4. 문자열의 __proto__ 링크
        <br />
        상수 a에는 숨겨진 링크가 있습니다. 바로 __proto__ 링크 인데요. 이
        __proto__ 은 상위 객체를 가리키고 있습니다.
        <Highlight language="javascript">
          <CodeBox>
            {`console.dir(a.__proto__); //string
`}
          </CodeBox>
        </Highlight>
        위의 코드를 입력하면 결과 값으로 string이 반환됩니다. 크롬 콘솔창에서의
        string은 string.prototype와 같습니다. ​
      </ContentBox>
    </Div>
  );
};

export default post_1;
