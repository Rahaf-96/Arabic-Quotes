import React from 'react';

function Header({onSearchChange}) {
 

    return (
        <div className="flex flex-row">   
          <div id="nav-bar" className="flex justify-around  mb4 bt bb w-100 center pt3 pb3">
                <input placeholder="ابحث عن اسم المؤلف"     type="search" 
                    onChange={onSearchChange}/>
                <button  className="grow pointer">إقتباس اليوم</button>
                <button  className="grow pointer">الرئيسية</button>
                <p id="header2">مكتبة الإقتباسات العربية</p>

             </div> 
              
        </div>
    );
}

export default Header;