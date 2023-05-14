function My_place_of_job({items}){
   return(
        <div>
            {
                items.map(
                    item =>(
                        <p className="work-text" key={item.id}>Name of employer: {item.name}<br/>
                        <b>Job title: </b> {item.title}<br/>
                        <b>Project/Role description: </b>{item.description}<br/>
                        <b>Link: {item.link}</b>
                        </p>

                    )
                )
            }
        </div>
        );
}

export default My_place_of_job;