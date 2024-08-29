import { IMAGES } from '@/constants/images'

export function Image ({ imageID }) {
  const imageProps = IMAGES.find(image => image.id === imageID)

  return (
    <img src={imageProps.path} />
  )
}
