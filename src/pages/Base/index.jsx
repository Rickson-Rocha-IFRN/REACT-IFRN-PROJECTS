import {Layout,Menu} from 'antd';
import {Link,Outlet} from "react-router-dom"
const {Header,Sider,Content} = Layout;

export default function Base(){
   return (
    <>
      <Layout>
        <Header>
            {/*Header content */}
        </Header>
        <Layout>
            <Sider>
                <Menu theme="dark" mode="inline">
                  <Menu.Item key="Home">
                    <Link to="/">Home</Link>
                  </Menu.Item>
                </Menu>
                <Menu theme="dark" mode="inline">
                  <Menu.Item key="turmas">
                    <Link to="/turmas">Turmas</Link>
                  </Menu.Item>
                </Menu>
            </Sider>
            <Content style={{minHeight:"100vh",margin: "10px"}}>
                <Outlet/>
            </Content>
        </Layout>
      </Layout>
    </>
   );
}