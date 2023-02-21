import { useLayoutEffect, useState } from "react";

const useMobie = (): boolean => {
  const [mobile, setMobile] = useState(false);

  useLayoutEffect(() => {
    if (window.innerWidth > 640) return;
    setMobile(true);
  }, []);

  return mobile;
};

export default useMobie;
