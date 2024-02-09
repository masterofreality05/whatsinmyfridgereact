import App from './App'
import './App.css';
import { BrowserRouter } from 'react-router-dom';

/**Used to wrap App in a Browser Router to allow for testing of App */
const AppRouterWrapper = () => {
    return(
    <>
    <BrowserRouter>
    <div className='app' style={{justifyContent:'center'}}>
    <App/>
    </div>
    </BrowserRouter>
    
    </>)
 
}

export default AppRouterWrapper;