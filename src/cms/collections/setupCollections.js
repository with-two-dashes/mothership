import { blogCollection } from './blogCollection.js'
import path from 'path'

const rawCollectionsMapping = {
  blogCollection
}

export const setupCollections = ({
  collectionDirectoryRoot
}) => Object.keys(rawCollectionsMapping).map(name => {
  const { folder, ...rest } = rawCollectionsMapping[name]
  return (
    {
      ...rest,
      name,
      folder: path.join(collectionDirectoryRoot, folder)
    }
  )
})
