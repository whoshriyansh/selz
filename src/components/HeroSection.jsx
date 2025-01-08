import React, { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const loadFlyonUI = async () => {
      // Dynamically import FlyonUI (assuming it is set up in the project)
      await import("flyonui/flyonui");
      // Initialize the carousel component if needed
      window.HSStaticMethods.autoInit();
    };
    loadFlyonUI();
  }, []);

  return (
    <div
      id="image"
      data-carousel='{ "loadingClasses": "opacity-0"}'
      className="relative w-full"
    >
      <div className="carousel">
        <div className="carousel-body h-[50vh] opacity-0">
          {/* Slide 1 */}
          <div className="carousel-slide">
            <div className="flex h-full justify-center">
              <img
                src="https://cdn.flyonui.com/fy-assets/components/carousel/image-22.png"
                className="size-full object-cover"
                alt="game"
              />
            </div>
          </div>
          {/* Slide 2 */}
          <div className="carousel-slide">
            <div className="flex h-full justify-center">
              <img
                src="https://cdn.flyonui.com/fy-assets/components/carousel/image-15.png"
                className="size-full object-cover"
                alt="vrbox"
              />
            </div>
          </div>
          {/* Slide 3 */}
          <div className="carousel-slide">
            <div className="flex h-full justify-center">
              <img
                src="https://cdn.flyonui.com/fy-assets/components/carousel/image-16.png"
                className="size-full object-cover"
                alt="laptop"
              />
            </div>
          </div>
          {/* Slide 4 */}
          <div className="carousel-slide">
            <div className="flex h-full justify-center">
              <img
                src="https://cdn.flyonui.com/fy-assets/components/carousel/image-8.png"
                className="size-full object-cover"
                alt="VRBox"
              />
            </div>
          </div>
          {/* Slide 5 */}
          <div className="carousel-slide">
            <div className="flex h-full justify-center">
              <img
                src="https://cdn.flyonui.com/fy-assets/components/carousel/image-23.png"
                className="size-full object-cover"
                alt="iwatch"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Previous Slide Button */}
      <button type="button" className="carousel-prev">
        <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
          <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      {/* Next Slide Button */}
      <button type="button" className="carousel-next">
        <span className="sr-only">Next</span>
        <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
          <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
        </span>
      </button>
    </div>
  );
};

export default HeroSection;
