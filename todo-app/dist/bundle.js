(()=>{"use strict";var t,e,n={269:(t,e)=>{function n(t){return t.replace(/\&/g,"&amp;").replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&#x27")}Object.defineProperty(e,"__esModule",{value:!0}),e.Tasks=void 0;var a=function(){function t(){this.taskNumber=1,this.taskList=document.getElementById("task-list"),this.inputName=document.getElementById("task-name"),this.inputDetail=document.getElementById("task-detail")}return t.prototype.createTask=function(){var t=this.inputName.value,e=this.inputDetail.value;if(t&&e){if(this.taskList){var a=document.createElement("tr"),i="task-"+this.taskNumber;a.setAttribute("id",i);var s="delete-"+this.taskNumber,r="\n            <td>"+this.taskNumber+"</td>\n            <td>"+n(t)+"</td>\n            <td>"+n(e)+'</td>\n            <td><button id="'+s+'">完了</button></td>\n        ';a.innerHTML=r,this.taskList.appendChild(a),this.taskNumber++;var u=document.getElementById(s);u&&(u.onclick=function(){var t;window.confirm("本当によろしいですか？")&&(null===(t=document.getElementById(i))||void 0===t||t.remove())})}}else alert("入力してください")},t}();e.Tasks=a}},a={};t=new(function t(e){var i=a[e];if(void 0!==i)return i.exports;var s=a[e]={exports:{}};return n[e](s,s.exports,t),s.exports}(269).Tasks),(e=document.getElementById("create-task-btn"))&&(e.onclick=function(){t.createTask()})})();