import { init } from 'netlify-cms-app'
import collections from './collections'

const mediaFolder = `static/assets`
const publicFolder = 'assets'

const backend = { name: 'git-gateway' }

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
