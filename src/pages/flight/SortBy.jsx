import React from 'react';

function SortBy({sort,setSort}) {
    function changeValue(e){
        setSort(e.target.value)
    }

    function durationSort(d){
        setSort(d)
    }
  return (
    <div className='row mt-4 p-2 container sortBox' style={{textAlign:'left'}}>
        <div className='col-4'>Shorted By:</div>
        <div className='col-4'>
            <button 
                type='button' 
                id='sortDB' 
                style={sort==='duration'?{fontWeight:'bold'}:{fontWeight:'initial'}} 
                onClick={()=>durationSort('duration')}>Duration
            </button>
        </div>
        <div className='col-4' style={sort==='lTOh' || sort==='hTOl'?{fontWeight:'bold'}:{fontWeight:'initial'}}>
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
