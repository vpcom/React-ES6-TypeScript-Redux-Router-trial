import React from 'react';

export default class Users extends React.Component {
    render() {
        const { header, sidebar, users } = this.props
        return <div>
            {sidebar}
            {header}
                Users page, yeah
            </div>;
    }
}
