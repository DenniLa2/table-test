import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

import { START } from '../constants'
import { fetchTable } from '../AC/table'

class Table extends PureComponent {

  componentDidMount() {
    this.props.fetchTable()
  }

  onChange = (state) => {
    const { sorting } = state;
    if (sorting[0]) {
      const { id: sortBy, desc } = sorting[0];
      this.props.fetchTable({ sortBy, desc });
    }
  };

  render() {
    const { table, isFetchTable } = this.props;

    let tbl = <div>empty table</div>;

    if (table.length > 0 && table.length <= 20) {
      const keys = Object.keys(table[0]);

      const columns = keys.map((el) => ({ header: el, accessor: el }));

      tbl = (
        <ReactTable
          data={table}
          columns={columns}
        />
      )

    } else if (table.length > 20) {
      const keys = Object.keys(table[0]);
      const columns = keys.map((el) => ({ header: el, accessor: el }));

      tbl = (
        <ReactTable
          manual
          data={table}
          columns={columns}
          showPagination={false}
          defaultPageSize={1000}
          onChange={this.onChange}
          loading={isFetchTable === START}
        />
      )
    }


    return (
      <div>
        {tbl}
      </div>
    )
  }

}

export default connect(
  state => ({
    table: state.table.table,
    isFetchTable: state.table.fetchTable
  }), {
    fetchTable
  }
)(Table);
