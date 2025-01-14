import { useState } from "react";

export default function LoadingImage({ src, alt, width, height, className }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div style={{position: 'relative', width: width, height: height, minWidth: width}}>
            {!isLoaded && (
                <div style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "gray",
                    top: 0,
                    left: 0,
                    borderRadius: '10px'
                }}>

                </div>
            )}
            <img className={className} src={src} alt={alt} style={{
                display: isLoaded ? "block" : "none",
            }}
            onLoad={() => setIsLoaded(true)} />
        </div>
    )
}