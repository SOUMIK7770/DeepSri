export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-center">
          © {currentYear} Deepsri. All rights reserved.
        </p>
      </div>
    </footer>
  )
}