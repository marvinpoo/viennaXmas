import Gallery from '@/components/Gallery'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
      <Gallery />
      <footer className="text-center py-8 text-sm text-muted-foreground">
        This is a tiny website made by <a href="https://pxlmon.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Pixelmonarch</a>
      </footer>
    </main>
  )
}
