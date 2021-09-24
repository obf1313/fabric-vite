/**
 * @description: 公共接口
 * @author: cnn
 * @createTime: 2020/7/22 9:30
 **/
/**
 * 基础实体
 * **/
export interface BaseEntity {
  id: string,
  name: string,
  code?: string
}
/**
 * 菜单
 * **/
export interface MenuData extends BaseEntity {
  url: string,
  menuType: number,
  children?: Array<MenuData>
}
/**
 * 选项
 * **/
export interface OptionData {
  key: string,
  value: string
}
