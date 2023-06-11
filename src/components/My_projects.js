import React, { useEffect, useState } from 'react';

function My_projects() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const mygit = await fetch('https://api.github.com/users/iracopter/repos');
            const gitItems = await mygit.json();
            setData(gitItems);
        }

        fetchData();
    }, []);

    return (
        <div>
            {data.map(item => (
                <div key={item.id} className="gitItem">{item.name}<br/>
                <a href={item.html_url} className='gitlink'>{item.html_url}</a><br/>
                {item.description}
                </div>
            ))}
        </div>
    );
}

export default My_projects;