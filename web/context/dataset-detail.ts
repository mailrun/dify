import { createContext, useContext, useContextSelector } from 'use-context-selector'
import type { DataSet } from '@/models/datasets'
import type { IndexingType } from '@/app/components/datasets/create/step-two'

// DatasetDetailContextValue 类型定义通常用于在 Typescript 项目中确保对象符合特定的结构。
// 这种类型定义在使用 React Context、Redux、或任何其他状态管理库时-特别有用-，因为它可以帮助开发者明确每个属性应该是什么类型，
// 以及哪些属性是可选的。通过使用这种类型定义，可以在编译时捕捉到潜在的错误，比如尝试访问一个不存在的属性，或者将一个错误类型的值赋给一个属性。

type DatasetDetailContextValue = {
  indexingTechnique?: IndexingType
  dataset?: DataSet
  mutateDatasetRes?: () => void
}
const DatasetDetailContext = createContext<DatasetDetailContextValue>({})

export const useDatasetDetailContext = () => useContext(DatasetDetailContext)

export const useDatasetDetailContextWithSelector = (selector: (value: DatasetDetailContextValue) => any) => {
  return useContextSelector(DatasetDetailContext, selector)
}
export default DatasetDetailContext
