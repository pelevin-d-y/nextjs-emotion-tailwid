import Head from 'next/head'
import ButtonReact from 'components/ButtonReact'
import ButtonStyled from 'components/ButtonStyled'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ButtonReact />
        <ButtonStyled />
      </main>
      <footer>
        footer
      </footer>
    </div>
  )
}
