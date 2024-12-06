import React, { useState } from "react"

interface SearchFormProps {
  onSearch: (criteria: string) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <div className="search-form">
      <h2>Cari Tempat Parkir</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="search">Kriteria Pencarian:</label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Masukkan lokasi atau ukuran kendaraan"
            required
          />
        </div>
        <button type="submit" className="search-button">
          Cari
        </button>
      </form>
    </div>
  )
}

export default SearchForm
