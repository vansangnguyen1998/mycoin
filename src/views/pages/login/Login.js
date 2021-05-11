import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
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
  CForm,
  CFormGroup,
  CInput,
  CLabel,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useMergeState } from "src/components/Hooks";

import { loginWithCredential } from "src/redux/thunks/auth";

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
    const [info, setInfo] = useMergeState({
      privateKey:'',
      publicKey: ''
    });

    const [register, setRegister] = useMergeState({
      phone: ''
    });

    const handleChangeInfo = (event) => {
      const { name, value } = event.target;
      setInfo({ [name]: value });
    };

    const handleChangeRegister = (event) => {
      const { name, value } = event.target;
      setRegister({ [name]: value });
    };

  const handleConnect = async()=>{
    // history.replace('/')
    const res = await dispatch(
      loginWithCredential({
        key1: info.privateKey,
        key2: info.publicKey
      })
    )

    const { status } = res
    console.log(status);
    if (status) {
      history.replace('/')
    }
  }

  const handleRegister = ()=>{

  }

  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <CCard>
          <CCardHeader >Vào nhóm đào mycoin</CCardHeader>
          <CCardBody className="align-self-center w-25">
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
                  <CRow>
                    <CCol xs="12" md="12" className="justify-content-center">
                      <CCard>
                        <CCardHeader><h2>Đăng ký bằng cách nhập sđt</h2></CCardHeader>
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
                                    <CLabel htmlFor="text-input">SĐT</CLabel>
                                  </CCol>
                                  <CCol xs="12" md="9">
                                    <CInput
                                      id="text-input"
                                      onChange={handleChangeRegister}
                                      name="phone"
                                      placeholder="038903xxxx"
                                    />
                                  </CCol>
                                </CFormGroup>
                              </CCol>
                            </CRow>
                          </CForm>
                        </CCardBody>

                        <CCardFooter>
                          <CButton type="button" size="sm" color="success" onClick={handleRegister}>
                            <CIcon name="cil-scrubber" /> Submit
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
                        <CCardHeader><h2>Nhập thông tin sau để vào</h2></CCardHeader>
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
                                    <CLabel htmlFor="text-input">Private key</CLabel>
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
                                    <CLabel htmlFor="text-input">Public key</CLabel>
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
                          <CButton type="submit" size="sm" color="success" onClick={handleConnect}>
                            <CIcon name="cil-scrubber" /> connect
                          </CButton>
                        </CCardFooter>
                      </CCard>
                    </CCol>
                  </CRow>
                  </CTabPane>
                <CTabPane>thông tin về sản phẩm my coin  <br/> mssv: 1612552 <br/> Tên: Nguyễn Văn Sang</CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Login;
