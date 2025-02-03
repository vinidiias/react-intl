import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';
import { useState } from 'react';
import { IntlProvider } from 'react-intl';

function App() {
  const getInitialLocal = () => {
    const savedLocale = localStorage.getItem('locale');
    return savedLocale ? savedLocale : LOCALES.ENGLISH;
  }

  const [currentLocale, setCurrentLocale] = useState(getInitialLocal())

  const handleChange = (e) => {
    setCurrentLocale(e.target.value);
    localStorage.setItem('locale', e.target.value)
  };

  return (
    <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.ENGLISH}>
      <Header currentLocale={currentLocale} handleChange={handleChange} />
      <Content />
      <Footer />
    </IntlProvider>
  );
}

export default App;
