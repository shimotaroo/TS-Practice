// tasks.tsからTasksをインポート
import { Tasks } from "./tasks"
const tasks = new Tasks()

// idがcreate-task-btnの要素を取得してcreateTaskBtnに代入
const createTaskBtn = document.getElementById("create-task-btn")

// TSではnullやundefinedの可能性がある物を参照する場合
// エラーで弾かれる
// createTaskBtn.onclick = function () {
//   tasks.createTask()
// }

// nullやundefinedの可能性がある物を参照するには
// if文などで存在することをチェックしないと使えない。
if (createTaskBtn) {
  // 取得した要素をクリックした時の処理を定義
  createTaskBtn.onclick = function () {
    tasks.createTask()
  }
}