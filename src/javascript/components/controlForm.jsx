'use strict'

const React = require('react');

import LinkmanForm from '../components/linkmanForm.jsx';
import UserForm from '../components/userForm.jsx';

export default class ControlForm extends React.Component {
    render () {
        let { user } = this.props;
        const { handleLinkmanClick } = this.props;
        
        return (
            <div style={{
                width: 220,
                display: 'flex',
                flexDirection: 'column',
                borderCollapse: 'collapse',
                borderRight: '1px solid silver',
                backgroundColor: 'rgba(253, 255, 255, 0.7)'
            }}>
                <UserForm avatar={ user.avatar } username={ user.username }/>
                <LinkmanForm groups={ user.groups } linkmans={ user.linkmans } handleLinkmanClick={ handleLinkmanClick }/>
            </div>
        );
    }
}