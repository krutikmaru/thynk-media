import React from "react";
import ServiceContainerSmall from "./ServiceContainerSmall";
import ServiceContainerLarge from "./ServiceContainerLarge";

function ServiceMenu() {
  return (
    <div className="py-12 px-10 flex flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row justify-evenly items-center mt-10">
      <div className="w-full lg:w-[33%]  flex flex-col space-y-4 text-3xl md:text-5xl lg:text-3xl 3xl:text-5xl">
        <ServiceContainerSmall
          image={"instagram-ads"}
          title={"Instagram Ads"}
        />
        <ServiceContainerSmall image={"facebook-ads"} title={"Facebook Ads"} />
      </div>
      <ServiceContainerLarge
        titleHighlight={"Content"}
        titleNormal={"Creation"}
        image={"content-creation"}
      />
      <div className="w-full lg:w-[33%]  flex flex-col space-y-4 text-3xl md:text-5xl lg:text-3xl 3xl:text-5xl">
        <ServiceContainerSmall
          image={"social-media-management"}
          title={"Social Media Management"}
        />
        <ServiceContainerSmall
          image={"seo"}
          title={"Search Engine Optimization"}
        />
      </div>
    </div>
  );
}

export default ServiceMenu;
