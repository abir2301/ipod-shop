import React from "react";
export default function useFetchImage(marque, imageName) {
  const [image, setImage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchImage = async () => {
      try {
        let imageUrl = `http://localhost:5173/src/assets/img/${marque}/${imageName}`;

        const response = await fetch(imageUrl);
        if (response.ok) {
          const blob = await response.blob();
          const objectUrl = URL.createObjectURL(blob);
          setImage(objectUrl);
        } else {
          setError(`Failed to fetch image: ${response.status}`);
        }
      } catch (error) {
        setError(`Error fetching image: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [marque, imageName]);

  return { image, isLoading, error };
}
