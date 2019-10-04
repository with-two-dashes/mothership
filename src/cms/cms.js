import { init } from 'netlify-cms-app'
import { setupCollections } from './collections/setupCollections'

const mediaFolder = `static/assets`
const publicFolder = 'assets'
const backend = { name: 'git-gateway' }
const collectionDirectoryRoot = `${__dirname}/src/collections/`
const collections = setupCollections({ collectionDirectoryRoot })
const siteURL = `https://www.with-two-dashes.com`
const logoURL = `https://raw.githubusercontent.com/with-two-dashes/mothership/master/static/assets/trash-logo.png`

init({
  config: {
    backend,
    logo_url: logoURL,
    site_url: siteURL,
    display_url: siteURL,
    load_config_file: false,
    media_folder_relative: true,
    media_folder: mediaFolder,
    public_folder: publicFolder,
    collections
  }
})
