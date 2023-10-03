// Write your code here.
const ThumbnailItem = props => {
  const {imagesList, imageChange} = props
  const {thumbnailUrl, id, thumbnailAltText} = imagesList

  const onClickImage = () => {
    imageChange(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickImage} className="first">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
