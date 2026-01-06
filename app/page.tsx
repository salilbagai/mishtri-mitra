"use client";

import React, { useState, useEffect } from 'react';

/**
 * mishTee Delivery Mitra - Mobile Dashboard
 * Developed by Senior Frontend Engineer
 * Implementation: Next.js App Router (Single File)
 */
export default function DeliveryDashboard() {
  const [isPulsing, setIsPulsing] = useState(true);

  // Animation logic for the status indicator
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // UI Configuration
  const theme = {
    primary: '#FF8C00', // mishTee Orange
    success: '#22C55E',
    bg: '#F8FAFC',
    white: '#FFFFFF',
    textMain: '#1E293B',
    textMuted: '#64748B',
    shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  };

  // Inline Styles Object
  const s = {
    wrapper: {
      maxWidth: '500px',
      margin: '0 auto',
      minHeight: '100vh',
      backgroundColor: theme.bg,
      fontFamily: '-apple-system, system-ui, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px',
      boxSizing: 'border-box',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
      marginBottom: '40px',
    },
    logo: {
      width: '80px',
      height: 'auto',
      marginBottom: '16px',
    },
    title: {
      fontSize: '24px',
      fontWeight: '800',
      color: theme.primary,
      margin: '0 0 12px 0',
      textAlign: 'center',
      letterSpacing: '-0.5px',
    },
    statusContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: '#DCFCE7',
      padding: '6px 16px',
      borderRadius: '20px',
      border: '1px solid #BBF7D0',
    },
    pulseDot: {
      width: '10px',
      height: '10px',
      backgroundColor: theme.success,
      borderRadius: '50%',
      opacity: isPulsing ? 1 : 0.4,
      transition: 'opacity 0.5s ease',
    },
    statusText: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#166534',
    },
    card: {
      backgroundColor: theme.white,
      padding: '24px',
      borderRadius: '16px',
      boxShadow: theme.shadow,
      border: '1px solid #F1F5F9',
    },
    label: {
      fontSize: '12px',
      fontWeight: '700',
      color: theme.textMuted,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: '8px',
    },
    customerName: {
      fontSize: '20px',
      fontWeight: '700',
      color: theme.textMain,
      margin: '0',
    },
    address: {
      fontSize: '15px',
      color: theme.textMuted,
      marginTop: '4px',
      lineHeight: '1.4',
    },
    button: {
      marginTop: 'auto',
      backgroundColor: theme.primary,
      color: theme.white,
      border: 'none',
      borderRadius: '14px',
      padding: '20px',
      fontSize: '18px',
      fontWeight: '700',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      boxShadow: '0 10px 15px -3px rgba(255, 140, 0, 0.3)',
      transition: 'transform 0.1s active',
    }
  };

  return (
    <div style={s.wrapper}>
      {/* Brand Header */}
      <header style={s.header}>
        <img 
          src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
          alt="mishTee" 
          style={s.logo}
        />
        <h1 style={s.title}>mishTee Delivery Mitra</h1>
        <div style={s.statusContainer}>
          <div style={s.pulseDot}></div>
          <span style={s.statusText}>Agent Online</span>
        </div>
      </header>

      {/* Task Information */}
      <main>
        <div style={s.card}>
          <div style={s.label}>Deliver to:</div>
          <h2 style={s.customerName}>Arjun Mehta</h2>
          <p style={s.address}>
            Flat 402, Sunshine Apartments,<br />
            HSR Layout Sector 2, Bangalore
          </p>
          <div style={{ 
            marginTop: '16px', 
            paddingTop: '16px', 
            borderTop: '1px dashed #E2E8F0',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '14px'
          }}>
            <span style={{color: theme.textMuted}}>Order ID: #MT-8821</span>
            <span style={{fontWeight: '600', color: theme.primary}}>Prepaid</span>
          </div>
        </div>
      </main>

      {/* Primary Action */}
      <button 
        style={s.button}
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        onClick={() => window.open('https://maps.google.com', '_blank')}
      >
        <span style={{ fontSize: '22px' }}>🚀</span>
        Start Navigation
      </button>

      <footer style={{ 
        textAlign: 'center', 
        padding: '20px 0', 
        fontSize: '12px', 
        color: theme.textMuted 
      }}>
        © 2024 mishTee Magic Technologies
      </footer>
    </div>
  );
}
