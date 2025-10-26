'use client';
export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body>
        <div style={{ padding: 24 }}>
          <h2>Algo salió mal (global)</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{error.message}</pre>
          <button onClick={() => reset()}>Reintentar</button>
        </div>
      </body>
    </html>
  );
}
