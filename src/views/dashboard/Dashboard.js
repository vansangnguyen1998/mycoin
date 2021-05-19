import React, { lazy, useState, useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CBadge,
  CButton,
  CButtonGroup,
  CProgress,
  CCallout,
  CWidgetDropdown,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import api from "src/services/api";

import MainChartExample from "../charts/MainChartExample.js";
import ChartLineSimple from "../charts/ChartLineSimple";
import ChartBarSimple from "../charts/ChartBarSimple";
const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
const WidgetsBrand = lazy(() => import("../widgets/WidgetsBrand.js"));

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
const Dashboard = () => {
  const [dataAddress, setDataAddress] = useState({
    addressTransactions: [],
    addressBalance: 0,
    amountArr: [],
    address: "",
  });

  useEffect(() => {
    api.get(`/address/${sessionStorage.getItem("publicKey")}`).then((data) => {
      setDataAddress({
        ...data.data.addressData,
        address: sessionStorage.getItem("publicKey"),
      });
      console.log(data);
    });
  }, []);
  return (
    <>
      <CRow>
        <CCol sm="6" lg="6">
          <CWidgetDropdown
            color="gradient-primary"
            header="Address"
            text={dataAddress.address}
          ></CWidgetDropdown>
        </CCol>

        <CCol sm="6" lg="6">
          <CWidgetDropdown
            color="gradient-info"
            header="Balance"
            text={dataAddress.addressBalance + " coin"}
          ></CWidgetDropdown>
        </CCol>
      </CRow>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Biểu đồ tăng trưởng của tài khoản</h4>
              <div className="small text-muted"></div>
            </CCol>
          </CRow>
          <MainChartExample
            style={{ height: "300px", marginTop: "40px" }}
            dataAddress={dataAddress}
          />
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol xs='12' md='12'>
            <CCard>
              <CCardHeader>
                <div>Lịch sử giao dịch của tài khoản</div>
              </CCardHeader>
              <CCardBody>
                <CDataTable
                  items={dataAddress.addressTransactions}
                  fields={fields}
                  dark
                  hover
                  columnFilter
                  tableFilter
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
        </CCardFooter>
      </CCard>
    </>
  );
};

export default Dashboard;
