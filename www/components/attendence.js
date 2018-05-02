// This is a JavaScript file
var prev = function() {
  var carousel = document.getElementById('carousel');
  carousel.prev();
};

var next = function() {
  var carousel = document.getElementById('carousel');
  carousel.next();
};
var humanitiesLists = new Array("HS01 哲学", "HS03 心理学", "HS04 言語学");
var gymLists = new Array("PA01 体育実技１", "PA02 体育実技２", "PA03 体育実技３", "PA04 体育実技４");
function viewList(listNum){
  var viewbool;
  var displayList;
  switch(listNum){
    case 0:
      displayList = document.getElementById('hiddenListLiberal');
      viewbool = displayList.style.display;
      setSyllabusLists(humanitiesLists, 'humanities');
      setSyllabusLists(gymLists, 'gym');
      break;
    case 1:
      displayList = document.getElementById('hiddenListEnglish');
      viewbool = displayList.style.display;
      break;
    case 2:
      displayList = document.getElementById('hiddenListBase');
      viewbool = displayList.style.display;
      break;
    case 3:
      displayList = document.getElementById('hiddenListExpert');
      viewbool = displayList.style.display;
      break;
    case 4:
      displayList = document.getElementById('hiddenListExercise');
      viewbool = displayList.style.display;
      break;
    case 5:
      displayList = document.getElementById('hiddenListTeacher');
      viewbool = displayList.style.display;
      break;
    case 6:
      displayList = document.getElementById('hiddenListProject');
      viewbool = displayList.style.display;
      break;
  }
  if(viewbool == "none"){
    displayList.style.display="block";
  } else {
    displayList.style.display="none";
  }
}


function setSyllabusLists(lists, id){
  var list = document.getElementById(id); 
  for(i=0; i<lists.length; i++){
    var listItem = ons.createElement('<ons-list-item>' + lists[i] + '</ons-list-item>');
    list.appendChild(listItem);
  }
}

document.addEventListener('show', function(event){
  if(event.target.id == "addCourse"){
    var hiddenLists = new Array("hiddenListLiberal", "hiddenListEnglish", "hiddenListBase", "hiddenListExpert", "hiddenListExercise", "hiddenListTeacher", "hiddenListProject");
    var listHeaders = [
                                ["humanities", "gym"], 
                                ["english", "el1", "el2", "el3", "eg1", "otherLanguage"], 
                                ["math", "nature", "computer", "programming", "computerScience"], 
                                ["system", "network", "application", "software", "other"], 
                                ["exercise"],
                                ["teacher"],
                                ["project"]
                              ];
    var listItems = [
                            ["HS01 哲学", "HS03 心理学", "HS04 言語学", "HS05 文学", "HS06 芸術学", "HS07 ジェンダー・セクシュアリティ論", "HS09 法学", "HS10 経済学", "HS11 社会学", "HS12 日本国憲法", "HS13 国際関係論", "HS16 保健体育理論", "HS17 科学史", "HS18 社会シュミレーション", "HS19 会津の歴史と文化", "HS20 アカデミックスキル１", "HS21 アカデミックスキル２"],
                            ["PA01 体育実技１", "PA02 体育実技２", "PA03 体育実技３", "PA04 体育実技４"],
                            ["EN01 Introductory English 1", "EN02 Introductory English 2", "EN03 Introductory English 3", "EN04 Introductory English 4", "EN05 Intermediate English 1", "EN06 Intermediate English 2", "EN07 Intermediate English 3", "EN08 Thesis Writhing and Presentation"],
                            ["EL102 Design of Human Languages", "EL113 Pronunciation: Comparing English and Japanese Sound Systems", "EL115 Analysis of English Sentence Structure", "EL131 Language and Linguistics", "EL132 Music and Language", "EL141 Computer Assisted Ethnomusicology", "EL144 Conversation Analysis and the Pragmatics of Spoken Interaction", "EL152 Reading Fluency"],
                            ["EL213 Design for E-Learning", "EL218 Presentation Skills", "EL222 Business Writing and Silicon Valley", "EL232 Language in Manga", "EL233 Technical Writing for IT Business", "EL234 Research poster presentations", "EL241 Japanese Pop Culture through English", "EL244 An Introduction to Cross-cultural Communication"],
                            ["EL313 Digital Storytelling for Engineering Narratives", "EL314 Experimental Methods and Statistics for Linguistics", "EL315 Design and Analysis for IT Business", "EL317 Patterns and language", "EL321 Pronunciation: Acoustic Analysis Using Software", "EL327 English through Communicative Media", "EL328 Logic and language"],
                            ["EG101 English for Global Experience Gateway (RHIT)", "EG102 English for Global Experience Gateway (Waikato)"],
                            ["JP01 初級日本語 I [留学生対象]", "JP02 初級日本語 II [留学生対象]", "JP03 中級日本語 I [留学生対象]", "JP04 中級日本語 II [留学生対象]", "JP05 上級日本語 I [留学生対象]", "JP06 上級日本語 II [留学生対象]", "JP07 ビジネス日本語 [留学生対象]"],
                            ["MA01 線形代数 I", "MA02 線形代数 II", "MA03 微積分 I", "MA04 微積分 II", "MA05 フーリエ解析", "MA06 複素関数論", "MA07 確率統計学", "MA09 数理論理学", "MA11 応用幾何とトポロジー"],
                            ["NS01 力学", "NS02 電磁気学", "NS03 量子力学", "NS04 半導体デバイス", "NS05 熱・統計力学"],
                            ["LI01 コンピュータリテラシー", "LI04 コンピュータシステム概論", "LI06 情報セキュリティ", "LI07 情報と職業", "LI08 情報倫理", "LI09 システム開発とプロジェクトマネジメントの基礎", "LI10 マルチメディアシステム概論", "LI12 創造力開発スタジオ", "LI13 コンピュータ理工学演習 I", "LI14 コンピュータ理工学演習 II"],
                            ["PL01 プログラミング入門", "PL02 プログラミングC", "PL03 プログラミングJAVA I", "PL04 プログラミングC++", "PL05 コンピュータ言語論", "PL06 プログラミングJAVA II"],
                            ["F01 アルゴリズムとデータ構造[経過措置]", "FU01 アルゴリズムとデータ構造 I", "FU02 情報理論と圧縮", "FU03 離散系論", "FU04 論理回路設計論", "FU05 コンピュータアーキテクチャ論", "FU06 オペレーティングシステム論", "FU08 オートマトンと言語理論", "F08 オートマトンと言語理論[経過措置]", "F09 アルゴリズム特論[経過措置]", "FU09 アルゴリズムとデータ構造 II", "FU10 言語処理系論", "FU11 数値解析", "FU14 ソフトウェア工学概論", "FU15 データマネジメント概論"],
                            ["SY02 電子回路", "S04 組込みシステム[経過措置]", "SY04 組込みシステム", "SY05 並列コンピュータシステム", "SY06 VLSI設計技術", "SY07 論理回路設計特論"],
                            ["CN02 ネットワークセキュリティ", "CN03 ネットワークプログラミング", "N03 ネットワーク構築学[経過措置]", "CN04 ワイヤレスネットワーク", "CN05 コンピュータネットワークシステムのモデリングとシミュレーション"],
                            ["IT01 人工知能", "IT02 コンピュータグラフィックス論", "IT03 画像処理論", "A04 バイオメディカル情報工学[経過措置]", "IT05 ロボット工学と自動制御", "IT06 ヒューマンインターフェイスと仮想現実", "IT08 信号処理と線形システム", "IT09 音響音声処理論", "IT10 ビジュアルコンピューティングのための幾何学", "IT11 情報検索と自然言語処理"],
                            ["SE01 ウェブエンジニアリング", "SE02 ウェブデータモデリング", "SE04 ソフトウェア工学特論", "SE05 ソフトウェアスタジオ", "SE06 分散コンピューティング", "SE07 データベースシステム論"],
                            ["OT01-I ベンチャー基本コース各論 I", "OT01-II ベンチャー基本コース各論 II", "OT02-1 ベンチャー体験工房 1", "OT02-2 ベンチャー体験工房 2", "OT02-3 ベンチャー体験工房 3", "OT02-6 ベンチャー体験工房 6", "OT02-9 ベンチャー体験工房 9", "OT02-7 ベンチャー体験工房 7", "OT04 情報処理試験対策講座", "OT05 キャリアデザインI", "OT06 キャリアデザインII", "OT08 TOEIC準備コース(Level A)", "OT08 TOEIC準備コース(Level B)", "OT10 課外活動コース II＜インターンシップIII（大連）＞"],
                            ["IE01 システム総合演習 I", "IE02 システム総合演習 II", "IE03 ソフトウェア総合演習 I", "IE04 ソフトウェア総合演習 II"],
                            ["TE01 教師入門", "TE02 教育入門", "TE03 教育心理学", "TE04 教育課程論", "TE05 教育方法", "TE06 数学科教育法１", "TE07 数学科教育法２", "TE08 数学科教育法３", "TE09 数学科教育法４", "TE10 情報科教育法１", "TE11 情報科教育法２", "TE12 道徳教育", "TE13 特別活動", "TE14 生徒指導・教育相談", "TE15 キャリア教育", "TE16 教育実習１", "TE17 教育実習２", "TE18 教育実習事前事後指導", "TE19 教育制度論", "TE20 教職実践演習（中・高）"],
                            ["OT03-001 大規模分散Webインフラ構築入門", "OT03-002 月惑星データ解析＆国際宇宙ステーションたんぽぽプロジェクト", "OT03-003 GO言語", "OT03-004 天文データを用いたRによる統計解析入門", "OT03-005 教師になろう！", "OT03-006 理工系学生のための異文化理解及び地域イノベーション", "OT03-007 手作りマイコンプロジェクト", "OT03-008 環境センシングと家電コントロール ～IoT入門～", "OT03-009 プログラム可視化によるC言語学習支援手法", "OT03-010 Virtual system experiments on human cognition near its threshold", "OT03-011 論理的に", "OT03-012 並列プログラミングチャレンジ", "OT03-013 競技用ロボットの開発", "OT03-014 コンピュータを使った音と映像のコンテンツ制作", "OT03-015 A Peek Inside Computers", "OT03-016 自作プロセッサのための電子工作プロジェクト", "OT03-017 マナビーノ　アードゥイーノ", "OT03-018 多変量解析方法による機械学習と計算知能", "OT03-019 人工知能を搭載したラジコンの開発", "OT03-020 ベンチャービジネス（コンテンツビジネス）・地域活性化プロジェクト", "OT03-021 公務員試験等対策講座", "OT03-022 Advanced Pattern Recognition and Software Development", "OT03-023 Korean IT and Culture Study", "OT03-024 Practical application & network defense", "OT03-025 競技プログラミング", "OT03-026 実践的プログラミング", "OT03-027 活性知識工学を用いた人に優しいユーザインタフェースの開発", "OT03-028 立体形状物のモデリングと造形", "OT03-029 探索工房：AIは探索である", "OT03-030 Introduction to the world of light-emitting diodes"]
                          ];
    var displayCnt = 0;
    for(i=0; i<hiddenLists.length; i++){
      for(j=0; j<listHeaders[i].length; j++, displayCnt++){
        console.log(listHeaders[i].length);
        setSyllabusLists(listItems[displayCnt], listHeaders[i][j]);
      }
    }    
  }
});
