import { useState} from 'react';
import "../styles/GalleryWidget.css"
import siderimg from "../assest/siderimg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';


const Gallery = () => {
  const [images, setImages] = useState([]);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
      <div className=" gallery-container tabs-widget flex-column container-fluid d-flex flex-column flex-md-row   mb-0"> 
        <div className="icon   w-16 h-15">
           <img src={siderimg} alt="infoimg" className="img-fluid"  style={{height:"160px"   }}  />
        </div>
       <div className="gallery">
      <div className="gallery-header">
        <button className="gallery-tab btn btn-dark bg-dark float-start">Gallery</button>
        <div className="  righticon d-flex align-item-center justify-content-center float-end ">
        <label className="add-image  hoveref p-2 m-2">
          + ADD IMAGE
          <input type="file" accept="image/*" onChange={handleAddImage} style={{ display: 'none' }} />
        </label>
       <div className="icons  ">
         <FontAwesomeIcon icon={faCircleArrowLeft} className='hoveref p-2 m-0' size="2xl" style={{color: "#000000",}} />  
         <FontAwesomeIcon icon={faCircleArrowRight} className='hoveref p-2 m-0' size="2xl" style={{color: "#000000",}} />   
        </div>
        </div>
      </div>
      <div className="gallery-content">
        {images.map((image, index) => (     
          <div className="image-wrapper" key={index}>
            <img src={image} alt={`img-${index}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Gallery;


