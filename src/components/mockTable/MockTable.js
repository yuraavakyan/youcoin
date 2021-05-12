import React from 'react'
import MockTableBody from './MockTableBody'

const MockTable = (props) => {
    return (
      <table>
        <tbody>
          <tr>
            {props.headers.map((el) => {
              return <th>{el}</th>;
            })}
          </tr>
          <MockTableBody data={props.data} />
        </tbody>
      </table>
    );
}

export default MockTable
