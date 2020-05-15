import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { createModalLauncher, ModalTitle, ModalBody, ModalSubmitFooter } from '../factory/modal';
import { coFetchJSON } from '../../co-fetch';
import { setAccessToken, setRefreshToken } from '../utils/auth';
class OtpModal extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            authNumber: null,
            data: this.props.data
        };

        this._cancel = props.cancel.bind(this);
        this._updateState = this._updateState.bind(this);
        this._submit = this._submit.bind(this);
    }

    _updateState(event) {
        this.setState({ authNumber: event.target.value });
    }

    _submit(event) {
        event.preventDefault();
        // 인증번호, ID, PW로 서비스 호출 
        const AUTH_SERVER_URL = `${document.location.origin}/api/hypercloud/login`;
        // 입력된 인증번호가 6자리가 아닌경우 return
        if (this.state.authNumber.length !== 6) {
            document.getElementById('error-request').style.visibility = 'visible';
            return
        }
        let data = Object.assign(this.props.data, { otp: this.state.authNumber });
        coFetchJSON.post(AUTH_SERVER_URL, data)
            .then(response => {
                if (response.accessToken && response.refreshToken) {
                    setAccessToken(response.accessToken);
                    setRefreshToken(response.refreshToken);
                    if (window.localStorage.getItem('forceLogout') === 'true') {
                        window.localStorage.setItem('forceLogout', false);
                    } else {
                        window.localStorage.setItem('forceLogout', true);
                    }
                    history.pushState(null, null, '/status')
                    history.go(0);
                } else {
                    document.getElementById('error-request').style.visibility = 'visible';
                    return;
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    render() {
        const { t } = this.props;
        return (
            <form onSubmit={this._submit} name="form" >
                <ModalTitle>인증번호 입력</ModalTitle>
                <ModalBody>
                    <div className="form-group" style={{ width: '400px' }}>
                        <p id="error-description">
                            이메일로 전송된 인증번호 6자리를 입력해 주세요
                            </p>
                        <label className="control-label" htmlFor="extend-time">
                            인증번호 입력
                        </label>
                        <div>
                            <input type="text" onChange={this._updateState} value={this.state.authNumber} id="input-authNumber" required />
                        </div>
                        <div>
                            <p id="error-request" style={{ color: 'red', visibility: 'hidden' }}>
                                잘못된 인증번호 입니다.
                            </p>
                        </div>
                    </div>
                </ModalBody>
                <ModalSubmitFooter inProgress={this.state.inProgress} submitText='확인' cancel={this._cancel} />
            </form>
        );
    }
}

OtpModal.propTypes = {
    cancel: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    executeFn: PropTypes.func.isRequired,
};

export const OtpModal_ = createModalLauncher(props => (
    <OtpModal
        path="status"
        // state={props.resource.status.status}
        title="OTP"
        {...props}
    />
));