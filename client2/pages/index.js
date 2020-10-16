import Head from 'next/head'
import { useState } from 'react'

import generate from '../lib/hash'

export default function Home() {
  const [hash, setHash] = useState(generate(5, {caseInsensitive: true}).toUpperCase())

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Hello World
        </h1>

        <p className="description">
          {hash}
        </p>

        <div className="grid">
          <div className="card">
            <h3>Simple Server</h3>
            <p className="comment">// inicia conexão com o servidor</p>
            <p>var server = new WebSocket("ws://localhost:8080");</p>
            
            <p className="comment">// evento de recepção de mensagem</p>
            <p>server.onmessage = event =&gt; console.log('8080 — ' + event.data, event);</p>

            <p className="comment">// a conexão é assíncrona, então é melhor esperar a confirmação antes de enviar algo</p>
            <p>server.onopen = event =&gt; console.log('8080 (connection stabilished)', event);</p>

            <p className="comment">// enviando mensagem para o servidor (como {hash})</p>
            <p>server.send("Hello 8080, i'm {hash}");</p>
          </div>
          
          <div className="card">
            <h3>Complex Server</h3>
            
            <p>var server = new WebSocket("ws://localhost:9090");</p>

            <p>server.onmessage = event =&gt; console.log('9090 — ' + event.data, JSON.parse(event.data), event);</p>

            <p className="comment">// enviando mensagem JSON para o servidor (como {hash}), APÓS conexão confirmada</p>
            <p>server.onopen = event =&gt; server.send(JSON.stringify({"{"}<br/>
              &emsp;name: '9090',<br/>
              &emsp;type: 'message',<br/>
              &emsp;content: 'Hello Client',<br/>
              &emsp;timestamp: Date.now(),<br/>
            {"}"}));</p>
          </div>

          {/* <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .comment {
          color: #59b161 !important;
          font-size: 14px !important;
          margin-top: 8px !important;
          margin-bottom: -8px !important;
          font-style: italic !important;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 100vw;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 70%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
