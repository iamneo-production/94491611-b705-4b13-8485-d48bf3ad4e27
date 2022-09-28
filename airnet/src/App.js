import React from 'react';
import Navbar1 from './Navbar1';
import Sidebar from './Sidebar';
 
function App(){
 
        return (
            <div>
                <Navbar1/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                
             </div>
            </div>  
        </div>  
        );
    }
  
export default App