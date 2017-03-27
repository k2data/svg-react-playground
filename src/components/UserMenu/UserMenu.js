// @flow
import React from 'react'
import { Menu, Dropdown, Icon } from 'antd'
import styles from './UserMenu.css'

const menu = (
  <Menu>
    <Menu.Item key='0'>
      <a href='http://www.alipay.com/'>Your profile</a>
    </Menu.Item>
    <Menu.Item key='1'>
      <a href='http://www.taobao.com/'>Settings</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key='3'>登出</Menu.Item>
  </Menu>
)

type Props = {
  user: Object,
  style: Object
}

export const UserMenu = ({ user, style }: Props) => (
  <div className={styles['profile']} style={style}>
    <Dropdown overlay={menu} trigger={['click']}>
      <a className='ant-dropdown-link' href='#'>
        { user ? user.name : 'Admin' } <Icon type='down' />
      </a>
    </Dropdown>
  </div>
)

export default UserMenu
