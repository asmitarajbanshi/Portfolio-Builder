import React, { useEffect, useState } from "react";
import { fetchGalleryImages } from "../api/gallery";

const GallerySection = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const images = await fetchGalleryImages();
      setGalleryImages(images);
    };
    loadImages();
  }, []);

  const renderColumn = (column) => {
    return galleryImages
      .filter((image) => image.column === column)
      .map((image, index) => (
        <div key={index} className="section-galleries-wall-item">
          <picture>
            <source srcSet={`${image.imageUrl}.webp`} type="image/webp" />
            <source srcSet={`${image.imageUrl}.png`} type="image/png" />
            <img
              className="auto-height"
              src={`${image.imageUrl}.png`}
              alt={image.altText}
              loading="lazy"
            />
          </picture>
        </div>
      ));
  };

  return (
    <div className="section-templates_galleries sub-section -layout-wall">
      <div className="container max-1440 section-galleries-container">
        <div className="section-galleries-text">
          <h3 className="h3">Create beautiful galleries</h3>
          <p className="subtitle">The top gallery tools available</p>
          <p>Showcase your images with beautiful galleries...</p>
        </div>
        <div className="section-galleries-left-column">
          <div className="section-galleries-wall">{renderColumn("left")}</div>
        </div>
        <div className="section-galleries-right-column">
          <div className="section-galleries-wall second-wall">
            {renderColumn("right")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
