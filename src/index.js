import "./styles.css";

const onClickadd = () => {
  //テキストボックスの値を取得し、初期化を行う
  const inputText = document.getElementById("add-t").value;
  document.getElementById("add-t").value = "";

  creatememeberlist(inputText);
};

//memberリストから指定のDivタグを削除（DivタグのDelete動作の共通化）
const deletememberlist = (target) => {
  //divタグを削除する
  document.getElementById("memberlist").removeChild(target);
};

//startingリストから指定のDivタグを削除（DivタグのDelete動作の共通化）
const deletestartinglist = (target) => {
  //divタグを削除する
  document.getElementById("startinglist").removeChild(target);
};

const creatememeberlist = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //button（select）タグ生成
  const selectButton = document.createElement("button");
  selectButton.innerText = "select";
  selectButton.addEventListener("click", () => {
    //共通化後メソッド
    deletememberlist(selectButton.parentNode);

    //Startingリストに追加するコード
    const addtarget = selectButton.parentNode;

    //liの中を取得
    const text = addtarget.firstElementChild.innerText;

    //addtargetを初期化
    addtarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    //button（sub）タグ生成
    const subButton = document.createElement("button");
    subButton.innerText = "sub";
    subButton.addEventListener("click", () => {
      deletestartinglist(subButton.parentNode);

      //テキスト取得
      const text = subButton.parentNode.firstElementChild.innerText;
      creatememeberlist(text);
    });

    addtarget.appendChild(li);
    addtarget.appendChild(subButton);

    document.getElementById("startinglist").appendChild(addtarget);
  });

  //button（delete）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    //共通化後利用メソッド
    deletememberlist(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(selectButton);
  div.appendChild(deleteButton);

  // memberのリストに追加
  document.getElementById("memberlist").appendChild(div);
};

document.getElementById("add-b").addEventListener("click", () => onClickadd());
