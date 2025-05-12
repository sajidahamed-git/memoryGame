import ImageButton from "./ImageButton";

export default function ImageContainer({ imageUrl, imageId }) {
  return (
    <>
      <div className=" flex gap-2  justify-center">
        {imageUrl.map((src, index) => (
          <ImageButton key={imageId[index]} src={src} />
        ))}
      </div>
    </>
  );
}
