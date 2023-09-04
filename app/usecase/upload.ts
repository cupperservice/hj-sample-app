import Image from '../model/image'
import UploadImage from '../model/upload_image'
import imageRepository from '../repository/image_repository'
import fileRepository from '../repository/file_repository'

export default async function upload(file: Express.Multer.File, comment: string) {
  const image = new UploadImage(file, comment)

  file.stream

  await imageRepository.save(image)
  await fileRepository.uploadOriginal(image)
  await fileRepository.uploadThumbnail(image)
}
