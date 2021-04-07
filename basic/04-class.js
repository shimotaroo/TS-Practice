"use strict";
// <classの型宣言>
// classに型を定義する時の構文は下記のようになります。
// class クラス名 implements interface定義 {}
// 例
//implementsでclassの型を定義
var Person = /** @class */ (function () {
    // constructorの引数に型宣言
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // クラスのメソッド(関数)に型宣言
    Person.prototype.isAdultCheck = function () {
        //   public isAdultCheck(): number {
        //   if (this.age >= 20) {
        //     return `${this.name}は成人です。`
        //   } else {
        //     return `${this.name}は未成年です。`
        //   }
        //   elseは出来るだけ使わないように
        if (this.age >= 20) {
            return this.name + "\u306F\u6210\u4EBA\u3067\u3059\u3002";
        }
        return this.name + "\u306F\u672A\u6210\u5E74\u3067\u3059\u3002";
    };
    return Person;
}());
var taro = new Person("太郎", 30);
console.log(taro.isAdultCheck());
var hanako = new Person("花子", 15);
console.log(hanako.isAdultCheck());
