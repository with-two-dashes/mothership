import { init } from 'netlify-cms-app'
import { setupCollections } from './collections/setupCollections'
const mediaFolder = `static/assets`
const publicFolder = 'assets'
const backend = { name: 'git-gateway' }
const collectionDirectoryRoot = `${__dirname}/src/collections/`
const collections = setupCollections({ collectionDirectoryRoot })
init({
  config: {
    backend,
    display_url: 'https://www.with-two-dashes.com',
    load_config_file: false,
    media_folder_relative: true,
    media_folder: mediaFolder,
    public_folder: publicFolder,
    collections
  }
})
