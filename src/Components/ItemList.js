import "../App.css"



function ItemList({data}){



    return(
        <div>
            <p>
            <ul>
        {data.map((item, kye) => (
          <li key={kye}>{item}</li>
        ))}
      </ul>
            </p>
        </div>
    )
}






export default ItemList