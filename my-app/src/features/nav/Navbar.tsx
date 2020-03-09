import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'
import { IoIosList} from 'react-icons/io';




export default class Navbar extends Component {
  render() {
    return (
      <Menu fixed='top' inverted>
          <Container>
            <Menu.Item header>
                <IoIosList style={{marginRight:'20px'}}/>
                Reactivities
            </Menu.Item>
            <Menu.Item name="Activities"/>
            <Menu.Item>
                <Button positive content='Create Activity'/>
            </Menu.Item>
          </Container>
      </Menu>
    )
  }
}