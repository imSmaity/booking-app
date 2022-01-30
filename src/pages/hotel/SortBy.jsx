import React from 'react';

function SortBy({sort,setSort}) {
    function changeValue(e){
        setSort(e.target.value)
    }

  return (
    <div className='row mt-4 p-2 container sortBox' >
        <div className='col-4'>Shorted By:</div>
        <div className='col-8' style={sort==='lTOh' || sort==='hTOl'?{fontWeight:'bold'}:{fontWeight:'initial'}}>
            <label>{'Price'}</label>
            <select style={{marginLeft:'1vh'}} onChange={(e)=>{changeValue(e)}}>
                <option value="">Select</option>
                <option value="lTOh">Low to High</option>
                <option value="hTOl">High to Low</option>
            </select>
        </div>
    </div>
  );
}

export default SortBy;
