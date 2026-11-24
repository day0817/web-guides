# PROGRESS

最終更新: 2026-11-24

## 完了済み
- [x] 公開用独立ディレクトリ `WebGuides` の作成
- [x] `.gitignore` / `GEMINI.md` / `.github/workflows/deploy.yml`（`path: ./site`）の作成
- [x] スマホ向け共通スタイル（`site/assets/base.css`）・フロートメニュー制御（`site/assets/nav.js`）の作成
- [x] 初期ページ骨格（`site/index.html`, `site/last-epoch/index.html`）の作成
- [x] 引継ぎドキュメント（`引継ぎ.md`）・`決定ログ.md` の作成
- [x] GitHub Public リポジトリ（`https://github.com/day0817/web-guides`）の作成・公開前ファイル一覧／機密チェック承認
- [x] GitHub Pages 初回公開設定（`GitHub Actions`）および公開 URL（`https://day0817.github.io/web-guides/`）HTTP 200 疎通確認
- [x] ファルコナーガイド制作方針（Q1〜Q5）の合意・画像直リンク可否の実機検証

## 保留中の確認事項（ユーザー確認後に実施）
- なし（Round 1 合意済み。制作中に仕様分岐が出た場合はここに追加）

## 次ステップ（ファルコナー制作・ルール標準化）
- [x] ステップ1: Last Epoch Tools（日本語版 `/skills/ja/`, `/db/ja/`・Season 5 `/builds/`）からファルコナー＆ローグ前半の最新データ・正式日本語名を安全取得（`safe-web-crawler`）
- [x] ステップ2: 他マスタリー展開用の設計ルール文書（`docs/マスタリーガイド作成ルール.md`）と `site/assets/base.css` 共通コンポーネント拡張の設計・実装
- [x] ステップ3: `site/last-epoch/falconer.html` の制作および `site/last-epoch/index.html`・`site/index.html` 導線更新
- [x] ステップ4: ローカルサーバーでのスマホ幅（390x844 等）表示確認・リンク疎通確認
- [x] ステップ5: 公開前チェック・ユーザー承認後の GitHub push ＆ 実 URL 確認

## 改修フェーズ（11/24 ユーザーフィードバック反映）
- [x] 改修1: 既存 `falconer.html` の全 LE Tools リンク実機監査＆ローグ基本スキル一覧・マスタリー固有パッシブ・ユニーク個別 DB ID の確定
- [x] 改修2: `docs/マスタリーガイド作成ルール.md` と `site/assets/base.css` の更新（リンク専用ボタン廃止、冒頭差別化・固有パッシブ節の追加）
- [x] 改修3: `site/last-epoch/falconer.html` の全面改訂（冒頭差別化＋隼パッシブ、最終ビルド用ローグスキル個別掲載、名称直接リンク化）
- [x] 改修4: 全リンク切れ監査・スマホ幅（390x844）検証・承認後 push ＆ 実 URL 確認
- [x] 改修5: スキル紹介直前に Season 5 採用スキルランキング（必須度早見表）を追加・スマホ検証・承認後 push

## パラディン制作フェーズ（`site/last-epoch/paladin.html`）
- [x] パラ1: LE Tools 日本語版からセンチネル＆パラディン全スキル・他マスタリー（ヴォイドナイト/フォージガード）比較・Season 5 人気ビルド・パッシブ情報を取得
- [x] パラ2: Season 5 パラディン採用スキルランキング・固有/基本スキル個別カード・メカニズム・装備DB ID選定
- [x] パラ3: `site/last-epoch/paladin.html` 制作および `site/last-epoch/index.html`・`site/index.html`・`falconer.html` ドロワー導線更新
- [x] パラ4: 全 DB・スキルリンク実機監査、スマホ幅（390x844）検証、承認後 push ＆ 実 URL 確認
