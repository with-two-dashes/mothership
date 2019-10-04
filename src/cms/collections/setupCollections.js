import path from 'path'
import { blogCollection } from './blogCollection.js'
import { settingsCollection } from './settingsCollection.js'

const rawCollectionsMapping = {
  blogCollection,
  settingsCollection
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
