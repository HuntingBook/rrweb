import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer style={{
            padding: '2rem',
            textAlign: 'center',
            color: '#697386',
            fontSize: '0.875rem',
            borderTop: '1px solid #e3e8ee',
            marginTop: 'auto',
            background: '#f7f9fc'
        }}>
            <p style={{ margin: 0 }}>© 2024 RRWeb React Kit. 版权所有。</p>
        </footer>
    );
};
