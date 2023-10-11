import "./styles.css";

const onClickadd = () => {
  //テキストボックスの値を取得し、初期化を行う
  const inputText = document.getElementById("add-t").value;
  document.getElementById("add-t").value = "";

  creatememeberlist(inputText);
  /**1
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //console.log(div);

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //console.log(li);
  //alert(inputText);

  //button（select）タグ生成
  const selectButton = document.createElement("button");
  selectButton.innerText = "select";
  selectButton.addEventListener("click", () => {
    //alert("select");
    //divタグを移動のため削除（共通化したため不要）
    //const selecttarget = selectButton.parentNode;
    //document.getElementById("incompletelist").removeChild(selecttarget);

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

    });

    addtarget.appendChild(li);
    addtarget.appendChild(subButton);

    document.getElementById("startinglist").appendChild(addtarget);

    //startinglist追加メソッド
    //個人コード
    /**0
    addstartinglist(text);
     *0/

    //個人コード
    //document.getElementById("completelist").appendChild(aaa);
  });

  //button（delete）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    //alert("delete");

    //divタグを削除する(共通化したため不要)
    //const deletetarget = deleteButton.parentNode;
    //document.getElementById("incompletelist").removeChild(deletetarget);

    //共通化後利用メソッド
    deletememberlist(deleteButton.parentNode);
  });
  //console.log(deleteButton);

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(selectButton);
  div.appendChild(deleteButton);

  // memberのリストに追加
  document.getElementById("memberlist").appendChild(div);

  //console.log(div);

  1*/
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

  //console.log(div);

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //console.log(li);
  //alert(inputText);

  //button（select）タグ生成
  const selectButton = document.createElement("button");
  selectButton.innerText = "select";
  selectButton.addEventListener("click", () => {
    //alert("select");
    //divタグを移動のため削除（共通化したため不要）
    //const selecttarget = selectButton.parentNode;
    //document.getElementById("incompletelist").removeChild(selecttarget);

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

    //startinglist追加メソッド
    //個人コード
    /**2
  addstartinglist(text);
   2*/

    //個人コード
    //document.getElementById("completelist").appendChild(aaa);
  });

  //button（delete）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    //alert("delete");

    //divタグを削除する(共通化したため不要)
    //const deletetarget = deleteButton.parentNode;
    //document.getElementById("incompletelist").removeChild(deletetarget);

    //共通化後利用メソッド
    deletememberlist(deleteButton.parentNode);
  });
  //console.log(deleteButton);

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(selectButton);
  div.appendChild(deleteButton);

  // memberのリストに追加
  document.getElementById("memberlist").appendChild(div);
};

//StartingリストにSelectされたDivから取得したTextを引数としてDivを追加するメソッド
//個人コード
/**3
const addstartinglist = (stext) => {
  // div生成
  const sdiv = document.createElement("div");
  sdiv.className = "list-row";
  //liタグ生成
  const sli = document.createElement("li");
  sli.innerText = stext;
  //button（sub）タグ生成
  const subButton = document.createElement("button");
  subButton.innerText = "sub";
  subButton.addEventListener("click", () => {
    deletestartinglist(subButton.parentNode);

    const saddtarget = subButton.parentNode;
    const stext = saddtarget.firstElementChild.innerText;
    onClickadd(stext);
  });

  sdiv.appendChild(sli);
  sdiv.appendChild(subButton);
  document.getElementById("startinglist").appendChild(sdiv);
};
 3*/

document.getElementById("add-b").addEventListener("click", () => onClickadd());
