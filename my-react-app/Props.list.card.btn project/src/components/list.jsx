function List({items,onDelete}){
    return(
        <>
        <div className="list">
            {
            items.map((item,index)=>(
                <p key={index}>{item} 
                <button onClick={()=> onDelete(index)}>Delete</button></p>
            ))
        }
        </div>
        
        </>
    )
}
export default List;