export default function ImageContainer({imageUrl}) {


    return (
        <>
            {imageUrl.map((url, index) => (
                <div key={index} className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                        src={url}
                        alt="cat"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                </div>
            ))}
        </>
    )
}