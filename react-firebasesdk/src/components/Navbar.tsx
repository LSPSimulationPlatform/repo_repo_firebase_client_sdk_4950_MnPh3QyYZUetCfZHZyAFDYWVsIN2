import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, Space } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
  ];

  // Inline styles
  const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 4px rgba(0, 0, 0, 0.06)',
      height: '64px',
      lineHeight: '64px',
      position: 'sticky' as const,
      top: 0,
      zIndex: 1000,
    },
    leftSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px',
      flex: 1,
    },
    logo: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1677ff',
      textDecoration: 'none',
      whiteSpace: 'nowrap' as const,
    },
    menu: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      lineHeight: '62px',
      backgroundColor: 'transparent',
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    loginButton: {
      color: '#595959',
      border: 'none',
      padding: '4px 12px',
      height: '32px',
      fontSize: '14px',
      borderRadius: '6px',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    loginButtonHover: {
      color: '#1677ff',
      backgroundColor: '#f0f0f0',
    },
    signupButton: {
      backgroundColor: '#1677ff',
      border: 'none',
      padding: '4px 16px',
      height: '32px',
      fontSize: '14px',
      borderRadius: '6px',
      color: '#ffffff',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    signupButtonHover: {
      backgroundColor: '#4096ff',
      boxShadow: '0 2px 8px rgba(22, 119, 255, 0.2)',
    },
  };

  // Hover handler functions
  const handleLoginHover = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = styles.loginButtonHover.color;
    e.currentTarget.style.backgroundColor = styles.loginButtonHover.backgroundColor;
  };

  const handleLoginLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = styles.loginButton.color;
    e.currentTarget.style.backgroundColor = styles.loginButton.backgroundColor;
  };

  const handleSignupHover = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = styles.signupButtonHover.backgroundColor;
    e.currentTarget.style.boxShadow = styles.signupButtonHover.boxShadow;
  };

  const handleSignupLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = styles.signupButton.backgroundColor;
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <Header style={styles.header}>
      <div style={styles.leftSection}>
        <Link to="/" style={styles.logo}>
          Firebase App
        </Link>

        <Menu mode="horizontal" items={menuItems} style={styles.menu} />
      </div>

      <div style={styles.rightSection}>
        <Space>
          <Button
            type="link"
            onClick={() => navigate('/login')}
            style={styles.loginButton}
            onMouseEnter={handleLoginHover}
            onMouseLeave={handleLoginLeave}
          >
            Login
          </Button>

          <Button
            type="primary"
            onClick={() => navigate('/register')}
            style={styles.signupButton}
            onMouseEnter={handleSignupHover}
            onMouseLeave={handleSignupLeave}
          >
            Sign Up
          </Button>
        </Space>
      </div>
    </Header>
  );
};

export default Navbar;