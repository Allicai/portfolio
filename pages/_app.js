import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import Payhip from '../components/payhip'
import { Analytics } from '@vercel/analytics/react'
import { useEffect } from 'react'
import '../styles/globals.css'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {

  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
      "#d24d69", 
      "#d24d69",
      "#d24d69",
      "#d24d69",
      "#d24d69",
      "#d24d69",
      "#d24d69",
      "#d24d69",
      "#d24d69",
      "#d24d69",
      "#d24d69",
      "#d24d69",
      "#d24d69",
      "#d24d69",
      "#d24d69",
      "#d24d69",
      "#d24d69",
      "#d24d69",
      "#d24d69"
    ];
    

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 10}px`;
        circle.style.top = `${y - 10}px`;
        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.2;
        y += (nextCircle.y - y) * 0.2;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Payhip />
      <Layout router={router}>
      {[...Array(20)].map((_, i) => (
          <div key={i} className="circle"></div>
        ))}
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Analytics />
      </Layout>
    </Chakra>
  )
}

export default Website
