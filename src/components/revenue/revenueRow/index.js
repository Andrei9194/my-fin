export const RevenueRow = ({revenue}) =>{

    return(
        <div>
            <p>{revenue.count}</p>
            <p>{revenue.note}</p>
        </div>
    )
}