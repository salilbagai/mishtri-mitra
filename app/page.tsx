"use client";

import React, { useState, useEffect, CSSProperties } from 'react';

/**
 * mishTee Delivery Mitra - Mobile Dashboard
 * Fix: Explicitly casting style objects to CSSProperties to pass strict Type Checks.
 */
export default function DeliveryDashboard() {
  const [isPulsing, setIsPulsing] = useState(true);

  // Status pulse animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const theme = {
    primary: '#FF8C00',
    success: '#22C55E',
    bg: '#F8FAFC',
    white: '#FFFFFF',
    textMain: '#1E293B',
    textMuted: '#64748B',
    shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  };

  // The 'as CSSProperties' cast below is the fix for your build error
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
    } as CSSProperties,
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
      marginBottom: '40px',
    } as CSSProperties,
    logo: {
      width: '80px',
      height: 'auto',
      marginBottom: '16px',
    } as CSSProperties,
    title: {
      fontSize: '24px',
      fontWeight: '800',
      color: theme.primary,
      margin: '0 0 12px 0',
      textAlign: 'center',
    } as CSSProperties,
    statusBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: '#DCFCE7',
      padding: '6px 16px',
      borderRadius: '20px',
      border: '1px solid #BBF7D0',
    } as CSSProperties,
    dot: {
      width: '10px',
      height: '10px',
      backgroundColor: theme.success,
      borderRadius: '50%',
      opacity: isPulsing ? 1 : 0.4,
      transition: 'opacity 0.5s ease',
    } as CSSProperties,
    card: {
      backgroundColor: theme.white,
      padding: '24px',
      borderRadius: '16px',
      boxShadow: theme.shadow,
      border: '1px solid #F1F5F9',
    } as CSSProperties,
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
    } as CSSProperties
  };

  return (
    <div style={s.wrapper}>
      <header style={s.header}>
        <img 
          src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
          alt="mishTee Logo" 
          style={s.logo}
        />
        <h1 style={s.title}>mishTee Delivery Mitra</h1>
        <div style={s.statusBadge}>
          <div style={s.dot}></div>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#166534' }}>
            Agent Online
          </span>
        </div>
      </header>

      <main>
        <div style={s.card}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: theme.textMuted, textTransform: 'uppercase', marginBottom: '8px' }}>
            Deliver to:
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: theme.textMain, margin: '0' }}>
            Arjun Mehta
          </h2>
          <p style={{ fontSize: '15px', color: theme.textMuted, marginTop: '4px', lineHeight: '1.4' }}>
            Flat 402, Sunshine Apartments,<br />
            HSR Layout Sector 2, Bangalore
          </p>
        </div>
      </main>

      <button 
        style={s.button}
        onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Arjun+Mehta+HSR+Layout', '_blank')}
      >
        <span>📍</span> Start Navigation
      </button>

      <footer style={{ textAlign: 'center', padding: '20px 0', fontSize: '12px', color: theme.textMuted }}>
        © 2026 mishTee Magic Technologies
      </footer>
    </div>
  );
}
