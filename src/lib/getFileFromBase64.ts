export const getFileFromBase64 = async (url: string) => {
  const res = await fetch(url)
  const buf = await res.arrayBuffer()
  return new File([buf], 'image.png', { type: 'image/png' })
}
