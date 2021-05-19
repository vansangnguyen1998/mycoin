/**
 * File: \src\views\Transaction\Transaction.js
 * Project: mycoin
 * Created Date: Saturday, April 17th 2021, 11:26:35 pm
 * Author: Văn Sang
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

import React, { useState } from "react";
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
import api from "src/services/api";
import { useMergeState } from "src/components/Hooks";

const Transaction = () => {
  const [active, setActive] = useState(0);
  const [appState, setAppState] = useState({
    loading: false,
  });

  const [author, setAuthor] = useMergeState({
    privateKey: sessionStorage.getItem("privateKey"),
    publicKey: sessionStorage.getItem("publicKey"),
    publicKeyRecipient: "",
    amount: 0,
  });
  const handleChangeAuthor = (event) => {
    const { name, value } = event.target;
    setAuthor({ [name]: value });
  };

  const handleClickSubmit = async () => {
    setAppState({ loading: true });
    api
      .post(`/transaction/broadcast`, {
        privKey: author.privateKey,
        sender: author.publicKey,
        recipient: author.publicKeyRecipient,
        amount: author.amount,
      })
      .then((res) => {
        console.log(res);
        alert(`giao dịch thành công.`);
      });
    setAppState({ loading: false });
  };

  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <CCard>
          <CCardHeader>
            Giao dịch chuyển tài nguyên cho địa chỉ khác..
          </CCardHeader>
          <CCardBody>
            <CTabs
              activeTab={active}
              onActiveTabChange={(idx) => setActive(idx)}
            >
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-list-rich" />
                    {active === 0 && " Giao dịch mycoin"}
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                  <CRow>
                    <CCol xs="12" md="12">
                      <CCard>
                        <CCardHeader>
                          Nhập các thông tin sau để thực hiện giao dịch.
                        </CCardHeader>
                        <CCardBody>
                          <CForm
                            action=""
                            method="post"
                            encType="multipart/form-data"
                            className="form-horizontal"
                          >
                            <CFormGroup row>
                              <CCol md="3">
                                <CLabel htmlFor="privateKey">
                                  private key người gửi
                                </CLabel>
                              </CCol>
                              <CCol xs="12" md="9">
                                <CInput
                                  id="privateKey"
                                  name="privateKey"
                                  placeholder="privateKey...."
                                  value={author.privateKey}
                                  onChange={handleChangeAuthor}
                                />
                              </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                              <CCol md="3">
                                <CLabel htmlFor="publicKey">
                                  public key người gửi
                                </CLabel>
                              </CCol>
                              <CCol xs="12" md="9">
                                <CInput
                                  id="publicKey"
                                  name="publicKey"
                                  placeholder="publicKey"
                                  value={author.publicKey}
                                  onChange={handleChangeAuthor}
                                />
                              </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                              <CCol md="3">
                                <CLabel htmlFor="publicKeyRecipient">
                                  public key người nhận
                                </CLabel>
                              </CCol>
                              <CCol xs="12" md="9">
                                <CInput
                                  id="publicKeyRecipient"
                                  name="publicKeyRecipient"
                                  placeholder="publicKeyRecipient..."
                                  value={author.publicKeyRecipient}
                                  onChange={handleChangeAuthor}
                                />
                              </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                              <CCol md="3">
                                <CLabel htmlFor="publicKeyRecipient">
                                  Số coin gửi
                                </CLabel>
                              </CCol>
                              <CCol xs="12" md="9">
                                <CInput
                                  id="amount"
                                  name="amount"
                                  placeholder="amount..."
                                  value={author.amount}
                                  onChange={handleChangeAuthor}
                                />
                              </CCol>
                            </CFormGroup>
                          </CForm>
                        </CCardBody>
                        <CCardFooter>
                          <CButton
                            type="button"
                            size="sm"
                            disabled={
                              !(
                                !!author.privateKey &&
                                !!author.publicKey &&
                                !!author.publicKeyRecipient &&
                                !!author.amount
                              )
                            }
                            onClick={handleClickSubmit}
                            color="success"
                          >
                            <CIcon name="cil-scrubber" /> Xác nhận giao dịch
                          </CButton>
                          <CButton type="button" size="sm" color="danger">
                            <CIcon name="cil-ban" /> Hủy giao dịch
                          </CButton>
                        </CCardFooter>
                      </CCard>
                    </CCol>
                  </CRow>
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Transaction;
