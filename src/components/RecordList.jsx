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
                { records.map((record) => (
                    <Record record={record}/>
                ))}
            </tbody>
        </table>
    );
};

export default RecordList;