import React from "react";

export default function Allparcel({ id, parcel_id, status }) {
    return (
        <div className="All-Parcel">
            <table className="tab">
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{parcel_id}</td>
                        <td>{status}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}