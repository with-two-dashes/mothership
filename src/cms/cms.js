import { init } from 'netlify-cms-app'
import collections from './collections'

const mediaFolder = `${__dirname}/src/images`

init({
  config: {
    display_url: 'https://www.with-two-dashes.com',
    backend: {
      name: 'git-gateway'
    },
    load_config_file: false,
    media_folder_relative: true,
    collections,
    media_folder: mediaFolder
  }
})
