// <関数の型宣言>

// TSの関数は引数と返り値(戻り値)に対して型を定義する事ができます。

// 構文は
// function 関数名(引数名: 型名): 戻り値の型名 

// 例
function plus(a: number, b: number): number {
    return a + b
    //   return "a + b" //戻り値の型が違うのでエラー
    // 戻り値の型を指定している場合、戻り値がなくてもエラーに
  }
  
  let total = plus(1, 2)
  // let total2 = plus() //引数が足りないのでエラーになる
  // let total3 = plus("1", "2") //引数の型が違うのでエラーになる
  console.log(total)
  
  // interfaceを使うとオブジェクトの引数や戻り値を定義することもできます。
  
  // 例
  interface User {
    firstName: string
    lastName: string
    age: number
    isAdult: boolean
    remarks?: string // 必須じゃない場合は?を付ける
  }
  
  function greet(user: User): string {
    return "こんにちは" + user.firstName + user.lastName + "さん"
  }
  
  const greetUser: User = {
    firstName: "山田",
    lastName: "太郎",
    age: 22,
    isAdult: true,
  }
  
  const hello = greet(greetUser)
  // let hello2 = greet() //引数が足りないのでエラーになる
  // let hello3 = greet("1") //引数の型が違うのでエラーになる
  console.log(hello)