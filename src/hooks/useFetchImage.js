 
 import React from "react";
 export default function  useFetchImage  (marque , imageName){
 

    const [image , setImage] = React.useState(null)

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
            console.error('Failed to fetch image:', response.status);
          }
        } catch (error) {
          console.error('Error fetching image:', error);
        }
      };
  
      fetchImage();
    }, [marque, imageName]);
    return {image}
 }