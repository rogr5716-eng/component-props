import React from 'react';
import { bandsData } from '../../Data/bands';
import { BandCard } from '../../components/BandCard';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '40px 20px', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '32px' }}>วงดนตรีที่ชื่นชอบ</h1>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '24px',
        flexWrap: 'wrap'
      }}>
        {bandsData.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </div>
    </div>
  );
}

export default App;