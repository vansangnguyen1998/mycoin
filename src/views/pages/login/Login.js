import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader,
  CButton,
  CCardFooter,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useMergeState } from "src/components/Hooks";
import { Redirect } from "react-router-dom";

import { loginWithCredential, registerKey } from "src/redux/thunks/auth";

const Login = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = useMergeState({
    privateKey: "",
    publicKey: "",
  });

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [modal, setModal] = useState(false);

  const handleChangeInfo = (event) => {
    const { name, value } = event.target;
    setInfo({ [name]: value });
  };

  const handleConnect = async () => {
    // history.replace('/')
    const res = await dispatch(
      loginWithCredential({
        key1: info.privateKey,
        key2: info.publicKey,
      })
    );
    const { status } = res;
    if (status) {
      window.location.reload();
    }
  };

  const handleRegister = async () => {
    const res = await dispatch(registerKey());
    const { status, data } = res;
    let { privateKey, publicKey } = data;
    alert("privateKey: " + privateKey);
    alert("publicKey: " + publicKey);

    window.location.reload();
  };

  if (isAuthenticated) {
    return <Redirect to={"/"} />;
  } else {
    return (
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>Vào nhóm đào mycoin</CCardHeader>
            <CCardBody className="align-self-center">
              <CTabs>
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink>Create new wallet</CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>Access wallet</CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>About us</CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent>
                  <CTabPane>
                    <CModal show={modal} onClose={setModal}>
                      <CModalHeader closeButton>
                        <CModalTitle>Modal title</CModalTitle>
                      </CModalHeader>
                      <CModalBody>
                        <CRow>
                          <CCol xs="1" md="12">
                            <CFormGroup row>
                              <CCol md="3">
                                <CLabel htmlFor="yourPrivateKey">
                                  Private Key
                                </CLabel>
                              </CCol>
                              <CCol xs="12" md="9">
                                <CInput
                                  id="yourPrivateKey"
                                  name="phone"
                                  readOnly={true}
                                  value={info.privateKey}
                                />
                              </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                              <CCol md="3">
                                <CLabel htmlFor="yourPublicKey">
                                  Public Key
                                </CLabel>
                              </CCol>
                              <CCol xs="12" md="9">
                                <CInput
                                  id="yourPublicKey"
                                  name="phone"
                                  readOnly={true}
                                  value={info.publicKey}
                                />
                              </CCol>
                            </CFormGroup>
                          </CCol>
                        </CRow>
                      </CModalBody>
                      <CModalFooter>
                        <CButton color="primary">Do Something</CButton>{" "}
                        <CButton
                          color="secondary"
                          onClick={() => setModal(false)}
                        >
                          Cancel
                        </CButton>
                      </CModalFooter>
                    </CModal>

                    <CRow>
                      <CCol xs="12" md="12" className="justify-content-center">
                        <CCard>
                          <CCardHeader>
                            <h2>Tạo key mới để kết nối vào mạng đào.</h2>
                          </CCardHeader>
                          <CCardBody>
                            <CForm
                              action=""
                              method="post"
                              encType="multipart/form-data"
                              className="form-horizontal"
                            ></CForm>
                          </CCardBody>

                          <CCardFooter>
                            <CButton
                              type="button"
                              size="sm"
                              color="success"
                              onClick={handleRegister}
                            >
                              <CIcon name="cil-scrubber" /> Tạo key
                            </CButton>
                          </CCardFooter>
                        </CCard>
                      </CCol>
                    </CRow>
                  </CTabPane>
                  <CTabPane>
                    <CRow>
                      <CCol xs="12" md="12" className="justify-content-center">
                        <CCard>
                          <CCardHeader>
                            <h2>Nhập thông tin sau để vào</h2>
                          </CCardHeader>
                          <CCardBody>
                            <CForm
                              action=""
                              method="post"
                              encType="multipart/form-data"
                              className="form-horizontal"
                            >
                              <CRow>
                                <CCol xs="1" md="12">
                                  <CFormGroup row>
                                    <CCol md="3">
                                      <CLabel htmlFor="text-input">
                                        Private key
                                      </CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                      <CInput
                                        onChange={handleChangeInfo}
                                        name="privateKey"
                                        placeholder="private key"
                                      />
                                    </CCol>
                                  </CFormGroup>
                                  <CFormGroup row>
                                    <CCol md="3">
                                      <CLabel htmlFor="text-input">
                                        Public key
                                      </CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                      <CInput
                                        onChange={handleChangeInfo}
                                        name="publicKey"
                                        placeholder="public key"
                                      />
                                    </CCol>
                                  </CFormGroup>
                                </CCol>
                              </CRow>
                            </CForm>
                          </CCardBody>

                          <CCardFooter>
                            <CButton
                              type="submit"
                              size="sm"
                              color="success"
                              onClick={handleConnect}
                            >
                              <CIcon name="cil-scrubber" /> connect
                            </CButton>
                          </CCardFooter>
                        </CCard>
                      </CCol>
                    </CRow>
                  </CTabPane>
                  <CTabPane>
                    thông tin về sản phẩm my coin <br /> mssv: 1612552 <br />{" "}
                    Tên: Nguyễn Văn Sang
                  </CTabPane>
                </CTabContent>
              </CTabs>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    );
  }
};

export default Login;
