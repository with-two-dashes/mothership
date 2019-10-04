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
  const { folder, file, files, ...rest } = rawCollectionsMapping[name]
  if (folder) {
    return (
      {
        ...rest,
        name,
        folder: path.join(collectionDirectoryRoot, folder)
      }
    )
  } else if (files) {
    return (
      {
        ...rest,
        name,
        files: files.map(({ file, ...otherStuff }) => {
          return {
            file: path.join(collectionDirectoryRoot, file),
            ...otherStuff
          }
        })
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
