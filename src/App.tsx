import {
  AppShell,
  useMantineTheme,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Text
} from '@mantine/core';
import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import AppNavbar from './navbar/navbar';
import AppHeader from './header/header';
import CodeEditor from './pages/codeEditor/codeEditor';
import Overview from './pages/overview/overview';
import Login from './pages/login/Login';

function Shell() {
  const theme = useMantineTheme();
  return (
    <AppShell
      padding={0}
      styles={{
        main: {
          // background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      fixed
      navbar={
        <AppNavbar />
      }
      header={
        <AppHeader />
      }
    >

      <Routes>
        <Route path='/overview' element={<Overview />} />
        <Route path='/editor' element={<CodeEditor />} />
      </Routes>


    </AppShell>
  );
}

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Routes>
          <Route path='*' element={<Shell />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
// 
export default App
