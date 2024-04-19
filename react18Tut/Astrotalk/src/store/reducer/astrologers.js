import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../apiwrapper";
import apiURl from "../Action/api-url";

export const sliceAstrogers = createSlice({
  name: "astrologers",
  initialState: {
    data: {},
    loading: false,
    error: null,
    detail: {},
    astrocategory: {},
    astrosubcategory: {},
  },
  reducers: {
    fetched: (state, { payload }) => {
      state.data = payload.data;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    },
    setdetail: (state, { payload }) => {
      state.detail = payload.detail;
      state.loading = false;
    },
    setastrocategory: (state, { payload }) => {
      state.astrocategory = payload.astrocategory;
      state.loading = false;
    },
    setastrosubcategory: (state, { payload }) => {
      state.astrosubcategory = payload.astrosubcategory;
      state.loading = false;
    },
  },
});

export const {
  fetched,
  setLoading,
  setError,
  setdetail,
  setastrocategory,
  setastrosubcategory,
} = sliceAstrogers.actions;

export const SetAstroData = () => async (dispatch) => {
  dispatch(setLoading()); // Set loading to true

  try {
    const response = await API({
      url: `${apiURl.astroList}`,
      method: "GET",
    });
    dispatch(fetched({ data: response.data }));
  } catch (error) {
    dispatch(setError({ error: error.message }));
  }
};

export const SetAstroLogerDetail = (id) => async (dispatch) => {
  console.log("hi", id);
  dispatch(setLoading());

  try {
    const detailresponse = await API({
      url: `${apiURl.astroDetail}/${id}`,
      method: "GET",
    });
    dispatch(setdetail({ detail: detailresponse.data }));
  } catch (error) {
    dispatch(setError({ error: error.message }));
  }
};

export const SetAstroCatgory = () => async (dispatch) => {
  dispatch(setLoading());

  try {
    const categoryresponse = await API({
      url: `${apiURl.astrocategories}`,
      method: "GET",
    });
    dispatch(setastrocategory({ astrocategory: categoryresponse?.data }));
  } catch (error) {
    dispatch(setError({ error: error.message }));
  }
};

export const SetAstroSubCatgory = (id) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const subcategoryresponse = await API({
      url: `${apiURl.astrosubcategories}`,
      method: "GET",
    });
    dispatch(
      setastrosubcategory({ astrosubcategory: subcategoryresponse?.data })
    );
  } catch (error) {
    dispatch(setError({ error: error.message }));
  }
};

export default sliceAstrogers.reducer;
