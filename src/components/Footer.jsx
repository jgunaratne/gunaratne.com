export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-16 text-center text-gray-400 text-sm">
      <p>&copy; {year} Gunaratne</p>
    </footer>
  )
}
