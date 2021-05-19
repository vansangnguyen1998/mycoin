/**
 * File: \src\views\Mine\Mine.js
 * Project: mycoin
 * Created Date: Saturday, April 17th 2021, 11:26:35 pm
 * Author: Văn Sang
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

import React, { useState, useEffect } from "react"

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
  CDataTable,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import api from "src/services/api";

const fields = [
  {
    key: "amount",
    label: "Tổng",
    sorter: true,
    filter: true,
  },
  {
    key: "recipient",
    label: "Người nhận",
    sorter: true,
    filter: true,
  },
  {
    key: "sender",
    label: "Người gửi",
    sorter: true,
    filter: true,
  },
  {
    key: "transactionId",
    label: "ID Giao dịch",
    sorter: true,
    filter: true,
  },
];
const Mine = () => {
  const [active, setActive] = useState(0);
  const [appState, setAppState] = useState({
    loading: false,
  });
  const [pendingTransaction, setPendingTransaction] = useState([]);
  useEffect(() => {
    setAppState({ loading: true });
    api.get("/api/transactionPending").then((data) => {
      setPendingTransaction(data?.data?.data);
    });
    setAppState({ loading: false });
  }, []);

  const handleClickSubmit = async () => {
    setAppState({ loading: true });
    let publicKey = sessionStorage.getItem("publicKey")
    api
      .post(`/hashKeys`, {
        key1: sessionStorage.getItem("privateKey"),
        key2: publicKey,
      })
      .then((data) => {
        if(!data.data.note){
          alert("Thông tin account k đúng vui lòng đăng nhập lại!");
          //TODO replcate link
          return;
        }
        api.get(`/mine?publicKey=${publicKey}`).then(data=>{
          api.get("/api/transactionPending").then((data) => {
            setPendingTransaction(data?.data?.data);
          });
        })

      });
    setAppState({ loading: false });
  };

  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <CCard>
          <CCardHeader>Các giao dịch gần đây.</CCardHeader>
          <CCardBody>
            <CTabs
              activeTab={active}
              onActiveTabChange={(idx) => setActive(idx)}
            >
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-list-rich" />
                    {active === 0 && " List mine book"}
                  </CNavLink>
                </CNavItem>
                <CButton
                  color="info"
                  variant="outline"
                  shape="square"
                  onClick={handleClickSubmit}
                  size="sm"
                >
                  Thực hiện khai thác
                </CButton>
              </CNav>
              <CTabContent>
                <CTabPane>
                  <CRow>
                    <CCol>
                      <CCard>
                        <CCardHeader>
                          <div></div>
                        </CCardHeader>
                        <CCardBody>
                          <CDataTable
                            items={pendingTransaction}
                            fields={fields}
                            dark
                            hover
                            striped
                            sorter
                            bordered
                            size="sm"
                            itemsPerPage={10}
                            pagination
                          />
                        </CCardBody>
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

export default Mine;
