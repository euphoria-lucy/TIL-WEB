// 접근자 프로퍼티
// const person1 = {
//   age: 17,

//   get koreanAge () {
//     return this.age + 1;
//   },

//   set koreanAge (krAge) {
//     this.age = krAge - 1;
//   }
// }

// console.log(person1, person1.koreanAge);

// person1.koreanAge = 20;

// console.log(person1, person1.koreanAge);

// class YalcoChicken {
//   constructor (name, no) {
//     this.name = name;
//     this.no = no;
//   }
//   get chainTitle() {
//     return `${this.no}호 ${this.name}점`;
//   }
//   set chainNo(chainNo) {
//     if (typeof chainNo !== 'number') return;
//     if (chainNo <= 0) return;
//     this.no = chainNo;
//   }
// }

// const chain1 = new YalcoChicken('판교', 3);
// console.log(chain1.chainTitle);

// chain1.chainNo = '4';
// console.log(chain1);

// class YalcoChicken {
//   constructor (name, no) {
//     this.name = name;
//     this.no = no;
//   }
//   get no () {
//     return this.no + '호점';
//   }
//   set no (no) {
//     this.no = no;
//   }
// }
// const chain1 = new YalcoChicken('판교', 3); // ⚠️ 오류 발생!

// class YalcoChicken {
//   constructor (name, no) {
//     this.name = name;
//     this.no = no;
//   }
//   get no () {
//     return this._no + '호점';
//   }
//   set no (no) {
//     this._no = no;
//   }
// }

// const chain1 = new YalcoChicken('판교', 3);

// console.log(chain1);
// console.log(chain1.no);

// 은닉
// class Employee {
//   #name = '';
//   #age = 0;
//   constructor (name, age) {
//     this.#name = name;
//     this.#age = age;
//   }
// }

// const emp1 = new Employee('김복동', 32);

// console.log(emp1);
// class Employee {
//   #name = '';
//   #age = 0;
//   constructor (name, age) {
//     this.#name = name;
//     this.#age = age;
//   }
//   get name () {
//     // [n]: n + 1 번째 글자를 반환
//     return this.#name[0] + '모씨';
//   }
//   get age () {
//     return this.#age - (this.#age % 10) + '대';
//   }
//   set age (age) {
//     if (typeof age === 'number' && age > 0) {
//       this.#age = age;
//     };
//   }
//   getOlder(years) { this.#age += years; }
// }

// const emp1 = new Employee('김복동', 22);

// console.log(emp1.name, emp1.age)
