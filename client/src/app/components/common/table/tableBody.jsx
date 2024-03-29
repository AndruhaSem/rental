import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

function TableBody({ columns, data }) {
    function renderContent(item, column) {
        if (columns[column].component) {
            const component = columns[column].component;
            if (typeof component === "function") {
                return component(item);
            }
            return component;
        }
        return _.get(item, columns[column].path);
    }
    return (
        <tbody className="tbl-container">
            {data.map((item, indx) => (
                <tr key={item.id}>
                    {Object.keys(columns).map((column, ind) => (
                        <td
                            key={column}
                            className="column1"
                            id={`index-${ind + 1}`}
                        >
                            {renderContent(item, column)}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
}
TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
};
export default TableBody;
