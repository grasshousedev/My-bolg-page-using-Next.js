import fs from 'fs'
import path from 'path'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), '_content')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = (path = '') => {
  return fs
  .readdirSync(`${POSTS_PATH}${path}`)
  // Only include md(x) files
  .filter((path) => /\.(md|mdx)$/.test(path))
}
