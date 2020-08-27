import Head from 'next/head'
import { FC } from 'react'
import { Card, Text, Image } from 'anibook-ui'

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Anibook</title>
      </Head>
      <Card
        backgroundColor="#a9a9a9"
        downColorLayer="#2e86de"
        upColorLayer="#00d2d3"
        image={
          <Image
            alt="high score girl"
            src="https://i.ibb.co/jR4rRqK/oono.png"
            height="170px"
            margin="0 0 15px"
            width="302px"
            shadow="0 10px 20px rgba(0, 0, 0, 0.4)"
            transform="scale(1.1)"
            transition="1s"
            zIndex={2}
          />
        }
        text={
          <Text
            text="High Score Girl"
            props={[
              { name: 'position', value: 'relative' },
              { name: 'color', value: '#ffffff' },
              { name: 'text-transform', value: 'capitalize' },
              { name: 'z-index', value: '2' },
              { name: 'font-size', value: '1.25rem' },
              { name: 'margin', value: '0' }
            ]}
            lang="en"
          />
        }
      />
    </>
  )
}

export default Home
