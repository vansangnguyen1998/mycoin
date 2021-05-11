/**
 * File: \src\redux\thunks\auth.js
 * Project: TKDG
 * Created Date: Tuesday, May 11th 2021, 10:01:18 pm
 * Author: Văn Sang
 * -----
 * Last Modified:
 * Modified By:
 * ------------------------------------
 */

import { response, setValueToStorage } from "src/utils/helpers";

import api from "src/services/api";
export const loginWithCredential =
  ({ key1, key2 }) =>
  async (dispatch) => {
    try {
      const body = { key1, key2 };
      const res = await api.post("/hashKeys", body);
      if(res.data.note){
        setValueToStorage({ name: "privateKey", value: key1 });
        setValueToStorage({ name: "publicKey", value: key2 });
        return { status: true };
      }else{
        return { status: false };
      }
    } catch (error) {
      return { status: false };
    }
  };
