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
  const { folder, file, ...rest } = rawCollectionsMapping[name]
  if (folder) {
    return (
      {
        ...rest,
        name,
        folder: path.join(collectionDirectoryRoot, folder)
      }
    )
  } else if (file) {
    return (
      {
        ...rest,
        name,
        file: path.join(collectionDirectoryRoot, file)
      }
    )
  } else {
    return { name, ...rest }
  }
})
