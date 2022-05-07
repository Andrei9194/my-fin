export const CostRow =({cost})=>{

    return(
        <div>
            <p>{cost.count}</p>
            <p>{cost.note}</p>
        </div>
    )
}