import '../../styles/footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {year} Zhenling Jiang
        </p>
      </div>
    </footer>
  )
}
