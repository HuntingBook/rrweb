import React from 'react';

export const TopBar: React.FC = () => {
    return (
        <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
            padding: '0.75rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ fontSize: '1.5rem' }}>📷</div>
                <h1 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#1a1f36',
                    margin: 0,
                    letterSpacing: '-0.025em'
                }}>
                    RRWeb React Kit
                </h1>
            </div>

        </header>
    );
};
