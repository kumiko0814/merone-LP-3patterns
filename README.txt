merone LP 3パターン複製（元: https://lp.merone.co.jp/ / 2026-09-23取得）

各フォルダは単体で公開できる完全コピー（index.html / css / js / img）。
デザイン・文言・画像は元LPと完全同一。変更点はCTA導線のみ（index.html 5行）。

patternA/  既存の導線
  https://j4b9oaqz.autosns.app/addfriend/s/xK8dxPs3Yz/@038atjsh
patternB/  アンケートなし・1本目の感想提出後に面談予約を解放
  https://j4b9oaqz.autosns.app/addfriend/s/bK7xCSwUME/@038atjsh
patternC/  毎朝7時に1本ずつ自動配信・2本目と同時に面談予約を解放
  https://j4b9oaqz.autosns.app/addfriend/s/Zps9fHuKNx/@038atjsh

変更内容（各index.html）
  1. CTAボタン4か所の href を各パターンのURLに変更
  2. 末尾のプロライン埋め込みscriptに data-scenario-id="(シナリオID)" を追加
     ※ 元LPはプロラインのスクリプトが読み込み後にボタンのリンク先を
       パートナーID既定の導線(=パターンA)へ上書きする仕組みのため、
       hrefの差し替えだけではB/Cが効かない。data-scenario-id の追加で
       広告計測(utm_content→free6)を維持したまま各シナリオへ振り分けられる。

動作確認済み（headless Chrome）
  - 3パターンとも、スクリプト実行後の4ボタンが各シナリオのワンタイムURLになること
  - 画像・CSS・JSの欠損なし（favicon.icoの404は元LPと同じ）
  - パターンAの表示は元LPのスクリーンショットとバイト単位で一致

公開時はフォルダごと（index.html と css/js/img を同階層のまま）アップロードしてください。
