function Card({ title, cover }) {
  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        overflow: 'auto',
      }}
    >
      <img src={cover} alt={title} style={{ objectFit: 'cover' }} />
      <h3>{title}</h3>
    </div>
  )
}

export default Card
