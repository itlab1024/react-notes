import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import axios from 'axios'

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

class NetRequest extends React.Component {
    state = {
        githubName: '',
        users: []
    }
    search = (e) => {
        const url = `https://api.github.com/search/users?q=${this.state.githubName}`
        axios.get(url).then((response) => {
            this.setUsers(response.data.items)
        });
    }

    setUsers = (items) => {
        this.setState({users: items})
    }

    render() {
        return (
            <div>
                <h1>搜过github用户</h1>
                <input value={this.state.githubName} onChange={this.changeGithubName}/>
                <button onClick={this.search}>搜索github</button>
                <br/>搜索结果：
                <ul>
                    <Items users={this.state.users}/>
                </ul>
            </div>
        )
    }

    changeGithubName = (e) => {
        this.setState({githubName: e.target.value})
    }
}
class Items extends React.Component {
    render() {
        return (
            <ul>
                {this.props.users.map((u) => {
                    return <li key={u.id}>
                        <img style={{height: '50px', width: '50px'}}
                             src={u.avatar_url}
                             alt=""/>
                        {u.login}
                    </li>
                })}
            </ul>
        )
    }
}

root.render(
    <React.StrictMode>
        <NetRequest/>
    </React.StrictMode>
)