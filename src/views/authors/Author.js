/**
 * File: \src\views\Author\Author.js
 * Project: TKDG
 * Created Date: Saturday, April 17th 2021, 11:26:35 pm
 * Author: Văn Sang
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  CCardText,
  CCardSubtitle,
  CCardHeader,
  CDataTable,
  CInputRadio,
  CButton,
  CCardTitle,
  CCardFooter,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CLabel,
  CCollapse,
} from "@coreui/react";

import LazyLoading from "src/components/Loading";
import CIcon from "@coreui/icons-react";
import {getDayMonthYear} from 'src/utils/helpers';
import { useMergeState } from "src/components/Hooks";

import { getListAuthor } from "../../redux/services/author";
import { fetchListAuthorIfNeeded, createAuthor } from "src/redux/thunks/author";

import "./style.css";

const fields = [
  {
    key: "code",
    label: "Mã",
    sorter: true,
    filter: true,
  },
  {
    key: "name",
    label: "Tên",
    sorter: true,
    filter: true,
  },
  {
    key: "address",
    label: "Địa chỉ",
    sorter: true,
    filter: true,
  },
  {
    key: "email",
    label: "Email",
    sorter: true,
    filter: true,
  },
  {
    key: "show_detail",
    label: "",
    sorter: false,
    filter: false,
  },
];

const Author = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);

  const [appState, setAppState] = useState({
    loading: false
  });
  const [type, setType] = useState('');
  const [author, setAuthor] = useMergeState({
    code: "",
    name: "",
    gender: "Nam",
    birthday: "",
    address: "",
    phone: "",
    email: "",
    description: "",
  });

  const listAuthor = useSelector((state) => state.author.listAuthor);
  useEffect(() => {
    setAppState({ loading: true });
    dispatch(fetchListAuthorIfNeeded());
    setAppState({ loading: false });
  }, [dispatch]);

  const [details, setDetails] = useState([]);
  const [title, setTitle] = useState("Add new Author book");
  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const handleChangeAuthor = (event) => {
    const { name, value } = event.target;
    setAuthor({ [name]: value });
  };

  const resetAuthor = (author) => {
    setAuthor({
      code: author?.code || '',
      name: author?.name || '',
      gender: author?.gender || 'Nam',
      birthday: author?.birthday ? getDayMonthYear(author?.birthday) : '',
      address: author?.address|| '',
      phone: author?.phone|| '',
      email: author?.email|| '',
      description: author?.description|| '',
    })
  }

  const handleChangeTab = (index, type) => {
    setActive(index);
    if (type && type === "update") {
      setTitle(`Update Author`);
    } else {
      setTitle(`Add new Author`);
      if (index === 1) {
        resetAuthor();
      }
    }
  }

  const handleEditAuthor = (author) => {
    setType('update')
    resetAuthor(author)
    handleChangeTab(1, 'update')
  };

  const handleClickSubmit = async () => {
    setAppState({ loading: true });
    let res = null;
    if (true) {
      res = await dispatch(createAuthor({ author }));
    }
    if (res.status) {
      alert("Lưu thành công");
      resetAuthor();
    }
    setAppState({ loading: false });
  };

  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        {appState.loading && <LazyLoading />}
        <CCard>
          <CCardHeader>Author</CCardHeader>
          <CCardBody>
            <CTabs activeTab={active} onActiveTabChange={handleChangeTab}>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-list-rich" />
                    {active === 0 && " List Author"}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-list-rich" />
                    {active === 1 && " Add new author"}
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
                            items={listAuthor}
                            fields={fields}
                            dark
                            hover
                            striped
                            sorter
                            columnFilter
                            tableFilter
                            bordered
                            loading={appState.loading}
                            size="sm"
                            itemsPerPage={5}
                            pagination
                            scopedSlots={{
                              show_detail: (item, index) => {
                                return (
                                  <td className="py-2">
                                    <CButton
                                      color="info"
                                      variant="outline"
                                      shape="square"
                                      size="sm"
                                      onClick={() => {
                                        toggleDetails(index);
                                      }}
                                    >
                                      {details.includes(index)
                                        ? "Hide"
                                        : "Show"}
                                    </CButton>
                                  </td>
                                );
                              },
                              details: (item, index) => {
                                return (
                                  <CCollapse show={details.includes(index)}>
                                    <CCardBody>
                                      <CRow>
                                        <CCol xs="12" md="12">
                                          <CCard>
                                            <CCardHeader color="gradient-secondary">
                                              <CRow>
                                                <CCol xs="8" md="8">
                                                  <h4 className="color-red">
                                                    {item.name}
                                                  </h4>
                                                </CCol>
                                                <CCol xs="4" md="4">
                                                  <CButton
                                                    size="sm"
                                                    color="info"
                                                    className="float-right"
                                                    onClick={(e, i) =>
                                                      handleEditAuthor(item)
                                                    }
                                                  >
                                                    Edit
                                                  </CButton>
                                                  <CButton
                                                    size="sm"
                                                    color="danger"
                                                    className="ml-1 float-right"
                                                    onClick={(e) => {
                                                      console.log({ e });
                                                    }}
                                                  >
                                                    Delete
                                                  </CButton>
                                                </CCol>
                                              </CRow>
                                            </CCardHeader>
                                            <CCardBody className="color-red">
                                              <CRow>
                                                <CCol xs="6" md="6">
                                                  <CCardSubtitle>
                                                    Năm sinh: {item.birthday}.
                                                  </CCardSubtitle>
                                                </CCol>
                                                <CCol xs="6" md="6">
                                                  <CCardSubtitle>
                                                    Số điện thoại: {item.phone}.
                                                  </CCardSubtitle>
                                                </CCol>
                                              </CRow>
                                            </CCardBody>
                                          </CCard>
                                        </CCol>
                                      </CRow>
                                    </CCardBody>
                                  </CCollapse>
                                );
                              },
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
                            <CFormGroup row>
                              <CCol md="3">
                                <CLabel htmlFor="code">Mã</CLabel>
                              </CCol>
                              <CCol xs="12" md="9">
                                <CInput
                                  id="code"
                                  name="code"
                                  placeholder="Code Author"
                                  value={author.code}
                                  onChange={handleChangeAuthor}
                                />
                              </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                              <CCol md="3">
                                <CLabel htmlFor="name">Tên</CLabel>
                              </CCol>
                              <CCol xs="12" md="9">
                                <CInput
                                  id="name"
                                  name="name"
                                  placeholder="Name Author"
                                  value={author.name}
                                  onChange={handleChangeAuthor}
                                />
                              </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                              <CCol md="3">
                                <CLabel>Giới tính</CLabel>
                              </CCol>
                              <CCol md="9">
                                <CFormGroup variant="custom-radio" inline>
                                  <CInputRadio
                                    custom
                                    id="inline-radio1"
                                    name="gender"
                                    checked={author.gender === "Nam"}
                                    value="Nam"
                                    onChange={handleChangeAuthor}
                                  />
                                  <CLabel
                                    variant="custom-checkbox"
                                    htmlFor="inline-radio1"
                                  >
                                    Nam
                                  </CLabel>
                                </CFormGroup>
                                <CFormGroup variant="custom-radio" inline>
                                  <CInputRadio
                                    custom
                                    id="inline-radio2"
                                    checked={author.gender === "Nữ"}
                                    onChange={handleChangeAuthor}
                                    name="gender"
                                    value="Nữ"
                                  />
                                  <CLabel
                                    variant="custom-checkbox"
                                    htmlFor="inline-radio2"
                                  >
                                    Nữ
                                  </CLabel>
                                </CFormGroup>
                              </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                              <CCol md="3">
                                <CLabel htmlFor="birthday">Birthday</CLabel>
                              </CCol>
                              <CCol xs="12" md="9">
                                <CInput
                                  type="date"
                                  id="birthday"
                                  name="birthday"
                                  placeholder="Birthday..."
                                  value={author.birthday}
                                  onChange={handleChangeAuthor}
                                />
                              </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                              <CCol md="3">
                                <CLabel htmlFor="address">Địa chỉ</CLabel>
                              </CCol>
                              <CCol xs="12" md="9">
                                <CInput
                                  id="address"
                                  name="address"
                                  placeholder="Địa chỉ"
                                  value={author.address}
                                  onChange={handleChangeAuthor}
                                />
                              </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                              <CCol md="3">
                                <CLabel htmlFor="phone">Số điện thoại</CLabel>
                              </CCol>
                              <CCol xs="12" md="9">
                                <CInput
                                  id="phone"
                                  name="phone"
                                  placeholder="Số điện thoại"
                                  value={author.phone}
                                  onChange={handleChangeAuthor}
                                />
                              </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                              <CCol md="3">
                                <CLabel htmlFor="email">Email</CLabel>
                              </CCol>
                              <CCol xs="12" md="9">
                                <CInput
                                  id="email"
                                  name="email"
                                  placeholder="email"
                                  value={author.email}
                                  onChange={handleChangeAuthor}
                                />
                              </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                              <CCol md="3">
                                <CLabel htmlFor="description">
                                  Description
                                </CLabel>
                              </CCol>
                              <CCol xs="12" md="9">
                                <CTextarea
                                  name="description"
                                  id="description"
                                  rows="9"
                                  placeholder="Description..."
                                  value={author.description}
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
                            onClick={handleClickSubmit}
                            color="success"
                          >
                            <CIcon name="cil-scrubber" /> Submit
                          </CButton>
                          <CButton type="button" size="sm" color="danger">
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

export default Author;
