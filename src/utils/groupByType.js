import { GROUP_INFO } from '../data/groupInfo'

/** タイプコードから所属グループを取得 */
export function getGroupByTypeCode(typeCode) {
  return GROUP_INFO.find((g) => g.typeCodes.includes(typeCode)) ?? null
}
