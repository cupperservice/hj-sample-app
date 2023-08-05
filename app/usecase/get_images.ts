import imageRepository from '../repository/image_repository'
import DownloadImage  from '../model/download_image'

export default async function getImages() {
  const images = await imageRepository.allImages()

  return images.map((image) => {
    return new DownloadImage(
      image.name,
      image.size,
      image.comment,
      image.mime_type
    )
  })
}
