import React from 'react';
import { connect } from 'react-redux';
import { login } from '../store/actions';
import Loader from 'react-loader-spinner';

class Login extends React.Component {
  state = {
    credentials: {
      username: 'chingsley',
      password: '',
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push('/protected'));
  };

  render() {
    return (
      <div>
        {this.props.isLoading && (
          <div className="loader-modal">
            <Loader type="Oval" color="lightblue" height={100} width={100} />
          </div>
        )}
        {this.props.error && (
          <div className="error-container">
            <i className="error-text">{this.props.error}</i>
          </div>
        )}
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>
            {this.props.isLoading ? (
              <Loader type="ThreeDots" color="#1f2a38" height="10" widht="24" />
            ) : (
              'Log in'
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
});

export default connect(mapStateToProps, { login })(Login);
