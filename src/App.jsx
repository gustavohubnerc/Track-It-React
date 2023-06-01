import { TokenContext } from './contexts/TokenContext.jsx';
import { useContext } from 'react';
import ResetStyle from './style/ResetStyle';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';

export default function App() {
  const {token} = useContext(TokenContext);
  return (
    <>
      <ResetStyle />
        {token ? <PrivateRoutes token={token}/> : <PublicRoutes />}        
    </>
  );
}


