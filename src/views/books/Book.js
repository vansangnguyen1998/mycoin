/**
 * File: \src\views\books\Book.js
 * Project: TKDG
 * Created Date: Sunday, April 18th 2021, 1:04:46 pm
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
  CInputFile,
  CLabel,
  CSelect
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

const Book = () => {
  const [active, setActive] = useState(0);

  const title = "add new Book";
  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <CCard>
          <CCardHeader>Book Book</CCardHeader>
          <CCardBody>
            <CTabs
              activeTab={active}
              onActiveTabChange={(idx) => setActive(idx)}
            >
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-list-rich" />
                    {active === 0 && " List Book"}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-list-rich" />
                    {active === 1 && " Add new Book"}
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
                        <CCardHeader>{title}</CCardHeader>
                        <CCardBody>
                          <CForm
                            action=""
                            method="post"
                            encType="multipart/form-data"
                            className="form-horizontal"
                          >
                            <CRow>
                              <CCol xs="6" md="6">
                                <CFormGroup row>
                                  <CCol md="3">
                                    <CLabel>Static</CLabel>
                                  </CCol>
                                  <CCol xs="12" md="9">
                                    <p className="form-control-static">
                                      Username
                                    </p>
                                  </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                  <CCol md="3">
                                    <CLabel htmlFor="text-input">Code</CLabel>
                                  </CCol>
                                  <CCol xs="12" md="9">
                                    <CInput
                                      id="text-input"
                                      name="text-input"
                                      placeholder="Code Book"
                                    />
                                  </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                  <CCol md="3">
                                    <CLabel htmlFor="text-input">Title</CLabel>
                                  </CCol>
                                  <CCol xs="12" md="9">
                                    <CInput
                                      id="text-input"
                                      name="text-input"
                                      placeholder="Title Book"
                                    />
                                  </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                  <CCol md="3">
                                    <CLabel htmlFor="text-input">
                                      Subject
                                    </CLabel>
                                  </CCol>
                                  <CCol xs="12" md="9">
                                    <CInput
                                      id="text-input"
                                      name="text-input"
                                      placeholder="Subject Book"
                                    />
                                  </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                  <CCol md="3">
                                    <CLabel htmlFor="text-input">
                                      Language
                                    </CLabel>
                                  </CCol>
                                  <CCol xs="12" md="9">
                                    <CInput
                                      id="text-input"
                                      name="text-input"
                                      placeholder="Language Book"
                                    />
                                  </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                  <CCol md="3">
                                    <CLabel htmlFor="text-input">
                                      Publish year
                                    </CLabel>
                                  </CCol>
                                  <CCol xs="12" md="9">
                                    <CInput
                                      id="text-input"
                                      name="text-input"
                                      placeholder="1998.."
                                    />
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
                                      placeholder="Name Book"
                                    />
                                  </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                  <CCol md="3">
                                    <CLabel htmlFor="text-input">
                                      Page number
                                    </CLabel>
                                  </CCol>
                                  <CCol xs="12" md="9">
                                    <CInput
                                      id="text-input"
                                      name="text-input"
                                      placeholder="Page number Book"
                                    />
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
                              </CCol>
                              <CCol xs="6" md="6">
                                <CFormGroup row>
                                  <CCol md="3">
                                    <CLabel>Author</CLabel>
                                  </CCol>
                                  <CCol xs="12" md="9">
                                    <CSelect custom name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </CSelect>
                                  </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                  <CCol md="3">
                                    <CLabel htmlFor="text-input">
                                      Category
                                    </CLabel>
                                  </CCol>
                                  <CCol xs="12" md="9">
                                    <CSelect custom name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </CSelect>
                                  </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                  <CCol md="3">
                                    <CLabel htmlFor="text-input">
                                      Publisher
                                    </CLabel>
                                  </CCol>
                                  <CCol xs="12" md="9">
                                    <CSelect custom name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </CSelect>
                                  </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                  <CCol md="3">
                                    <CLabel htmlFor="text-input">
                                      Price book
                                    </CLabel>
                                  </CCol>
                                  <CCol xs="12" md="9">
                                    <CInput
                                      id="text-input"
                                      name="text-input"
                                      placeholder="price Book"
                                    />
                                  </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                  <CCol md="3">
                                    <CLabel htmlFor="text-input">
                                      Rental price
                                    </CLabel>
                                  </CCol>
                                  <CCol xs="12" md="9">
                                    <CInput
                                      id="text-input"
                                      name="text-input"
                                      placeholder="Rental price Book"
                                    />
                                  </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                  <CCol md="3">
                                    <CLabel htmlFor="text-input">
                                      Star rating
                                    </CLabel>
                                  </CCol>
                                  <CCol xs="12" md="9">
                                    <CInput
                                      id="text-input"
                                      name="text-input"
                                      placeholder="4"
                                    />
                                  </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                  <CCol md="3">
                                    <CLabel>Multiple File input</CLabel>
                                  </CCol>
                                  <CCol xs="12" md="9">
                                    <CInputFile
                                      id="file-multiple-input"
                                      name="file-multiple-input"
                                      multiple
                                      custom
                                    />
                                    <CLabel
                                      htmlFor="file-multiple-input"
                                      variant="custom-file"
                                    >
                                      Choose Files...
                                    </CLabel>
                                  </CCol>
                                </CFormGroup>
                              </CCol>
                            </CRow>
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

export default Book;
