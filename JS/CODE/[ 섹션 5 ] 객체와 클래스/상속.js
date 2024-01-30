// 클래스의 상속 문법
// class Bird {
//   wings = 2;
// }
// class Eagle extends Bird {
//   claws = 2;
// }
// class Penguin extends Bird {
//   swim () { console.log('수영중...'); }
// }
// class EmperorPenguin extends Penguin {
//   size = 'XXXL';
// }

// const birdy = new Bird();
// const eaglee = new Eagle();
// const pengu = new Penguin();
// const pengdol = new EmperorPenguin();

// for (const i of [
//   [ '1.', birdy instanceof Bird ],
//   [ '2.', eaglee instanceof Bird ],
//   [ '3.', eaglee instanceof Eagle ],
//   [ '4.', pengdol instanceof Penguin ],
//   [ '5.', pengdol instanceof Bird ],
//   [ '6.', birdy instanceof Eagle ]
// ]) {
//   console.log(i[0], i[1]);
// }

// pengu.swim();
// pengdol.swim();
// eaglee.swim();

// 오버라이딩
// class Bird {
//   wings = 2;
//   canFly = true;
//   travel () { console.log('비행중...') }
// }
// class Eagle extends Bird {
//   claws = 2;
// }
// class Penguin extends Bird {
//   canFly = false;
//   travel () { console.log('수영중...') }
// }

// const eaglee = new Eagle();
// const pengu = new Penguin();

// super

// class YalcoChicken {
//   no = 0;
//   menu = { '후라이드': 10000, '양념치킨': 12000 };

//   constructor (name, no) {
//     this.name = name;
//     if (no) this.no = no;
//   }
//   introduce () {
//     return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
//   }
//   order (name) {
//     return `${this.menu[name]}원입니다.`
//   }
// }

// class ConceptYalcoChicken extends YalcoChicken {
//   #word = '';
//   constructor (name, no, word) {
//     super(name, no);
//     this.#word = word;
//   }
//   introWithConcept () {
//     return super.introduce() + ' ' + this.#word;
//   }
//   order (name) {
//     return super.order(name) + ' ' + this.#word;
//   }
// }

// const pikaChain = new ConceptYalcoChicken('도봉', 50, '피카피카~');

// class YalcoChicken {
//   static brand = '얄코치킨';
//   static contact () {
//     console.log(`${this.brand}입니다. 무엇을 도와드릴까요?`);
//   }
// }

// class ConceptYalcoChicken extends YalcoChicken {
//   static contact () {
//     super.contact();
//     console.log('컨셉 가맹문의는 홈페이지를 참조하세요.');
//   }
// }

// ConceptYalcoChicken.contact();
