import React from 'react'

function ComingSoon() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      minHeight: '60vh',
      flexDirection: 'column',
      gap: '12px',
      color: '#333'
    }}>
      <h1 style={{ margin: 0 }}>Coming Soon</h1>
      <p style={{ margin: 0, opacity: 0.8 }}>This feature is on the way. Check back later.</p>
    </div>
  )
}

export default ComingSoon


