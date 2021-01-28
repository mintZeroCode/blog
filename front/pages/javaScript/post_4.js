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
      <Title>[자바스크립트 중요 개념 정리 4]함수의 prototype 기능</Title>
      <DateShow>2020. 8. 19</DateShow>
      <hr />
      <ContentBox>
        1. 함수를 만들어 함수의 프로퍼티 알아보기 예시를 들기위해 단순히 정수를
        제곱근하는 함수를 만들어 봅시다.​
        <br />
        <br />
        <Highlight language="javascript">
          <CodeBox>
            {`function squareRoot(number){
   return number*number;
}
`}
          </CodeBox>
        </Highlight>
        함수 역시 프로토타입을 가리키는 링크를 가지고 있지만, 기본데이터
        타입에서 사용하는 프로토타입과는 다르게 두개의 프로토타입객체를 가리키는
        링크를 가지고 있습니다. ​ 크롬 콘솔창에 console.dir(squareRoot);을
        입력해 봅시다. console.dir은 해당객체의 프로퍼티와 메서드를 알 수 있는
        메서드입니다.
        <br />
        <Highlight language="javascript">
          <CodeBox>
            {`console.dir(squareRoot);

ƒ squareRoot(number)
arguments: null
caller: null
length: 1
name: "squareRoot"
prototype: {constructor: ƒ}
__proto__: ƒ ()
[[FunctionLocation]]: VM5299:1
[[Scopes]]: Scopes[2]

`}
          </CodeBox>
        </Highlight>
        위의 코드는 console.dir(squareRoot);을 입력해 squareRoot 함수의
        arguments 유사배열객체, caller프로퍼티, 스코프 정보 등을 알수 있다는
        것을 알려 줍니다. 기본적으로 함수는 객체이기 때문에 함수는 여러
        프로퍼티를 가지고 있습니다. 여기서 눈여겨 볼 점은 prototype 프로퍼티와
        __proto__프로퍼티입니다. prototype은 생성자 함수를 이용해 객체를 만들때
        사용하고, __proto__ 프로퍼티는 함수 객체의 상위 객체로서 함수에 기능을
        제공합니다. ​
        <br /> <br />
        2. 함수의 __proto__ 프로퍼티 먼저 squareRoot 함수의 __proto__을 통하여
        squareRoot 함수의 상위 객체인 Function.prototype의 length 프로퍼티를
        사용해 보겠습니다. length프로퍼티를 사용하면 함수를 선언할 때의 인자의
        갯수를 알수 있습니다.
        <Highlight language="javascript">
          <CodeBox>
            {` squareRoot.length //1
`}
          </CodeBox>
        </Highlight>
        <br />
        이렇듯 사용자가 선언한 함수는 내부적 (크롬기준)으로 __proto__ 프로퍼티를
        가지고 있습니다. __proto__ 프로퍼티는 사용자가 선언한 함수의 상위 객체인
        Function.prototype를 가리키고 있고 사용자가 선언한 함수는
        Function.prototype의 프로퍼티와 메서드를 자유롭게 사용할 수 있습니다. ​
        <br />
        <br />
        <Highlight language="javascript">
          <CodeBox>
            {`function Monitor(width,height,resolution){
   this.width=width;
   this.height=height;
   this.resolution=resolution;
}
`}
          </CodeBox>
        </Highlight>
        다음으로, console.dir(Monitor.prototype);을 입력해 결과를 확인해 봅니다.
        <Highlight language="javascript">
          <CodeBox>
            {`console.dir(Monitor.prototype);

Object
constructor: ƒ Monitor(width,height,resolution)
__proto__: Object
`}
          </CodeBox>
        </Highlight>
        Monitor.prototype 역시 Monitor 함수보다 상위 객체입니다. 이런 이유로
        Monitor 생성자함수로 생성된 객체는 자유롭게 Monitor.protptype의
        프로퍼티와 메서드를 사용할 수 있는데요. 하지만 위의 코드의 결과를 보면
        사용할수 있는 프로퍼티가 constructor, __proto__ 밖에 없다는 것을 확인할
        수 있습니다. 여기서 constructor는 Monitor.protptype의 하위객체인 Monitor
        함수를 가리키고, __proto__는 Monitor.protptype보다 상위객체인
        Object.prototype 객체를 가리키는 링크라고 할 수 있습니다.
        Monitor.protptype객체에는 사용자가 사용할만한 프로퍼티와 메서드는
        사용자가 임의로 추가할 수 있습니다. ​
        <br /> <br />
        3-1 Monitor.prototype객체에 메서드 추가
        <Highlight language="javascript">
          <CodeBox>
            {`Monitor.prototype.changeWidth=function(width){
    this.width=width
}
`}
          </CodeBox>
        </Highlight>
        다음으로, Monitor.prototype의 메서드를 사용하기 위해 Monitor 생성자
        함수를 사용하여 Monitor생성자 함수의 객체를 생성해 보겠습니다.
        <br />
        <br />
        3-2 객체 생성
        <br />
        <br />
        <Highlight language="javascript">
          <CodeBox>
            {`const MonitorA=new Monitor(1,2,3);
console.log(MnitorA); //height: 2, resolution: 3, width: 1

}
`}
          </CodeBox>
        </Highlight>
        3-3 MonitorA객체에서 부모객체 메서드 사용
        <br /> MonitorA의 객체의 부모객체는 3-1 에서 작성한
        Monitor.prototype객체입니다. 이객체의 메서드 MonitorA객체가 사용할 수
        있습니다.
        <Highlight language="javascript">
          <CodeBox>
            {`MonitorA.changeWidth(10); //MonitorA의 width 값을 바꿈.
console.log(MonitorA.width)// 10 값이 잘바뀜.

}
`}
          </CodeBox>
        </Highlight>
      </ContentBox>
    </div>
  );
};

export default post_1;
