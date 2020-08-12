import React from 'react';
import { NavLink } from 'react-router-dom';
import { LinkItemsOptions } from '../../../redux/reducers/header-reducer/header-state-interfaces';

interface HeaderMenuListItemProps {
    linkItem: LinkItemsOptions;
}

class HeaderMenuListItem extends React.Component<HeaderMenuListItemProps, {}> {
  render() {
    return (<li className="header-panel__menu-list__item">
        <NavLink  className="link" to={this.props.linkItem.pageUrl}>
            <p>{this.props.linkItem.pageName}</p>
        </NavLink>
    </li>);
  }
}

export default HeaderMenuListItem;
