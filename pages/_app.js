import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import Payhip from '../components/payhip'
import { Analytics } from '@vercel/analytics/react'
import { useEffect } from 'react'
import '../styles/globals.css'

function Website({ Component, pageProps, router }) {
  useEffect(() => {
    // Function to detect mobile devices
    const isMobile = /Mobi|Android/i.test(navigator.userAgent)

    // If not a mobile device, run the cursor effect
    if (!isMobile) {
      const coords = { x: 0, y: 0 }
      const circles = document.querySelectorAll('.circle')

      const colors = [
        // '#ABABAB',
        // '#A6A6A6',
        // '#A1A1A1',
        // '#9C9C9C',
        // '#979797',
        // '#929292',
        // '#8D8D8D',
        // '#888888',
        // '#838383',
        // '#7E7E7E',
        // '#797979',
        // '#747474',
        // '#6F6F6F',
        // '#6A6A6A',
        // '#656565',
        // '#606060',
        // '#5B5B5B',
        // '#565656',
        // '#515151',
        // '#4C4C4C',
        // '#474747',
        // '#424242',
        // '#3D3D3D',
        // '#383838',
        // '#333333',
        // '#2E2E2E',
        // '#292929',
        // '#242424',
        // '#1F1F1F',
        // '#1A1A1A'

        '#7A9DBD', // Slightly darker blue
        '#79A8C0', // Slightly lighter blue
        '#78A3C2', // Soft blue
        '#77A0C4', // Light blue
        '#769BC7', // Light pastel blue
        '#7598C9', // Very soft blue
        '#7495CB', // Soft pastel blue
        '#7392CD', // Very light pastel blue
        '#728FCE', // Light sky blue
        '#718CCE', // Soft sky blue
        '#7089D0', // Very soft sky blue
        '#6F86D2', // Pastel sky blue
        '#6E83D3', // Soft light blue
        '#6D80D5', // Light blue
        '#6C7DD7', // Light pastel blue
        '#6B7AD9', // Soft light blue
        '#6A77DB', // Very soft blue
        '#6974DD', // Light pastel blue
        '#6871DF', // Very light sky blue
        '#6770E1', // Soft sky blue
        '#666DEE', // Very light blue
        '#656CFA', // Soft light blue
        '#6469F8', // Light blue
        '#6366F6', // Pastel blue
        '#6263F4'  // Soft light blue
      ]

      circles.forEach((circle, index) => {
        circle.x = 0
        circle.y = 0
        circle.style.backgroundColor = colors[index % colors.length]
      })

      window.addEventListener('mousemove', e => {
        coords.x = e.clientX
        coords.y = e.clientY
      })

      function animateCircles() {
        let x = coords.x
        let y = coords.y

        circles.forEach((circle, index) => {
          circle.style.left = `${x - 10}px`
          circle.style.top = `${y - 10}px`
          circle.style.scale = (circles.length - index) / circles.length

          circle.x = x
          circle.y = y

          const nextCircle = circles[index + 1] || circles[0]
          x += (nextCircle.x - x) * 0.2
          y += (nextCircle.y - y) * 0.2
        })

        requestAnimationFrame(animateCircles)
      }

      animateCircles()
    }
  }, [])

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
