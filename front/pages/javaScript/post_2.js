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
      <Title>[자바스크립트 중요 개념 정리 2] this 바인딩</Title>
      <DateShow>2020.08.05</DateShow>
      <hr />
      <ContentBox>
        1.this 바인딩 이란? <br /> this 바인딩은 this가 특정값을 참조하는 것을
        말하고 달리 말하면 서로의 값을 묶는다고도 할 수 있습니다. 참조하는
        대상은 상황에 따라 달라집니다. this가 참조하는 값은 전역 객체가 될 수 도
        있고, 객체의 프로퍼티의 값이 될 수도 있으며, 생성자 함수로 객체를
        생성하는 경우 this가 빈객체를 가리킬 수 도 있습니다. ​
        <br />
        <br />
        2.전역 this 먼저 전역 객체를 가리키는 this를 볼까요?
        <Highlight language="javascript">
          <CodeBox>
            {`console.log(this) //this 값은 Window

`}
          </CodeBox>
        </Highlight>
        자바스크립트에서의 전역객체는 Window이며 전역스코프에서 this를 사용하면
        this는 Window 전역객체를 참조합니다. ​ 함수에서 this를 사용한다면 어떻게
        될까요? 함수도 마찬가지로 전역객체를 참조합니다.
        <br />
        <Highlight language="javascript">
          <CodeBox>
            {`function exampleThis() {
  const a = console.log(this);
  return a;
}
exampleThis() //Window

`}
          </CodeBox>
        </Highlight>
        이 함수의 반환값은 Window가 됩니다.
        <br /> <br />
        3. 객체의 프로퍼티를 가리키는 this 함수에서 this를 사용하는 또다른
        예제입니다. 이번에는 객체안에서 함수를 객체의 프로퍼티로 사용했습니다.
        이경우 함수를 메서드라고 합니다.
        <Highlight language="javascript">
          <CodeBox>
            {` const obj = {
    live: "seoul",
    age: 22,
    job: "developer",
    adJustJob: function () {
      console.log(this.live);
    },
  };
  obj.adJustJob(); //반환값 seoul
`}
          </CodeBox>
        </Highlight>
        <br />
        객체의 메서드에서 this를 사용한 경우 this는 호출한 객체의 이름을
        참조합니다. 이경우 메서드에서 this.live라 명명했고, 객체에 live라는
        프로퍼티 이름이 있기 때문에 seoul 이라는 값이 반환됩니다. 만약 메서드를
        호출한 객체에 this의 값과 동일한 값이 없다면 this의 값은 undefined가
        됩니다. ​
        <br />
        <br /> 4.생성자 함수일때의 this 마지막으로 생성자함수로 객체를 생성하는
        경우 this값은 어디에 바인딩(참조) 될까요?
        <Highlight language="javascript">
          <CodeBox>
            {`function Profile(live, age, job) {
    this.live = live;
    this.age = age;
    this.job = job;
  }
  const aProfile = new Profile("seoul", 20, "student");
  console.log(aProfile); //{live: "seoul", age: 20, job: "student"}
`}
          </CodeBox>
        </Highlight>
        생성자 함수로 객체를 생성할 경우 빈객체가 생성되고, 생성자 함수의 this는
        빈 객체에 바인딩(옮겨짐)된다고 할 수 있습니다.
        <br /> ​ 만약, new 연산자를 안붙이고 함수를 사용한다면 this값은 어떻게
        될까요?
        <br />
        <Highlight language="javascript">
          <CodeBox>
            {`function Profile(live, age, job) {
    this.live = live;
    this.age = age;
    this.job = job;
  }
  Profile("seoul", 20, "student");
  console.log(window.live, window.age, window.job); //seoul 20 student
`}
          </CodeBox>
        </Highlight>
        이때는 this는 전역객체인 Window 객체를 가리킵니다.
      </ContentBox>
    </div>
  );
};

export default post_1;
