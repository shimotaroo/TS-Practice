function escapeHTML(value: string) {
    return value
    .replace(/\&/g, "&amp;")
    .replace(/\</g, "&lt;")
    .replace(/\>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/\'/g, "&#x27")
}

export class Tasks {
    // タスクNoを管理するために使用
    public taskNumber = 1

    // task-listのidがあるタグを取得
    private taskList = document.getElementById("task-list")

    // task-nameのidがあるinputタグを取得
    private inputName = document.getElementById("task-name") as HTMLInputElement

    // task-detailのidがあるinputタグを取得
    private inputDetail = document.getElementById(
        "task-detail"
    ) as HTMLInputElement

    public createTask() {
        // 入力フォームの内容を取得
        const name = this.inputName.value
        const detail = this.inputDetail.value

        // 入力が無い場合はアラートを出して処理終了
        if (!name || !detail) {
            alert("入力してください")
            return
        }

        // taskListが存在しない場合は処理終了
        if (!this.taskList) return
    
        // trタグを作成
        const tr = document.createElement("tr")

        // タスクごとのidを作成
        const taskId = `task-${this.taskNumber}`

        // trタグにid="(taskId)"をセット
        tr.setAttribute("id", taskId)

        // 完了ボタン用のidを作成
        const deleteId = `delete-${this.taskNumber}`
        
        // tdタグの中身を作成
        const td = `
            <td>${this.taskNumber}</td>
            <td>${escapeHTML(name)}</td>
            <td>${escapeHTML(detail)}</td>
            <td><button id="${deleteId}">完了</button></td>
        `
    
        // 作成したtrタグにtdタグを設定
        tr.innerHTML = td
    
        // task-listのidがあるタグの末尾にtrタグを追加
        this.taskList.appendChild(tr)
    
        // タスク番号をインクリメント(加算)
        this.taskNumber++

        // 作成したボタンを取得
        const deleteButton = document.getElementById(deleteId)

        // deleteButtonが存在しない場合は処理終了
        if (!deleteButton) return

        // deleteButtonがクリックされた時の処理を追加
        deleteButton.onclick = function () {
        // 確認用アラートが出てきて「はい」を選択した時に
        if (window.confirm("本当によろしいですか？"))
            // taskIdを元に要素を特定して削除
            document.getElementById(taskId)?.remove()
        }          
    }
}