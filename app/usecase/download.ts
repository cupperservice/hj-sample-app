import fileRepository from '../repository/file_repository'

export default async function download(name: string) {
  return fileRepository.downloadOriginal(name)
}
