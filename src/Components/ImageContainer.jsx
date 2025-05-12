import ImageButton from "./ImageButton";

export default function ImageContainer({ imageUrl, imageId }) {
  const imageElements = imageUrl.map((url, index) => (
    <div
      key={imageId[index]}
      className="w-[200px] h-[200px] rounded-lg overflow-hidden"
    >
      <ImageButton src={url} />
    </div>
  ));

  return <>{imageElements}</>;
}
