import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import items from './data'



function App() {
    const [data, setData] = useState({
        counter: items.length,
        items: items,
        start: +new Date()
    });

    setTimeout(() => {
        data.items.shift();
        setData({
            items: data.items,
            counter: data.items.length,
            start: +new Date()
        })
    },5000);

    useEffect(()=>{
        console.log(+new Date() - data.start);
        //alert(1)
    })

    const onClick = (e) =>{
        e.preventDefault();
    }

    return (
        <div>
            <header>
                count is {data.counter}
            </header>
            <div>
                <ul className={"list-group"}>
                    {
                        data.items.map(item => {
                           //return <li onClick={onClick} className={"list-group-item text-info"} key={item.id}>{item.title}</li>
                            return (
                                <a key={item.id} onClick={(e) =>{
                                    e.preventDefault();
                                    onClick(item);
                                }} href="#" className="list-group-item list-group-item-action active">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">{item.title}</h5>
                                        <small>{item.id}</small>
                                    </div>
                                    <p className="mb-1">{item.userId}.</p>
                                    <small>Donec id elit non mi porta.</small>
                                </a>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default App;
