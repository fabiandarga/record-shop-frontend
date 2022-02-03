import Record from './Record';

const RecordList = ({ records }) => {
    return (
        <table className="records-table">
            <thead>
                <tr>
                    <th>Artist</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                { records.map((record, idx) => {
                    const key=(idx+record.title+record.artist).replace(' ', '').toLowerCase();
                    return <Record key={key} record={record}/>
                })}
            </tbody>
        </table>
    );
};

export default RecordList;