import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState('');
  const [lowAge, setLowAge] = useState('');
  const [highAge, setHighAge] = useState('');
  const [lowPrice, setLowPrice] = useState('');
  const [highPrice, setHighPrice] = useState('');
  const [gender, setGender] = useState('1');
  const [experience, setExperience] = useState('3');
  const [level, setLevel] = useState('7');

  const handleFilter = () => {
    const queryParams = new URLSearchParams({
      name,
      low_age: lowAge,
      high_age: highAge,
      low_price: lowPrice,
      high_price: highPrice,
      gender,
      experience,
      level,
    });

    const url = `/teacher?${queryParams.toString()}`;

    console.log(url);
  };
    return (

            <div className="container my-5 border border-dark py-3 offset-sm-8">
                <div className="row my-1">
                <div className="col-sm-4">
                    <input type="text" 
                    className="form-control" 
                    placeholder='Search name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-sm-4">
                        <label className="mb-2">レベル :</label>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-sm-4 ">
                        <select defaultValue="7" className="form-control"
                          value={level}
                          onChange={(e) => setLevel(e.target.value)}>
                            <option value="7">7</option>
                            <option value="6">6</option>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-sm-4">
                        <label className="mb-2">経験 :</label>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-sm-4">
                        <select defaultValue="3" className="form-control" 
                         value={experience}
                         onChange={(e) => setExperience(e.target.value)}>
                            <option value="5">5年経験</option>
                            <option value="4">4年経験</option>
                            <option value="3">3年経験</option>
                            <option value="2">2年経験</option>
                            <option value="1">1年経験</option>

                            {/* Thêm các tùy chọn khác tại đây */}
                        </select>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-sm-4">
                        <label className="mb-2">料金 </label>
                        <br />
                        <label >から :</label>
                    </div>
                </div>
                
                <div className="row my-1">
                    <div className="col-sm-4">
                    <input type="text" className="form-control" value={lowPrice}
                    onChange={(e) => setLowPrice(e.target.value)}/>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-sm-4">
                        <label >まで :</label>
                    </div>
                </div>
                
                <div className="row my-1">
                    <div className="col-sm-4">
                    <input type="text" className="form-control" value={highPrice}
                    onChange={(e) => setHighPrice(e.target.value)} />
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-sm-4">
                        <label className="mb-2">特別 :</label>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-sm-4">
                        <select defaultValue="1" className="form-control" value={gender}
                          onChange={(e) => setGender(e.target.value)}>
                            <option value="1">男性</option>
                            <option value="2">女性</option>
                            {/* Thêm các tùy chọn khác tại đây */}
                        </select>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-sm-3">
                        <label className="mb-2">年齢 :</label>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-sm-1">
                        <label className="mb-2">から :</label>
                    </div>
                    <div className="col-sm-1">
                        <input type="text" className="form-control" value={lowAge}
                          onChange={(e) => setLowAge(e.target.value)}/>
                    </div>
                    <div className="col-sm-1">
                        <label className="mb-2">まで :</label>
                    </div>
                    <div className="col-sm-1">
                        <input type="text" className="form-control" value={highAge}
                          onChange={(e) => setHighAge(e.target.value)}/>
                    </div>
                </div>
                <div className="row my-2 mt-4">
                    <div className="col-sm-4">
                        <button className="btn btn-primary "style={{ width: "100%" }} onClick={handleFilter}>フィルター</button>
                    </div>
                </div>
            </div>

                    
            
       

       
        
    )
}
export default App