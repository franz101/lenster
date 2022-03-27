import { Button } from '@components/UI/Button'
import { Modal } from '@components/UI/Modal'
import { useCallback, useState } from 'react'
import Cropper from 'react-easy-crop'

type Props = {
  image: string | undefined
  showCropper: boolean
  onCrop: () => void
  onDismiss: () => void
}

const ImageCropper: React.FC<Props> = ({
  image,
  showCropper,
  onDismiss,
  onCrop
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    onCrop()
    console.log(croppedArea, croppedAreaPixels)
  }, [])

  return (
    <Modal
      size="md"
      title="Crop your image"
      show={showCropper}
      onClose={() => onDismiss()}
    >
      <div className="relative h-96">
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={4 / 2}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <div className="flex justify-end m-2 space-x-2">
        <Button onClick={() => onDismiss()} variant="secondary">
          Cancel
        </Button>
        <Button onClick={() => onCrop()}>Crop</Button>
      </div>
    </Modal>
  )
}

export default ImageCropper
