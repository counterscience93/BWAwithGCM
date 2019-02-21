import React from 'react';
import { Text, View } from 'react-native';
import { Icon, SearchBar, TabBar } from '@ant-design/react-native';
import LocationA from "../maps/LocationA";
import Login from "../login/login";
export default class MyTabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
        };
    }
    renderContent(pageText) {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                <SearchBar placeholder="Search" showCancelButton />
                <Text style={{ margin: 50 }}>{pageText}</Text>
            </View>
        );
    }
    onChangeTab(tabName) {
        this.setState({
            selectedTab: tabName,
        });
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#f5f5f5"
            >
                <TabBar.Item
                    title="Home"
                    icon={<Icon name="home" />}
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => this.onChangeTab('blueTab')}
                >
                    <Text>HOME</Text>
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon name="ordered-list" />}
                    title="News"
                    // badge={2}
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => this.onChangeTab('redTab')}
                >
                    {this.renderContent("News")}
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon name="like" />}
                    title="Account"
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => this.onChangeTab('greenTab')}
                >
                    <LocationA/>
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon name="user" />}
                    title="User"
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => this.onChangeTab('yellowTab')}
                >
                    <Login/>
                </TabBar.Item>
            </TabBar>
        );
    }
}