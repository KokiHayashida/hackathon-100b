/** タイプコードから画像パスを返す（例: SLAP → /images/types/SLAP_0.png） */
export function getTypeImagePath(typeCode) {
  if (!typeCode) return null
  const base = import.meta.env.BASE_URL
  return `${base}images/types/${typeCode}_0.png`
}
