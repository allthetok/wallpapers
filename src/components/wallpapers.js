import React from "react";
import { WallpaperItem } from "./wallpaperItem";

export const Wallpapers = ({ files }) => {
  return (
    <div className="row">
      {files.map((file) => (
        <WallpaperItem key={file.data.id} file={file} />
      ))}
    </div>
  );
};
