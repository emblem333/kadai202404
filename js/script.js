const todoValue = document.getElementById('js-todo-ttl'); //入力フォームの取得
const todoRegister = document.getElementById('js-register-btn'); //登録するボタンの取得
const todoList = document.getElementById('js-todo-list'); //未完リストのulの取得
const doneList = document.getElementById('js-done-list'); //完了リストのulの取得

todoRegister.addEventListener('click', () =>{
  if (todoValue.value !== ''){ //からのフォームは追加しないif文

    const todo = document.createTextNode(todoValue.value); //入力データを取得
    const liTag = document.createElement('li'); //liタグを作る準備
    const pTag  = document.createElement('p'); //pタグを作る準備
    
    todoValue.value = ''; // フォームを初期状態（空）にする
    //ulタグの中にli>pの構造を作る
    pTag.appendChild(todo);
    liTag.appendChild(pTag);
    todoList.appendChild(liTag);

    //ボタンを入れる用のdivタグを追加
    const btn_box = document.createElement('div'); //divタグの準備
    btn_box.setAttribute('class','btn-box'); //class名の指定
    liTag.appendChild(btn_box); //liタグの子要素に挿入

    //完了ボタン（id名；js-done-btn）
    const doneBtn = document.createElement('button');
    doneBtn.setAttribute('id','js-done-btn');
    doneBtn.innerHTML = '完了'
    btn_box.appendChild(doneBtn);

    //削除ボタン（id名；js-del-btn）
    const delBtn = document.createElement('button');
    delBtn.setAttribute('id','js-del-btn');
    delBtn.innerHTML = '削除'
    btn_box.appendChild(delBtn);

    //完了機能の追加
    doneBtn.addEventListener('click',() =>{
      //処理を関数で呼び出す
      doneTodo(doneBtn);
    });

    //削除機能の追加
    delBtn.addEventListener('click',() =>{
      //処理を関数で呼び出す
      deletTodo(delBtn);
    });
  }
});
// const doneTodo = function(doneBtn){}
const doneTodo = (doneBtn) =>{
  const doneTodo = doneBtn.closest('li') //クリックされた完了ボタンから１番近いliタグを取得する
  doneTodo.setAttribute('class','done-item'); //削除ボタンのイベントの条件分岐のための準備
  doneList.appendChild(doneTodo); //Doneリストの子要素に取得したliタグを挿入
  doneBtn.remove(); //Doneリストに移動したliタグの完了ボタンを消す
}
const deletTodo = (delBtn) =>{
  const del_comfirm = this.confirm('本当に削除しますか？') //誤って削除しないかの確認
  if(del_comfirm === true){ //上記の確認でOKが押されたら
    const choseTodo = delBtn.closest('li');  //クリックされた削除ボタンから１番近いliタグを取得する
    
    //削除がクリックされたタスクが未完リスト内か完了リスト内かで処理を変える
    if(choseTodo.classList.contains('done-item')){
      doneList.removeChild(choseTodo); //Todoリスト内の該当のliタグを削除
    } else{
      todoList.removeChild(choseTodo); //未完リスト内の該当のliタグを削除
    }
  }
};