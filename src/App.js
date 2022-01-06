// imports 
import { Layout, Menu, Space } from 'antd';
import { PictureOutlined  } from '@ant-design/icons';

// css imports
import 'antd/dist/antd.css';
import { t } from 'i18next';
import BreadCrumbBar from './components/commons/BreadCrumbBar';
import LandingPage from './components/LandingPage';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key={1}> 
            <Space>
              <PictureOutlined />
              { t('common.appName') }
            </Space>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', backgroundColor: 'whitesmoke' }}>
        <BreadCrumbBar breads={ [t('common.home'), t('common.title.slider')] } />
        <div>
          <LandingPage />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
