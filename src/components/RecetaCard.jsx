import React from 'react'
import PropTypes from 'prop-types'

const CATEGORY_STYLES = {
  entrada: { backgroundColor: '#E8F6EF', borderColor: '#2ECC71', color: '#145A32' },
  fondo: { backgroundColor: '#FEF5E7', borderColor: '#F39C12', color: '#7A4F01' },
  postre: { backgroundColor: '#FDEFF6', borderColor: '#E84393', color: '#6A1B4D' },
  default: { backgroundColor: '#F4F6F7', borderColor: '#BFC9CA', color: '#2C3A45' }
}

const cardStyle = {
  container: {
    maxWidth: 420,
    margin: 12,
    padding: 16,
    borderRadius: 10,
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    fontFamily: 'Arial, Helvetica, sans-serif'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  title: { fontSize: 20, fontWeight: 700, margin: 0 },
  meta: { fontSize: 13, color: '#555' },
  badge: {
    padding: '6px 10px',
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
    textTransform: 'capitalize',
    border: '2px solid',
    display: 'inline-block'
  },
  sectionTitle: { fontSize: 14, fontWeight: 700, margin: '10px 0 6px' },
  text: { fontSize: 14, margin: 0, color: '#222', lineHeight: 1.4 },
  ingredList: { paddingLeft: 18, margin: '6px 0' }
}

function RecetaCard({ nombre, origen, porciones, categoria, descripcion, ingredientes }) {
  const key = (categoria || '').toLowerCase()
  const style = CATEGORY_STYLES[key] || CATEGORY_STYLES.default

  return (
    <article style={{ ...cardStyle.container, border: `2px solid ${style.borderColor}`, background: style.backgroundColor }}>
      <header style={cardStyle.header}>
        <div>
          <h3 style={{ ...cardStyle.title, color: style.color }}>{nombre || 'Receta'}</h3>
          <div style={cardStyle.meta}>{origen ? `Origen: ${origen}` : ''} {porciones ? ` • Porciones: ${porciones}` : ''}</div>
        </div>
        <div style={{ ...cardStyle.badge, borderColor: style.borderColor, background: 'transparent', color: style.color }}>{categoria || 'sin categoría'}</div>
      </header>

      {descripcion ? (
        <section>
          <h4 style={cardStyle.sectionTitle}>Descripción</h4>
          <p style={cardStyle.text}>{descripcion}</p>
        </section>
      ) : null}

      {ingredientes && ingredientes.length ? (
        <section>
          <h4 style={cardStyle.sectionTitle}>Ingredientes</h4>
          <ul style={cardStyle.ingredList}>
            {ingredientes.map((ing, i) => (
              <li key={i} style={{ marginBottom: 6 }}>{ing}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  )
}

RecetaCard.propTypes = {
  nombre: PropTypes.string,
  origen: PropTypes.string,
  porciones: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  categoria: PropTypes.string,
  descripcion: PropTypes.string,
  ingredientes: PropTypes.arrayOf(PropTypes.string)
}

RecetaCard.defaultProps = {
  nombre: 'Receta',
  origen: '',
  porciones: null,
  categoria: '',
  descripcion: '',
  ingredientes: []
}

export default RecetaCard
