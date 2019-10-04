import { blogCollection } from './blogCollection.js'

const rawCollectionsMapping = {
  blogCollection
}

export const setupCollections = ({
  collectionDirectoryRoot
}) => Object.keys(rawCollectionsMapping).map(name => {
  const setup = rawCollectionsMapping[name]
  return setup({ name, collectionDirectoryRoot })
})
