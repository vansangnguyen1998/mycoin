/**
 * File: \src\views\Category\Category.js
 * Project: TKDG
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
  CBadge,
  CDataTable,
  CButton,
  CCardFooter,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CLabel,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import usersData from "../users/UsersData";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
const fields = ["name", "registered", "role", "status"];

const Category = () => {
  const [active, setActive] = useState(0);
  const title = 'add new category book'
  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <CCard>
          <CCardHeader>Book Category</CCardHeader>
          <CCardBody>
            <CTabs
              activeTab={active}
              onActiveTabChange={(idx) => setActive(idx)}
            >
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-list-rich" />
                    {active === 0 && " List category book"}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                  <CIcon name="cil-list-rich" />
                    {active === 1 && " Add new category book"}
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                  <CRow>
                    <CCol>
                      <CCard>
                        <CCardHeader>Combined All dark Table</CCardHeader>
                        <CCardBody>
                          <CDataTable
                            items={usersData}
                            fields={fields}
                            dark
                            hover
                            striped
                            sorter
                            bordered
                            size="sm"
                            itemsPerPage={10}
                            pagination
                            scopedSlots={{
                              status: (item) => (
                                <td>
                                  <CBadge color={getBadge(item.status)}>
                                    {item.status}
                                  </CBadge>
                                </td>
                              ),
                            }}
                          />
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                </CTabPane>
                <CTabPane>
                  <CRow>
                    <CCol xs="12" md="12">
                      <CCard>
                        <CCardHeader>
                          {title}
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
                                <CLabel>Static</CLabel>
                              </CCol>
                              <CCol xs="12" md="9">
                                <p className="form-control-static">Username</p>
                              </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                              <CCol md="3">
                                <CLabel htmlFor="text-input">Name</CLabel>
                              </CCol>
                              <CCol xs="12" md="9">
                                <CInput
                                  id="text-input"
                                  name="text-input"
                                  placeholder="Name category"
                                />
                                {/* <CFormText>This is a help text</CFormText> */}
                              </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                              <CCol md="3">
                                <CLabel htmlFor="textarea-input">
                                  Description
                                </CLabel>
                              </CCol>
                              <CCol xs="12" md="9">
                                <CTextarea
                                  name="textarea-input"
                                  id="textarea-input"
                                  rows="9"
                                  placeholder="Description..."
                                />
                              </CCol>
                            </CFormGroup>
                          </CForm>
                        </CCardBody>
                        <CCardFooter>
                          <CButton type="submit" size="sm" color="success">
                            <CIcon name="cil-scrubber" /> Submit
                          </CButton>
                          <CButton type="reset" size="sm" color="danger">
                            <CIcon name="cil-ban" /> Reset
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

export default Category;
