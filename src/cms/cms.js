import { init } from 'netlify-cms-app'
import collections from './collections'

const mediaFolder = `${__dirname}/src/images`
const publicFolder = `${__dirname}/src/pages`

init({
  config: {
    display_url: 'localhost:8080',
    backend: {
      name: 'git-gateway'
    },
    load_config_file: false,
    media_folder_relative: true,
    collections,
    media_folder: mediaFolder,
    public_folder: publicFolder
  }
})
