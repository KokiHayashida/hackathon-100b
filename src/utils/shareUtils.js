/**
 * 診断結果の共有用ユーティリティ
 * X (Twitter) の共有 URL を生成する
 */

/**
 * 共有用の共通テキストを生成
 * @param {{ name: string, typeCode: string }} result 診断結果
 * @returns {string}
 */
export function getShareText(result) {
  return `【100億円タイプ診断】私のタイプは「${result.name}」（${result.typeCode}）でした！`
}

/**
 * X (Twitter) Web Intent の URL を生成
 * @param {{ name: string, typeCode: string }} result 診断結果
 * @returns {string}
 */
export function getXShareUrl(result) {
  const text = getShareText(result)
  const params = new URLSearchParams({
    text,
    url: window.location.href,
    hashtags: '100億円タイプ診断,診断',
  })
  return `https://twitter.com/intent/tweet?${params.toString()}`
}
