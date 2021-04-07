"use strict";
// オブジェクトの型定義をするには`interface`を使います。
// 構文は下記の通りです。
// オブジェクトの型定義をする時の構文は下記の通りです。
// const 変数名: interface名 = {
//   key名: value
// }
// 例
var user = {
    firstName: "山田",
    lastName: "太郎",
    age: 22,
    isAdult: true,
    //   remarks: "備考",　// 有っても無くもOK
    //   test: "テスト", // Userインターフェイスに無いkeyはエラーになる
};
console.log(user);
// 配列の型定義をする場合は下記の通りです。
// let 変数名: 型名[] = 配列
// 例
// 数字の配列の場合
var numbers = [0, 1, 2, 3];
// 配列に値を追加するpushを使う場合
// numbers.push("AAA") // 型が違うのでエラーになる
numbers.push(4);
console.log(numbers);
// 文字列の配列
var strings = ["A", "B", "C", "D"]; //数字の配列
// strings.push(4) // 型が違うのでエラーになる
strings.push("E");
console.log(strings);
// 配列とオブジェクトを組み合わせる場合は
// interface名[]で定義できる
// 例 一覧データの表示などよく使います。
var users = [
    {
        firstName: "山田",
        lastName: "太郎",
        age: 20,
        isAdult: true,
        //   test: "テスト", // Userインターフェイスに無いkeyはエラーになる
    },
    {
        firstName: "田中",
        lastName: "花子",
        age: 19,
        isAdult: false,
    },
];
console.log(users);
