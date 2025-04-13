import { useEffect } from 'react';

const AdsterraSocialBar = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//pl26361054.profitableratecpm.com/64/7d/d2/647dd2267b0305a3fc20ca614432e998.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup when component unmounts
    };
  }, []);

  return null;
};

export default AdsterraSocialBar;
