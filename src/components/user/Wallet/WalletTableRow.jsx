export default function ({ data }) {

    const getClassName = (type, prefix) => {
        if (type === 'income') {
            return `text-${prefix}success`;
        }
        return `text-${prefix}danger`;
    }

    return (
        <tr>
            <td scope="row">{new Date(data.date).toDateString()}</td>

            <td scope="row">{data.cardNumber}</td>

            <td scope="row">{data.cards}</td>

            <td scope="row">{data.description}</td>

            <td scope="row">
                <span className={"badge " + getClassName(data.operationType, "bg-")}>{data.operationType}</span>
            </td>

            <td className={getClassName(data.operationType, '')} scope="row">
                <span className="me-1">{data.operationType !== 'income' ? '-' : ''}</span>
                {data.amount.toFixed(2)}лв
            </td>
        </tr>
    )
}


