import { createContext, useState, useCallback } from "react";

interface Props {
  children: JSX.Element;
}

interface ImageType {
  visible: boolean;
  imageVisibleHandler(): void;
  imageInvisibleHandler(): void;
}

const ImageContext = createContext<ImageType>({
  visible: false,
  imageVisibleHandler: () => {},
  imageInvisibleHandler: () => {},
});

export const ImageProvider = ({ children }: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  
  const imageVisibleHandler = useCallback((): void => {
    setVisible((prev) => true);
  }, []);

  const imageInvisibleHandler = useCallback((): void => {
    setVisible((prev) => false);
  }, []);

  const context = {
    visible,
    imageVisibleHandler,
    imageInvisibleHandler,
  };

  return (
    <ImageContext.Provider value={context}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;
