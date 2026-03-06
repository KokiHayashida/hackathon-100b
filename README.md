# 100億円タイプ診断 💰

「もし100億円あったら、あなたはどう使う？」

**100億円の使い道から性格＆金銭観を判定する診断Webアプリ**です。  
20問に答えると、あなたの **「100億円タイプ」**（全16タイプ）が判明します。

行動ファイナンスの研究に基づいた設計で、友達と比較して価値観の違いを楽しめる **エンタメ型診断アプリ**です。

---

## 主な機能

| 機能 | 説明 |
|------|------|
| **タイプ診断** | 20問に回答し、4軸（S/R, L/N, A/I, P/C）から16タイプを判定 |
| **16タイプ一覧** | 全タイプの詳細説明・相性（最高/最悪）を確認 |
| **エビデンス** | プロスペクト理論・マネースクリプト等の科学的根拠を紹介 |
| **共有** | 結果をコピー、X（Twitter）で共有 |

---

## 技術構成

| 項目 | 技術 |
|------|------|
| フレームワーク | React 19 + Vite 7 |
| スタイル | CSS（CSS変数、ダークテーマ） |
| Markdown | react-markdown |
| ルーティング | なし（タブ切り替え） |
| デプロイ | GitHub Pages |

---

## 開発環境

### 依存関係のインストール

```bash
npm install
```

### 開発サーバ起動

```bash
npm run dev
```

### ブラウザでアクセス

```
https://kokihayashida.github.io/hackathon-100b/#references
```

### ビルド・プレビュー

```bash
npm run build
npm run preview
```

---

## 診断の仕組み

4つの心理軸（各5問）で測定し、16タイプに分類します。

| 軸 | 左極 | 右極 | 測定内容 |
|----|------|------|----------|
| S/R | Stability（安定） | Risk（挑戦） | リスクへの向き合い方 |
| L/N | Long-term（長期） | Now（現在） | 時間の使い方 |
| A/I | Analysis（分析） | Intuition（直感） | 決め方のスタイル |
| P/C | Personal（自己） | Collective（社会） | お金を何のために使うか |

- **scale質問**：5段階（1〜5）
- **allocation質問**：A/B/C/D の4択
- 各軸0〜25点、閾値13で左右の極を判定 → 4文字コード（例：SLAP）

---

## プロジェクト構成

```
src/
├── App.jsx                 # ルート・タブナビ・ビュー切替
├── components/
│   ├── TypeDiagnose.jsx    # 診断フロー・結果表示
│   ├── TypeIntroduction.jsx # 16タイプ一覧・詳細
│   └── References.jsx      # エビデンス
├── data/
│   ├── questions.js        # 20問の定義
│   ├── typeProfiles.js     # 16タイプの概要
│   ├── typeIntroduceData.js # 16タイプの詳細（Markdown）
│   ├── groupInfo.js        # 4グループ定義
│   ├── typeCombination*.js # 相性データ
│   └── referencesData.js   # エビデンスデータ
└── utils/
    ├── diagnoseLogic.js    # スコア計算・タイプ判定
    ├── shareUtils.js       # X共有URL生成
    ├── typeImagePath.js    # 画像パス
    └── groupByType.js      # タイプ→グループ取得
```

---

## コンセプト

### 方向性

**100億円の使い道から性格を診断するエンタメアプリ**（MBTI風の4軸16タイプ）

### 狙い

1. **エンタメ性**：ゲーム感覚で楽しめる診断体験
2. **共有・拡散**：友達と共有・比較したくなる設計
3. **科学的根拠**：行動ファイナンスの研究（プロスペクト理論、マネースクリプト等）に基づく
4. **ゴールの明確化**：「診断結果を見る」に絞ったシンプルなUX

---

## Git運用

- main に直接 push しない
- 1人1ブランチ
- PR で merge

### 作業開始

```bash
git checkout main
git pull
git checkout <branch>
```

### 共有

```bash
git add .
git commit -m "message"
git push
```

---

## リポジトリ

- GitHub: KokiHayashida/hackathon-100b

---

## 今後の展望

- レーダーチャートで4軸スコアを可視化
- 共有用画像の生成・Web Share API
- og:image の動的設定（ルーティング導入後）
- AI連携によるパーソナライズ解説

---

## チーム

ハッカソンチーム開発プロジェクト
