// <classの型宣言>

// classの型定義にはオブジェクトの型定義にも使用したinterfaceを使用します。

// またinterfaceには関数を定義することも出来ます。

// 例
interface PersonClass {
    name: string
    age: number
    isAdultCheck(): string // 関数も型
  }
  
  // classに型を定義する時の構文は下記のようになります。
  
  // class クラス名 implements interface定義 {}
  
  // 例
  //implementsでclassの型を定義
  class Person implements PersonClass {
    // クラスの型宣言
    public name: string
    //   public name: number //型が違うのでエラーになる
    public age: number
  
    // constructorの引数に型宣言
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
  
    // クラスのメソッド(関数)に型宣言
    public isAdultCheck(): string {
      //   public isAdultCheck(): number {
    //   if (this.age >= 20) {
    //     return `${this.name}は成人です。`
    //   } else {
    //     return `${this.name}は未成年です。`
    //   }
  
    //   elseは出来るだけ使わないように
      if (this.age >= 20) {
        return `${this.name}は成人です。`
      }
      return `${this.name}は未成年です。`
    }
  }
  
  const taro = new Person("太郎", 30)
  console.log(taro.isAdultCheck())
  
  const hanako = new Person("花子", 15)
  console.log(hanako.isAdultCheck())